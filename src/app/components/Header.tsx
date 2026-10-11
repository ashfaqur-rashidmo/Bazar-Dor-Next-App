"use client";
import Image from "next/image";
import Navlinks from "./Navlinks";
import UserInfo from "./UserInfo";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const CurrentDate = dynamic(
  () => import("./CurrentDate"),
  { ssr: false }
);

const Header = () => {



return ( 
<header className="w-full bg-[#fbfcfa] text-[#171d19]">
{/* Top header */} 
<div className="border-b border-gray-100"> 
    <div className="mx-auto flex h-[68] max-w-[1164] items-center justify-between px-1">
{/* Logo and date */} 
<div className="flex items-center gap-1.5"> 
    <Image
           src="/logo-icon.png"
           alt="বাজার দর"
           width={28}
           height={28}
           className="h-7 w-7 shrink-0 rounded-lg object-contain"
           priority
         />


        <div className="flex flex-col justify-center">
          <h1 className="text-[20px] font-bold leading-4.75">
            বাজার দর
          </h1>

          <p className="text-[9px] font-normal leading-3.25 text-gray-600">
            <CurrentDate />
          </p>
        </div>
      </div>

      {/* Authentication buttons */}
      <UserInfo />
    </div>
  </div>

  {/* Category navigation */}
  <div className="mx-auto max-w-[1130] px-1">
    <Suspense fallback={<div className="h-12 w-full animate-pulse rounded-lg bg-gray-200" />}>
      <Navlinks />
    </Suspense>
  </div>
</header>


);
};

export default Header;
