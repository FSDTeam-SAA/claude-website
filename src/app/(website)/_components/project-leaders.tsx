import React from 'react'
import Image from 'next/image'

const ProjectLeader = () => {
  const projectLeaders = [
    {
      id: 1,
      image: "/assets/partners/1.jpg",
    },
    {
      id: 2,
      image: "/assets/partners/2.jpg",
    },
      {
      id: 3,
      image: "/assets/partners/3.jpg",
    },
  ]
  return (
    <div className='bg_color py-8 md:py-14 lg:py-16'>
      <div className="container">
        <h3 className='text-2xl md:text-3xl lg:text-4xl text-primary font-normal h_underline leading-[120%] text-center'>Project Leaders</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 pt-5 md:pt-6 lg:pt-8">
          {projectLeaders?.map((item) => (
            <div
              key={item?.id}
              className="flex flex-col items-center justify-center "
            >
              <Image src={item?.image} alt="project leader" width={500} height={500} className="w-[150px] h-[200px] object-contain" />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ProjectLeader