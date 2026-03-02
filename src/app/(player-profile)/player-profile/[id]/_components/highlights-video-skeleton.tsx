
import { Skeleton } from "@/components/ui/skeleton";

export default function HighlightsVideoSkeleton() {
    return (
        <div className="pt-8">
            <ul className="container grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]">
                {Array.from({ length: 3 }).map((_, index) => (
                    <li key={index} className="flex flex-col gap-2">
                        <Skeleton className="h-60 w-full" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

