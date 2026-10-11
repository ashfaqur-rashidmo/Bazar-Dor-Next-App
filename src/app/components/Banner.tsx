
"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

const CurrentDate = dynamic(() => import("./CurrentDate"), {
  ssr: false,
});

const Banner = () => {
  return (
    <section className="mx-auto mt-5 w-full max-w-7xl px-3 sm:mt-8 sm:px-5 lg:px-6">
      <div className="flex flex-col items-center gap-6 overflow-hidden rounded-2xl border border-gray-100 bg-[#FAFCFA] p-4 text-[#171D19] shadow-sm sm:p-6 md:flex-row md:justify-between md:gap-8 md:p-8">
        <div className="flex w-full min-w-0 flex-col items-start gap-3 md:flex-1">
          <span className="max-w-full rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 sm:text-sm">
            <CurrentDate />
          </span>

          <h2 className="text-xl font-bold leading-snug tracking-tight sm:text-2xl lg:text-3xl">
            আজকের বাজারের দাম এক নজরে
          </h2>

          <p className="max-w-2xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <button
            type="button"
            onClick={() =>
              document.getElementById("সব-পণ্য")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="mt-1 w-full rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 active:bg-green-900 sm:w-auto sm:text-base"
          >
            সব পণ্য দেখুন
          </button>
        </div>

        <div className="flex w-full min-w-0 items-center justify-center md:w-[40%] md:max-w-[360px]">
          <Image
            src="/bazar-hero.png"
            width={315}
            height={263}
            alt="আজকের বাজারের পণ্যের চিত্র"
            priority
            sizes="(max-width: 639px) 85vw, (max-width: 1023px) 45vw, 315px"
            className="h-auto w-full max-w-[240px] object-contain sm:max-w-[300px] md:max-w-[315px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
