
import { Skeleton } from "@/components/ui/skeleton";

export default function CommonSkeleton() {
    return (
        <div className="pt-8">
            <ul className="container grid grid-cols-1 md:grid-cols-4 gap-6 bg-white rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]">
                {Array.from({ length: 16 }).map((_, index) => (
                    <li key={index} className="flex flex-col gap-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-5 w-full max-w-[180px]" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

