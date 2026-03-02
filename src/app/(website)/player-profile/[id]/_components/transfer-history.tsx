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

const TransferHistory = ({ data, isLoading, error, isError }: Props) => {
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
      <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/pro_bg1.svg")] rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]'>
        
        <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-10" />

        <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary pb-6 relative z-10">
          Transfer History
        </h3>

        <div className="w-full overflow-x-auto relative z-10">
          <Table className="w-full table-fixed">

            {/* 🔥 THIS GUARANTEES EQUAL WIDTH */}
            <colgroup>
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
            </colgroup>

            <TableHeader>
              <TableRow className="border-none">
                <TableHead className="text-left text-lg md:text-xl text-primary whitespace-nowrap">
                  Season
                </TableHead>
                <TableHead className="text-center text-lg md:text-xl text-primary whitespace-nowrap">
                  Date
                </TableHead>
                <TableHead className="text-center text-lg md:text-xl text-primary whitespace-nowrap">
                  Left
                </TableHead>
                <TableHead className="text-center text-lg md:text-xl text-primary whitespace-nowrap">
                  Joined
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {transferHistory.map((info) => (
                <TableRow key={info?._id} className="border-none">

                  <TableCell className="text-left text-sm md:text-base text-white py-4 whitespace-nowrap">
                    {info?.season || "N/A"}
                  </TableCell>

                  <TableCell className="text-center text-sm md:text-base text-white py-4 whitespace-nowrap">
                    {info?.date
                      ? moment(info.date).format("DD/MM/YYYY")
                      : "N/A"}
                  </TableCell>

                  <TableCell className="py-4">
                    <div className="flex items-center justify-center gap-2 min-w-0">
                      <Image
                        src={info?.leftClub || "/assets/images/no-flag.png"}
                        alt=""
                        width={32}
                        height={32}
                        className="w-8 h-8 object-contain shrink-0"
                      />
                      <Image
                        src={info?.leftCountery || "/assets/images/no-flag.png"}
                        alt=""
                        width={32}
                        height={32}
                        className="w-8 h-8 object-contain shrink-0"
                      />
                      <p className="text-sm md:text-base text-white truncate">
                        {info?.leftClubName || "N/A"}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell className="py-4">
                    <div className="flex items-center justify-center gap-2 min-w-0">
                      <Image
                        src={info?.joinedClub || "/assets/images/no-flag.png"}
                        alt=""
                        width={32}
                        height={32}
                        className="w-8 h-8 object-contain shrink-0"
                      />
                      <Image
                        src={info?.joinedCountery || "/assets/images/no-flag.png"}
                        alt=""
                        width={32}
                        height={32}
                        className="w-8 h-8 object-contain shrink-0"
                      />
                      <p className="text-sm md:text-base text-white truncate">
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














// "use client";

// import React from "react";
// import { UserProfile } from "./player-data-type";
// import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import moment from "moment";
// import Image from "next/image";
// import CommonSkeleton from "./common-skeleton";

// type Props = {
//   data?: UserProfile;
//   isLoading: boolean;
//   error: unknown;
//   isError: boolean;
// };

// const TransferHistory = ({
//   data,
//   isLoading,
//   error,
//   isError,
// }: Props) => {
//   if (isLoading) {
//     return (
//       <div className="pb-0">
//         <CommonSkeleton />
//       </div>
//     );
//   }

//   if (isError) {
//     const message =
//       error instanceof Error ? error.message : "Something went wrong!";
//     return (
//       <div className="pb-8">
//         <ErrorContainer message={message} />
//       </div>
//     );
//   }

//   const transferHistory = data?.transferHistory;

//   if (!transferHistory || transferHistory.length === 0) return null;

//   return (
//     <div className="pb-6">
//        <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/pro_bg1.svg")] rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]'>
//                  <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />
        
//         <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">
//           Transfer History
//         </h3>

//         {/* Responsive Wrapper */}
//         <div className="w-full overflow-x-auto">
//           <Table className="min-w-[900px]">
            
//             <TableHeader className="">
//               <TableRow className="border-none ">
//                 <TableHead className="text-lg md:text-xl font-normal text-primary leading-[120%] text-left whitespace-nowrap">
//                   Season
//                 </TableHead>
//                 <TableHead className="text-lg md:text-xl font-normal text-primary leading-[120%] text-center whitespace-nowrap">
//                   Date
//                 </TableHead>
//                 <TableHead className="text-lg md:text-xl font-normal text-primary leading-[120%] text-center whitespace-nowrap">
//                   Left
//                 </TableHead>
//                 <TableHead className="text-lg md:text-xl font-normal text-primary leading-[120%] text-left whitespace-nowrap">
//                   Joined
//                 </TableHead>
//               </TableRow>
//             </TableHeader>

//             <TableBody>
//               {transferHistory.map((info) => (
//                 <TableRow key={info?._id} className="border-none ">
                  
//                   <TableCell className="text-sm md:text-base text-white leading-[150%] font-normal text-left py-3 whitespace-nowrap">
//                     {info?.season || "N/A"}
//                   </TableCell>

//                   <TableCell className="text-sm md:text-base text-white leading-[150%] font-normal text-center py-3 whitespace-nowrap">
//                     {info?.date
//                       ? moment(info.date).format("DD/MM/YYYY")
//                       : "N/A"}
//                   </TableCell>

//                   <TableCell className="py-3 pr-8 md:pr-0 ">
//                     <div className="flex items-center justify-center gap-3 md:gap-2 whitespace-nowrap">
//                       <Image
//                         src={info?.leftClub || "/assets/images/no-flag.png"}
//                         alt={info?.leftClubName || "team name"}
//                         width={100}
//                         height={100}
//                         className="w-8 h-8 object-contain"
//                       />
//                       <Image
//                         src={info?.leftCountery || "/assets/images/no-flag.png"}
//                         alt={info?.leftClubName || "team name"}
//                         width={100}
//                         height={100}
//                         className="w-8 h-8 object-contain"
//                       />
//                       <p className="text-sm md:text-base text-white leading-[150%] font-normal">
//                         {info?.leftClubName || "N/A"}
//                       </p>
//                     </div>
//                   </TableCell>

//                   <TableCell className="py-3">
//                     <div className="flex items-center justify-left gap-3 md:gap-2 whitespace-nowrap">
//                       <Image
//                         src={info?.joinedClub || "/assets/images/no-flag.png"}
//                         alt={info?.joinedclubName || "team name"}
//                         width={100}
//                         height={100}
//                         className="w-8 h-8 object-contain"
//                       />
//                       <Image
//                         src={info?.joinedCountery || "/assets/images/no-flag.png"}
//                         alt={info?.joinedclubName || "team name"}
//                         width={100}
//                         height={100}
//                         className="w-8 h-8 object-contain"
//                       />
//                       <p className="text-sm md:text-base text-white leading-[150%] font-normal">
//                         {info?.joinedclubName || "N/A"}
//                       </p>
//                     </div>
//                   </TableCell>

//                 </TableRow>
//               ))}
//             </TableBody>

//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TransferHistory;















