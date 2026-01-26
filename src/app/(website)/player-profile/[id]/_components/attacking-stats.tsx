
import React from 'react'
import { UserProfile } from './player-data-type';
import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';
import CommonSkeleton from './common-skeleton';

const AttackingStats = ({
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

    const personalInfo = data?.attacking;

    if (!personalInfo) return null;
    return (
        <div className='pb-6'>
            <div className="container bg-white rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]">
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">Attacking Stats</h3>
                <div>
                    {
                        personalInfo?.map((info) => {
                            return <ul key={info?._id} className="grid grid-cols-1 md:gris-cols-2 lg:grid-cols-5 gap-6">

                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Goals</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.goals || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Assists
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.assists || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Shots inside PA</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.shotsNsidePr || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Shots outside PA
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.shotsOutsidePa || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Total Shots
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.totalShots || "N/A"}</span></li>

                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Shots on Target</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.shotsOnTarget || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Shooting Accuracy 
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.shootingAccuracy || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Shots off Target</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.shotsOffTarget || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Passes Accuracy 
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.passesAccuracy || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Take-on
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.takeOn || "N/A"}</span></li>
                            </ul>
                        }
                        )}
                </div>

            </div>
        </div>
    )
}

export default AttackingStats