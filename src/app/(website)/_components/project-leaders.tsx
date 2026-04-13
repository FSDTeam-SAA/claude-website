import React from 'react'
import Image from 'next/image'

const ProjectLeader = () => {
  const projectLeaders = [
    {
      id: 1,
      image: "/assets/partners/1.svg",
    },
    {
      id: 2,
      image: "/assets/partners/2.svg",
    },
      {
      id: 3,
      image: "/assets/partners/3.svg",
    },
  ]
  return (
    <div id="about-us" className='bg-white py-8 md:py-14 lg:py-16'>
      <div className="container">
        <h3 className='text-2xl md:text-4xl lg:text-6xl text-primary font-normal h_underline leading-[120%] text-center'>Project Leaders</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 pt-2 md:pt-6 lg:pt-10 xl:pt-24">
          {projectLeaders?.map((item) => (
            <div
              key={item?.id}
              className="flex flex-col items-center justify-center "
            >
              <Image src={item?.image} alt="project leader" width={500} height={500} className="w-[200px] h-[260px] object-cover" />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ProjectLeader