import React from "react";
import { UserProfile } from "./player-data-type";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import SimilarPlayersSkeleton from "./similar-players-skeleton";
import Image from "next/image";
import Link from "next/link";

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

  console.log("dd", similarPlayers);

  // ✅ Empty state (item friendly)
  if (!similarPlayers || similarPlayers.length === 0) {
    return (
      <div className="container pb-12 px-0 ">
        <div className='relative bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/pro_bg1.svg")] rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]'>
        <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5">
            SIMILAR PLAYERS
          </h3>
          <p className="text-sm text-white text-center">No similar players found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-8 md:pb-10 lg:pb-14">
      <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/pro_bg1.svg")] rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]'>
        <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">
          SIMILAR PLAYERS
        </h3>

        {/* ✅ Correct grid layout */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {similarPlayers?.map((item) => {
            return (
              <li key={item._id}>
                <Link href={`/player-profile/${item?._id}`}>
                  <div className="bg-[#E9EBF3] flex flex-col md:flex-row items-center justify-between gap-4 rounded-[16px] p-3">
                    {/* LEFT: Profile */}
                    <div className="w-full md:w-2/5 flex items-center gap-2">
                      <Image
                        src={item?.profileImage || "/assets/images/no-user.jpg"}
                        alt={`${item?.name || "image"}`}
                        width={93}
                        height={93}
                        className="w-[80px] h-[80px] rounded-[8px] object-contain "
                      />

                      <div>
                        <h4 className="text-sm md:text-base text-[#131313] font-semibold leading-[120%]">
                          {item?.name || "N/A"}
                        </h4>
                      </div>
                    </div>

                    {/* RIGHT: Stats + Similarity */}

                    <div className="w-full md:w-3/5 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-4">
                      {/* Stats Section */}
                      <div className="grid grid-cols-3 w-full text-center">
                        {[
                          { label: "Age", value: item?.age ?? 0 },
                          {
                            label: "Positions",
                            value:
                              item?.position
                                ?.map((pos) => pos.toUpperCase())
                                .join("-") ?? "N/A",
                          },
                          {
                            label: "Nationality",
                            value: item?.nationality ?? "N/A",
                          },
                        ].map((stat, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center justify-between md:justify-center py-2 "
                          >
                            {/* Label */}
                            <p className="text-[12px] text-gray-500 mb-1">
                              {stat.label}
                            </p>

                            {/* Value */}
                            <div className="text-[15px] font-semibold text-[#131313] truncate max-w-[90px]">
                              {/* {String(stat.value)?.trim().replace(/\s+/g, " ")} */}
                              {String(stat.value)?.trim()}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Similarity Section */}
                      <div className="flex flex-col items-center gap-2">
                        <div className="relative w-16 h-16 md:w-14 md:h-14">
                          <svg
                            className="w-full h-full rotate-[-90deg]"
                            viewBox="0 0 40 40"
                          >
                            <path
                              d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#E5E7EB"
                              strokeWidth="3"
                            />
                            <path
                              d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#10e607"
                              strokeWidth="3"
                              strokeDasharray={`${item?.similarity ?? 0}, 100`}
                            />
                          </svg>

                          <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-[#131313]">
                            {item?.similarity ?? 0}%
                          </span>
                        </div>

                        <p className="text-xs text-gray-500">Similarity</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SimilarPlayers;
