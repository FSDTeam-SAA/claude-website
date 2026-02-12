
import React from 'react'
import Image from 'next/image'
import { UserProfile } from './player-data-type';

import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';
import GroundFieldSkeleton from './ground-field-skeleton';


const POSITION_IMAGES: Record<string, string> = {
  gk: "/assets/grounds/gk.png",
  rb: "/assets/grounds/rb.png",
  lb: "/assets/grounds/lb.png",
  cb: "/assets/grounds/cb.png",
  cm: "/assets/grounds/cm.png",
  am: "/assets/grounds/am.png",
  rw: "/assets/grounds/rw.png",
  lw: "/assets/grounds/lw.png",
  striker: "/assets/grounds/striker.png",

  // optional combined images

  "am-lw": "/assets/grounds/am_lw.png",
  "am-rw": "/assets/grounds/am_rw.png",
  "am-st": "/assets/grounds/am_st.png",
  "cb-cm": "/assets/grounds/cb_cm.png",
  "cb_lb": "/assets/grounds/cb_lb.png",
  "cb-rb": "/assets/grounds/cb_rb.png",
  "cm-am": "/assets/grounds/cm_am.png",
  "lb-cm": "/assets/grounds/lb_cm.png",
  "lw-am": "/assets/grounds/lw_am.png",
  "rb-cm": "/assets/grounds/rb_cm.png",
  "rb-lb": "/assets/grounds/rb_lb.png",
  "lb-rb": "/assets/grounds/rb_lb.png",
  "rw-am": "/assets/grounds/rw_am.png",
  "striker-am": "/assets/grounds/st_am.png",
  "striker-lw": "/assets/grounds/st_lw.png",
  "striker-rw": "/assets/grounds/st_rw.png",
};

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
  const groundField = personalInfo?.position || [];
  console.log("ground field", groundField)

  const positionKey = groundField.slice(0, 2).join("-");

  const groundImage =
    POSITION_IMAGES[positionKey] ||
    POSITION_IMAGES[groundField[0]];

  if (!personalInfo) return null;



  return (
    <div className="bg-white shadow-[0px_4px_16px_0px_#00000014] rounded-[16px] p-6 ">
      <div className='flex items-center justify-between pb-1 md:pb-4'>
        <p className='text-center'>
          <span className='text-base md:text-lg font-normal text-black leading-[120%] text-center'>Main Position : </span> <br />
          {/* <span className='text-lg md:text-xl font-normal text-black leading-[120%] text-center'>
            {personalInfo?.position?.slice(0, 1).toUpperCase() || "N/A"}
            </span> */}

          <span className="text-lg md:text-xl font-normal text-black leading-[120%]">
            {Array.isArray(personalInfo?.position) && personalInfo.position.length > 0
              ? personalInfo.position[0].toUpperCase()
              : "N/A"}
          </span>
        </p>

        <p className='text-center'>
          <span className='text-base md:text-lg font-normal text-black leading-[120%] text-center'>Other Position : </span> <br />
          {/* <span className='text-lg md:text-xl font-normal text-black leading-[120%] text-center'>{personalInfo?.position?.slice(1, 2) || "N/A"}</span> */}

          <span className="text-lg md:text-xl font-normal text-black leading-[120%]">
            {Array.isArray(personalInfo?.position) && personalInfo.position.length > 1
              ? personalInfo.position[1].toUpperCase()
              : "N/A"}
          </span>
        </p>
      </div>

      {/* ground field  */}
      <div>
        <Image
          src={groundImage || "/assets/grounds/ground-field.png"}
          alt="ground field"
          width={1000}
          height={1000}
          className="w-full h-[200px] md:h-[288px] object-contain"
        />
      </div>
    </div>
  )
}

export default GroundField

