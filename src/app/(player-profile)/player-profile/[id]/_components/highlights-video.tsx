import React from "react";
import { UserProfile } from "./player-data-type";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import HighlightsVideoSkeleton from "./highlights-video-skeleton";
import { parseCookies } from "nookies";

const COOKIE_NAME = "googtrans";

type VideoPreview = {
  type: "video" | "embed";
  src: string;
  originalUrl: string;
};

const getLinkedVideoPreview = (url: string): VideoPreview | null => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.replace("www.", "");
    const pathParts = parsedUrl.pathname.split("/").filter(Boolean);

    if (hostname === "youtu.be") {
      const videoId = pathParts[0];
      return videoId
        ? {
            type: "embed",
            src: `https://www.youtube.com/embed/${videoId}`,
            originalUrl: url,
          }
        : null;
    }

    if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      const videoId =
        parsedUrl.searchParams.get("v") ||
        (["shorts", "embed", "live"].includes(pathParts[0])
          ? pathParts[1]
          : null);

      return videoId
        ? {
            type: "embed",
            src: `https://www.youtube.com/embed/${videoId}`,
            originalUrl: url,
          }
        : null;
    }

    if (hostname === "vimeo.com" || hostname === "player.vimeo.com") {
      const videoId = pathParts[pathParts.length - 1];
      return videoId && /^\d+$/.test(videoId)
        ? {
            type: "embed",
            src: `https://player.vimeo.com/video/${videoId}`,
            originalUrl: url,
          }
        : null;
    }

    if (hostname === "facebook.com" || hostname === "m.facebook.com") {
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
        type: "embed",
        src: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(canonicalUrl)}&show_text=false`,
        originalUrl: url,
      };
    }

    if (hostname === "instagram.com") {
      const postType = pathParts[0];
      const postId = pathParts[1];

      return ["p", "reel", "tv"].includes(postType) && postId
        ? {
            type: "embed",
            src: `https://www.instagram.com/${postType}/${postId}/embed/`,
            originalUrl: url,
          }
        : null;
    }

    if (hostname === "tiktok.com" || hostname === "m.tiktok.com") {
      const videoIndex = pathParts.indexOf("video");
      const videoId = videoIndex >= 0 ? pathParts[videoIndex + 1] : null;
      return videoId
        ? {
            type: "embed",
            src: `https://www.tiktok.com/player/v1/${videoId}`,
            originalUrl: url,
          }
        : null;
    }

    if (hostname === "dailymotion.com" || hostname === "dai.ly") {
      const videoIndex = pathParts.indexOf("video");
      const videoId =
        hostname === "dai.ly"
          ? pathParts[0]
          : videoIndex >= 0
            ? pathParts[videoIndex + 1]
            : null;

      return videoId
        ? {
            type: "embed",
            src: `https://www.dailymotion.com/embed/video/${videoId}`,
            originalUrl: url,
          }
        : null;
    }

    if (hostname === "streamable.com" && pathParts[0]) {
      return {
        type: "embed",
        src: `https://streamable.com/e/${pathParts[0]}`,
        originalUrl: url,
      };
    }

    if (hostname === "loom.com") {
      const shareIndex = pathParts.indexOf("share");
      const videoId = shareIndex >= 0 ? pathParts[shareIndex + 1] : null;
      return videoId
        ? {
            type: "embed",
            src: `https://www.loom.com/embed/${videoId}`,
            originalUrl: url,
          }
        : null;
    }

    if (hostname === "drive.google.com") {
      const fileIndex = pathParts.indexOf("d");
      const fileId = fileIndex >= 0 ? pathParts[fileIndex + 1] : null;
      return fileId
        ? {
            type: "embed",
            src: `https://drive.google.com/file/d/${fileId}/preview`,
            originalUrl: url,
          }
        : null;
    }

    return /\.(mp4|webm|ogg|mov|m4v)$/i.test(parsedUrl.pathname)
      ? { type: "video", src: url, originalUrl: url }
      : null;
  } catch {
    return null;
  }
};

const HighlightsVideo = ({
  data,
  isLoading,
  error,
  isError,
}: {
  data?: UserProfile;
  isLoading: boolean;
  error: unknown;
  isError: boolean;
}) => {
  const cookie = parseCookies()[COOKIE_NAME];
  const lang = cookie?.split("/")?.[2] || "en";
  if (isLoading) {
    return (
      <div className="pb-0">
        <HighlightsVideoSkeleton />
      </div>
    );
  }

  if (isError) {
    const message =
      error instanceof Error ? error.message : "Something went wrong!";
    return (
      <div className="pb-8">
        <ErrorContainer message={message} />
      </div>
    );
  }

  const uploadedVideos: VideoPreview[] = (data?.user?.playingVideo || []).map(
    (url) => ({ type: "video", src: url, originalUrl: url }),
  );
  const linkedVideos = (data?.user?.hilightedUrl || [])
    .map(getLinkedVideoPreview)
    .filter((video): video is VideoPreview => video !== null);
  const videos = [...uploadedVideos, ...linkedVideos].filter(
    (video, index, allVideos) =>
      allVideos.findIndex((item) => item.originalUrl === video.originalUrl) ===
      index,
  );

  if (videos.length === 0) {
    return (
      <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/profile_bg.svg")] rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]] mb-6'>
        <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6 notranslate">
          {lang === "fr"
            ? "Videos"
            : lang === "es"
              ? "Momentos destacados"
                : "Highlights"}
        </h3>
        <p className="py-12 text-center text-white">
          No playing videos uploaded yet
        </p>
      </div>
    );
  }
  return (
    <div className="pb-6 ">
      <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/profile_bg.svg")] rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]'>
        <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6 notranslate">
          {lang === "fr"
            ? "Videos"
            : lang === "es"
              ? "Momentos destacados"
                : "Highlights"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <div
              key={`${video.originalUrl}-${index}`}
              className="aspect-video overflow-hidden rounded-lg bg-black"
            >
              {video.type === "embed" ? (
                <iframe
                  src={video.src}
                  title={`Highlight video ${index + 1}`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <video
                  src={video.src}
                  controls
                  preload="metadata"
                  className="h-full w-full object-contain"
                  playsInline
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightsVideo;
