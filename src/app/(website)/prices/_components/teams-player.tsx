"use client"
import { CircleCheckBig } from 'lucide-react'
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { SubscriptionApiResponse } from './subscription-data-type';
import { useSession } from 'next-auth/react';
import RegisterAsTeamPlayerForm from './register-as-team-player-form';
import TeamPricingSkeleton from './team-pricing-skeleton';
import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';

const TeamsPlayer = () => {
    const [teamIsOpen, setTeamIsOpen] = useState(false);
const [subscriptionId, setSubscriptionId] = useState<string | null>(null);

    const session = useSession();
    const token = (session?.data?.user as { accessToken: string })?.accessToken;

    const { data, isLoading, error, isError } = useQuery<SubscriptionApiResponse>({
        queryKey: ["subscription-all"],
        queryFn: async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/subscription`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return res.json();
        }
    })

    console.log(data)

    const subscriptionData = data?.data?.filter(
        (item) => item?.paymentType === "TeamGame"
    )

    const sortedSubscriptionData = subscriptionData
  ?.sort((a, b) => {
    const aGames = a.numberOfGames ?? Number.MAX_SAFE_INTEGER;
    const bGames = b.numberOfGames ?? Number.MAX_SAFE_INTEGER;

    return aGames - bGames;
  });

    // console.log(subscriptionData)

       if (isLoading) {
            return <div className="container py-10">
                <TeamPricingSkeleton />
            </div>
        }
    
        if (isError) {
            const message =
                error instanceof Error ? error.message : "Something went wrong!";
            return <div className="pb-8">
                <ErrorContainer message={message} />
            </div>
        }
    return (
        <div className="border-b border-[#EBEBEB]  py-10 md:py-16 lg:py-24">
            <div className="container ">
                <h3 className='text-2xl md:text-3xl lg:text-[40px] text-[#131313] leading-[120%] h_underline font-normal text-center'>Pricing For Teams (minimum 10 players)</h3>
                {/* <p className='text-base text-[#424242] leading-[150%] font-normal text-center pt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 pt-10">
                {sortedSubscriptionData?.sort()?.map((item, index) => {
                        const isFourth = index === 3;
                        const isFifth = index === 4;

                        return (
                            <div
                                key={item._id}
                                className={`
                                col-span-1 md:col-span-2
                                ${isFourth ? "md:col-start-2" : ""}
                                ${isFifth ? "md:col-start-4" : ""}
                                border-[1.5px] border-[#1E3A8A] rounded-[16px] overflow-hidden
                                `}
                            >
                                
                                <div className="bg-[#006600] rounded-t-[14px] text-lg md:text-xl lg:text-2xl font-normal text-white leading-[120%] text-center py-6">
                                    {item?.numberOfGames} games
                                </div>

                                
                                <div className="p-6 text-center">
                                    <h4 className="text-2xl md:text-3xl lg:text-[40px] text-[#131313] text-center leading-[120%] font-bold pb-5">
                                        ${item.price}
                                        <span className="text-sm font-normal"> / player</span>
                                    </h4>

                                    <p className="flex items-center justify-center gap-2 text-sm text-[#131313] py-4">
                                        <CircleCheckBig className="w-4 h-4 text-green-600" />
                                        {item?.description}
                                    </p>

                                    <button onClick={()=>{
                                        setTeamIsOpen(true)
                                        setSubscriptionId(item._id)
                                    }} className='w-full h-[51px] bg-[#424242] rounded-[8px] text-base text-white leading-[120%] font-medium '>Continue</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

             {/* modal open  */}
            {
                teamIsOpen && subscriptionId && (
                    <RegisterAsTeamPlayerForm open={teamIsOpen} onOpenChange={setTeamIsOpen} subscriptionId={subscriptionId} />
                )
            }
        </div>
    )
}

export default TeamsPlayer