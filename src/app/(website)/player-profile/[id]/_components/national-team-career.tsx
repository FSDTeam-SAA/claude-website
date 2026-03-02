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
      <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/pro_bg1.svg")] rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]'>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-10" />

        <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6 relative z-10">
          National Team Career
        </h3>

        {/* Responsive Wrapper */}
        <div className="w-full overflow-x-auto relative z-10">
          <Table className="w-full min-w-[1000px] table-fixed">
            
            {/* Table Header */}
            <TableHeader>
              <TableRow className="border-none">
                <TableHead className="w-1/5 text-lg md:text-xl font-normal text-primary whitespace-nowrap">
                  National Team
                </TableHead>
                <TableHead className="w-1/5 text-lg md:text-xl font-normal text-primary whitespace-nowrap">
                  Debut
                </TableHead>
                <TableHead className="w-1/5 text-lg md:text-xl font-normal text-primary whitespace-nowrap">
                  Category
                </TableHead>
                <TableHead className="w-1/5 text-lg md:text-xl font-normal text-primary whitespace-nowrap">
                  Match
                </TableHead>
                <TableHead className="w-1/5 text-lg md:text-xl font-normal text-primary whitespace-nowrap">
                  Goal
                </TableHead>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody>
              {personalInfo.map((info) => (
                <TableRow key={info?._id} className="border-white/10">
                  
                  {/* National Team */}
                  <TableCell className="w-1/5 py-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <Image
                        src={info?.flag || "/assets/images/no-flag.png"}
                        alt={info?.teamName || "team name"}
                        width={100}
                        height={100}
                        className="w-12 h-8 object-contain shrink-0"
                      />
                      <p className="text-base text-white leading-[150%] font-normal truncate">
                        {info?.teamName || "N/A"}
                      </p>
                    </div>
                  </TableCell>

                  {/* Debut */}
                  <TableCell className="w-1/5 text-base text-white py-3 whitespace-nowrap">
                    {info?.debut
                      ? moment(info.debut).format("DD/MM/YYYY")
                      : "N/A"}
                  </TableCell>

                  {/* Category */}
                  <TableCell className="w-1/5 text-base text-white py-3 whitespace-nowrap">
                    {info?.category || "N/A"}
                  </TableCell>

                  {/* Match */}
                  <TableCell className="w-1/5 text-base text-white py-3 whitespace-nowrap">
                    {info?.match ?? "N/A"}
                  </TableCell>

                  {/* Goal */}
                  <TableCell className="w-1/5 text-base text-white py-3 whitespace-nowrap">
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
















// "use client";

// import React from "react";
// import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
// import { UserProfile } from "./player-data-type";
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

// const NationalTeam = ({
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

//   const personalInfo = data?.national;

//   if (!personalInfo || personalInfo.length === 0) return null;

//   return (
//     <div className="pb-6">
//        <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/pro_bg1.svg")] rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]'>
//                  <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />
        
//         <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">
//           National Team Career
//         </h3>

//         {/* Responsive Wrapper */}
//         <div className="w-full overflow-x-auto">
//           <Table className="min-w-[1000px] ">
            
//             <TableHeader className="w-full">
//               <TableRow className="border-none">
//                 <TableHead className="text-lg md:text-xl font-normal text-primary leading-[120%] whitespace-nowrap">
//                   National Team
//                 </TableHead>
//                 <TableHead className="text-lg md:text-xl font-normal text-primary leading-[120%] whitespace-nowrap">
//                   Debut
//                 </TableHead>
//                 <TableHead className="text-lg md:text-xl font-normal text-primary leading-[120%] whitespace-nowrap">
//                   Category
//                 </TableHead>
//                 <TableHead className="text-lg md:text-xl font-normal text-primary leading-[120%] whitespace-nowrap">
//                   Match
//                 </TableHead>
//                 <TableHead className="text-lg md:text-xl font-normal text-primary leading-[120%] whitespace-nowrap">
//                   Goal
//                 </TableHead>
//               </TableRow>
//             </TableHeader>

//             <TableBody>
//               {personalInfo.map((info) => (
//                 <TableRow key={info?._id}>
                  
//                   {/* National Team */}
//                   <TableCell className="py-3 whitespace-nowrap">
//                     <div className="flex items-center gap-2">
//                       <Image
//                         src={info?.flag || "/assets/images/no-flag.png"}
//                         alt={info?.teamName || "team name"}
//                         width={100}
//                         height={100}
//                         className="w-12 h-8 object-contain"
//                       />
//                       <p className="text-base text-white leading-[150%] font-normal">
//                         {info?.teamName || "N/A"}
//                       </p>
//                     </div>
//                   </TableCell>

//                   {/* Debut */}
//                   <TableCell className="text-base text-white leading-[150%] font-normal py-3 whitespace-nowrap">
//                     {info?.debut
//                       ? moment(info.debut).format("DD/MM/YYYY")
//                       : "N/A"}
//                   </TableCell>

//                   {/* Category */}
//                   <TableCell className="text-base text-white leading-[150%] font-normal py-3 whitespace-nowrap">
//                     {info?.category || "N/A"}
//                   </TableCell>

//                   {/* Match */}
//                   <TableCell className="text-base text-white leading-[150%] font-normal py-3 whitespace-nowrap text-left">
//                     {info?.match ?? "N/A"}
//                   </TableCell>

//                   {/* Goal */}
//                   <TableCell className="text-base text-white leading-[150%] font-normal py-3 whitespace-nowrap">
//                     {info?.goals ?? "N/A"}
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

// export default NationalTeam;






