"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PlayerEvaluationProgramContainer = () => {

  const session = useSession();
  const isLogin = session?.data?.user?.accessToken;


  // desktop version images for player evaluation program page
  const pepImages = [
    "/assets/images/pep/pep1.svg",
    "/assets/images/pep/pep2.svg",
    "/assets/images/pep/pep3.svg",
    "/assets/images/pep/pep4.svg",
    "/assets/images/pep/pep5.svg",
    "/assets/images/pep/pep6.svg",
    "/assets/images/pep/pep7.svg",
    "/assets/images/pep/pep8.svg",
    "/assets/images/pep/pep9.svg",
  ];

  // mobile version images for player evaluation program page
  const mobilePepImages = [
    "/assets/images/pep/sm_pep1.svg",
    "/assets/images/pep/sm_pep2.svg",
    "/assets/images/pep/sm_pep3.svg",
    "/assets/images/pep/sm_pep4.svg",
    "/assets/images/pep/sm_pep5.svg",
    "/assets/images/pep/sm_pep6.svg",
    "/assets/images/pep/sm_pep7.svg",
    "/assets/images/pep/sm_pep8.svg",
    "/assets/images/pep/sm_pep9.svg",
  ];

  return (
    <div className="bg-white py-6 md:py-8 lg:py-14 xl:py-20">
      <div className="container">
        <div className="flex flex-col gap-6 md:gap-10">
          {pepImages.map((img, index) => (
            <React.Fragment key={index}>
              <div className="relative overflow-hidden bg-white px-4 md:px-0">
                <Image
                  src={mobilePepImages[index]}
                  alt={`PEP Image ${index + 1}`}
                  width={685}
                  height={1215}
                  className="h-auto w-full object-contain md:hidden"
                  priority={index === 0}
                />
                <Image
                  src={img}
                  alt={`PEP Image ${index + 1}`}
                  width={1400}
                  height={900}
                  className="hidden h-auto w-full object-contain md:block"
                  priority={index === 0}
                />
                {/* For the first image, overlay the Book Now button on the left */}
                {index === 0 && (
                  <div className="absolute left-[10%] top-[91%] md:top-[88%] -translate-y-1/2 md:left-[18%] lg:left-[20%]">
                    <Link
                      href={`${isLogin ? "/prices#player-evaluation-program" : "/sign-up"}`}
                      className="h-8 md:h-12 inline-flex min-w-[140px] items-center justify-center rounded-full bg-primary px-6  text-sm font-semibold text-black transition-opacity hover:opacity-90 md:min-w-[180px] md:px-8 py-1 md:py-2 lg:py-3 md:text-base"
                    >
                      Book Now
                    </Link>
                  </div>
                )}
                {/* For the last image, overlay the Book Now button further down on the left */}
                {index === pepImages.length - 1 && (
                  <div className="absolute left-[10%] top-[91%] md:top-[88%] -translate-y-1/2 md:left-[24%] lg:left-[30%] ">
                    <Link
                      href={`${isLogin ? "/prices#player-evaluation-program" : "/sign-up"}`}
                      className="h-8 md:h-12 inline-flex min-w-[140px] items-center justify-center rounded-full bg-primary px-6  text-sm font-semibold text-black transition-opacity hover:opacity-90 md:min-w-[180px] md:px-8 py-1 md:py-2 lg:py-3 md:text-base"
                    >
                      Book Now
                    </Link>
                  </div>
                )}
              </div>

            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerEvaluationProgramContainer;
