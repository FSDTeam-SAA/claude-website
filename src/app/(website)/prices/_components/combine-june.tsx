"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SubscriptionApiResponse } from "./subscription-data-type";
import { useSession } from "next-auth/react";
import IndividualPricingSkeleton from "./individual-pricing-skeleton";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import { CircleCheckBig } from "lucide-react";
import RegisterAsCombineJuneForm from "./register-as-combine-june-form";

const CombineJune = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPage = 1;
  const [subscriptionId, setSubscriptionId] = useState<string | null>(null);
  const session = useSession();
  const token = (session?.data?.user as { accessToken: string })?.accessToken;

  const { data, isLoading, error, isError } = useQuery<SubscriptionApiResponse>(
    {
      queryKey: ["subscription-all", currentPage],
      queryFn: async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/subscription?page=${currentPage}&limit=20`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        return res.json();
      },
    },
  );

  // console.log(data)

  const subscriptionData = data?.data?.filter(
    (item) => item?.paymentType === "Combine_2026",
  );

  // console.log(subscriptionData)

  if (isLoading) {
    return (
      <div id="combine-june" className="scroll-mt-28 bg_color py-7 md:py-16 lg:py-24">
        <div className="container py-6">
          <IndividualPricingSkeleton />
        </div>
      </div>
    );
  }

  if (isError) {
    const message =
      error instanceof Error ? error.message : "Something went wrong!";
    return (
      <div id="combine-june" className="bg_color py-7 md:py-16 lg:py-24">
        <div className="pb-8">
          <ErrorContainer message={message} />
        </div>
      </div>
    );
  }

  return (
    // <div className="bg-[#EBEBEB] py-10 md:py-16 lg:py-24">
    <div id="combine-june" className="scroll-mt-28 bg_color py-7 md:py-16 lg:py-24">
      <div className="container ">
        <h3 className="text-2xl md:text-3xl lg:text-[40px] text-primary h_underline leading-[120%] font-normal text-center">
        Combine June 6/7 - 2026
        </h3>

        <div className="w-full flex items-center justify-center ">
          <div className="w-full md:w-1/3 gap-6 pt-2 md:pt-9 lg:pt-12 ">
            {subscriptionData?.map((item) => {
              return (
                <div
                  key={item?._id}
                  className="w-full border-[1.5px] border-primary rounded-[16px]"
                >
                  <div className="bg-primary rounded-t-[14px] py-4 md:py-6 lg:py-8">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-normal text-white leading-[120%] text-center ">
                      {item?.title}
                    </h4>
                    {/* <p className=" text-base md:text-lg  font-normal text-white leading-[120%] text-center ">
                      {item?.evaluationLimit || 0} Evaluations / Year
                    </p> */}
                  </div>
                  <div className="pt-5 pb-5 md:pb-6 px-6 md:px-7 lg:px-8">
                    <h5 className="text-2xl md:text-3xl lg:text-4xl text-[#131313] text-center leading-[120%] font-bold pb-2">
                      ${item?.price}
                    </h5>
                    <ul>
                      {item?.features?.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-start gap-2 py-1"
                        >
                          <CircleCheckBig className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-[#131313]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => {
                        setIsOpen(true);
                        setSubscriptionId(item?._id);
                      }}
                      className="w-full h-[51px] bg-[#424242] rounded-[8px] text-base text-white leading-[120%] font-medium mt-4"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* modal open  */}
      {isOpen && subscriptionId && (
        <RegisterAsCombineJuneForm
          open={isOpen}
          onOpenChange={setIsOpen}
          subscriptionId={subscriptionId}
        />
      )}
    </div>
  );
};

export default CombineJune;
