
import Image from "next/image";
import React from "react";

const HowOurAnalytics = () => {

  const missionData = [
    {
      id : 1,
      img: "/assets/images/home_page/hoa1.svg",
      title: "",
      desc:""
    },
    {
      id : 2,
      img: "/assets/images/home_page/hoa2.svg",
     title: "",
      desc:""
    },
    {
      id : 3,
      img: "/assets/images/home_page/hoa3.svg",
      title: "",
      desc:""
    }

  ]
  return (
    <div className="relative container bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat h-[800px] md:h-[800px] rounded-[50px] w-auto mt-6 md:mt-8 lg:mt-10 xl:mt-12">
      <div className="absolute left-[8%] top-[48%] md:top-[50%] -translate-y-1/2 md:left-[12%] lg:left-[15%]">
        <div className="">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-normal text-primary">
          How Our Analytics Process Works
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-7 lg:gap-8 pt-10 md:pt-16 lg:pt-20">
        {
          missionData?.map((item)=>{
            return <div key={item?.id} className="bg-white rounded-[12px] border-[4px] border-primary p-4 md:p-5">
              <Image src={item?.img} alt={item?.title} width={1000} height={1000} className="w-[145px] md:w-[180px] h-[160px] object-contain mx-auto"/>
                <p className="text-center text-sm md:text-base font-medium text-[#131313] mt-3">{item?.title}</p>
            </div>
          })
        }
      </div>
      </div>
    </div>
  );
};

export default HowOurAnalytics;
