import React from "react";

const Loading = () => {
  return (
    <main
      role="status"
      aria-live="polite"
      aria-label="পৃষ্ঠা লোড হচ্ছে"
      className="flex flex-1 items-center justify-center bg-[#f0f5f0] px-4 py-16"
    >
      <div className="flex w-full max-w-sm flex-col items-center rounded-2xl border border-gray-200 bg-white px-8 py-12 text-center shadow-sm">
        {/* Spinner */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-200 opacity-40" />

          <span className="loading loading-spinner loading-lg text-green-700" />
        </div>

        <h2 className="mt-6 text-xl font-bold text-gray-900">
          পৃষ্ঠা লোড হচ্ছে
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          অনুগ্রহ করে অপেক্ষা করুন। আপনার তথ্য প্রস্তুত করা হচ্ছে।
        </p>

        {/* Skeleton placeholders */}
        <div className="mt-8 w-full space-y-3" aria-hidden="true">
          <div className="skeleton h-3 w-3/4 bg-gray-200" />
          <div className="skeleton h-3 w-full bg-gray-200" />
          <div className="skeleton h-3 w-5/6 bg-gray-200" />
        </div>

        <p className="mt-6 text-xs font-medium text-green-700">
          বাজার দর
        </p>
      </div>

      <span className="sr-only">লোড সম্পূর্ণ হওয়ার অপেক্ষায়...</span>
    </main>
  );
};

export default Loading;