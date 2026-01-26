import { Skeleton } from "@/components/ui/skeleton"

export function PlayersTableSkeleton() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <Skeleton className="h-6 w-40" />

      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 bg-muted px-4 py-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-20" />
        </div>

        {/* Table Rows */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-4 gap-4 items-center px-4 py-3 border-t"
          >
            {/* Player */}
            <div className="flex items-center gap-3">
              <Skeleton className="h-9 w-9 rounded-full" />
              <Skeleton className="h-4 w-32" />
            </div>

            {/* Position */}
            <Skeleton className="h-4 w-36" />

            {/* Type */}
            <Skeleton className="h-4 w-36" />

            {/* Nation */}
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-7 rounded-sm" />
              <Skeleton className="h-4 w-10" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-40" />
        <div className="flex gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-8 rounded-md" />
          ))}
        </div>
      </div>
    </div>
  )
}
