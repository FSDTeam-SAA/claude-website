
import React from 'react'
import Image from 'next/image'
import { UserProfile } from './player-data-type';

import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';
import GroundFieldSkeleton from './ground-field-skeleton';

const GroundField = ({
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
        return <div className="pt-0">
            <GroundFieldSkeleton />
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

    if (!personalInfo) return null;
  return (
    <div className="bg-white shadow-[0px_4px_16px_0px_#00000014] rounded-[16px] p-6 ">
      <div className='flex items-center justify-between pb-1 md:pb-4'>
        <p className='text-center'>
          <span className='text-base md:text-lg font-normal text-black leading-[120%] text-center'>Main Position : </span> <br/>
           <span className='text-lg md:text-xl font-normal text-black leading-[120%] text-center'>{personalInfo?.position?.slice(0, 1) || "N/A"}</span>
        </p>
        <p className='text-center'>
          <span className='text-base md:text-lg font-normal text-black leading-[120%] text-center'>Other Position : </span> <br/>
           <span className='text-lg md:text-xl font-normal text-black leading-[120%] text-center'>{personalInfo?.position?.slice(1, 2) || "N/A"}</span>
        </p>
      </div>

      <Image src="/assets/images/ground-field.png" alt="ground field" width={1000} height={1000} className='w-full h-[200px] md:h-[288px] object-contain'/>
    </div>
  )
}

export default GroundField