
"use client";

import Link from "next/link";
import { FaArrowLeft, FaHouse, FaMagnifyingGlass } from "react-icons/fa6";

const NotFound = () => {
  return (
    <main className="flex flex-1 items-center justify-center bg-[#f0f5f0] px-4 py-16">
      <div className="w-full max-w-xl text-center">
        {/* 404 illustration */}
        <div className="relative mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-green-100">
          <div className="absolute inset-3 rounded-full border-2 border-dashed border-green-300" />

          <span className="text-6xl font-extrabold tracking-tight text-green-700">
            404
          </span>

          <span className="absolute -right-1 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl text-green-700 shadow-md">
            <FaMagnifyingGlass />
          </span>
        </div>

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-700">
          Page Not Found
        </p>

        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          পৃষ্ঠা খুঁজে পাওয়া যায়নি!
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
          দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি পাওয়া যায়নি।
          লিংকটি পরিবর্তিত হতে পারে অথবা পৃষ্ঠাটি সরানো হয়েছে।
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-200"
          >
            <FaHouse />
            হোম পেজে ফিরে যান
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-200"
          >
            <FaArrowLeft />
            আগের পৃষ্ঠায় ফিরুন
          </button>
        </div>

        <p className="mt-10 text-xs text-gray-500">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>
      </div>
    </main>
  );
};

export default NotFound;
