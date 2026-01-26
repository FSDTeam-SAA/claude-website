
import React from 'react'
import { UserProfile } from './player-data-type';
import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';
import CommonSkeleton from './common-skeleton';

const SetPieces = ({
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

    const personalInfo = data?.setpieces;

    if (!personalInfo) return null;
    return (
        <div className='py-6'>
            <div className="container bg-white rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]">
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">Set Pieces</h3>
                <div>
                    {
                        personalInfo?.map((info) => {
                            return <ul key={info?._id} className="grid grid-cols-1 md:gris-cols-2 lg:grid-cols-4 gap-6">

                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Freekicks</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.freekicks || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Freekicks Shots
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.freekicksShots || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Free kicks Shots on Target</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.freekicksShotsonTarget || "N/A"}</span></li>
                                <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Penalty Kicks 
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.penaltyKicks || "N/A"}</span></li>

                            </ul>
                        }
                        )}
                </div>

            </div>
        </div>
    )
}

export default SetPieces