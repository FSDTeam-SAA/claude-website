"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const PlayerEvaluationProgramContainer = () => {
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

  return (
    <div className="py-6 md:py-8 lg:py-14 xl:py-20">
      <div className="container">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {pepImages.map((img, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="overflow-hidden">
                  <Image
                    src={img}
                    alt={`PEP Image ${index + 1}`}
                    width={1400}
                    height={900}
                    className="h-[28vh] min-h-[240px] w-full object-contain md:h-[58vh] lg:h-[62vh]"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center pt-6 md:pt-10 lg:pt-12 pb-6">
          <Link
            href="#"
            className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-black transition-opacity hover:opacity-90"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlayerEvaluationProgramContainer;
