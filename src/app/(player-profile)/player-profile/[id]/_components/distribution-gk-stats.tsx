import React from "react";
import { UserProfile } from "./player-data-type";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import CommonSkeleton from "./common-skeleton";

const DistributionGkStats = ({
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
      <div className="pb-0">
        <CommonSkeleton />
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

  const personalInfo = data?.gkDistributionStats;

  if (!personalInfo) return null;

  const getStatItems = (
    info: NonNullable<UserProfile["gkDistributionStats"]>[number],
  ) => [
    { label: "Passes", value: info?.passes },
    { label: "Passes in Defensive Third", value: info?.passesInDefensiveThird },
    { label: "Long Passes", value: info?.longPasses },
    { label: "Medium Range Passes", value: info?.mediumRangePasses },
    { label: "Key Passes", value: info?.keyPasses },
    { label: "Passes in Final Third", value: info?.passesInFinalThird },
    { label: "Short Passes", value: info?.shortPasses },
    { label: "Passes Forward", value: info?.passesForward },
    { label: "Passes Sideways", value: info?.passesSideways },
    { label: "Passes Received", value: info?.passesReceived },
    { label: "Passes in Middle Third", value: info?.passesInMiddleThird },
  ];

  return (
    <section className="container relative mx-auto overflow-hidden rounded-[36px] bg-[url('/assets/profiles/profile_bg.svg')] bg-cover bg-center bg-no-repeat p-8 md:rounded-[72px] md:p-16">
      {/* <div className="absolute inset-0 bg-black/70" /> */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 rounded-[28px] border-[4px] md:border-[6px] border-primary shadow-[0_0_24px_rgba(16,230,7,0.3)] md:inset-8 md:rounded-[64px] "
      />
      <div className="relative z-10 overflow-hidden rounded-[18px] border border-white/70 bg-black/45 md:rounded-[24px]">
        <h3 className="border-b border-white/70 bg-white/[0.08] px-4 py-1 text-center text-xl font-dagger font-bold leading-tight text-primary md:text-3xl">
          Distribution stats
        </h3>
        <div className="p-4 md:p-6">
          {personalInfo.map((info) => {
            const statItems = getStatItems(info);

            return (
              <ul
                key={info?._id}
                className="grid grid-cols-1 gap-x-16 gap-y-3 md:grid-flow-col md:grid-cols-2 md:grid-rows-6 md:gap-y-3"
              >
                {statItems.map((item) => (
                  <li
                    key={item.label}
                    className="grid min-w-0 grid-cols-[minmax(0,1fr)_minmax(5.5rem,0.45fr)] items-center gap-3"
                  >
                    <span className="break-words text-sm font-medium leading-tight text-white md:text-xl">
                      {item.label}
                    </span>
                    <span className="rounded-md bg-white px-3 py-1 text-sm font-semibold leading-tight text-black md:text-xl">
                      {item.value ?? "N/A"}
                    </span>
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DistributionGkStats;
