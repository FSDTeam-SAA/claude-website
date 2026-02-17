
import React from 'react'
import { UserProfile } from './player-data-type';
import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';
import CommonSkeleton from './common-skeleton';

const DefensiveStats = ({
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

    const personalInfo = data?.defensive;

    if (!personalInfo) return null;

    return (
        <div className='pb-6'>
            <div className="container bg-white rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]">
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">Defensive Stats</h3>
                <div>
                    {
                        personalInfo?.map((info) => {
                            return <ul key={info?._id} className="grid grid-cols-1 md:gris-cols-2 lg:grid-cols-4 gap-6">

                                <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Tackle Attempts</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.tackleAttempts || "N/A"}</span></li>
                                <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Tackle Succeeded: Possession
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.tackleSucceededPossession || "N/A"}</span></li>
                                <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Tackle Succeeded: No Possession</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.tackleSucceededNOPossession || "N/A"}</span></li>
                                <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Tackle Failed
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.tackleFailed || "N/A"}</span></li>
                                <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Turnover Won
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.turnoverwon || "N/A"}</span></li>
                                <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Interceptions</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.interceptions || "N/A"}</span></li>
                                <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Recoveries</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.recoveries || "N/A"}</span></li>
                                <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Clearance</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.clearance || "N/A"}</span></li>
                                <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Total Blocked</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.totalBlocked || "N/A"}</span></li>
                                <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Shot Blocked
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.shotBlocked || "N/A"}</span></li>
                                <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Cross Blocked</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.crossBlocked || "N/A"}</span></li>
                                <li className="flex flex-row md:flex-col gap-2">
                                    <span className="text-base font-normal text-[#616161] leading-[150%]">
                                        Mistakes
                                    </span>
                                    <span className="text-lg md:text-xl text-[#131313] font-normal leading-[120%]">

                                        {info?.mistakes || "N/A"}
                                    </span>
                                </li>
                                <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Aerial Duels</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.aerialDuels || "N/A"}</span></li>
                                <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Physical Duels</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.phvsicalDuels || "N/A"}</span></li>
                                <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Own Goals</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.ownGoals || "N/A"}</span></li>

                            </ul>
                        }
                        )}
                </div>

            </div>
        </div>
    )
}

export default DefensiveStats