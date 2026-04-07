import React from "react";
import { UserProfile } from "./player-data-type";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import CommonSkeleton from "./common-skeleton";
import { parseCookies } from "nookies";

const COOKIE_NAME = "googtrans";

const AttackingStats = ({
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
  const cookie = parseCookies()[COOKIE_NAME];
  const lang = cookie?.split("/")?.[2] || "en";

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

  const personalInfo = data?.attacking;

  if (!personalInfo) return null;

  const getStatItems = (info: NonNullable<UserProfile["attacking"]>[number]) => [
    {
      label: lang === "fr" ? "Buts" : lang === "es" ? "Goles" : "Goals",
      value: info?.goals,
    },
    {
      label:
        lang === "fr"
          ? "Passes decisives"
          : lang === "es"
            ? "Asistencias"
            : "Assists",
      value: info?.assists,
    },
    {
      label:
        lang === "fr"
          ? "Tirs a l'interieur des 18m"
          : lang === "es"
            ? "Disparos dentro del area"
            : "Shots inside PA",
      value: info?.shotsNsidePr,
    },
    {
      label:
        lang === "fr"
          ? "Tirs en dehors des 18m"
          : lang === "es"
            ? "Disparos fuera del area"
            : "Shots outside PA",
      value: info?.shotsOutsidePa,
    },
    {
      label:
        lang === "fr"
          ? "Nombre total de tirs"
          : lang === "es"
            ? "Disparos totales"
            : "Total Shots",
      value: info?.totalShots,
    },
    {
      label:
        lang === "fr"
          ? "Tirs cadres"
          : lang === "es"
            ? "Disparos a puerta"
            : "Shots on Target",
      value: info?.shotsOnTarget,
    },
    {
      label:
        lang === "fr"
          ? "Precision de tir"
          : lang === "es"
            ? "Precision de tiro"
            : "Shooting Accuracy",
      value: info?.shootingAccuracy,
    },
    {
      label:
        lang === "fr"
          ? "Tirs non cadres"
          : lang === "es"
            ? "Disparos fuera"
            : "Shots off Target",
      value: info?.shotsOffTarget,
    },
    {
      label:
        lang === "fr"
          ? "Precision des passes"
          : lang === "es"
            ? "Precision de pase"
            : "Passes Accuracy",
      value: info?.passesAccuracy,
    },
    {
      label:
        lang === "fr"
          ? "Duels"
          : lang === "es"
            ? "Regates / uno contra uno"
            : "Take-on",
      value: info?.takeOn,
    },
  ];

  return (
    <div className="pb-6">
      <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/profile_bg.svg")] rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]'>
        <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6 notranslate">
          {lang === "fr"
            ? "Statistiques d'attaque"
            : lang === "es"
              ? "Estadisticas de Ataque"
              : "Attacking Stats"}
        </h3>
        <div>
          {personalInfo.map((info) => {
            const statItems = getStatItems(info);

            return (
              <ul
                key={info?._id}
                className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-2 lg:grid-cols-3 md:gap-4"
              >
                {statItems.map((item) => (
                  <li
                    key={item.label}
                    className="flex flex-col gap-1 md:grid md:grid-cols-1 md:gap-2"
                  >
                    <span className="text-base font-semibold uppercase tracking-[0.04em] text-primary leading-[140%] break-words notranslate">
                      {item.label}
                    </span>
                    <span className="text-lg md:text-xl text-white font-semibold leading-[120%] break-words">
                      {item.value || "N/A"}
                    </span>
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AttackingStats;





// import React from "react";
// import { UserProfile } from "./player-data-type";
// import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
// import CommonSkeleton from "./common-skeleton";
// import { parseCookies } from "nookies";

// const COOKIE_NAME = "googtrans";

// const AttackingStats = ({
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

//   const personalInfo = data?.attacking;

//   if (!personalInfo) return null;
//   return (
//     <div className="pb-6">
//       <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/profile_bg.svg")] rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]'>
//         <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />
//         <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6 notranslate">
//           {lang === "fr"
//             ? "Statistiques d'attaque"
//             : lang === "es"
//               ? "Estadísticas de Ataque"
//               : "Attacking Stats"}
//         </h3>
//         <div>
//           {personalInfo?.map((info) => {
//             return (
//               <ul
//                 key={info?._id}
//                 className="grid grid-cols-1 md:gris-cols-2 lg:grid-cols-5 gap-6"
//               >
//                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                   <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                     {lang === "fr" ? "Buts" : lang === "es" ? "Goles" : "Goals"}
//                   </span>{" "}
//                   <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                     {info?.goals || "N/A"}
//                   </span>
//                 </li>
//                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                   <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                     {lang === "fr"
//                       ? "Passes décisives"
//                       : lang === "es"
//                         ? "Asistencias"
//                         : "Assists"}
//                   </span>{" "}
//                   <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                     {info?.assists || "N/A"}
//                   </span>
//                 </li>
//                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                   <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                     {lang === "fr"
//                       ? "Tirs à l'intérieur des 18m"
//                       : lang === "es"
//                         ? "Disparos dentro del área"
//                         : "Shots inside PA"}
//                   </span>{" "}
//                   <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                     {info?.shotsNsidePr || "N/A"}
//                   </span>
//                 </li>
//                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                   <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                     {lang === "fr"
//                       ? "Tirs en dehors des 18m"
//                       : lang === "es"
//                         ? "Disparos fuera del área"
//                         : "Shots outside PA"}
//                   </span>{" "}
//                   <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                     {info?.shotsOutsidePa || "N/A"}
//                   </span>
//                 </li>
//                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                   <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                     {lang === "fr"
//                       ? "Nombre total de tirs"
//                       : lang === "es"
//                         ? "Disparos totales"
//                         : "Total Shots"}
//                   </span>{" "}
//                   <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                     {info?.totalShots || "N/A"}
//                   </span>
//                 </li>

//                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                   <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                     {lang === "fr"
//                       ? "Tirs cadrés"
//                       : lang === "es"
//                         ? "Disparos a puerta"
//                         : "Shots on Target"}
//                   </span>{" "}
//                   <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                     {info?.shotsOnTarget || "N/A"}
//                   </span>
//                 </li>
//                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                   <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                     {lang === "fr"
//                       ? "Précision de tir"
//                       : lang === "es"
//                         ? "Precisión de tiro"
//                         : "Shooting Accuracy"}
//                   </span>{" "}
//                   <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                     {info?.shootingAccuracy || "N/A"}
//                   </span>
//                 </li>
//                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                   <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                     {lang === "fr"
//                       ? "Tirs non cadrés"
//                       : lang === "es"
//                         ? "Disparos fuera"
//                         : "Shots off Target"}
//                   </span>{" "}
//                   <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                     {info?.shotsOffTarget || "N/A"}
//                   </span>
//                 </li>
//                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                   <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                     {/* Passes Accuracy */}
//                     {lang === "fr"
//                       ? "Précision des passes"
//                       : lang === "es"
//                         ? "Precisión de pase"
//                         : "Passes Accuracy"}
//                   </span>{" "}
//                   <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                     {info?.passesAccuracy || "N/A"}
//                   </span>
//                 </li>
//                 <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                   <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                     {lang === "fr"
//                       ? "Duels"
//                       : lang === "es"
//                         ? "Regates / uno contra uno"
//                         : "Take-on"}
//                   </span>{" "}
//                   <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                     {info?.takeOn || "N/A"}
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

// export default AttackingStats;