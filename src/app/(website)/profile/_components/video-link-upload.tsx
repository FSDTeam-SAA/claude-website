"use client";

import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Link2, Loader2, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const MAX_VIDEO_LINKS = 2;

type UserDetailResponse = {
  success: boolean;
  message?: string;
  data?: {
    user?: {
      hilightedUrl?: string[];
    };
  };
};

type HighlightMutationResponse = {
  success: boolean;
  message?: string;
  data?: {
    hilightedUrl?: string[];
  };
};

const getVideoPreview = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.replace("www.", "");
    const pathParts = parsedUrl.pathname.split("/").filter(Boolean);

    if (hostname === "youtu.be") {
      const videoId = parsedUrl.pathname.split("/").filter(Boolean)[0];
      return videoId
        ? { type: "embed" as const, src: `https://www.youtube.com/embed/${videoId}` }
        : null;
    }

    if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      const videoId =
        parsedUrl.searchParams.get("v") ||
        (["shorts", "embed", "live"].includes(pathParts[0])
          ? pathParts[1]
          : null);

      return videoId
        ? { type: "embed" as const, src: `https://www.youtube.com/embed/${videoId}` }
        : null;
    }

    if (hostname === "vimeo.com" || hostname === "player.vimeo.com") {
      const videoId = pathParts.pop();
      return videoId && /^\d+$/.test(videoId)
        ? { type: "embed" as const, src: `https://player.vimeo.com/video/${videoId}` }
        : null;
    }

    if (
      hostname === "facebook.com" ||
      hostname === "m.facebook.com"
    ) {
      const videosIndex = pathParts.indexOf("videos");
      const videoId =
        parsedUrl.searchParams.get("v") ||
        (videosIndex >= 0 ? pathParts[videosIndex + 1] : null) ||
        (pathParts[0] === "reel" ? pathParts[1] : null);

      if (!videoId) return null;

      const canonicalUrl =
        pathParts[0] === "reel"
          ? `https://www.facebook.com/reel/${videoId}`
          : `https://www.facebook.com/watch/?v=${videoId}`;

      return {
        type: "embed" as const,
        src: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(canonicalUrl)}&show_text=false`,
      };
    }

    if (hostname === "instagram.com") {
      const postType = pathParts[0];
      const postId = pathParts[1];

      return ["p", "reel", "tv"].includes(postType) && postId
        ? {
            type: "embed" as const,
            src: `https://www.instagram.com/${postType}/${postId}/embed/`,
          }
        : null;
    }

    if (hostname === "tiktok.com" || hostname === "m.tiktok.com") {
      const videoIndex = pathParts.indexOf("video");
      const videoId = videoIndex >= 0 ? pathParts[videoIndex + 1] : null;

      return videoId
        ? { type: "embed" as const, src: `https://www.tiktok.com/player/v1/${videoId}` }
        : null;
    }

    if (hostname === "dailymotion.com" || hostname === "dai.ly") {
      const videoId =
        hostname === "dai.ly"
          ? pathParts[0]
          : pathParts[pathParts.indexOf("video") + 1];

      return videoId
        ? { type: "embed" as const, src: `https://www.dailymotion.com/embed/video/${videoId}` }
        : null;
    }

    if (hostname === "streamable.com") {
      const videoId = pathParts[0];
      return videoId
        ? { type: "embed" as const, src: `https://streamable.com/e/${videoId}` }
        : null;
    }

    if (hostname === "loom.com") {
      const shareIndex = pathParts.indexOf("share");
      const videoId = shareIndex >= 0 ? pathParts[shareIndex + 1] : null;

      return videoId
        ? { type: "embed" as const, src: `https://www.loom.com/embed/${videoId}` }
        : null;
    }

    if (hostname === "drive.google.com") {
      const fileIndex = pathParts.indexOf("d");
      const fileId = fileIndex >= 0 ? pathParts[fileIndex + 1] : null;

      return fileId
        ? { type: "embed" as const, src: `https://drive.google.com/file/d/${fileId}/preview` }
        : null;
    }

    const directVideoExtensions = /\.(mp4|webm|ogg|mov|m4v)(?:$|\?)/i;
    return directVideoExtensions.test(parsedUrl.pathname)
      ? { type: "video" as const, src: url }
      : null;
  } catch {
    return null;
  }
};

const VideoLinkUpload = ({ userId }: { userId: string }) => {
  const { data: session } = useSession();
  const token = (session?.user as { accessToken?: string })?.accessToken;
  const queryClient = useQueryClient();
  const [videoLink, setVideoLink] = useState("");
  const queryKey = ["user-highlighted-urls", userId];

  const { data, isLoading } = useQuery<UserDetailResponse>({
    queryKey,
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/detail/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          cache: "no-store",
        },
      );
      const result = await res.json();

      if (!res.ok || !result?.success) {
        throw new Error(result?.message || "Failed to fetch video links");
      }

      return result;
    },
    enabled: !!userId && !!token,
  });

  const highlightedUrls = data?.data?.user?.hilightedUrl || [];

  const addMutation = useMutation({
    mutationFn: async (url: string) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/hilighted-url-add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ hilightedUrl: [url] }),
        },
      );
      const result: HighlightMutationResponse = await res.json();

      if (!res.ok || !result?.success) {
        throw new Error(result?.message || "Failed to add video link");
      }

      return result;
    },
    onSuccess: (result) => {
      setVideoLink("");
      queryClient.setQueryData<UserDetailResponse>(queryKey, (oldData) =>
        oldData?.data?.user
          ? {
              ...oldData,
              data: {
                ...oldData.data,
                user: {
                  ...oldData.data.user,
                  hilightedUrl: result.data?.hilightedUrl || [],
                },
              },
            }
          : oldData,
      );
      queryClient.invalidateQueries({ queryKey });
      queryClient.invalidateQueries({ queryKey: ["user-profile"] });
      toast.success(result.message || "Video link added");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to add video link");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (url: string) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/hilighted-url-remove`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ hilightedUrl: url }),
        },
      );
      const result: HighlightMutationResponse = await res.json();

      if (!res.ok || !result?.success) {
        throw new Error(result?.message || "Failed to remove video link");
      }

      return result;
    },
    onSuccess: (result) => {
      queryClient.setQueryData<UserDetailResponse>(queryKey, (oldData) =>
        oldData?.data?.user
          ? {
              ...oldData,
              data: {
                ...oldData.data,
                user: {
                  ...oldData.data.user,
                  hilightedUrl: result.data?.hilightedUrl || [],
                },
              },
            }
          : oldData,
      );
      queryClient.invalidateQueries({ queryKey });
      queryClient.invalidateQueries({ queryKey: ["user-profile"] });
      toast.success(result.message || "Video link removed");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to remove video link");
    },
  });

  const handleAddLink = () => {
    if (highlightedUrls.length >= MAX_VIDEO_LINKS) {
      toast.warning(`Only ${MAX_VIDEO_LINKS} video links allowed`);
      return;
    }

    const url = videoLink.trim();

    try {
      const parsedUrl = new URL(url);
      if (!["http:", "https:"].includes(parsedUrl.protocol)) throw new Error();
    } catch {
      toast.error("Please enter a valid video URL");
      return;
    }

    if (!getVideoPreview(url)) {
      toast.error(
        "This link cannot be previewed. Use a public video link, not a share or private link.",
      );
      return;
    }

    if (highlightedUrls.includes(url)) {
      toast.warning("This video link is already added");
      return;
    }

    addMutation.mutate(url);
  };

  const isBusy = addMutation.isPending || deleteMutation.isPending;

  return (
    <Card className="w-full p-6 space-y-5 rounded-xl mt-6">
      <h3 className="text-lg md:text-xl font-bold text-center">
        Add your highlights video links
      </h3>

      <div className="border-4 border-dashed border-gray-300 rounded-xl p-3 text-center bg-gray-50">
        {addMutation.isPending ? (
          <Loader2 className="w-10 h-10 mx-auto text-gray-400 mb-3 animate-spin" />
        ) : (
          <Link2 className="w-10 h-10 mx-auto text-gray-400 mb-3" />
        )}

        <input
          type="url"
          value={videoLink}
          onChange={(event) => setVideoLink(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleAddLink();
          }}
          placeholder="Paste video link"
          className="w-full rounded-[10px] border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-primary"
          disabled={isBusy}
        />

        <Button
          type="button"
          className="mt-3 w-full gap-2 rounded-[10px]"
          onClick={handleAddLink}
          disabled={isBusy || !videoLink.trim()}
        >
          {addMutation.isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
          {addMutation.isPending ? "Adding..." : "Add Video Link"}
        </Button>

        <p className="mt-3 text-xs font-semibold text-gray-500">
          Only {MAX_VIDEO_LINKS} video links allowed
        </p>
      </div>

      {isLoading ? (
        <Loader2 className="mx-auto h-6 w-6 animate-spin text-gray-400" />
      ) : (
        <div
          className={`space-y-3 ${
            highlightedUrls.length > 2
              ? "max-h-[390px] overflow-y-auto pr-2"
              : ""
          }`}
        >
          {highlightedUrls.map((url, index) => {
            const preview = getVideoPreview(url);

            return (
              <div
                key={`${url}-${index}`}
                className="relative overflow-hidden rounded-xl border bg-gray-50"
              >
                {preview?.type === "embed" ? (
                  <iframe
                    src={preview.src}
                    title={`Highlight video ${index + 1}`}
                    className="aspect-video w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : preview?.type === "video" ? (
                  <video
                    src={preview.src}
                    controls
                    preload="metadata"
                    className="aspect-video w-full bg-black object-contain"
                  />
                ) : (
                  <div className="flex aspect-video items-center justify-center px-5 text-center text-sm text-gray-500">
                    Preview unavailable. Please remove this link and add a public video URL.
                  </div>
                )}

                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  className="absolute right-2 top-2 z-10 h-9 w-9 rounded-[12px] border-red-200 bg-white/95 p-0 text-red-600 shadow-md hover:border-red-300 hover:bg-red-50 hover:text-red-700"
                  onClick={() => deleteMutation.mutate(url)}
                  disabled={isBusy}
                  aria-label="Remove video link"
                >
                  {deleteMutation.isPending && deleteMutation.variables === url ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                </Button>
              </div>
            );
          })}

          {!highlightedUrls.length && (
            <p className="text-center text-sm text-gray-500">
              No video links added yet
            </p>
          )}
        </div>
      )}
    </Card>
  );
};

export default VideoLinkUpload;
