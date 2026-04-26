"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Subscription, SubscriptionApiResponse } from "./subscription-data-type";
import { useSession } from "next-auth/react";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import { CircleCheckBig } from "lucide-react";
import RegisterAsDevelopmentPlanForm from "./register-as-development-plan-form";
import TeamPricingSkeleton from "./team-pricing-skeleton";

const DevelopmentPlan = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPage = 1;
  const type = "Development";
  const [subscriptionId, setSubscriptionId] = useState<string | null>(null);
  const [selectedSubscription, setSelectedSubscription] = useState<Subscription | null>(null);
  const session = useSession();
  const token = (session?.data?.user as { accessToken: string })?.accessToken;

  const { data, isLoading, error, isError } = useQuery<SubscriptionApiResponse>(
    {
      queryKey: ["subscription-all", currentPage, type],
      queryFn: async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/subscription?paymentType=${type}&sortOrder=asc&page=${currentPage}&limit=20`,
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

//   const subscriptionData = data?.data?.filter(
//     (item) => item?.paymentType === "Development",
//   );

const subscriptionData = data?.data;

  // console.log(subscriptionData)

  if (isLoading) {
    return (
      <div className="container py-6">
        <TeamPricingSkeleton />
      </div>
    );
  }

  if (isError) {
    const message =
      error instanceof Error ? error.message : "Something went wrong!";
    return (
      <div className="pb-8">
        <ErrorContainer message={message} />
      </div>
    );
  }

  return (
    // <div className="bg-[#EBEBEB] py-10 md:py-16 lg:py-24">
    <div className="bg_color py-7 md:py-16 lg:py-24">
      <div className="container ">
        <h3 className="text-2xl md:text-3xl lg:text-[40px] text-primary h_underline leading-[120%] font-normal text-center">
          Development Plan
        </h3>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 md:pt-9 lg:pt-12">
          {subscriptionData?.map((item) => {
            return (
              <div
                key={item?._id}
                className="w-full border-[1.5px] border-primary rounded-[16px]"
              >
                <div className="h-[120px] bg-primary rounded-t-[14px] py-4 md:py-6 lg:py-8">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-normal text-white leading-[120%] text-center ">
                    {item?.title} 
                  </h4>
                  <p className=" text-base md:text-lg  font-normal text-white leading-[120%] text-center ">
                    {item?.description || ""}
                  </p>
                </div>
                <div className="pt-5 pb-5 md:pb-6 px-6 md:px-7 lg:px-8">
                  <h5 className="text-2xl md:text-3xl lg:text-4xl text-[#131313] text-center leading-[120%] font-bold pb-2">
                    ${item?.price}
                  </h5>
                  <ul className="min-h-[74px]">
                    {item?.features?.map((feature, index) => (
                      <li key={index} className="flex items-center justify-start gap-2 py-1">
                        <CircleCheckBig className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-[#131313]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      setIsOpen(true);
                      setSubscriptionId(item?._id);
                      setSelectedSubscription(item);
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

      {/* modal open  */}
      {isOpen && subscriptionId && (
        <RegisterAsDevelopmentPlanForm
          open={isOpen}
          onOpenChange={setIsOpen}
          subscriptionId={subscriptionId}
          subscriptionTitle={selectedSubscription?.title}
          subscriptionPrice={selectedSubscription?.price}
          subscriptionPaymentType={selectedSubscription?.paymentType}
        />
      )}
    </div>
  );
};

export default DevelopmentPlan;
