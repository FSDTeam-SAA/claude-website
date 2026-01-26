import { Skeleton } from "@/components/ui/skeleton";

export default function TeamPricingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="border rounded-xl p-5 shadow-sm bg-white flex flex-col items-center gap-4"
        >
          {/* Top Badge */}
          <Skeleton className="h-6 w-24 rounded-md" />

          {/* Price */}
          <Skeleton className="h-8 w-32" />

          {/* Sub text */}
          <Skeleton className="h-4 w-40" />

          {/* Features */}
          <div className="flex flex-col gap-2 w-full">
            <Skeleton className="h-3 w-3/4" />
            <Skeleton className="h-3 w-2/3" />
          </div>

          {/* Button */}
          <Skeleton className="h-10 w-full rounded-md mt-3" />
        </div>
      ))}
    </div>
  );
}
