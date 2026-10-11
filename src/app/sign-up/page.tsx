// "use client"

// import { authClient } from '@/lib/auth-client';
// import Link from 'next/link';
// import React from 'react';
// import toast from 'react-hot-toast';
// import { FaGithub, FaGoogle } from "react-icons/fa";


// const SignUpPage = () => {
    

// const onSubmit = async (
//   e: React.SubmitEvent<HTMLElement>
// ) => {
//   e.preventDefault();

//   const formData = new FormData(e.target);

//   const user = Object.fromEntries(formData.entries()) as {
//     name: string;
//     email: string;
//     password: string;
//   };

//   const { data, error } = await authClient.signUp.email({
//     name: user.name,
//     email: user.email,
//     password: user.password,
//     callbackURL: `/sign-in`,
//   });

//   if (error) {
//     console.error("Sign up failed:", error);
//     toast.error(error.message || "Sign up failed. Please try again.");
//     return;
//   }

//   toast.success("Account Created successful!");
// };


//     return (
//            <main className="flex min-h-screen items-center justify-center bg-[#f0f5f0] px-4 py-10">
//             <div>
//                 <h2 className='font-bold text-2xl'>অ্যাকাউন্ট তৈরি করুন</h2>
//                 <p>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
//             </div>
//       <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        
        

//         <form className="space-y-5" onSubmit={onSubmit}>
//             <div>
//                  <label className="mb-2 block text-sm font-medium text-gray-700">
//               নাম
//             </label>
//             <input
//               type="name"
//               name='name'
//               placeholder="যেমন: রহিম উদ্দিন"
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
//             />
//             </div>


//           <div>
//             <label className="mb-2 block text-sm font-medium text-gray-700">
//               ইমেইল
//             </label>
//             <input
//               type="email"
//               name='email'
//               placeholder="you@example.com"
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
//             />
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-medium text-gray-700">
//               পাসওয়ার্ড
//             </label>
//             <input
//               type="password"
//               name='confirmPassword'
//               placeholder="আবার লিখুন"
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
//             />
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-medium text-gray-700">
//               পাসওয়ার্ড নিশ্চিত করুন
//             </label>
//             <input
//               type="password"
//               name='password'
//               placeholder="আবার লিখুন"
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
//             />
//           </div>
          

//           <button
//             type="submit"
//             className="w-full rounded-lg bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"
//           >
//             অ্যাকাউন্ট তৈরি করুন
//           </button>
//         </form>

//         <div className="my-5 flex items-center gap-3">
//           <div className="h-px flex-1 bg-gray-200" />
//           <span className="text-sm text-gray-400">অথবা</span>
//           <div className="h-px flex-1 bg-gray-200" />
//         </div>

//         <div className="space-y-3 flex">
//             <button
//           type="button"
//           className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 py-3 font-medium text-gray-700 hover:bg-gray-50"
//         >
//           <FaGoogle />

//           Google দিয়ে চালিয়ে যান
//         </button>

//         <button
//           type="button"
//           className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 py-3 font-medium text-gray-700 hover:bg-gray-50"
//         >
//           <FaGithub />


//           Github দিয়ে চালিয়ে যান
//         </button>


//         </div>
//         <p className="mt-6 text-center text-sm text-gray-600">
//           অ্যাকাউন্ট আছে?{" "}
//           <Link
//             href="/sign-in"
//             className="font-semibold text-green-700 hover:underline"
//           >
//             সাইন ইন করুন
//           </Link>
//         </p>
//       </div>
//     </main>
//     );
// };

// export default SignUpPage;



"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(
      formData.get("confirmPassword") ?? ""
    );

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const { error } = await authClient.signUp.email({
        name,
        email,
        password,
        callbackURL: "/sign-in",
      });

      if (error) {
        toast.error(error.message || "Sign up failed.");
        return;
      }

      // Better Auth may automatically sign in after signup.
      // Sign out so the user can sign in manually.
      await authClient.signOut();

      toast.success("Account created! Please sign in.");

      router.replace("/sign-in");
      router.refresh();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f0f5f0] px-4 py-10">
      <div className="grid w-full max-w-5xl items-center gap-8 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900">
            অ্যাকাউন্ট তৈরি করুন
          </h2>
          <p className="mt-2 text-gray-600">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <form className="space-y-5" onSubmit={onSubmit}>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                নাম
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="যেমন: রহিম উদ্দিন"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                ইমেইল
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                পাসওয়ার্ড
              </label>
              <input
                type="password"
                name="password"
                required
                minLength={8}
                placeholder="কমপক্ষে ৮ অক্ষর"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                পাসওয়ার্ড নিশ্চিত করুন
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                minLength={8}
                placeholder="পাসওয়ার্ড আবার লিখুন"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </form>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-sm text-gray-400">অথবা</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={() =>
                authClient.signIn.social({
                  provider: "google",
                  callbackURL: "/",
                })
              }
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 py-3 font-medium text-gray-700 hover:bg-gray-50"
            >
              <FaGoogle />
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              onClick={() =>
                authClient.signIn.social({
                  provider: "github",
                  callbackURL: "/",
                })
              }
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 py-3 font-medium text-gray-700 hover:bg-gray-50"
            >
              <FaGithub />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/sign-in"
              className="font-semibold text-green-700 hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
