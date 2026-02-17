import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const HowOurAnalytics = () => {
    return (
        <div className='py-6 md:py-6 bg_color'>
            <div className="container grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 lg:gap-20">
                <div className='md:col-span-2 '>
                    <Image src="/assets/images/12.jpeg" alt="how our analytics" width={1000} height={1000} className='w-[622px] h-[200px] md:h-[500px] xl:h-[530px] object-contain rounded-[16px]' />
                </div>
                <div className='md:col-span-3 h-full flex flex-col justify-center'>
                    <h3 className='hidden md:block text-2xl md:text-3xl lg:text-4xl text-primary font-normal h_underline leading-[120%]'>How Our Analytics Process Works</h3>
                    <h3 className='block md:hidden text-2xl md:text-3xl lg:text-4xl text-primary h_underline font-normal leading-[120%]'>Our Analytics Process</h3>
                    <p className='text-sm md:text-base text-[#616161] font-normal leading-[120%] py-1 md:pt-3'>To activate your profile, you must first register and purchase our data service to receive your report.</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-3 md:py-5'>

                        <div className='md:col-span-1 flex flex-col items-center bg-[#CDFFCD] rounded-[16px] p-4 border border-[#E7E7E7)]'>
                            <div className='flex flex-col items-center gap-4'>
                                <div className='bg-[#E6F4E6] rounded-full p-4 inline-flex' >

                                    <Image src="/assets/images/send.png" alt="send" width={500} height={500} className='object-cover w-10 h-10' />
                                </div>
                                <p className='text-sm lg:text-base font-normal text-center text-[#0A1628] leading-[120%]'>Send us your game video
                                    and the team sheet</p>
                            </div>
                        </div>
                        <div className='md:col-span-1 flex flex-col items-center bg-[#CDFFCD] rounded-[16px] p-4 border border-[#E7E7E7)]'>
                            <div className='flex flex-col items-center gap-4'>
                                <div className='bg-[#E6F4E6] rounded-full p-4 inline-flex' >

                                    <Image src="/assets/images/performance.png" alt="send" width={500} height={500} className='object-cover w-10 h-10' />
                                </div>
                                <p className='text-sm lg:text-base font-normal text-center text-[#0A1628] leading-[120%]'>We analyze your performance</p>
                            </div>
                        </div>
                        <div className='md:col-span-1 flex flex-col items-center bg-[#CDFFCD] rounded-[16px] p-4 border border-[#E7E7E7)]'>
                            <div className='flex flex-col items-center gap-4'>
                                <div className='bg-[#E6F4E6] rounded-full p-4 inline-flex' >

                                    <Image src="/assets/images/email.png" alt="send" width={500} height={500} className='object-cover w-10 h-10' />
                                </div>
                                <p className='text-sm lg:text-base font-normal text-center text-black leading-[120%]'>Receive your report and highlight within 72 hours</p>
                            </div>
                        </div>


                    </div>

                    {/* button  */}
                    <div className='w-full flex items-center justify-center pt-4 md:pt-2'>
                        <Link href="/sign-up">
                        <button className='h-[40px] md:h-[48px] px-12 rounded-full bg-primary text-black text-base md:text-lg leading-[120%] font-normal '>Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowOurAnalytics