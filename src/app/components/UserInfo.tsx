"use client";

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import DropDown from './DropDown';

const UserInfo = () => {
    const {data: session} = authClient.useSession() 
    const user = session?.user
    console.log(user)

    // const handleSignOut = async () => {
    //     await authClient.signOut();
    // }

    return (
        <div className="flex items-center gap-3">

            {
                user ? (
                    <div className="flex items-center gap-3">
                       <div className="avatar">
  <div className="w-24 rounded">
    <img alt="Tailwind-CSS-Avatar-component" src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
  </div>
</div>
                        {/* <span className="text-sm font-medium">{user.name}</span> */}
                        {/* <button className='' onClick={handleSignOut}>Sign Out</button> */}
                        <DropDown />
                    </div>
                ) : (
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
                )
            }
        </div>
    );
};

export default UserInfo;

