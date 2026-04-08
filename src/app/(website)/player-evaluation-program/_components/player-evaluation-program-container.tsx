"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PlayerEvaluationProgramContainer = () => {

  const session = useSession();
    const isLogin = session?.data?.user?.accessToken;


  const pepImages = [
    "/assets/images/pep/pep1.svg",
    "/assets/images/pep/pep2.svg",
    "/assets/images/pep/pep3.svg",
    "/assets/images/pep/pep4.svg",
    "/assets/images/pep/pep5.svg",
    "/assets/images/pep/pep6.svg",
    "/assets/images/pep/pep7.svg",
    "/assets/images/pep/pep8.svg",
  ];

  const BookNowButton = () => (

    
    <div className="flex justify-center py-6 md:py-10 lg:py-12">
      <Link
        href={`${isLogin ? "/prices" : "/sign-up"}`}
        className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-black transition-opacity hover:opacity-90"
      >
        Book Now
      </Link>
    </div>
  );

  return (
    <div className="bg-white py-6 md:py-8 lg:py-14 xl:py-20">
      <div className="container">
        <div className="flex flex-col gap-6 md:gap-10">
          {pepImages.map((img, index) => (
            <React.Fragment key={index}>
              <div className="relative overflow-hidden bg-white">
                <Image
                  src={img}
                  alt={`PEP Image ${index + 1}`}
                  width={1400}
                  height={900}
                  className="h-auto w-full object-contain"
                  priority={index === 0}
                />
                {/* For the first image, overlay the Book Now button on the left */}
                {index === 0 && (
                  <div className="absolute left-[10%] top-[82%] -translate-y-1/2 md:left-[18%] lg:left-[20%]">
                    <Link
                      href={`${isLogin ? "/prices" : "/sign-up"}`}
                      className="inline-flex min-w-[140px] items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90 md:min-w-[180px] md:px-8 md:py-3 md:text-base"
                    >
                      Book Now
                    </Link>
                  </div>
                )}
              </div>
              {/* After the last image (index 7), show the button at the bottom/center */}
              {index === pepImages.length - 1 && <BookNowButton />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerEvaluationProgramContainer;
