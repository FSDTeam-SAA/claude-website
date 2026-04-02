import Image from "next/image";
import moment from "moment";
import React from "react";

import RatingCard from "./rating-card";
import PlayerInfoSkeleton from "./profile-info-skeleton";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import { UserProfile } from "./player-data-type";
import ProfileFollow from "./profile-follow";
import SocialShareContent from "@/components/ui/social-share-content";

const PlayerInfo = ({
  data,
  isLoading,
  error,
  isError,
}: {
  data?: UserProfile;
  isLoading: boolean;
  error: unknown;
  isError: boolean;
}) => {
  if (isLoading) {
    return (
      <div className="pb-8">
        <PlayerInfoSkeleton />
      </div>
    );
  }

  if (isError) {
    const message =
      error instanceof Error ? error.message : "Something went wrong!";
    return (
      <div className="py-8">
        <ErrorContainer message={message} />
      </div>
    );
  }

  const personalInfo = data?.user;
  console.log(data);

  if (!personalInfo) return null;

  const averageRatings = data?.avarageRatting;

  return (
    <div className="py-6">
      <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/sm_profile_info.jpeg")] md:bg-[url("/assets/profiles/profile_bg.svg")] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 rounded-[16px] p-4 md:p-6 shadow-[0px_4px_24px_0px_#00000014]'>
        <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />

        {/* Left side - unchanged */}
        <div className="md:col-span-1 w-full flex flex-col justify-center items-center">
          <Image
            src={personalInfo?.profileImage || "/assets/images/no-user.jpg"}
            alt={personalInfo?.firstName || "profile image"}
            width={1000}
            height={1000}
            className="w-[200px] h-[200px] object-cover rounded-full border border-white/50 shadow"
          />

          <p className="text-base md:text-lg lg:text-xl font-semibold text-white pt-2 leading-[150%] text-center">
            {personalInfo?.firstName} {personalInfo?.lastName}
          </p>

          <div>
            <div className="flex flex-col gap-4 p-4 mt-2 border border-white/50 rounded-[12px] shadow">
              <SocialShareContent postId={personalInfo?._id} />
              <ProfileFollow
                id={personalInfo?._id}
                followers={personalInfo?.followers}
              />
            </div>
          </div>
        </div>

        {/* Center info section - mobile only changed */}
        <div className="md:col-span-3">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
            <li className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2">
              <span className="text-[11px] md:text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%]">
                Nationality
              </span>
              <span className="text-[15px] md:text-xl text-white font-semibold leading-[120%] capitalize break-words">
                {personalInfo?.nationality || "N/A"}
              </span>
            </li>

            <li className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2">
              <span className="text-[11px] md:text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%]">
                Place of Birth
              </span>
              <span className="text-[15px] md:text-xl text-white font-semibold leading-[120%] capitalize break-words">
                {personalInfo?.birthdayPlace || "N/A"}
              </span>
            </li>

            <li className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2">
              <span className="text-[11px] md:text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%]">
                Age
              </span>
              <span className="text-[15px] md:text-xl text-white font-semibold leading-[120%] break-words">
                {personalInfo?.dob
                  ? `${moment(personalInfo.dob).format("DD MMM YYYY")} (${personalInfo.age || 0})`
                  : "N/A"}
              </span>
            </li>

            <li className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2">
              <span className="text-[11px] md:text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%]">
                Gender
              </span>
              <span className="text-[15px] md:text-xl text-white font-semibold leading-[120%] capitalize break-words">
                {personalInfo?.gender || "N/A"}
              </span>
            </li>

            <li className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2">
              <span className="text-[11px] md:text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%]">
                Citizenship
              </span>
              <span className="text-[15px] md:text-xl text-white font-semibold leading-[120%] capitalize break-words">
                {personalInfo?.citizenship || "N/A"}
              </span>
            </li>

            <li className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2">
              <span className="text-[11px] md:text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%]">
                Weight
              </span>
              <span className="text-[15px] md:text-xl text-white font-semibold leading-[120%] break-words">
                {personalInfo?.weight || "N/A"}
              </span>
            </li>

            <li className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2">
              <span className="text-[11px] md:text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%]">
                Height
              </span>
              <span className="text-[15px] md:text-xl text-white font-semibold leading-[120%] break-words">
                {personalInfo?.hight || "N/A"}
              </span>
            </li>

            <li className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2">
              <span className="text-[11px] md:text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%]">
                League
              </span>
              <span className="text-[15px] md:text-xl text-white font-semibold leading-[120%] uppercase break-words">
                {personalInfo?.league || "N/A"}
              </span>
            </li>

            <li className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2">
              <span className="text-[11px] md:text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%]">
                Preferred Foot
              </span>
              <span className="text-[15px] md:text-xl text-white font-semibold leading-[120%] capitalize break-words">
                {personalInfo?.foot || "N/A"}
              </span>
            </li>

            <li className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2">
              <span className="text-[11px] md:text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%]">
                Category
              </span>
              <span className="text-[15px] md:text-xl text-white font-semibold leading-[120%] break-words">
                {personalInfo?.category || "N/A"}
              </span>
            </li>

            <li className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2">
              <span className="text-[11px] md:text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%]">
                Position
              </span>
              <span className="text-[15px] md:text-xl text-white font-semibold leading-[120%] break-words">
                {personalInfo?.position
                  ?.map((p) => p.toUpperCase())
                  .join("-") || "N/A"}
              </span>
            </li>

            <li className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2">
              <span className="text-[11px] md:text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%]">
                Current Club
              </span>
              <span className="text-[15px] md:text-xl text-white font-semibold leading-[120%] break-words">
                {personalInfo?.currentClub || "N/A"}
              </span>
            </li>

            <li className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2">
              <span className="text-[11px] md:text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%]">
                Agent
              </span>
              <span className="text-[15px] md:text-xl text-white font-semibold leading-[120%] capitalize break-words">
                {personalInfo?.agent || "N/A"}
              </span>
            </li>

            <li className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2">
              <span className="text-[11px] md:text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%]">
                School Name
              </span>
              <span className="text-[15px] md:text-xl text-white font-semibold leading-[120%] break-words">
                {personalInfo?.schoolName || "N/A"}
              </span>
            </li>

            <li className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2">
              <span className="text-[11px] md:text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%]">
                GPA
              </span>
              <span className="text-[15px] md:text-xl text-white font-semibold leading-[120%] break-words">
                {personalInfo?.gpa || "N/A"}
              </span>
            </li>

            <li className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2">
              <span className="text-[11px] md:text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%]">
                Jersey Number
              </span>
              <span className="text-[15px] md:text-xl text-white font-semibold leading-[120%] break-words">
                {personalInfo?.jerseyNumber || "N/A"}
              </span>
            </li>

            <li className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2">
              <span className="text-[11px] md:text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%]">
                Social Media
              </span>

              {personalInfo?.socialMedia &&
              personalInfo.socialMedia.length > 0 ? (
                <div className="flex flex-col gap-1">
                  {personalInfo.socialMedia.map((item, index) => (
                    <a
                      key={item._id || index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] md:text-xl text-white font-semibold leading-[120%] hover:underline break-words"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              ) : (
                <span className="text-[15px] md:text-xl text-white font-semibold leading-[120%]">
                  N/A
                </span>
              )}
            </li>

            <li className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2">
              <span className="text-[11px] md:text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%]">
                Followers
              </span>
              <span className="text-[15px] md:text-xl text-white font-semibold leading-[120%] break-words">
                {personalInfo?.followers?.length || "N/A"}
              </span>
            </li>
          </ul>
        </div>

        {/* Right side - unchanged */}
        <div className="md:col-span-1">
          <RatingCard
            averageRating={averageRatings?.averageRating ?? 0}
            totalGames={averageRatings?.gamesNumber ?? 0}
            stars={averageRatings?.stars ?? 0}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;









// import Image from "next/image";
// import moment from "moment";
// import React from "react";

// import RatingCard from "./rating-card";
// import PlayerInfoSkeleton from "./profile-info-skeleton";
// import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
// import { UserProfile } from "./player-data-type";
// import ProfileFollow from "./profile-follow";
// import SocialShareContent from "@/components/ui/social-share-content";

// const PlayerInfo = ({
//   data,
//   isLoading,
//   error,
//   isError,
// }: {
//   data?: UserProfile;
//   isLoading: boolean;
//   error: unknown;
//   isError: boolean;
// }) => {
//   if (isLoading) {
//     return (
//       <div className="pb-8">
//         <PlayerInfoSkeleton />
//       </div>
//     );
//   }

//   if (isError) {
//     const message =
//       error instanceof Error ? error.message : "Something went wrong!";
//     return (
//       <div className="py-8">
//         <ErrorContainer message={message} />
//       </div>
//     );
//   }

//   const personalInfo = data?.user;
//   console.log(data);

//   if (!personalInfo) return null;

//   const averageRatings = data?.avarageRatting;

//   return (
//     <div className="py-6  ">
//       {/* new  */}
//       <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/sm_profile_info.jpeg")] md:bg-[url("/assets/profiles/profile_bg.svg")]  grid grid-cols-1 md:gris-cols-2 lg:grid-cols-5 gap-6 rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014] '>
//         <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />
//         <div className="md:col-span-1 w-full flex flex-col justify-center items-center ">
//           <Image
//             src={personalInfo?.profileImage || "/assets/images/no-user.jpg"}
//             alt={personalInfo?.firstName || "profile image"}
//             width={1000}
//             height={1000}
//             className="w-[200px] h-[200px] object-cover rounded-full border border-white/50 shadow"
//           />

//           <p className="text-base md:text-lg lg:text-xl font-semibold text-white pt-2 leading-[150%]">
//             {personalInfo?.firstName} {personalInfo?.lastName}
//           </p>

//           <div>
//             <div className="flex flex-col gap-4 p-4 mt-2 border border-white/50 rounded-[12px] shadow">
//               <SocialShareContent postId={personalInfo?._id} />
//               <ProfileFollow
//                 id={personalInfo?._id}
//                 followers={personalInfo?.followers}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="md:col-span-3">
//           <ul className="grid gris-cols-1 md:gris-cols-2 lg:grid-cols-3 gap-4">
//             <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//               <span className="text-base font-normal text-primary leading-[150%]">
//                 Nationality
//               </span>{" "}
//               <span className="text-lg md:text-xl text-white font-normal leading-[120%] capitalize">
//                 {personalInfo?.nationality || "N/A"}
//               </span>
//             </li>
//             <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//               <span className="text-base font-normal text-primary leading-[150%]">
//                 Place of birth
//               </span>{" "}
//               <span className="text-lg md:text-xl text-white font-normal leading-[120%] capitalize">
//                 {personalInfo?.birthdayPlace || "N/A"}
//               </span>
//             </li>
//             <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//               <span className="text-base font-normal text-primary leading-[150%]">
//                 Age
//               </span>
//               <span className="text-lg md:text-xl text-white font-normal leading-[120%]">
//                 {personalInfo?.dob
//                   ? `${moment(personalInfo.dob).format("DD MMM YYYY")} (${personalInfo.age || 0})`
//                   : "N/A"}
//               </span>
//             </li>

//             <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//               <span className="text-base font-normal text-primary leading-[150%]">
//                 Gender
//               </span>{" "}
//               <span className="text-lg md:text-xl text-white font-normal leading-[120%] capitalize">
//                 {personalInfo?.gender || "N/A"}
//               </span>
//             </li>

//             <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//               <span className="text-base font-normal text-primary leading-[150%]">
//                 Citizenship
//               </span>{" "}
//               <span className="text-lg md:text-xl text-white font-normal leading-[120%] capitalize">
//                 {personalInfo?.citizenship || "N/A"}
//               </span>
//             </li>
//             <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//               <span className="text-base font-normal text-primary leading-[150%]">
//                 Weight
//               </span>{" "}
//               <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                 {personalInfo?.weight || "N/A"}
//               </span>
//             </li>

//             <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//               <span className="text-base font-normal text-primary leading-[150%]">
//                 Height
//               </span>{" "}
//               <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                 {personalInfo?.hight || "N/A"}
//               </span>
//             </li>

//             <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//               <span className="text-base font-normal text-primary leading-[150%]">
//                 League
//               </span>{" "}
//               <span className="text-lg md:text-xl text-white font-normal leading-[120%] uppercase">
//                 {personalInfo?.league || "N/A"}
//               </span>
//             </li>

//             <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//               <span className="text-base font-normal text-primary leading-[150%]">
//                 Preferred Foot
//               </span>{" "}
//               <span className="text-lg md:text-xl text-white font-normal leading-[120%] capitalize">
//                 {personalInfo?.foot || "N/A"}
//               </span>
//             </li>

//             <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//               <span className="text-base font-normal text-primary leading-[150%]">
//                 Category
//               </span>{" "}
//               <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                 {personalInfo?.category || "N/A"}
//               </span>
//             </li>
//             <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//               <span className="text-base font-normal text-primary leading-[150%]">
//                 Position
//               </span>{" "}
//               <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                 {personalInfo?.position
//                   ?.map((p) => p.toUpperCase())
//                   .join("-") || "N/A"}
//               </span>
//             </li>

//             <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//               <span className="text-base font-normal text-primary leading-[150%]">
//                 Current Club
//               </span>{" "}
//               <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                 {personalInfo?.currentClub || "N/A"}
//               </span>
//             </li>

//             <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//               <span className="text-base font-normal text-primary leading-[150%]">
//                 Agent
//               </span>{" "}
//               <span className="text-lg md:text-xl text-white font-normal leading-[120%] capitalize">
//                 {personalInfo?.agent || "N/A"}
//               </span>
//             </li>

//             <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//               <span className="text-base font-normal text-primary leading-[150%]">
//                 School Name
//               </span>{" "}
//               <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                 {personalInfo?.schoolName || "N/A"}
//               </span>
//             </li>

//             <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//               <span className="text-base font-normal text-primary leading-[150%]">
//                 GPA
//               </span>{" "}
//               <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                 {personalInfo?.gpa || "N/A"}
//               </span>
//             </li>

//             <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//               <span className="text-base font-normal text-primary leading-[150%]">
//                 Jersey Number
//               </span>{" "}
//               <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                 {personalInfo?.jerseyNumber || "N/A"}
//               </span>
//             </li>

//             <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//               <span className="text-base font-normal text-primary leading-[150%]">
//                 Social Media
//               </span>

//               {personalInfo?.socialMedia &&
//               personalInfo.socialMedia.length > 0 ? (
//                 <div className="flex flex-col gap-1">
//                   {personalInfo.socialMedia.map((item, index) => (
//                     <a
//                       key={item._id || index}
//                       href={item.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-lg md:text-xl text-white font-normal leading-[120%] hover:underline"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//               ) : (
//                 <span className="text-lg md:text-xl text-white font-normal leading-[120%]">
//                   N/A
//                 </span>
//               )}
//             </li>

//             <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//               <span className="text-base font-normal text-primary leading-[150%]">
//                 Followers
//               </span>{" "}
//               <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                 {personalInfo?.followers?.length || "N/A"}
//               </span>
//             </li>
//           </ul>
//         </div>
//         <div className="md:col-span-1">
//           <RatingCard
//             averageRating={averageRatings?.averageRating ?? 0}
//             totalGames={averageRatings?.gamesNumber ?? 0}
//             stars={averageRatings?.stars ?? 0}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlayerInfo;
