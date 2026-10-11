
"use client";

import { authClient } from "@/lib/auth-client";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";
import { TbCornerUpLeft } from "react-icons/tb";

export default function UserDropdown() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return null;

  if (!session?.user) {
    return (
      <div className="flex items-center gap-2">
        <Link href="/sign-in" className="btn btn-ghost btn-sm">
          সাইন ইন
        </Link>
        <Link href="/sign-up" className="btn btn-success btn-sm">
          সাইন আপ
        </Link>
      </div>
    );
  }

  const user = session.user;
  const name = user.name || "User";

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error(error.message || "Sign out failed");
      return;
    }

    toast.success("সফলভাবে সাইন আউট হয়েছে");
    router.replace("/");
    router.refresh();
  };

  return (
    <div className="dropdown dropdown-end">
      
      <button
        tabIndex={0}
        type="button"
        className="flex items-center gap-1.5 rounded-lg px-2 py-1 hover:bg-base-200"
      >
        {user.image ? (
          <img
            src={user.image}
            alt={name}
            className="h-6 w-6 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-success/15 text-xs font-semibold">
            {name.charAt(0).toUpperCase()}
          </span>
        )}

        <span className="max-w-24 truncate text-xs font-medium">
          {name.split(" ")[0]}
        </span>

        <RiArrowDropDownLine />

      </button>

      
      <ul
        tabIndex={0}
        className="menu dropdown-content z-50 mt-2 w-56 rounded-xl border border-base-300 bg-base-100 p-2 shadow-lg"
      >
        <li className="pointer-events-none mb-1 border-b border-base-200 pb-2">
          <div className="flex flex-col items-start gap-0.5">
            <span className="w-full truncate text-xs font-semibold text-base-content">
              {name}
            </span>
            <span className="w-full truncate text-[11px] text-base-content/60">
              {user.email}
            </span>
          </div>
        </li>

        <li>
          <Link href="/profile">
            <CgProfile />
            আমার প্রোফাইল
          </Link>
        </li>

        <li>
          <button
            type="button"
            onClick={handleSignOut}
            className="text-error"
          >
           
            <TbCornerUpLeft />
            সাইন আউট
          </button>
        </li>
      </ul>
    </div>
  );
}
