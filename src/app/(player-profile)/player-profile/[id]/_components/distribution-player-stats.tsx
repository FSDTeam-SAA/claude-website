import React from "react";
import { UserProfile } from "./player-data-type";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import CommonSkeleton from "./common-skeleton";
import { parseCookies } from "nookies";

const COOKIE_NAME = "googtrans";

const DistributionPlayerStats = ({
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

  const personalInfo = data?.distribution;

  if (!personalInfo) return null;

  const getStatItems = (info: NonNullable<UserProfile["distribution"]>[number]) => [
    {
      label:
        lang === "fr"
          ? "Passes"
          : lang === "es"
            ? "Pases"
            : "Passes",
      value: info?.passes,
    },
    {
      label:
        lang === "fr"
          ? "Passes en zone offensive"
          : lang === "es"
            ? "Pases en el ultimo tercio"
            : "Passes in Final Third",
      value: info?.passesinFinalThird,
    },
    {
      label:
        lang === "fr"
          ? "Passes au milieu du terrain"
          : lang === "es"
            ? "Pases en el tercio medio"
            : "Passes in Middle Third",
      value: info?.passesinMiddleThird,
    },
    {
      label:
        lang === "fr"
          ? "Passes dans la zone defensive"
          : lang === "es"
            ? "Pases en el tercio defensivo"
            : "Passes in Defensive Third",
      value: info?.passesinOerensiveThird,
    },
    {
      label:
        lang === "fr"
          ? "Passes cles"
          : lang === "es"
            ? "Pases clave"
            : "Key Passes",
      value: info?.kevPasses,
    },
    {
      label:
        lang === "fr"
          ? "Longues passes"
          : lang === "es"
            ? "Pases largos"
            : "Long Passes",
      value: info?.longPasses,
    },
    {
      label:
        lang === "fr"
          ? "Passes moyennes"
          : lang === "es"
            ? "Pases medios"
            : "Medium Passes",
      value: info?.mediumPasses,
    },
    {
      label:
        lang === "fr"
          ? "Passes courtes"
          : lang === "es"
            ? "Pases cortos"
            : "Short Passes",
      value: info?.shortPasses,
    },
    {
      label:
        lang === "fr"
          ? "Passes vers l'avant"
          : lang === "es"
            ? "Pases hacia adelante"
            : "Passes Forward",
      value: info?.passesForward,
    },
    {
      label:
        lang === "fr"
          ? "Passes laterales"
          : lang === "es"
            ? "Pases laterales"
            : "Passes Sideways",
      value: info?.passesSidewavs,
    },
    {
      label:
        lang === "fr"
          ? "Passes en arriere"
          : lang === "es"
            ? "Pases hacia atras"
            : "Passes Backward",
      value: info?.passesBackward,
    },
    {
      label:
        lang === "fr"
          ? "Passes recues"
          : lang === "es"
            ? "Pases recibidos"
            : "Passes Receive",
      value: info?.passesReceived,
    },
    {
      label:
        lang === "fr"
          ? "Centres"
          : lang === "es"
            ? "Centros"
            : "Crosses",
      value: info?.crosses,
    },
    {
      label:
        lang === "fr"
          ? "Interventions"
          : lang === "es"
            ? "Entrada ofensiva / incursion"
            : "Step-in",
      value: info?.stepIn,
    },
    {
      label:
        lang === "fr"
          ? "Ballons perdus"
          : lang === "es"
            ? "Perdidas de balon"
            : "Turnover Conceded",
      value: info?.turnoverConceded,
    },
    {
      label:
        lang === "fr"
          ? "A qui donnez-vous le plus le ballon ?"
          : lang === "es"
            ? "A quien le pasas mas el balon?"
            : "Who do you pass the ball to the most",
      value: info?.passTheMost,
    },
    {
      label:
        lang === "fr"
          ? "Qui vous passe le plus le ballon ?"
          : lang === "es"
            ? "Quien te pasa mas el balon?"
            : "Who pass the ball to you the most",
      value: info?.ballTheMost,
    },
  ];

  return (
    <div className="">
      <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/profile_bg.svg")] rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]'>
        <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6 notranslate">
          {lang === "fr"
            ? "Statistiques de distribution"
            : lang === "es"
              ? "Estadisticas de distribucion"
              : "Distribution Stats"}
        </h3>
        <div>
          {personalInfo.map((info) => {
            const statItems = getStatItems(info);

            return (
              <div key={info?._id}>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DistributionPlayerStats;





// import React from "react";
// import { UserProfile } from "./player-data-type";
// import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
// import CommonSkeleton from "./common-skeleton";
// import { parseCookies } from "nookies";

// const COOKIE_NAME = "googtrans";

// const DistributionPlayerStats = ({
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

//   const personalInfo = data?.distribution;

//   if (!personalInfo) return null;

//   return (
//     <div className="">
//       <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/profile_bg.svg")] rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]'>
//         <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />
//         <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6 notranslate">
//           {lang === "fr"
//             ? "Statistiques de distribution"
//             : lang === "es"
//               ? "Estadísticas de distribución"
//               : "Distribution Stats"}
//         </h3>
//         <div>
//           {personalInfo?.map((info) => {
//             return (
//               <div key={info?._id}>
//                 <ul className="grid grid-cols-1 md:gris-cols-2 lg:grid-cols-4 gap-6">
//                   <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                     <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                       {lang === "fr"
//                         ? "Passes"
//                         : lang === "es"
//                           ? "Pases"
//                           : "Passes"}
//                     </span>{" "}
//                     <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                       {info?.passes || "N/A"}
//                     </span>
//                   </li>
//                   <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                     <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                       {lang === "fr"
//                         ? "Passes en zone offensive"
//                         : lang === "es"
//                           ? "Pases en el último tercio"
//                           : "Passes in Final Third"}
//                     </span>{" "}
//                     <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                       {info?.passesinFinalThird || "N/A"}
//                     </span>
//                   </li>
//                   <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                     <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                       {lang === "fr"
//                         ? "Passes au milieu du terrain"
//                         : lang === "es"
//                           ? "Pases en el tercio medio"
//                           : "Passes in Middle Third"}
//                     </span>{" "}
//                     <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                       {info?.passesinMiddleThird || "N/A"}
//                     </span>
//                   </li>
//                   <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                     <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                       {lang === "fr"
//                         ? "Passes dans la zone défensive"
//                         : lang === "es"
//                           ? "Pases en el tercio defensivo"
//                           : "Passes in Defensive Third"}
//                     </span>{" "}
//                     <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                       {info?.passesinOerensiveThird || "N/A"}
//                     </span>
//                   </li>
//                   <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                     <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                       {lang === "fr"
//                         ? "Passes clés"
//                         : lang === "es"
//                           ? "Pases clave"
//                           : "Key Passes"}
//                     </span>{" "}
//                     <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                       {info?.kevPasses || "N/A"}
//                     </span>
//                   </li>
//                   <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                     <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                       {lang === "fr"
//                         ? "Longues passes"
//                         : lang === "es"
//                           ? "Pases largos"
//                           : "Long Passes"}
//                     </span>{" "}
//                     <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                       {info?.longPasses || "N/A"}
//                     </span>
//                   </li>
//                   <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                     <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                       {lang === "fr"
//                         ? "Passes moyennes"
//                         : lang === "es"
//                           ? "Pases medios"
//                           : "Medium Passes"}
//                     </span>{" "}
//                     <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                       {info?.mediumPasses || "N/A"}
//                     </span>
//                   </li>
//                   <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                     <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                       {lang === "fr"
//                         ? "Passes courtes"
//                         : lang === "es"
//                           ? "Pases cortos"
//                           : "Short Passes"}
//                     </span>{" "}
//                     <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                       {info?.shortPasses || "N/A"}
//                     </span>
//                   </li>
//                   <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                     <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                       {lang === "fr"
//                         ? "Passes vers l'avant"
//                         : lang === "es"
//                           ? "Pases hacia adelante"
//                           : "Passes Forward"}
//                     </span>{" "}
//                     <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                       {info?.passesForward || "N/A"}
//                     </span>
//                   </li>
//                   <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                     <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                       {lang === "fr"
//                         ? "Passes latérales"
//                         : lang === "es"
//                           ? "Pases laterales"
//                           : "Passes Sideways"}
//                     </span>{" "}
//                     <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                       {info?.passesSidewavs || "N/A"}
//                     </span>
//                   </li>
//                   <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                     <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                       {lang === "fr"
//                         ? "Passes en arrière"
//                         : lang === "es"
//                           ? "Pases hacia atrás"
//                           : "Passes Backward"}
//                     </span>{" "}
//                     <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                       {info?.passesBackward || "N/A"}
//                     </span>
//                   </li>
//                   <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                     <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                       {lang === "fr"
//                         ? "Passes reçues"
//                         : lang === "es"
//                           ? "Pases recibidos"
//                           : "Passes Receive"}
//                     </span>
//                     <span className="text-lg md:text-xl text-white font-normal leading-[120%]">
//                       {info?.passesReceived || "N/A"}
//                     </span>
//                   </li>
//                   <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                     <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                       {lang === "fr"
//                         ? "Centres"
//                         : lang === "es"
//                           ? "Centros"
//                           : "Crosses"}
//                     </span>{" "}
//                     <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                       {info?.crosses || "N/A"}
//                     </span>
//                   </li>
//                   <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                     <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                       {lang === "fr"
//                         ? "Interventions"
//                         : lang === "es"
//                           ? "Entrada ofensiva / incursión"
//                           : "Step-in"}
//                     </span>{" "}
//                     <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                       {info?.stepIn || "N/A"}
//                     </span>
//                   </li>
//                   <li className="grid grid-cols-2 md:grid-cols-1 gap-2">
//                     <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                       {lang === "fr"
//                         ? "Ballons perdus"
//                         : lang === "es"
//                           ? "Pérdidas de balón"
//                           : "Turnover Conceded"}
//                     </span>{" "}
//                     <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                       {info?.turnoverConceded || "N/A"}
//                     </span>
//                   </li>
//                   {/* <li className="flex flex-col gap-2"><span className='text-base font-normal text-primary leading-[150%]'>Most Passes Player Between </span> <span className='text-lg md:text-xl text-white font-normal leading-[120%] '>{info?.mostPassesPlayerBetween || "N/A"}</span></li> */}
//                   <li className="flex flex-col gap-2">
//                     <span className="text-base font-normal text-primary leading-[150%] notranslate">
//                       {lang === "fr"
//                         ? "À qui donnez-vous le plus le ballon ?"
//                         : lang === "es"
//                           ? "¿A quién le pasas más el balón?"
//                           : "Who do you pass the ball to the most"}
//                     </span>{" "}
//                     <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                       {info?.passTheMost || "N/A"}
//                     </span>
//                   </li>
//                   <li className="flex flex-col gap-2">
//                     <span className="text-base font-me text-primary leading-[150%] notranslate">
//                       {lang === "fr"
//                         ? "Qui vous passe le plus le ballon ?"
//                         : lang === "es"
//                           ? "¿Quién te pasa más el balón?"
//                           : "Who pass the ball to you the most"}
//                     </span>{" "}
//                     <span className="text-lg md:text-xl text-white font-normal leading-[120%] ">
//                       {info?.ballTheMost || "N/A"}
//                     </span>
//                   </li>
//                 </ul>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DistributionPlayerStats;