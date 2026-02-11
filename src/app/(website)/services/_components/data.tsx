import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServiceData = () => {
    return (
        <div className="bg-[#CDFFCD] py-10 md:py-16 lg:py-20">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 ">
                <div className="md:col-span-1 h-full flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-[150%] h_underline pb-2 md:pb-5 lg:pb-6">Data</h3>
                    <p className='text-sm md:text-base text-[#424242] font-normal leading-[150%] py-2 md:py-3'> <strong className='text-base md:text-lg   text-black font-semibold text-balck'>1. Player Performance Data : </strong><br />
                        Collect and organize technical & tactical  metrics from games.</p>

                    <p className='text-sm md:text-base text-[#424242] font-normal leading-[150%] py-2 md:py-3'> <strong className='text-base md:text-lg text-black  font-semibold text-balck'>2. Player Ratings :</strong><br />

                        Objective scoring system that evaluates performance over time and highlights progress.</p>

                    <p className='text-sm md:text-base text-[#424242] font-normal leading-[150%] py-2 md:py-3'> <strong className='text-base md:text-lg  text-black font-semibold text-balck'> 3. Highlights :</strong><br />

                        Creation of short video clips that showcase key actions and strengths.</p>

                    <p className='text-sm md:text-base text-[#424242] font-normal leading-[150%] py-2 md:py-3'> <strong className='text-base md:text-lg  text-black font-semibold text-balck'>4. Visibility & Recruitment Support :</strong><br />

                        Shareable data that helps players be seen by coaches, scouts, academies, clubs, and recruiters.</p>

                    <p className='text-sm md:text-base text-[#424242] font-normal leading-[150%] py-2 md:py-3'> <strong className='text-base md:text-lg  text-black  font-semibold text-balck'> 5. Support for Teams & Coaches :</strong><br />

                        Match reports and player ranking tools to assist decision-making.</p>
                    <p className='text-sm md:text-base text-[#424242] font-normal leading-[150%] pt-3 md:pt-4 pb-5 md:pb-7 lg:pb-8'> <strong className='text-base md:text-lg text-black font-semibold text-balck'>6. Data Insights for Development :</strong><br />

                        Feedback that helps players understand strengths, weaknesses, and what to improve..</p>

                    <Link
                        href="/profiles"
                        className="flex items-center justify-center"
                    >
                        <button className="w-[250px] md:w-[300px] h-[44px] md:h-[50px] lg:h-[56px] bg-white text-primary ease-in-out duration-200 transition-all py-3 px-5 md:px-6 rounded-full text-sm md:text-base lg:text-lg font-medium leading-[120%]">
                            Get Your Player Report
                        </button>
                    </Link>
                </div>
                <div className="md:col-span-1">
                    <Image src="/assets/images/data.png" alt="data" width={500} height={500} className='w-full h-[400px] md:h-[550px] lg:h-[678px] object-contain  !rounded-[16px]  ' />
                </div>
            </div>
        </div>
    )
}

export default ServiceData