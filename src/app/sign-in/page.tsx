
"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignInPage = () => {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    if (!email || !password) {
      toast.error("ইমেইল ও পাসওয়ার্ড লিখুন।");
      return;
    }

    try {
      const { error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "সাইন ইন করা যায়নি।");
        return;
      }

      toast.success("সফলভাবে সাইন ইন হয়েছে!");
      router.replace("/");
      router.refresh();
    } catch {
      toast.error("সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "Google Sign In failed.");
      }
    } catch {
      toast.error("Google দিয়ে সাইন ইন করা যায়নি।");
    }
  };

  const handleGithubSignIn = async () => {
    try {
      const { error } = await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "GitHub Sign In failed.");
      }
    } catch {
      toast.error("GitHub দিয়ে সাইন ইন করা যায়নি।");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f0f5f0] px-4 py-10">
      <div className="w-full max-w-md">
        {/* Title outside the form card */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            সাইন ইন
          </h2>

          <p className="mt-2 text-gray-600">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        {/* Form card */}
        <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <form className="space-y-5" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                ইমেইল
              </label>

              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                পাসওয়ার্ড
              </label>

              <input
                id="password"
                type="password"
                name="password"
                autoComplete="current-password"
                required
                placeholder="আপনার পাসওয়ার্ড লিখুন"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              সাইন ইন
            </button>
          </form>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs text-gray-500">অথবা</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Google Sign In */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <FaGoogle />
              Google দিয়ে চালিয়ে যান
            </button>

            {/* GitHub Sign In */}
            <button
              type="button"
              onClick={handleGithubSignIn}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <FaGithub />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/sign-up"
              className="font-semibold text-green-700 hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
