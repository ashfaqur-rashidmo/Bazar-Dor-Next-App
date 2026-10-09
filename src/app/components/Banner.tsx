// import Image from 'next/image';
// import React from 'react';
// import BannerLogo from '/public/bazar-hero.png';

// const Banner = () => {
//     const date = new Date().toLocaleDateString("bn-BD", {
// dateStyle: "full",
// timeZone: "Asia/Dhaka",
// });

//     return (
//         <div className='max-w-[1164] mx-auto px-2'>
//             <div className='flex justify-between items-center max-w-[1164] mx-auto bg-[#FAFCFA] text-[#171d19] border border-gray-100 rounded-md shadow-sm mt-10 p-5'>
//                 {/* Date heading texts */}
//                 <div className='flex flex-col items-start justify-center gap-2'>
//                     <span className='text-green-900 bg-green-200 rounded-2xl text-sm px-2'>{date}</span>

//                     <h2>আজকের বাজারের দাম এক নজরে</h2>
//                     <p>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>

//                     <button className='bg-green-700 text-white font-semibold px-3 py-1.5 rounded-md'>সব পণ্য দেখুন</button>
//                 </div>

//                 {/* banner logo */}
//                 <div>
//                     <Image 
//                     src={BannerLogo}
//                     height={263}
//                     width={315}
//                     alt="Bazar Hero"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;


import Image from "next/image";
import React from "react";
import BannerLogo from "/public/bazar-hero.png";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  });

  return (
    <div className="mx-auto mt-8 w-full max-w-[1120] px-3 sm:mt-10 sm:px-4">
      <div className="flex flex-col items-center justify-between gap-6 rounded-lg border border-gray-100 bg-[#FAFCFA] px-4 py-6 text-[#171D19] shadow-sm sm:px-6 md:flex-row md:gap-8 md:px-8 md:py-7">
        {/* Date and heading texts */}
        <div className="flex w-full flex-col items-start justify-center gap-3 md:flex-1">
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600 font-semibold sm:text-sm">
            {date}
          </span>

          <h2 className="text-xl font-bold leading-snug tracking-tight sm:text-2xl md:text-3xl">
            আজকের বাজারের দাম এক নজরে
          </h2>

          <p className="max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <button
            id="#সব-পণ্য"
            type="button"
            className="mt-1 inline-flex items-center justify-center rounded-md bg-green-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 active:bg-green-900 sm:text-base"
          >
            সব পণ্য দেখুন
          </button>
        </div>

        {/* Banner logo */}
        <div className="flex w-full shrink-0 items-center justify-center md:w-[315px]">
          <Image
            src={BannerLogo}
            width={315}
            height={263}
            alt="আজকের বাজারের পণ্যের চিত্র"
            priority
            sizes="(max-width: 767px) 100vw, 315px"
            className="h-auto w-full max-w-[280px] object-contain sm:max-w-[315px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
