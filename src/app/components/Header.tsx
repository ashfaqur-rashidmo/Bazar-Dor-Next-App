

// import Image from 'next/image';
// import React from 'react';
// import Navlinks from './Navlinks';

// const Header = () => {
//     const date = new Date().toLocaleDateString("bn-BD", {
//     dateStyle: "full",
//   });
//     return (
//         <div>
//             <div className='flex justify-between items-center max-w-[1164] mx-auto'>
//                 {/* logo and date */}
//                 <div>
//                     <Image 
//                     src="/logo-icon.png" 
//                     alt="Logo" 
//                     width={40}
//                     height={40}
//                      />
//                     <h2 className='text-black font-bold text-2xl'>বাজার দর</h2>
//                     <p className='text-black'>{date}</p>
//                 </div>
//                 {/* sign in sign up buttons */}
//                 <div>
//                     <button className='text-black px-4 py-2 rounded'>সাইন ইন</button>
//                     <button className='bg-green-700 text-white px-4 py-2 rounded'>সাইন আপ</button>
//                 </div>
//             </div>
//             <Navlinks />
//         </div>
//     );
// };

// export default Header;



import Image from "next/image";
import Navlinks from "./Navlinks";
import Link from "next/link";

const Header = () => {
const date = new Date().toLocaleDateString("bn-BD", {
dateStyle: "full",
timeZone: "Asia/Dhaka",
});

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
          <h1 className="text-[20px] font-bold leading-[19px]">
            বাজার দর
          </h1>

          <p className="text-[9px] font-normal leading-[13px] text-gray-600">
            {date}
          </p>
        </div>
      </div>

      {/* Authentication buttons */}
      <div className="flex items-center gap-3">
        <Link
          type="button"
          className="rounded px-2 py-1 text-[17px] font-medium transition-colors hover:text-green-700"
          href="/sign-in"
        >
          সাইন ইন
        </Link>

        <Link
          type="button"
          className="rounded-md bg-[#078c43] px-3.5 py-[7px] text-[17px] font-medium text-white shadow-[0_2px_3px_rgba(0,0,0,0.25)] transition-colors hover:bg-green-800"
          href="/sign-up"
        >
          সাইন আপ
        </Link>
      </div>
    </div>
  </div>

  {/* Category navigation */}
  <div className="mx-auto max-w-[1130] px-1">
    <Navlinks />
  </div>
</header>


);
};

export default Header;
