"use client";

import React from "react";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import { UserProfile } from "./player-data-type";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";
import Image from "next/image";
import CommonSkeleton from "./common-skeleton";

type Props = {
  data?: UserProfile;
  isLoading: boolean;
  error: unknown;
  isError: boolean;
};

const NationalTeam = ({
  data,
  isLoading,
  error,
  isError,
}: Props) => {
  if (isLoading) {
    return (
      <div className="pb-0">
        <CommonSkeleton />
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

  const personalInfo = data?.national;

  if (!personalInfo || personalInfo.length === 0) return null;

  return (
    <div className="pb-6">
      <div className="container bg-white rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]">
        
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">
          National Team Career
        </h3>

        {/* Responsive Wrapper */}
        <div className="w-full overflow-x-auto">
          <Table className="min-w-[1000px]">
            
            <TableHeader>
              <TableRow>
                <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%] whitespace-nowrap">
                  National Team
                </TableHead>
                <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%] whitespace-nowrap">
                  Debut
                </TableHead>
                <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%] whitespace-nowrap">
                  Category
                </TableHead>
                <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%] whitespace-nowrap">
                  Match
                </TableHead>
                <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%] whitespace-nowrap">
                  Goal
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {personalInfo.map((info) => (
                <TableRow key={info?._id}>
                  
                  {/* National Team */}
                  <TableCell className="py-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Image
                        src={info?.flag || "/assets/images/no-flag.png"}
                        alt={info?.teamName || "team name"}
                        width={100}
                        height={100}
                        className="w-12 h-8 object-contain"
                      />
                      <p className="text-base text-[#131313] leading-[150%] font-normal">
                        {info?.teamName || "N/A"}
                      </p>
                    </div>
                  </TableCell>

                  {/* Debut */}
                  <TableCell className="text-base text-[#131313] leading-[150%] font-normal py-3 whitespace-nowrap">
                    {info?.debut
                      ? moment(info.debut).format("DD/MM/YYYY")
                      : "N/A"}
                  </TableCell>

                  {/* Category */}
                  <TableCell className="text-base text-[#131313] leading-[150%] font-normal py-3 whitespace-nowrap">
                    {info?.category || "N/A"}
                  </TableCell>

                  {/* Match */}
                  <TableCell className="text-base text-[#131313] leading-[150%] font-normal py-3 whitespace-nowrap text-left">
                    {info?.match ?? "N/A"}
                  </TableCell>

                  {/* Goal */}
                  <TableCell className="text-base text-[#131313] leading-[150%] font-normal py-3 whitespace-nowrap">
                    {info?.goals ?? "N/A"}
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>

          </Table>
        </div>

      </div>
    </div>
  );
};

export default NationalTeam;















// import React from 'react'
// import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';
// import { UserProfile } from './player-data-type';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table"
// import moment from 'moment';
// import Image from 'next/image';
// import CommonSkeleton from './common-skeleton';

// const NationalTeam = ({
//     data,
//     isLoading,
//     error,
//     isError,
// }: {
//     data?: UserProfile
//     isLoading: boolean
//     error: unknown
//     isError: boolean
// }) => {

//     if (isLoading) {
//         return <div className="pb-0">
//             <CommonSkeleton />
//         </div>
//     }

//     if (isError) {
//         const message =
//             error instanceof Error ? error.message : "Something went wrong!";
//         return <div className="pb-8">
//             <ErrorContainer message={message} />
//         </div>
//     }

//     const personalInfo = data?.national;

//     if (!personalInfo) return null;
//     return (
//         <div className='pb-6'>
//             <div className="container bg-white rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]">
//                 <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">National Team Career</h3>
//                 <div>
//                     <Table>
//                         <TableHeader>
//                             <TableRow className="w-full flex items-center justify-between gap-6 md:gap-2">
//                                 <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%]">National Team</TableHead>
//                                 <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%]">Debut</TableHead>
//                                 <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%]">Category</TableHead>
//                                 <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%]">Match</TableHead>
//                                 <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%]">Goal</TableHead>
//                             </TableRow>
//                         </TableHeader>
//                         <TableBody>
//                             {
//                                 personalInfo?.map((info) => {
//                                     return <TableRow key={info?._id} className="w-full flex items-center justify-between gap-6 md:gap-2">

//                                         <TableCell className="flex items-center gap-2">
//                                             <Image src={info?.flag || "/assets/images/no-flag.png"} alt={info?.teamName || "team name"} width={100} height={100} className="w-12 h-8 object-contain" />
//                                             <p className="text-base text-[#131313] leading-[150%] font-normal py-3">{info?.teamName || "N/A"}</p>
//                                         </TableCell>
//                                         <TableCell className="text-base text-[#131313] leading-[150%] font-normal py-3">{moment(info?.debut).format("DD/MM/YYYY")}</TableCell>
//                                         <TableCell className="text-base text-[#131313] leading-[150%] font-normal py-3 ">{info?.category || "N/A"}</TableCell>
//                                         <TableCell className="text-base text-[#131313] leading-[150%] font-normal py-3 text-left">{info?.match || "N/A"}</TableCell>
//                                         <TableCell className="text-base text-[#131313] leading-[150%] font-normal py-3">{info?.goals || "N/A"}</TableCell>
//                                     </TableRow>
//                                 }
//                                 )}


//                         </TableBody>
//                     </Table>

//                 </div>

//             </div>
//         </div>
//     )
// }

// export default NationalTeam