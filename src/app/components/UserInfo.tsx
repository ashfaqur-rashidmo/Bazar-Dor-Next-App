
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
