"use client";

import { Skeleton } from "@/components/ui/skeleton";

const SimilarPlayerCardSkeleton = () => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl bg-muted/40 p-4">
      {/* Left: Player info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <Skeleton className="h-14 w-14 rounded-lg" />

        {/* Name + Club */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>

      {/* Middle: Stats */}
      <div className="hidden md:flex items-center gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-3 w-12" />
          </div>
        ))}
      </div>

      {/* Right: Similarity */}
      <div className="flex flex-col items-center gap-2">
        <Skeleton className="h-12 w-12 rounded-full" />
        <Skeleton className="h-3 w-16" />
      </div>
    </div>
  );
};

export default function SimilarPlayersSkeleton() {
  return (
    <section className="bg-white rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014] space-y-4">
      {/* Title */}
      <Skeleton className="h-6 w-48" />

      {/* List */}
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <SimilarPlayerCardSkeleton key={item} />
        ))}
      </div>
    </section>
  );
}
