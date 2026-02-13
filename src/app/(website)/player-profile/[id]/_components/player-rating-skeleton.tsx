import { Skeleton } from "@/components/ui/skeleton";

export default function PlayerRatingSkeleton() {
  return (
    <div className="w-full rounded-xl bg-white p-6">
      {/* Title Skeleton */}
      <Skeleton className="h-10 w-[420px] mb-8" />

      {/* Chart Area */}
      <div className="flex items-end justify-between gap-6 h-[300px]">
        {[120, 200, 170, 260, 240].map((height, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            {/* Rating Badge */}
            <Skeleton className="h-8 w-12 rounded-md" />

            {/* Bar */}
            <Skeleton
              className="w-28 rounded-xl"
              style={{ height: `${height}px` }}
            />

            {/* Date */}
            <Skeleton className="h-5 w-24" />
          </div>
        ))}
      </div>
    </div>
  );
}
