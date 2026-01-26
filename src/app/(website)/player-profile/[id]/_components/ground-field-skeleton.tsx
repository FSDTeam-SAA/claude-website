import { Skeleton } from "@/components/ui/skeleton";

export default function GroundFieldSkeleton() {
  return (
    <div className="w-full rounded-xl border bg-white p-7">
      {/* Top Positions */}
      <div className="flex justify-between mb-6">
        <div>
          <Skeleton className="h-6 w-40 mb-2" />
          <Skeleton className="h-5 w-16" />
        </div>

        <div className="text-right">
          <Skeleton className="h-6 w-40 mb-2" />
          <Skeleton className="h-5 w-16 ml-auto" />
        </div>
      </div>

      {/* Football Field Image Skeleton */}
      <div className="flex justify-center">
        <Skeleton className="h-[280px] w-full max-w-[700px] rounded-xl" />
      </div>
    </div>
  );
}
