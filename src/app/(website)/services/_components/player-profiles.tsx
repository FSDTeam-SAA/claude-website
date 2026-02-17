import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PlayerProfiles = () => {
    return (
        <div className="py-7 md:py-16 lg:py-20">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-10">
                <div className="md:col-span-1 order-1 md:order-2 h-full flex flex-col justify-center">
                    <h3 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-primary h_underline leading-[150%] pb-2 md:pb-5 lg:pb-6">Player Profiles</h3>
                    <p className='text-sm md:text-base text-[#424242] font-normal leading-[150%] pb-2 md:py-4'>A Player Profile on Analytic Soccer is a live, data-driven identity that follows the player throughout their development.</p>

                    <p className='text-sm md:text-base text-[#424242] font-normal leading-[150%] py-2 md:py-4'>It gathers everything that matters in one place and updates as the player progresses.</p>
                    <p className='text-sm md:text-base text-[#424242] font-normal leading-[150%] py-2 md:py-4'>Digital profile provides the player’s history, data, ratings, match logs, and club pathway just like professional tracking.</p>
                    <p className='text-sm md:text-base text-[#424242] font-normal leading-[150%] py-2 md:py-4'>It gives every player the visibility, credibility, and opportunities they need to advance in the modern game.</p>

                    <h4 className='text-sm md:text-base text-[#424242] leading-[150%] font-normal pb-2 md:pb-8 lg:pb-10'>The player profile is activated only after purchasing a data report.</h4>

                    <div className="hidden md:block">
 <Link
                        href="/profiles"
                        className="w-full flex items-center justify-center"
                    >
                        <button className="w-[200px] md:w-[250px] h-[44px] md:h-[50px] lg:h-[56px] bg-primary text-black ease-in-out duration-200 transition-all py-3 px-5 md:px-6 rounded-full text-sm md:text-base lg:text-lg font-medium leading-[120%] ">
                            Go to Profiles
                        </button>
                    </Link>
                    </div>
                   
                </div>
                <div className="md:col-span-1 order-2 md:order-1 ">
                    <Image  src="/assets/images/new_profiles.jpeg" alt="player profiles" width={500} height={500} className='w-full h-[360px] md:h-[501px] lg:h-[694px] object-contain rounded-[16px] ' />

                    <div className="block md:hidden pt-6">
 <Link
                        href="/profiles"
                        className="w-full flex items-center justify-center"
                    >
                        <button className="w-[200px] md:w-[250px] h-[40px] md:h-[50px] lg:h-[56px] bg-primary text-black ease-in-out duration-200 transition-all py-3 px-5 md:px-6 rounded-full text-sm md:text-base lg:text-lg font-medium leading-[120%] ">
                            Go to Profiles
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerProfiles