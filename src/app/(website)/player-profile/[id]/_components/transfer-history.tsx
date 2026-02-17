"use client";

import React from "react";
import { UserProfile } from "./player-data-type";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
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

const TransferHistory = ({
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

  const transferHistory = data?.transferHistory;

  if (!transferHistory || transferHistory.length === 0) return null;

  return (
    <div className="pb-6">
      <div className="container bg-white rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]">
        
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">
          Transfer History
        </h3>

        {/* Responsive Wrapper */}
        <div className="w-full overflow-x-auto">
          <Table className="min-w-[900px]">
            
            <TableHeader>
              <TableRow>
                <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%] text-left whitespace-nowrap">
                  Season
                </TableHead>
                <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%] text-left whitespace-nowrap">
                  Date
                </TableHead>
                <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%] text-left whitespace-nowrap">
                  Left
                </TableHead>
                <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%] text-left whitespace-nowrap">
                  Joined
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {transferHistory.map((info) => (
                <TableRow key={info?._id}>
                  
                  <TableCell className="text-sm md:text-base text-[#131313] leading-[150%] font-normal py-3 whitespace-nowrap">
                    {info?.season || "N/A"}
                  </TableCell>

                  <TableCell className="text-sm md:text-base text-[#131313] leading-[150%] font-normal py-3 whitespace-nowrap">
                    {info?.date
                      ? moment(info.date).format("DD/MM/YYYY")
                      : "N/A"}
                  </TableCell>

                  <TableCell className="py-3 pr-8 md:pr-0">
                    <div className="flex items-center gap-3 md:gap-2 whitespace-nowrap">
                      <Image
                        src={info?.leftClub || "/assets/images/no-flag.png"}
                        alt={info?.leftClubName || "team name"}
                        width={100}
                        height={100}
                        className="w-8 h-8 object-contain"
                      />
                      <Image
                        src={info?.leftCountery || "/assets/images/no-flag.png"}
                        alt={info?.leftClubName || "team name"}
                        width={100}
                        height={100}
                        className="w-8 h-8 object-contain"
                      />
                      <p className="text-sm md:text-base text-[#131313] leading-[150%] font-normal">
                        {info?.leftClubName || "N/A"}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell className="py-3">
                    <div className="flex items-center gap-3 md:gap-2 whitespace-nowrap">
                      <Image
                        src={info?.joinedClub || "/assets/images/no-flag.png"}
                        alt={info?.joinedclubName || "team name"}
                        width={100}
                        height={100}
                        className="w-8 h-8 object-contain"
                      />
                      <Image
                        src={info?.joinedCountery || "/assets/images/no-flag.png"}
                        alt={info?.joinedclubName || "team name"}
                        width={100}
                        height={100}
                        className="w-8 h-8 object-contain"
                      />
                      <p className="text-sm md:text-base text-[#131313] leading-[150%] font-normal">
                        {info?.joinedclubName || "N/A"}
                      </p>
                    </div>
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

export default TransferHistory;




















// import React from 'react'
// import { UserProfile } from './player-data-type';
// import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';
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

// const TransferHistory = ({
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

//     const personalInfo = data?.transferHistory;

//     if (!personalInfo) return null;
//     return (
//         <div className='pb-6'>
//             <div className="container bg-white rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]">
//                 <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">Transfer History</h3>
//                 <div>
//                     <Table>
//                         <TableHeader>
//                             <TableRow className="w-full flex items-center justify-between gap-6 md:gap-2">
//                                 <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%] text-left">Season</TableHead>
//                                 <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%] text-left">Date</TableHead>
//                                 <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%] text-left">Left</TableHead>
//                                 <TableHead className="text-lg md:text-xl font-normal text-[#131313] leading-[120%] text-left">Joined</TableHead>
//                             </TableRow>
//                         </TableHeader>
//                         <TableBody>
//                             {
//                                 personalInfo?.map((info) => {
//                                     return <TableRow key={info?._id} className="w-full flex items-center justify-between gap-6 md:gap-2">

//                                          <TableCell className="text-sm md:text-base text-[#131313] leading-[150%] font-normal py-3">{info?.season || "N/A"}</TableCell>
//                                         <TableCell className="text-sm md:text-base text-[#131313] leading-[150%] font-normal py-3">{moment(info?.date).format("DD/MM/YYYY")}</TableCell>
                                       

//                                         <TableCell className="py-3 pr-8 md:pr-0 ">
//                                         <div className="flex items-center gap-3 md:gap-2">
//                                             <Image src={info?.leftClub || "/assets/images/no-flag.png"} alt={info?.leftClubName || "team name"} width={100} height={100} className="w-8 h-8 object-contain" />
//                                             <Image src={info?.leftCountery || "/assets/images/no-flag.png"} alt={info?.leftClubName || "team name"} width={100} height={100} className="w-8 h-8 object-contain" />
//                                             <p className="text-sm md:text-base text-[#131313] leading-[150%] font-normal py-3">{info?.leftClubName || "N/A"}</p>
//                                             </div>
//                                         </TableCell>
//                                           <TableCell className="py-3">
//                                           <div className="flex items-center justify-start gap-3 md:gap-2">
//                                             <Image src={info?.joinedClub || "/assets/images/no-flag.png"} alt={info?.joinedclubName || "team name"} width={100} height={100} className="w-8 h-8 object-contain" />
//                                             <Image src={info?.joinedCountery || "/assets/images/no-flag.png"} alt={info?.joinedclubName || "team name"} width={100} height={100} className="w-8 h-8 object-contain" />
//                                             <p className="text-sm md:text-base text-[#131313] leading-[150%] font-normal py-3">{info?.joinedclubName || "N/A"}</p>
//                                             </div>
//                                         </TableCell>
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

// export default TransferHistory