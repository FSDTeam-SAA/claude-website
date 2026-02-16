import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const WhatDoWeOffer = () => {
    return (
        <div className='py-6 md:py-12 lg:py-16'>

            <div className='container grid grid-cols-1 md:grid-cols-7 gap-6 md:gap-7 lg:gap-10 xl:gap-12 '>
                <div className="order-2 md:order-1 md:col-span-3 flex items-center">
                    <div className=' bg_color shadow-[0px_4px_16px_0px_#00000029] rounded-[16px] flex flex-col justify-center py-6 md:py-8 px-6 md:px-10 xl:px-14'>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl text-primary h_underline leading-[120%] font-normal'>What do we offer</h3>

                    <ul className='pt-5 md:pt-5 list-disc list-inside '>
                        <li className='text-sm xl:text-base font-normal leading-[150%] text-[#616161]'>Specific technical and tactical data</li>
                        <li className='text-sm xl:text-base font-normal leading-[150%] text-[#616161] py-4'>Ratings for every game to measure your progression</li>
                        <li className='text-sm xl:text-base font-normal leading-[150%] text-[#616161]'>Personalized highlights showcasing your key actions</li>
                         <li className='text-sm xl:text-base font-normal leading-[150%] text-[#616161] py-4'>Structured Feedback</li>
                    </ul>

                    <div className="w-full flex items-center justify-center">
                        <Link href="/sign-up">
                        <button className="w-[180px] md:w-[200px] lg:w-[215px] h-[40px] md:h-[44px] lg:h-[48px] text-base md:text-lg text-black leading-[120%] font-normal bg-primary rounded-full relative z-10">Register</button>
                    </Link>
                    </div>
                </div>
                </div>
                <div className='order-1 md:order-2 md:col-span-4 w-full flex items-center justify-end '>
                    <Image src="/assets/images/what_do_we.jpeg" alt="What Do We Offer" width={1000} height={1000} className='w-auto h-[360px] md:h-[550px] xl:h-[600px] object-contain rounded-[16px]' />
                </div>
            </div>
        </div>
    )
}

export default WhatDoWeOffer