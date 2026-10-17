// "use client";

// import { useSession } from "next-auth/react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const OurMission = () => {
//   const session = useSession();
//   const isLogin = session?.data?.user?.accessToken;

//   const missionData = [
//     {
//       id: 1,
//       img: "/assets/images/home_page/1.svg",
//       title: "Get rated every game",
//     },
//     {
//       id: 2,
//       img: "/assets/images/home_page/2.svg",
//       title: "Compete with teammates",
//     },
//     {
//       id: 3,
//       img: "/assets/images/home_page/3.svg",
//       title: "Build your data identity",
//     },
//     {
//       id: 4,
//       img: "/assets/images/home_page/4.svg",
//       title: "Unlock new opportunities",
//     },
//   ];

//   return (
//     <div className="relative container mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[550px] md:h-[700px] py-8 md:py-12 lg:py-14 rounded-[30px] md:rounded-[50px] overflow-hidden flex flex-col justify-center">
//       <div className="relative z-10 px-4 md:px-8 lg:px-12 flex flex-col items-center w-full max-w-[1080px] mx-auto">
//         <div className="w-full text-left mb-8 md:mb-12">
//           <h1 className="text-2xl md:text-4xl lg:text-5xl font-dagger font-bold text-primary mb-3 md:mb-4">
//             Our Mission
//           </h1>
//           <p className="text-white text-sm md:text-lg lg:text-xl font-medium opacity-90">
//             Four pillars that drive everything we do :
//           </p>
//         </div>

//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10 w-full max-w-[1200px] mb-8 md:mb-12">
//           {missionData?.map((item) => {
//             return (
//               <div
//                 key={item?.id}
//                 className="bg-white rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[60px] md:rounded-br-[60px] border-[3px] md:border-[5px] border-primary p-2 flex flex-col items-center h-full hover:scale-105 transition-transform duration-300 "
//               >
//                  <Image
//                     src={item?.img}
//                     alt={item?.title}
//                     width={200}
//                     height={200}
//                     className="object-contain w-full md:w-auto h-[110px] md:h-[180px]"
//                   />
//                 <h3 className="text-center text-xs md:text-base lg:text-lg font-semibold text-[#131313] leading-tight pb-3">
//                   {item?.title}
//                 </h3>
//               </div>
//             );
//           })}
//         </div>

//         <div className="w-full flex justify-center md:justify-start max-w-[1200px]">
//           <Link
//             href={`${isLogin ? "/prices" : "/sign-up"}`}
//             className="h-10 md:h-14 inline-flex items-center justify-center rounded-full bg-primary px-8 md:px-12 text-sm md:text-lg font-dagger font-bold text-black transition-all hover:opacity-90 hover:scale-105 shadow-[0_0_15px_rgba(16,230,7,0.4)]"
//           >
//             Get Your Report
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurMission;




// import Image from "next/image";
// import React from "react";

// const WhatDoWeOffer = () => {
//   const missionData = [
//     {
//       id: 1,
//       img: "/assets/images/home_page/wdwo1.svg",
//       title: "Specific technical and tactical data",
//     },
//     {
//       id: 2,
//       img: "/assets/images/home_page/wdwo2.svg",
//       title: "Ratings for every game to measure your progression",
//     },
//     {
//       id: 3,
//       img: "/assets/images/home_page/wdwo3.svg",
//       title: "Personalized highlights showcasing your key actions",
//     },
//     {
//       id: 4,
//       img: "/assets/images/home_page/wdwo4.svg",
//       title: "Structured Feedback from qualified evaluators",
//     },
//   ];

//   return (
//     <div className="relative container mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[550px] md:h-[700px] py-8 md:py-12 lg:py-14 rounded-[30px] md:rounded-[50px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center">
//       <div className="relative z-10 px-4 md:px-8 lg:px-12 flex flex-col items-center w-full max-w-[1080px] mx-auto">
//         <div className="w-full text-left mb-8 md:mb-12">
//           <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-primary mb-3 md:mb-4">
//             What Do We Offer ?
//           </h2>
//           <p className="text-white text-sm md:text-lg lg:text-xl xl:text-2xl font-medium opacity-90 leading-normal">
//             Everything you need to stand out as a player – all in one place.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-7 w-full max-w-[1200px]">
//           {missionData?.map((item) => {
//             return (
//               <div
//                 key={item?.id}
//                 className="bg-white rounded-[30px] md:rounded-[40px] border-[3px] md:border-[4px] border-primary p-[1px] flex flex-col items-center h-full hover:scale-105 transition-transform duration-300 shadow-xl"
//               >
//                 <Image
//                   src={item?.img}
//                   alt={item?.title}
//                   width={200}
//                   height={200}
//                   className="object-contain w-full h-[110px] md:h-[180px]"
//                 />
//                 <h3 className="text-center text-xs md:text-base lg:text-[17px] font-semibold text-[#131313] leading-normal pb-3 md:py-5 px-2">
//                   {item?.title}
//                 </h3>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatDoWeOffer;




// "use client";
// import { useSession } from "next-auth/react";
// import Image from "next/image";
// import Link from "next/link";
// import { parseCookies } from "nookies";
// import React from "react";

// const COOKIE_NAME = "googtrans";

// const HowToBook = () => {
//   const session = useSession();
//   const isLogin = session?.data?.user?.accessToken;

//     const cookie = parseCookies()[COOKIE_NAME];
//         const lang = cookie?.split("/")?.[2] || "en";
//         // console.log( "language", lang)

//   const missionData = [
//     {
//       id: 1,
//       img: "/assets/images/home_page/htb1.svg",
//       title: `${lang === "fr" ? "Enregistrement" : "Register"}`,
//       step: "1",
//     },
//     {
//       id: 2,
//       img: "/assets/images/home_page/htb2.svg",
//       title: "Player Settings (Create your Profile)",
//       step: "2",
//     },
//     {
//       id: 3,
//       img: "/assets/images/home_page/htb3.svg",
//       title: "Payment",
//       step: "3",
//     },
//     {
//       id: 4,
//       img: "/assets/images/home_page/htb4.svg",
//       title: `${lang === "fr" ? "Télécharger et envoyer-nous votre vidéo" : "Download and send us your video"}`,
//       // title: "Upload and send us your game",
//       step: "4",
//     },
//   ];

//   return (
//     <div className="relative container mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[500px] md:h-[700px] py-8 md:py-12 lg:py-14 rounded-[30px] md:rounded-[50px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center">
//       <div className="relative z-10 px-4 md:px-8 lg:px-12 flex flex-col items-center w-full max-w-[1100px] mx-auto">
//         <div className="w-full text-left mb-6 md:mb-12">
//           <h1 className="text-2xl md:text-4xl lg:text-5xl font-dagger font-bold text-primary mb-3 md:mb-4">
//             How to book your video analysis !
//           </h1>
//         </div>

//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 w-full max-w-[1200px] mb-8 md:mb-12">
//           {missionData?.map((item) => {
//             return (
//               <div
//                 key={item?.id}
//                 className="bg-transparent border-2 md:border-[3px] border-primary rounded-[30px] md:rounded-[40px] p-2 flex flex-col items-center h-full hover:shadow-[0_0_20px_rgba(16,230,7,0.2)] transition-all duration-300"
//               >
//                 <div className="">
//                   <Image
//                     src={item?.img}
//                     alt={item?.title}
//                     width={600}
//                     height={600}
//                     className="object-cover w-auto h-[120px] md:h-[190px]"
//                   />
//                 </div>
//                 <div className="text-center flex flex-1 flex-col justify-start gap-2 w-full">
//                   <h3 className="text-white text-[11px] md:text-lg font-bold leading-normal">
//                     {item?.title}
//                   </h3>
//                   <span className="mt-auto text-primary text-xl md:text-3xl font-bold">
//                     {item?.step}
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="w-full flex justify-center md:justify-start max-w-[1200px]">
//           <Link
//             href={`${isLogin ? "/prices" : "/sign-up"}`}
//             className="h-10 md:h-14 inline-flex items-center justify-center rounded-full bg-primary px-8 md:px-12 text-sm md:text-lg font-dagger font-bold text-black transition-all hover:opacity-90 hover:scale-105 shadow-[0_0_15px_rgba(16,230,7,0.4)]"
//           >
//             Get Your Report
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowToBook;




// "use client";

// import React, { useEffect, useState } from "react";

// const WhyChooseAnalytic = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkScreen = () => {
//       setIsMobile(window.innerWidth < 768); // md breakpoint
//     };

//     checkScreen();

//     window.addEventListener("resize", checkScreen);

//     return () => window.removeEventListener("resize", checkScreen);
//   }, []);

//   const desktopData = [
//     {
//       id: 1,
//       title: "Access verified performance data",
//       desc: "Every stat, every match, every achievement verified and recorded in one place. No more scattered records or lost history.",
//     },
//     {
//       id: 2,
//       title: "Receive objective ratings",
//       desc: "Get rated based on real performance metrics, not opinions. Fair, transparent, and comparable across regions.",
//     },
//     {
//       id: 3,
//       title: "Track your career progression and transfer history",
//       desc: "Track your entire soccer journey. Every club, every season, every progression milestone documented.",
//     },
//     {
//       id: 4,
//       title: "Build true proof of performance",
//       desc: "Turn your evaluations into a verified record that coaches, clubs and scouts can trust. Your data speaks for itself.",
//     },
//   ];

//   const mobileData = [
//       {
//       id: 1,
//       title: "Access verified performance data",
//       desc: "Every stat - every match verified and in one place.",
//     },
//     {
//       id: 2,
//       title: "Receive objective ratings",
//       desc: "Rated on real performance not opinions.",
//     },
//     {
//       id: 3,
//       title: "Track your career progression",
//       desc: "Every season - every milestone is fully documented.",
//     },
//     {
//       id: 4,
//       title: "Build true proof of performance",
//       desc: "A verified record that coaches and scouts can trust.",
//     },
//   ];

//   const chooseData = isMobile ? mobileData : desktopData;

//   return (
//     <div className="relative container mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[550px] md:h-[700px] py-8 md:py-12 lg:py-14 rounded-[30px] md:rounded-[50px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center">
//       <div className="relative z-10 px-2 md:px-8 lg:px-12 w-full max-w-[1200px] mx-auto">
//         <div className="max-w-[1000px] mb-6 md:mb-12">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-dagger font-bold text-primary mb-3 md:mb-6 leading-tight">
//             Why Choose Analytic Soccer ?
//           </h1>

//           <p className="hidden md:block text-white text-[13px] md:text-lg font-medium leading-relaxed opacity-90">
//             There is no global platform where amateur players can access verified
//             performance data until now. Analytic Soccer is the first platform to
//             deliver all of this, giving every amateur player the same digital
//             tools and visibility used by professionals.
//           </p>

//           <p className="block md:hidden text-white text-[13px] font-medium leading-relaxed opacity-90">
//             No platform gives amateur players a professional profile -
//             visibility - and real opportunities until now!
//           </p>
//         </div>

//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
//           {chooseData.map((item) => (
//             <div
//               key={item.id}
//               className="bg-transparent border-[1.5px] md:border-[2px] border-primary rounded-[20px] md:rounded-[30px] p-3 flex flex-col gap-2 md:gap-3 hover:shadow-[0_0_15px_rgba(16,230,7,0.2)] transition-all duration-300"
//             >
//               <h3 className="text-primary text-sm md:text-xl font-bold font-dagger leading-tight">
//                 {item.title}
//               </h3>

//               <p className="text-white text-[11px] md:text-sm font-medium opacity-80 leading-normal">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseAnalytic;






// "use client"
// import { parseCookies } from "nookies";
// import React from "react";
// const COOKIE_NAME = "googtrans";
// const WhyDataMatters = () => {
//       const cookie = parseCookies()[COOKIE_NAME];
//       const lang = cookie?.split("/")?.[2] || "en";
//   const dataCategories = [
//     {
//       title: "For Teams",
//       items: [
//         {
//           label: "Objective Recruitment",
//           desc: "Data makes scouting fair, efficient and evidence-based.",
//         },
//         {
//           label: "Player Development Tracking",
//           desc: "Clearly shows each player's progress and individual needs.",
//         },
//         {
//           label: "Tactical & Performance Insights",
//           desc: "Pro-level data to improve game decisions and team strategy.",
//         },
//       ],
//     },
//     {
//       title: `${lang === "fr" ? "Pour le staff" : "For Staff"}`,
//       items: [
//         {
//           label: "Objective Evaluation",
//           desc: "Consistent, bias-free player assessment every time.",
//         },
//         {
//           label: "Performance Monitoring",
//           desc: "Individualized development plans not generic training.",
//         },
//         {
//           label: "Scouting Efficiency",
//           desc: "Find the right players faster by filtering top talent.",
//         },
//         {
//           label: "Tactical Insight",
//           desc: "Deeper understanding of player impact and team dynamics.",
//         },
//       ],
//     },
//     {
//       title: "For Parents",
//       items: [
//         {
//           label: "Track Your Child's Progress",
//           desc: "A clear, measurable view of development, strengths and potential.",
//         },
//         {
//           label: "Opportunities & Exposure",
//           desc: "Verified data that opens doors to academies, universities and tryouts.",
//         },
//         {
//           label: "Transparency & Fairness",
//           desc: "Objective evaluation with no favoritism or subjective opinions.",
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="relative container mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[550px] md:h-[750px] py-8 md:py-12 lg:py-14 rounded-[30px] md:rounded-[50px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center">
//       <div className="relative z-10 px-4 md:px-8 lg:px-12 w-full max-w-[1140px] mx-auto">
//         <div className="max-w-[1000px] mb-6 md:mb-7">
//           <h1 className="text-2xl md:text-4xl lg:text-5xl  font-bold text-primary mb-2 md:mb-4 leading-tight">
//             Why Data Matters ?
//           </h1>
//           <p className="text-white text-[13px] md:text-lg font-medium opacity-90 leading-relaxed max-w-[800px]">
//             Data creates fairness, clarity and opportunity for everyone in the game.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
//           {dataCategories.map((category, idx) => (
//             <div
//               key={idx}
//               className={`flex flex-col ${idx === 2 ? "col-span-2 lg:col-span-1 items-center" : ""
//                 }`}
//             >
//               <h2 className="text-primary text-xs md:text-3xl  font-bold mb-3 md:mb-6 text-center">
//                 {category.title}
//               </h2>
//               <div className={`flex-grow border-2 border-primary rounded-[20px] md:rounded-[30px] p-2 md:p-4 bg-transparent hover:shadow-[0_0_20px_rgba(16,230,7,0.2)] transition-all duration-300 ${idx === 2 ? "w-[calc(100%-1rem)] max-w-[200px] md:max-w-full md:w-full" : "w-full"}`}>
//                 <div className="flex flex-col gap-3">
//                   {category.items.map((item, itemIdx) => (
//                     <div key={itemIdx} className="flex flex-col gap-1">
//                       <h3 className="text-primary text-[11px] md:text-lg font-bold leading-tight">
//                         {item.label}
//                       </h3>
//                       <p className="text-white text-[10px] md:text-sm font-medium opacity-80 leading-tight md:leading-relaxed">
//                         {item.desc}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyDataMatters;







