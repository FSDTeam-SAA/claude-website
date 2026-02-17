
import React from 'react'
import Image from 'next/image'
import { UserProfile } from './player-data-type';

import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';
import GroundFieldSkeleton from './ground-field-skeleton';


const POSITION_IMAGES: Record<string, string> = {
  gk: "/assets/grounds/gk.png",
  rb: "/assets/grounds/rb.png",
  lb: "/assets/grounds/lb.png",
  cbl: "/assets/grounds/cbl.png",
  cbr: "/assets/grounds/cbr.png",
  cm: "/assets/grounds/cm.png",
  aml: "/assets/grounds/aml.png",
  amr: "/assets/grounds/amr.png",
  rw: "/assets/grounds/rw.png",
  lw: "/assets/grounds/lw.png",
  striker: "/assets/grounds/st.png",

  // optional combined images

  "aml-amr": "/assets/grounds/aml_amr.png",
  "aml-cbl": "/assets/grounds/aml_cbl.png",
  "aml-cbr": "/assets/grounds/aml_cbr.png",
  "aml-cm": "/assets/grounds/aml_cm.png",
  "aml-gk": "/assets/grounds/aml_gk.png",
  "aml-lb": "/assets/grounds/aml_lb.png",
  "aml-lw": "/assets/grounds/aml_lw.png",
  "aml-rb": "/assets/grounds/aml_rb.png",
  "aml-rw": "/assets/grounds/aml_rw.png",
  "aml-striker": "/assets/grounds/aml_st.png",

  "amr-aml": "/assets/grounds/amr_aml.png",
  "amr-cbl": "/assets/grounds/amr_cbl.png",
  "amr-cbr": "/assets/grounds/amr_cbr.png",
  "amr-cm": "/assets/grounds/amr_cm.png",
  "amr-gk": "/assets/grounds/amr_gk.png",
  "amr-lb": "/assets/grounds/amr_lb.png",
  "amr-lw": "/assets/grounds/amr_lw.png",
  "amr-rb": "/assets/grounds/amr_rb.png",
  "amr-rw": "/assets/grounds/amr_rw.png",
  "amr-striker": "/assets/grounds/amr_st.png",


  "cbl-aml": "/assets/grounds/cbl_aml.png",
  "cbl-amr": "/assets/grounds/cbl_amr.png",
  "cbl-cbr": "/assets/grounds/cbl_cbr.png",
  "cbl-cm": "/assets/grounds/cbl_cm.png",
  "cbl-gk": "/assets/grounds/cbl_gk.png",
  "cbl-lb": "/assets/grounds/cbl_lb.png",
  "cbl-lw": "/assets/grounds/cbl_lw.png",
  "cbl-rb": "/assets/grounds/cbl_rb.png",
  "cbl-rw": "/assets/grounds/cbl_rw.png",
  "cbl-striker": "/assets/grounds/cbl_st.png",


  "cbr-aml": "/assets/grounds/cbr_aml.png",
  "cbr-amr": "/assets/grounds/cbr_amr.png",
  "cbr-cbl": "/assets/grounds/cbr_cbl.png",
  "cbr-cm": "/assets/grounds/cbr_cm.png",
  "cbr-gk": "/assets/grounds/cbr_gk.png",
  "cbr-lb": "/assets/grounds/cbr_lb.png",
  "cbr-lw": "/assets/grounds/cbr_lw.png",
  "cbr-rb": "/assets/grounds/cbr_rb.png",
  "cbr-rw": "/assets/grounds/cbr_rw.png",
  "cbr-striker": "/assets/grounds/cbr_st.png",


  "cm-aml": "/assets/grounds/cm_aml.png",
  "cm-amr": "/assets/grounds/cm_amr.png",
  "cm-cbl": "/assets/grounds/cm_cbl.png",
  "cm-cbr": "/assets/grounds/cm_cbr.png",
  "cm-gk": "/assets/grounds/cm_gk.png",
  "cm-lb": "/assets/grounds/cm_lb.png",
  "cm-lw": "/assets/grounds/cm_lw.png",
  "cm-rb": "/assets/grounds/cm_rb.png",
  "cm-rw": "/assets/grounds/cm_rw.png",
  "cm-striker": "/assets/grounds/cm_st.png",



  "gk-aml": "/assets/grounds/gk_aml.png",
  "gk-amr": "/assets/grounds/gk_amr.png",
  "gk-cbl": "/assets/grounds/gk_cbl.png",
  "gk-cbr": "/assets/grounds/gk_cbr.png",
  "gk-cm": "/assets/grounds/gk_cm.png",
  "gk-lb": "/assets/grounds/gk_lb.png",
  "gk-lw": "/assets/grounds/gk_lw.png",
  "gk-rb": "/assets/grounds/gk_rb.png",
  "gk-rw": "/assets/grounds/gk_rw.png",
  "gk-striker": "/assets/grounds/gk_st.png",


  "lw-aml": "/assets/grounds/lw_aml.png",
  "lw-amr": "/assets/grounds/lw_amr.png",
  "lw-cbl": "/assets/grounds/lw_cbl.png",
  "lw-cbr": "/assets/grounds/lw_cbr.png",
  "lw-cm": "/assets/grounds/lw_cm.png",
  "lw-lb": "/assets/grounds/lw_lb.png",
  "lw-gk": "/assets/grounds/lw_gk.png",
  "lw-rb": "/assets/grounds/lw_rb.png",
  "lw-rw": "/assets/grounds/lw_rw.png",
  "lw-striker": "/assets/grounds/lw_st.png",



  "rb-aml": "/assets/grounds/rb_aml.png",
  "rb-amr": "/assets/grounds/rb_amr.png",
  "rb-cbl": "/assets/grounds/rb_cbl.png",
  "rb-cbr": "/assets/grounds/rb_cbr.png",
  "rb-cm": "/assets/grounds/rb_cm.png",
  "rb-lb": "/assets/grounds/rb_lb.png",
  "rb-gk": "/assets/grounds/rb_gk.png",
  "rb-lw": "/assets/grounds/rb_lw.png",
  "rb-rw": "/assets/grounds/rb_rw.png",
  "rb-striker": "/assets/grounds/rb_st.png",


  "rw-aml": "/assets/grounds/rw_aml.png",
  "rw-amr": "/assets/grounds/rw_amr.png",
  "rw-cbl": "/assets/grounds/rw_cbl.png",
  "rw-cbr": "/assets/grounds/rw_cbr.png",
  "rw-cm": "/assets/grounds/rw_cm.png",
  "rw-lb": "/assets/grounds/rw_lb.png",
  "rw-gk": "/assets/grounds/rw_gk.png",
  "rw-lw": "/assets/grounds/rw_lw.png",
  "rw-rb": "/assets/grounds/rw_rb.png",
  "rw-striker": "/assets/grounds/rw_st.png",

  "striker-aml": "/assets/grounds/st_aml.png",
  "striker-amr": "/assets/grounds/st_amr.png",
  "striker-cbl": "/assets/grounds/st_cbl.png",
  "striker-cbr": "/assets/grounds/st_cbr.png",
  "striker-cm": "/assets/grounds/st_cm.png",
  "striker-lb": "/assets/grounds/st_lb.png",
  "striker-gk": "/assets/grounds/st_gk.png",
  "striker-lw": "/assets/grounds/st_lw.png",
  "striker-rb": "/assets/grounds/st_rb.png",
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
      <div className="">
        <Image
          src={groundImage || "/assets/grounds/ground-field.png"}
          alt="ground field"
          width={1000}
          height={1000}
          className="w-full h-[150px] md:h-[200px] lg:h-[288px] object-contain"
        />
      </div>
    </div>
  )
}

export default GroundField

