import React from "react";
import { UserProfile } from "./player-data-type";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import SimilarPlayersSkeleton from "./similar-players-skeleton";
import Image from "next/image";

const SimilarPlayers = ({
    data,
    isLoading,
    error,
    isError,
}: {
    data?: UserProfile;
    isLoading: boolean;
    error: unknown;
    isError: boolean;
}) => {
    if (isLoading) {
        return (
            <div className="container py-8">
                <SimilarPlayersSkeleton />
            </div>
        );
    }

    if (isError) {
        const message =
            error instanceof Error ? error.message : "Something went wrong!";
        return (
            <div className="pb-8">
                <ErrorContainer message={message} />
            </div>
        );
    }

    const similarPlayers = data?.semelierPlayer;

    console.log("dd", similarPlayers)

    // ✅ Empty state (item friendly)
    if (!similarPlayers || similarPlayers.length === 0) {
        return (
            <div className="container py-6">
                <div className="bg-white rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5">
                        SIMILAR PLAYERS
                    </h3>
                    <p className="text-sm text-gray-500">
                        No similar players found.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="pb-10 md:pb-14 lg:pb-20">
            <div className="container bg-white rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]">
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">
                    SIMILAR PLAYERS
                </h3>

                {/* ✅ Correct grid layout */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {similarPlayers?.map((item) => {

                        return (
                            <li key={item._id}>
                                <div className="bg-[#E9EBF3]/50 flex items-center justify-between gap-4 rounded-[16px] p-4">
                                    {/* LEFT: Profile */}
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={item.profileImage || "/assets/images/no-user.jpg"}
                                            alt={`${item?.name || "image" }`}
                                            width={93}
                                            height={93}
                                            className="w-[93px] h-[93px] rounded-[8px] object-cover"
                                        />

                                        <div>
                                            <h4 className="text-sm md:text-base text-[#131313] font-normal leading-[120%]">
                                                {item?.name || "N/A"}
                                            </h4>

                                            <div className="flex items-center gap-2 pt-3">
                                                <Image
                                                    src={item?.nationalTeam?.flag || "/assets/images/no-flag.png"}
                                                    alt="flag"
                                                    width={24}
                                                    height={24}
                                                    className="w-6 h-6 rounded-[6px] object-cover"
                                                />
                                                <p className="text-sm font-normal text-[#131313] leading-[150%]">
                                                    {item?.nationalTeam?.teamName || "N/A"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* RIGHT: Stats + Similarity */}
                                    <div className="hidden md:flex items-center gap-6">
                                        {/* Stat Item */}
                                        {[
                                            { label: "Age", value: item?.age ?? 0 },
                                            { label: "Positions", value: item?.position?.join(", ") ?? "N/A" },
                                            { label: "Nationality", value: item?.nationality ?? "N/A" },
                                        ].map((stat, index) => (
                                            <div key={index} className="flex flex-col items-center gap-2">
                                                <div className="w-16 h-12 rounded-full p-2 flex items-center justify-center text-base font-medium text-[#131313]">
                                                    {stat.value}
                                                </div>
                                                <p className="text-xm text-black leading-[150%]">
                                                    {stat.label}
                                                </p>
                                            </div>
                                        ))}

                                        {/* Similarity */}
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="relative w-14 h-14">
                                                <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 40 40">
                                                    <path
                                                        d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        fill="none"
                                                        stroke="#B9C2DB"
                                                        strokeWidth="4"
                                                    />
                                                    <path
                                                        d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        fill="none"
                                                        stroke="#1E3A8A"
                                                        strokeWidth="4"
                                                        strokeDasharray={`${item?.similarity ?? 0}, 100`}
                                                    />
                                                </svg>

                                                <span className="absolute inset-0 flex items-center justify-center text-[15px] font-medium text-[#131313]">
                                                    {item?.similarity ?? 0}%
                                                </span>
                                            </div>

                                            <p className="text-xm text-black leading-[150%]">
                                                Similarity
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SimilarPlayers;

