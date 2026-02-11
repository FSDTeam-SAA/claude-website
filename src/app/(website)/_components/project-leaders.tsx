import React from 'react'
import Image from 'next/image'

const ProjectLeader = () => {
  const projectLeaders = [
    {
      id: 1,
      image: "/assets/partners/partner1.svg",
    },
    {
      id: 2,
      image: "/assets/partners/partner2.svg",
    },
      {
      id: 3,
      image: "/assets/partners/partner3.svg",
    },
  ]
  return (
    <div className='bg_color py-10 md:py-16 lg:py-20'>
      <div className="container">
        <h3 className='text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] text-center'>Project Leaders</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-6 md:pt-8 lg:pt-10">
          {projectLeaders?.map((item) => (
            <div
              key={item?.id}
              className="flex flex-col items-center justify-center"
            >
              <Image src={item?.image} alt="project leader" width={500} height={500} className="w-[150px] h-[250px] object-contain" />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ProjectLeader