// "use client";

// import { authClient } from '@/lib/auth-client';
// import Link from 'next/link';
// import React from 'react';
// import DropDown from './DropDown';

// const UserInfo = () => {
//     const {data: session} = authClient.useSession() 
//     const user = session?.user
//     console.log(user)


//     return (
//         <div className="flex items-center gap-3">

//             {
//                 user ? (
//                     <div className="flex items-center gap-3">
                     
                       
//                         <DropDown />
//                     </div>
//                 ) : (
//                     <div className="flex items-center gap-3">
//                         <Link
//                             type="button"
//                             className="rounded px-2 py-1 text-[17px] font-medium transition-colors hover:text-green-700"
//                             href="/sign-in"
//                         >
//                             সাইন ইন
//                         </Link>
//                         <Link
//                             type="button"
//                             className="rounded-md bg-[#078c43] px-3.5 py-1.75 text-[17px] font-medium text-white shadow-[0_2px_3px_rgba(0,0,0,0.25)] transition-colors hover:bg-green-800"
//                             href="/sign-up"
//                         >
//                             সাইন আপ
//                         </Link>
//                     </div>
//                 )
//             }
//         </div>
//     );
// };

// export default UserInfo;



"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import DropDown from "./DropDown";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
      {user ? (
        <DropDown />
      ) : (
        <>
          <Link
            href="/sign-in"
            className="whitespace-nowrap rounded px-2 py-2 text-xs font-medium transition-colors hover:text-green-700 sm:text-base"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="whitespace-nowrap rounded-md bg-[#078c43] px-2.5 py-2 text-xs font-medium text-white shadow-sm transition-colors hover:bg-green-800 sm:px-3.5 sm:text-base"
          >
            সাইন আপ
          </Link>
        </>
      )}
    </div>
  );
};

export default UserInfo;
