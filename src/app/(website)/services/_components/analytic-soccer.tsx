import Image from 'next/image'
import React from 'react'

const AnalyticSoccer = () => {
  return (
    <div className="bg_color py-10 md:py-16 lg:py-20">
         <h3 className='text-2xl md:text-3xl lg:text-4xl text-center text-primary h_underline font-bold leading-[150%] pb-6 md:pb-8 lg:pb-10'>Coming Soon 2026</h3>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="md:col-span-1 h-full flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary h_underline leading-[150%] pb-2 md:pb-3 lg:pb-4">Analytic Soccer+</h3>
                <p className='text-sm md:text-base text-[#424242] font-normal leading-[150%] py-3 md:py-4'>The Player Evaluation Program (U9–U18) is a long-term process that helps us monitor how your child is growing as a player.</p>
                <h4 className='text-sm md:text-base text-[#424242] leading-[150%] font-normal'>The program follows progress over time and looks at several important factors, including :</h4>

                <ul className='py-3 md:py-4'>
                    <li className='text-sm md:text-base text-[#424242] leading-[150%] font-normal'>•  Physical and emotional maturity</li>
                    <li className='text-sm md:text-base text-[#424242] leading-[150%] font-normal py-2 md:py-3'>• Learning speed</li>
                    <li className='text-sm md:text-base text-[#424242] leading-[150%] font-normal'>• Motivation and commitment</li>
                    <li className='text-sm md:text-base text-[#424242] leading-[150%] font-normal py-2 md:py-3'>• Training and game environment</li>
                </ul>

                <p className='text-sm md:text-base text-[#424242] font-normal leading-[150%]'>Parents and players receive ongoing feedback that helps them understand progress and areas to work on.</p>
                <p className='text-sm md:text-base text-[#424242] font-normal leading-[150%] py-2 '>The goal is to understand where your child is today and support their development step by step, at their own pace.</p>
               
            </div>
            <div className="md:col-span-1">
                <Image src="/assets/images/analytic-soccer.jpg" alt="Analytic Soccer Coming Soon" width={500} height={500} className='w-full h-[400px] md:h-[501px] rounded-[16px] object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default AnalyticSoccer