
import React from 'react'
import { UserProfile } from './player-data-type';
import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';
import CommonSkeleton from './common-skeleton';

const DistributionPlayerStats = ({
    data,
    isLoading,
    error,
    isError,
}: {
    data?: UserProfile
    isLoading: boolean
    error: unknown
    isError: boolean
}) => {

    if (isLoading) {
        return <div className="pb-0">
            <CommonSkeleton />
        </div>
    }

    if (isError) {
        const message =
            error instanceof Error ? error.message : "Something went wrong!";
        return <div className="pb-8">
            <ErrorContainer message={message} />
        </div>
    }

    const personalInfo = data?.distribution;

    if (!personalInfo) return null;

    return (
        <div className=''>
            <div className="container bg-white rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]">
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">Distribution Stats</h3>
                <div>
                    {
                        personalInfo?.map((info) => {
                            return <div key={info?._id}>
                                <ul  className="grid grid-cols-1 md:gris-cols-2 lg:grid-cols-4 gap-6">

                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Passes</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.passes || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Passes in Final Third
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.passesinFinalThird || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Passes in Middle Third
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.passesinMiddleThird || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Passes in Defensive Third

                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.passesinOerensiveThird || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Key Passes
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.kevPasses || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Long Passes</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.longPasses || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Medium Passes</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.mediumPasses || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Short Passes</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.shortPasses || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Passes Forward</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.passesForward || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Passes Sideways
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.passesSidewavs || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Passes Backward</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.passesBackward || "N/A"}</span></li>
                                <li className="flex flex-col gap-2">
                                    <span className="text-base font-normal text-[#616161] leading-[150%]">
                                        Passes Received
                                    </span>
                                    <span className="text-lg md:text-xl text-[#131313] font-normal leading-[120%]">

                                        {info?.passesReceived || "N/A"}
                                    </span>
                                </li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Crosses</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.crosses || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Step-in</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.stepIn || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Turnover Conceded</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.turnoverConceded || "N/A"}</span></li>
                                {/* <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Most Passes Player Between </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.mostPassesPlayerBetween || "N/A"}</span></li> */}
                                 <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Who do you pass the ball to the most?</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.passTheMost || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-me text-[#616161] leading-[150%]'>who do pass the ball to you the most?
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.ballTheMost || "N/A"}</span></li>
                            </ul>
                            </div>
                        }
                        )}
                </div>

            </div>
        </div>
    )
}

export default DistributionPlayerStats