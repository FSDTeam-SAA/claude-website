import { Skeleton } from "@/components/ui/skeleton";

export default function IndividualPricingSkeleton() {
  return (
    <div className="w-full flex items-center justify-center gap-6">
      {Array.from({ length: 1 }).map((_, index) => (
        <div
          key={index}
          className="border rounded-xl p-8 shadow-sm bg-white flex flex-col items-center gap-4"
        >
          {/* Top Badge */}
          <Skeleton className="h-6 w-40 rounded-md" />

          {/* Price */}
          <Skeleton className="h-8 w-48" />

          {/* Sub text */}
          <Skeleton className="h-4 w-52" />

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
