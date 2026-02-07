
import Image from 'next/image';
import moment from "moment";
import React from 'react'
// import {
//     Share2
// } from 'lucide-react'
// import {
//     Share2, Facebook,
//     Instagram,
//     Twitter,
//     Youtube, Music, Globe
// } from 'lucide-react'
import RatingCard from './rating-card';
import PlayerInfoSkeleton from './profile-info-skeleton';
import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';
import { UserProfile } from './player-data-type';
import ProfileFollow from './profile-follow';
import SocialShareContent from '@/components/ui/social-share-content';
// import SocialShareContent from '@/components/ui/social-share-content';

const PlayerInfo = ({
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

    // const SOCIAL_ICON_MAP: Record<
    //     typeof SOCIAL_MEDIA_OPTIONS[number],
    //     React.ElementType
    // > = {
    //     Facebook: Facebook,
    //     Instagram: Instagram,
    //     Twitter: Twitter,
    //     YouTube: Youtube,
    //     TikTok: Music,
    // };


    if (isLoading) {
        return <div className="pb-8">
            <PlayerInfoSkeleton />
        </div>
    }

    if (isError) {
        const message =
            error instanceof Error ? error.message : "Something went wrong!";
        return <div className="py-8">
            <ErrorContainer message={message} />
        </div>
    }

    const personalInfo = data?.user;
    console.log(data)


    if (!personalInfo) return null;

    const averageRatings = data?.avarageRatting

    return (
        <div className='py-6'>
            <div className="container grid grid-cols-1 md:gris-cols-2 lg:grid-cols-5 gap-6 bg-white rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]">
                <div className="md:col-span-1 w-full flex flex-col justify-center items-center">
                    <Image src={personalInfo?.profileImage || "/assets/images/no-user.jpg"} alt={personalInfo?.firstName || "profile image"} width={1000} height={1000} className="w-[200px] h-[200px] object-cover rounded-full border shadow" />

                    <p className="text-base md:text-lg lg:text-xl font-semibold text-black pt-2 leading-[150%]">{personalInfo?.firstName} {personalInfo?.lastName}</p>

                    <div>

                    <div className="flex flex-col gap-4 p-4 mt-2 border border-[#EBEBEB] rounded-[12px] shadow">

                        <SocialShareContent
                            postId={personalInfo?._id}
                        />
                        <ProfileFollow id={personalInfo?._id} followers={personalInfo?.followers} />
                    </div>
                    </div>

                </div>
                <div className="md:col-span-3">
                    <ul className="grid gris-cols-1 md:gris-cols-2 lg:grid-cols-3 gap-4">
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Nationality</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.citizenship || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Place of birth</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.birthdayPlace || "N/A"}</span></li>
                        <li className="flex flex-col gap-2">
                            <span className="text-base font-normal text-[#616161] leading-[150%]">
                                Age
                            </span>
                            <span className="text-lg md:text-xl text-[#131313] font-normal leading-[120%]">
                                {personalInfo?.dob
                                    ? `${moment(personalInfo.dob).format("DD MMM YYYY")} (${personalInfo.age || 0})`
                                    : "N/A"}
                            </span>

                        </li>

                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Gender</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.gender || "N/A"}</span></li>

                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Citizenship</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.citizenship || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Weight</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.weight || "N/A"}</span></li>

                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Height</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.hight || "N/A"}</span></li>

                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>League</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.league || "N/A"}</span></li>

                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Preferred Foot</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.foot || "N/A"}</span></li>

                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Category</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.category || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Position</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.position?.map(p => p.toUpperCase()).join("-") || "N/A"}</span></li>

                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Current Club</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.currentClub || "N/A"}</span></li>



                        {/* <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Agent</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.agent || "N/A"}</span></li> */}

                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Agent</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.agent || "N/A"}</span></li>

                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>School Name</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.schoolName || "N/A"}</span></li>



                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>GPA</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.gpa || "N/A"}</span></li>

                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Jerssy Number</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.jerseyNumber || "N/A"}</span></li>

                        <li className="flex flex-col gap-2">
                            <span className='text-base font-normal text-[#616161] leading-[150%]'>
                                Social Media
                            </span>

                            {personalInfo?.socialMedia && personalInfo.socialMedia.length > 0 ? (
                                <div className="flex flex-col gap-1">
                                    {personalInfo.socialMedia.map((item, index) => (
                                        <a
                                            key={item._id || index}
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg md:text-xl text-[#131313] font-normal leading-[120%] hover:underline"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%]'>
                                    N/A
                                </span>
                            )}
                        </li>

                        {/* <li className="flex flex-col gap-2">
                            <span className='text-base font-normal text-[#616161] leading-[150%]'>
                                Social Media
                            </span>

                            {personalInfo?.socialMedia && personalInfo.socialMedia.length > 0 ? (
                                <div className="flex flex-col gap-1">
                                    {personalInfo.socialMedia.map((item, index) => {
                                        const Icon =
                                            SOCIAL_ICON_MAP[item.name as typeof SOCIAL_MEDIA_OPTIONS[number]] ??
                                            Globe;

                                        return (
                                            <a
                                                key={item._id || index}
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-lg md:text-xl text-[#131313] font-normal leading-[120%] hover:underline"
                                            >
                                                <Icon className="w-5 h-5" />
                                                <span>{item.name}</span>
                                            </a>
                                        );
                                    })}
                                </div>
                            ) : (
                                <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%]'>
                                    N/A
                                </span>
                            )}
                        </li> */}


                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Followers</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.followers?.length || "N/A"}</span></li>
                        {/* <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Institute Name</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.schoolName|| "N/A"}</span></li> */}










                        {/* <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Full Name</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.firstName || "N/A"}  {personalInfo?.lastName || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Phone</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.phone || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Role</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.role || "N/A"}</span></li>
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Email</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.email || "N/A"}</span></li> */}

                    </ul>
                </div>
                <div className="md:col-span-1">
                    <RatingCard
                        averageRating={averageRatings?.averageRating ?? 0}
                        totalGames={averageRatings?.gamesNumber ?? 0}
                        stars={averageRatings?.stars ?? 0}
                    />

{/* player market value  */}

                     {/* <div className="flex flex-col gap-4 p-4 mt-6 border border-[#EBEBEB] rounded-[12px] shadow">
                        <h4 className='text-lg md:text-xl lg:text-xl font-semibold text-[#131313] '>Market Value : $ {data?.marketValue[0]?.marketValue || 0}</h4>
                    </div> */}

                    {/* <div className="flex flex-col gap-6 p-4 mt-6 border border-[#EBEBEB] rounded-[12px] shadow">

                        <SocialShareContent
                            postId={personalInfo?._id}
                        />
                        <ProfileFollow id={personalInfo?._id} followers={personalInfo?.followers} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default PlayerInfo