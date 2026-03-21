
"use client";

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const HeroSection = () => {
  const { data: session } = useSession();
  const isLogin = !!session?.user?.accessToken;

  return (
    <section className="relative h-[470px] md:h-screen w-full overflow-hidden">
      {/* Desktop video */}
      <video
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        src="/assets/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Mobile video */}
      <video
        className="absolute inset-0 block h-full w-full object-contain object-top md:hidden"
        src="/assets/videos/new_phone_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end justify-center px-4 pb-20 sm:pb-24 md:pb-20 lg:pb-32">
        <Link href={isLogin ? "/prices" : "/sign-up"}>
          <button className="flex h-[44px] items-center justify-center rounded-full bg-primary px-5 text-sm font-medium leading-[120%] whitespace-nowrap text-white transition-all duration-200 ease-in-out md:h-[50px] md:px-6 md:text-base lg:h-[56px] lg:text-lg">
            Get Your Player Report
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;






















// "use client"


// import React from "react";
// import Link from "next/link";
// import { useSession } from "next-auth/react";

// const HeroSection = () => {
//   const session = useSession();
//   const isLogin = session?.data?.user?.accessToken
//   return (
//     <div>
//       <div className="relative min-h-[calc(100vh)] flex items-center justify-center overflow-hidden">
//         {/* large device  */}
//         <video
//           className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
//           src="/assets/videos/hero.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//         />

//         {/* small device  */}
//         <video
//           // className="block md:hidden absolute top-0 left-0 w-full h-full object-cover "
//           className="block md:hidden absolute inset-0 h-full w-full object-cover object-[60%_center]"
//           src="/assets/videos/new_phone_video.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//         <div className="absolute inset-0 bg-black/40" />

//         <Link
//           href={`${isLogin ? "/prices" : "/sign-up"}`}
//           className="absolute bottom-24 md:bottom-20 lg:bottom-32 left-1/2 -translate-x-1/2"
//         >
//           <button className="w-full md:w-auto h-[40px] md:h-[50px] lg:h-[56px] bg-primary ease-in-out duration-200 transition-all py-3 px-5 md:px-6 rounded-full text-sm md:text-base lg:text-lg font-medium leading-[120%] text-whhite whitespace-nowrap">
//             Get Your Player Report
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
