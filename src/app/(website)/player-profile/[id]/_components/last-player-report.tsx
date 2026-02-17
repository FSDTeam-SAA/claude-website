
import React from 'react'
import { UserProfile } from './player-data-type';
import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';
import moment from 'moment';
import CommonSkeleton from './common-skeleton';

const LastPlayerReport = ({
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

    const personalInfo = data?.reports;

    if (!personalInfo) return null;

    return (
        <div className='py-6'>
            <div className="container bg-white rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]">
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">Last Player Report</h3>
                <div>
                    {
                        personalInfo?.map((info) => {
                            return <div key={info?._id}>
                                <ul  className="grid grid-cols-1 md:gris-cols-2 lg:grid-cols-4 gap-6">

                                <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Date</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{moment(info?.date || "N/A")?.format("DD/MM/YYYY")}</span></li>
                                <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Category
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.category || "N/A"}</span></li>
                                <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Game Title</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.gameTitle || "N/A"}</span></li>
                                <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Rating
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.rating || "N/A"}</span></li>

                                     <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Position</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.position?.join(", ") || "N/A"}</span></li>
                                <li className="flex flex-row md:flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Minutes Played
                                </span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{info?.minutesPlayed || "N/A"}</span></li>

                                

                            </ul>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-5">
                                    <div>
                                        <h4 className="text-xl md:text-2xl lg:text-3xl font-normal text-primary leading-[150%]">Defensive Summary</h4>
                                        <p className="text-base md:text-lg text-[#131313] font-normal leading-[150%] pt-1">{info?.deFensiveSummary || "N/A"}</p>
                                    </div>
                                     <div>
                                        <h4 className="text-xl md:text-2xl lg:text-3xl font-normal text-primary leading-[150%]">Strengths</h4>
                                        <p className="text-base md:text-lg text-[#131313] font-normal leading-[150%] pt-1">{info?.strengths || "N/A"}</p>
                                    </div>
                                     <div>
                                        <h4 className="text-xl md:text-2xl lg:text-3xl font-normal text-primary leading-[150%]">Offensive Summary</h4>
                                        <p className="text-base md:text-lg text-[#131313] font-normal leading-[150%] pt-1">{info?.offensiveSummary || "N/A"}</p>
                                    </div>
                                     <div>
                                        <h4 className="text-xl md:text-2xl lg:text-3xl font-normal text-primary leading-[150%]">Weaknesses</h4>
                                        <p className="text-base md:text-lg text-[#131313] font-normal leading-[150%] pt-1">{info?.weaknesses || "N/A"}</p>
                                    </div>
                                     <div>
                                        <h4 className="text-xl md:text-2xl lg:text-3xl font-normal text-primary leading-[150%]">Distribution Summary</h4>
                                        <p className="text-base md:text-lg text-[#131313] font-normal leading-[150%] pt-1">{info?.distributionSummary || "N/A"}</p>
                                    </div>
                                     <div>
                                        <h4 className="text-xl md:text-2xl lg:text-3xl font-normal text-primary leading-[150%]">General Comments</h4>
                                        <p className="text-base md:text-lg text-[#131313] font-normal leading-[150%] pt-1">{info?.generalComments || "N/A"}</p>
                                    </div>
                                </div>
                            </div>
                        }
                        )}
                </div>

            </div>
        </div>
    )
}

export default LastPlayerReport