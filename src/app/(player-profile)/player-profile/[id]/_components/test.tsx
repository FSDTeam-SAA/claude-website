// import React from "react";
// import { UserProfile } from "./player-data-type";
// import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
// import CommonSkeleton from "./common-skeleton";

// const DistributionGkStats = ({
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

//   const personalInfo = data?.gkDistributionStats;

//   if (!personalInfo) return null;

//   const getStatItems = (
//     info: NonNullable<UserProfile["gkDistributionStats"]>[number],
//   ) => [
//     { label: "Key Passes", value: info?.keyPasses },
//     { label: "Medium Range Passes", value: info?.mediumRangePasses },
//     { label: "Passes", value: info?.passes },
//     { label: "Short Passes", value: info?.shortPasses },
//     { label: "Passes in Final Third", value: info?.passesInFinalThird },
//     { label: "Passes Forward", value: info?.passesForward },
//     { label: "Passes in Middle Third", value: info?.passesInMiddleThird },
//     { label: "Passes Sideways", value: info?.passesSideways },
//     { label: "Passes in Defensive Third", value: info?.passesInDefensiveThird },
//     { label: "Passes Received", value: info?.passesReceived },
//     { label: "Long Passes", value: info?.longPasses },
//   ];

//   return (
//     <div className="">
//       <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/profile_bg.svg")] rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]'>
//         <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />
//         <h3 className="text-2xl md:text-3xl xl:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">
//           Distribution Stats
//         </h3>
//         <div>
//           {personalInfo.map((info) => {
//             const statItems = getStatItems(info);

//             return (
//               <ul
//                 key={info?._id}
//                 className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-2 lg:grid-cols-3 md:gap-4"
//               >
//                 {statItems.map((item) => (
//                   <li
//                     key={item.label}
//                     className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2"
//                   >
//                     <span className="text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%] break-words">
//                       {item.label}
//                     </span>
//                     <span className="text-lg md:text-xl text-white font-semibold leading-[120%] break-words">
//                       {item.value || "N/A"}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DistributionGkStats;



// import React from "react";
// import { UserProfile } from "./player-data-type";
// import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
// import CommonSkeleton from "./common-skeleton";
// import { parseCookies } from "nookies";

// const COOKIE_NAME = "googtrans";

// const DefensiveStats = ({
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
//   const cookie = parseCookies()[COOKIE_NAME];
//   const lang = cookie?.split("/")?.[2] || "en";

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

//   const personalInfo = data?.defensive;

//   if (!personalInfo) return null;

//   const getStatItems = (info: NonNullable<UserProfile["defensive"]>[number]) => [
//     {
//       label:
//         lang === "fr"
//           ? "Tacles"
//           : lang === "es"
//             ? "Intentos de entrada"
//             : "Tackle Attempts",
//       value: info?.tackleAttempts,
//     },
//     {
//       label:
//         lang === "fr"
//           ? "Tacles réussis: possession"
//           : lang === "es"
//             ? "Entrada exitosa: con posesión"
//             : "Tackle Succeeded: Possession",
//       value: info?.tackleSucceededPossession,
//     },
//     {
//       label:
//         lang === "fr"
//           ? "Tacles réussis : aucune possession"
//           : lang === "es"
//             ? "Entrada exitosa: sin posesión"
//             : "Tackle Succeeded : No Possession",
//       value: info?.tackleSucceededNOPossession,
//     },
//     {
//       label:
//         lang === "fr"
//           ? "Tacles ratés"
//           : lang === "es"
//             ? "Entrada fallida"
//             : "Tackle Failed",
//       value: info?.tackleFailed,
//     },
//     {
//       label:
//         lang === "fr"
//           ? "Ballons Récupérés"
//           : lang === "es"
//             ? "Balones recuperados"
//             : "Turnover Won",
//       value: info?.turnoverwon,
//     },
//     {
//       label:
//         lang === "fr"
//           ? "Interceptions"
//           : lang === "es"
//             ? "Intercepciones"
//             : "Interceptions",
//       value: info?.interceptions,
//     },
//     {
//       label:
//         lang === "fr"
//           ? "Récupérations"
//           : lang === "es"
//             ? "Recuperaciones"
//             : "Recoveries",
//       value: info?.recoveries,
//     },
//     {
//       label:
//         lang === "fr"
//           ? "Dégagement"
//           : lang === "es"
//             ? "Despejes"
//             : "Clearance",
//       value: info?.clearance,
//     },
//     {
//       label:
//         lang === "fr"
//           ? "Tirs Bloqués"
//           : lang === "es"
//             ? "Bloqueos totales"
//             : "Total Blocked",
//       value: info?.totalBlocked,
//     },
//     {
//       label:
//         lang === "fr"
//           ? "Tirs bloqués"
//           : lang === "es"
//             ? "Disparos bloqueados"
//             : "Shot Blocked",
//       value: info?.shotBlocked,
//     },
//     {
//       label:
//         lang === "fr"
//           ? "Centres Bloqués"
//           : lang === "es"
//             ? "Centros bloqueados"
//             : "Cross Blocked",
//       value: info?.crossBlocked,
//     },
//     {
//       label:
//         lang === "fr"
//           ? "Erreurs"
//           : lang === "es"
//             ? "Errores"
//             : "Mistakes",
//       value: info?.mistakes,
//     },
//     {
//       label:
//         lang === "fr"
//           ? "Duels aériens"
//           : lang === "es"
//             ? "Duelos aéreos"
//             : "Aerial Duels",
//       value: info?.aerialDuels,
//     },
//     {
//       label:
//         lang === "fr"
//           ? "Duels physiques"
//           : lang === "es"
//             ? "Duelos físicos"
//             : "Physical Duels",
//       value: info?.phvsicalDuels,
//     },
//     {
//       label:
//         lang === "fr"
//           ? "Buts contre son camp"
//           : lang === "es"
//             ? "Goles en propia puerta"
//             : "Own Goals",
//       value: info?.ownGoals,
//     },
//   ];

//   return (
//     <div className="pb-6">
//       <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/profile_bg.svg")] rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]'>
//         <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />
//         <h3 className="text-2xl md:text-3xl xl:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6 notranslate">
//           {lang === "fr"
//             ? "Statistiques défensives"
//             : lang === "es"
//               ? "Estadísticas en defensa"
//               : "Defensive Stats"}
//         </h3>
//         <div>
//           {personalInfo?.map((info) => {
//             const statItems = getStatItems(info);

//             return (
//               <ul
//                 key={info?._id}
//                 className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-2 lg:grid-cols-3 md:gap-4"
//               >
//                 {statItems.map((item) => (
//                   <li
//                     key={item.label}
//                     className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2"
//                   >
//                     <span className="text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%] notranslate">
//                       {item.label}
//                     </span>
//                     <span className="text-lg md:text-xl text-white font-semibold leading-[120%] break-words">
//                       {item.value || "N/A"}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DefensiveStats;



// import React from "react";
// import { UserProfile } from "./player-data-type";
// import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
// import CommonSkeleton from "./common-skeleton";

// const GkStats = ({
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

//   const personalInfo = data?.gkstats;

//   if (!personalInfo) return null;
//   return (
//     <div className="pb-6">
//       <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/profile_bg.svg")] rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]'>
//         <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />
//         <h3 className="text-2xl md:text-3xl xl:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">
//           GK Stats
//         </h3>
//         <div>
//           {personalInfo?.map((info) => {
//             return (
//               <ul
//                 key={info?._id}
//                 className="grid grid-cols-1 md:gris-cols-2 lg:grid-cols-4 gap-6"
//               >
//                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                   <span className="text-base font-normal text-primary leading-[150%]">
//                     Goals Conceded
//                   </span>{" "}
//                   <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                     {info?.goalsConceded || "N/A"}
//                   </span>
//                 </li>
//                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                   <span className="text-base font-normal text-primary leading-[150%]">
//                     Penalty kitk Save
//                   </span>{" "}
//                   <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                     {info?.penaltKitkSave || "N/A"}
//                   </span>
//                 </li>
//                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                   <span className="text-base font-normal text-primary leading-[150%]">
//                     Saves
//                   </span>{" "}
//                   <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                     {info?.saves || "N/A"}
//                   </span>
//                 </li>
//                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                   <span className="text-base font-normal text-primary leading-[150%]">
//                     Aerial Control
//                   </span>{" "}
//                   <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                     {info?.aerialControl || "N/A"}
//                   </span>
//                 </li>
//                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                   <span className="text-base font-normal text-primary leading-[150%]">
//                     Catches
//                   </span>{" "}
//                   <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                     {info?.catches || "N/A"}
//                   </span>
//                 </li>
//                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                   <span className="text-base font-normal text-primary leading-[150%]">
//                     Defensive Line Support
//                   </span>{" "}
//                   <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                     {info?.deFensiveLineSupport || "N/A"}
//                   </span>
//                 </li>
//                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                   <span className="text-base font-normal text-primary leading-[150%]">
//                     Parries
//                   </span>{" "}
//                   <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                     {info?.parries || "N/A"}
//                   </span>
//                 </li>
//               </ul>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GkStats;



