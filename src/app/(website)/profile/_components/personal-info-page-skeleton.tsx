"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileSettingSkeleton() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header + Save Button */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-48 rounded-md" />
        
      </div>

      {/* Top: Profile Image + Upload */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center gap-4">
          <Skeleton className="w-32 h-32 rounded-full" />
          <Skeleton className="h-10 w-32 rounded-md" />
        </div>

        {/* Upload Videos Section */}
        <div className="flex flex-col gap-4 flex-1">
          <Skeleton className="h-20 w-full rounded-md" />
          <div className="flex gap-4">
            <Skeleton className="h-12 w-12 rounded-md" />
            <Skeleton className="h-12 w-12 rounded-md" />
            <Skeleton className="h-12 w-12 rounded-md" />
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 14 }).map((_, idx) => (
          <Skeleton key={idx} className="h-10 w-full rounded-md" />
        ))}
      </div>

      {/* Yes/No toggle */}
      <div className="flex items-center gap-4">
        <Skeleton className="h-6 w-12 rounded-full" />
        <Skeleton className="h-6 w-12 rounded-full" />
      </div>

      {/* Footer fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Skeleton key={idx} className="h-10 w-full rounded-md" />
        ))}
      </div>
      <div className="w-full flex items-center justify-end">
        <Skeleton className="h-10 w-32 rounded-full" />
      </div>
    </div>
  );
}
