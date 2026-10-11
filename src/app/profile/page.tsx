// "use client"

// import { authClient } from '@/lib/auth-client';
// import React from 'react';

// const profilePage = () => {
//     const {data: session} = authClient.useSession()
//     const user = session?.user
//     console.log(user)


//     return (
//         <div>
//             <div>
//                 <div>
//                     <h1 className='text-2xl font-bold'>আমার প্রোফাইল</h1>
//             <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
//                 </div>

//                 <div>
//                     <img src={user?.image as string} 
//                     alt="Profile Image" />

//                     <h2>{user?.name}</h2>
//                     <p>{user?.email}</p>
                
//                 </div>

//                 {/* form for name */}
//                 <div>
//                     <label htmlFor="name">নাম</label>
//                     <input type="text" id="name" name="name" />
//                 </div>
//                 <button>আপডেট</button>
//             </div>
//         </div>
//     );
// };

// export default profilePage;


"use client";

import { authClient } from "@/lib/auth-client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaUser, FaSignOutAlt, FaEdit } from "react-icons/fa";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [name, setName] = useState("");
  const [updating, setUpdating] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    if (user?.name) {
      setName(user.name);
    }
  }, [user?.name]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      toast.error("নাম লিখুন।");
      return;
    }

    if (trimmedName === user?.name) {
      toast.error("কোনো পরিবর্তন করা হয়নি।");
      return;
    }

    setUpdating(true);

    try {
      const { error } = await authClient.updateUser({
        name: trimmedName,
      });

      if (error) {
        toast.error(error.message || "নাম আপডেট করা যায়নি।");
        return;
      }

      toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে।");

      // Refresh session data if supported by your Better Auth version.
      await authClient.getSession();
      router.refresh();
    } catch {
      toast.error("সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setUpdating(false);
    }
  };

  const handleSignOut = async () => {
    setSigningOut(true);

    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error(error.message || "Sign out করা যায়নি।");
        return;
      }

      toast.success("সফলভাবে Sign out হয়েছে।");
      router.replace("/sign-in");
      router.refresh();
    } catch {
      toast.error("Sign out করতে সমস্যা হয়েছে।");
    } finally {
      setSigningOut(false);
    }
  };

  if (isPending) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-[#f0f5f0] px-4">
        <p className="text-gray-500">প্রোফাইল লোড হচ্ছে...</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-[#f0f5f0] px-4">
        <h1 className="text-xl font-bold text-gray-800">
          আপনার অ্যাকাউন্টে সাইন ইন করুন
        </h1>

        <button
          onClick={() => router.push("/sign-in")}
          className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
        >
          Sign In
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Page heading */}
        <div className="mb-8">

          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            আমার প্রোফাইল
          </h1>

          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            আপনার অ্যাকাউন্টের তথ্য দেখুন এবং প্রয়োজন অনুযায়ী আপডেট করুন।
          </p>
        </div>

        {/* Profile card */}
        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          

          {/* User information */}
          <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-green-50 bg-green-100">
              {user.image ? (
                <img
                  src={user.image}
                  alt={`${user.name}'s profile`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <FaUser className="text-3xl text-green-700" />
              )}
            </div>

            <div className="min-w-0 flex-1">
    

              <h3 className="mt-1 break-words text-xl font-bold text-gray-900">
                {user.name || "নাম দেওয়া হয়নি"}
              </h3>

              <p className="mt-1 break-all text-sm text-gray-700 sm:text-base">
                {user.email}
              </p>
            </div>

            <button
              type="button"
              onClick={handleSignOut}
              disabled={signingOut}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-5 py-2.5 font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FaSignOutAlt />
              {signingOut ? "Signing out..." : "Sign Out"}
            </button>
          </div>

          

          {/* Update name form */}
          <div className="border-t border-gray-200 p-6 sm:p-8">
            <div className="mb-6 flex items-start gap-3">
             

              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  তথ্য
                </h2>

                
              </div>
            </div>

            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  নাম
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="আপনার নাম লিখুন"
                  required
                  maxLength={100}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-4 focus:ring-green-100"
                />
              </div>

              <button
                type="submit"
                disabled={updating || !name.trim()}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                
                {updating ? "Updating..." : "আপডেট "}
              </button>
            </form>
          </div>
        </section>

        <p className="mt-5 text-center text-xs text-gray-500">
          আপনার অ্যাকাউন্টের তথ্য নিরাপদে সংরক্ষণ করুন।
        </p>
      </div>
    </main>
  );
};

export default ProfilePage;
