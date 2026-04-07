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
    { label: "Key Passes", value: info?.keyPasses },
    { label: "Medium Range Passes", value: info?.mediumRangePasses },
    { label: "Passes", value: info?.passes },
    { label: "Short Passes", value: info?.shortPasses },
    { label: "Passes in Final Third", value: info?.passesInFinalThird },
    { label: "Passes Forward", value: info?.passesForward },
    { label: "Passes in Middle Third", value: info?.passesInMiddleThird },
    { label: "Passes Sideways", value: info?.passesSideways },
    { label: "Passes in Defensive Third", value: info?.passesInDefensiveThird },
    { label: "Passes Received", value: info?.passesReceived },
    { label: "Long Passes", value: info?.longPasses },
  ];

  return (
    <div className="">
      <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/profile_bg.svg")] rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]'>
        <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">
          Distribution Stats
        </h3>
        <div>
          {personalInfo.map((info) => {
            const statItems = getStatItems(info);

            return (
              <ul
                key={info?._id}
                className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-2 lg:grid-cols-3 md:gap-4"
              >
                {statItems.map((item) => (
                  <li
                    key={item.label}
                    className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2"
                  >
                    <span className="text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%] break-words">
                      {item.label}
                    </span>
                    <span className="text-lg md:text-xl text-white font-semibold leading-[120%] break-words">
                      {item.value || "N/A"}
                    </span>
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DistributionGkStats;






// import React from 'react'
// import { UserProfile } from './player-data-type';
// import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';
// import CommonSkeleton from './common-skeleton';

// const DistributionGkStats = ({
//     data,
//     isLoading,
//     error,
//     isError,
// }: {
//     data?: UserProfile
//     isLoading: boolean
//     error: unknown
//     isError: boolean
// }) => {

//     if (isLoading) {
//         return <div className="pb-0">
//             <CommonSkeleton />
//         </div>
//     }

//     if (isError) {
//         const message =
//             error instanceof Error ? error.message : "Something went wrong!";
//         return <div className="pb-8">
//             <ErrorContainer message={message} />
//         </div>
//     }

//     const personalInfo = data?.gkDistributionStats;

//     if (!personalInfo) return null;

//     return (
//         <div className=''>
//             <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/profile_bg.svg")] rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]'>
//                  <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />
//                 <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">Distribution Stats</h3>
//                 <div>
//                     {
//                         personalInfo?.map((info) => {
//                             return <ul key={info?._id} className="grid grid-cols-1 md:gris-cols-2 lg:grid-cols-4 gap-6">
//                                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2"><span className='text-base font-normal text-primary leading-[150%]'>Key Passes</span> <span className='text-lg md:text-xl text-white font-normal leading-[120%] '>{info?.keyPasses || "N/A"}</span></li>
//                                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2"><span className='text-base font-normal text-primary leading-[150%]'>Medium Range Passes
//                                 </span> <span className='text-lg md:text-xl text-white font-normal leading-[120%] '>{info?.mediumRangePasses || "N/A"}</span></li>
//                                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2"><span className='text-base font-normal text-primary leading-[150%]'>Passes</span> <span className='text-lg md:text-xl text-white font-normal leading-[120%] '>{info?.passes || "N/A"}</span></li>
//                                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2"><span className='text-base font-normal text-primary leading-[150%]'>Short Passes
//                                 </span> <span className='text-lg md:text-xl text-white font-normal leading-[120%] '>{info?.shortPasses || "N/A"}</span></li>
//                                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2"><span className='text-base font-normal text-primary leading-[150%]'>Passes in Final Third
//                                 </span> <span className='text-lg md:text-xl text-white font-normal leading-[120%] '>{info?.passesInFinalThird || "N/A"}</span></li>
//                                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2"><span className='text-base font-normal text-primary leading-[150%]'>Passes Forward</span> <span className='text-lg md:text-xl text-white font-normal leading-[120%] '>{info?.passesForward || "N/A"}</span></li>
//                                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2"><span className='text-base font-normal text-primary leading-[150%]'>Passes in Middle Third</span> <span className='text-lg md:text-xl text-white font-normal leading-[120%] '>{info?.passesInMiddleThird || "N/A"}</span></li>
//                                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2"><span className='text-base font-normal text-primary leading-[150%]'>Passes Sideways</span> <span className='text-lg md:text-xl text-white font-normal leading-[120%] '>{info?.passesSideways || "N/A"}</span></li>
//                                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2"><span className='text-base font-normal text-primary leading-[150%]'>Passes in Defensive Third</span> <span className='text-lg md:text-xl text-white font-normal leading-[120%] '>{info?.passesInDefensiveThird || "N/A"}</span></li>
//                                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2"><span className='text-base font-normal text-primary leading-[150%]'>Passes Received
//                                 </span> <span className='text-lg md:text-xl text-white font-normal leading-[120%] '>{info?.passesReceived || "N/A"}</span></li>
//                                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2"><span className='text-base font-normal text-primary leading-[150%]'>Long Passes</span> <span className='text-lg md:text-xl text-white font-normal leading-[120%] '>{info?.longPasses || "N/A"}</span></li>


//                             </ul>
//                         }
//                         )}
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default DistributionGkStats