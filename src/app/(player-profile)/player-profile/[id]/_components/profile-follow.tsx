"use client";

import React, { useMemo } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

interface ProfileFollowProps {
  id: string; // profile user id
  followers: string[];
}

const ProfileFollow = ({ id, followers }: ProfileFollowProps) => {
  const session = useSession();
  const token = (session?.data?.user as { accessToken: string })?.accessToken;
  const queryClient = useQueryClient();

  // 🔹 current logged-in user id
  const currentUserId = (session?.data?.user as { id: string })?.id;

  console.log(currentUserId)

  // ✅ check already following or not
  const isFollowing = useMemo(() => {
    return followers?.includes(currentUserId);
  }, [followers, currentUserId]);

  // ✅ Follow API
  const followMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/follow/${id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to follow user");
      }

      return res.json();
    },
    onSuccess: () => {
      toast.success("Successfully followed the user");
      queryClient.invalidateQueries({ queryKey: ["profile-info", id] });
    },
    onError: () => {
      toast.error("Failed to follow user");
    },
  });




  // ✅ Unfollow API
  const unfollowMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/unfollow/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to unfollow user");
      }

      return res.json();
    },
    onSuccess: () => {
      toast.success("Unfollowed successfully");
      queryClient.invalidateQueries({ queryKey: ["profile-info", id] });
    },
    onError: () => {
      toast.error("Failed to unfollow user");
    },
  });



  const handleFollowToggle = () => {
    if (!id || !currentUserId) return;

    if (isFollowing) {
      unfollowMutation.mutate();
    } else {
      followMutation.mutate();
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Followers Count */}
      {/* <p className="text-sm text-gray-600">
        Followers: <span className="font-semibold">{followers?.length}</span>
      </p> */}

      {/* Follow Button */}
      <button
        onClick={handleFollowToggle}
        disabled={followMutation.isPending || unfollowMutation.isPending}
        className={`w-full h-[40px] rounded-full text-base font-normal leading-[120%] px-12 py-2 transition
          ${
            isFollowing
              ? "bg-primary text-white "
              : "bg-gray-200 hover:bg-primary text-gray-800 hover:text-white border-2 border-primary"
          }
        `}
      >
        {isFollowing
          ? unfollowMutation.isPending
            ? "Unfollowing..."
            : "Following"
          : followMutation.isPending
          ? "Following..."
          : "Follow"}
      </button>
    </div>
  );
};

export default ProfileFollow;
