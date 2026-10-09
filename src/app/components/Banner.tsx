import Image from 'next/image';
import React from 'react';
import BannerLogo from '/public/bazar-hero.png';

const Banner = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
dateStyle: "full",
timeZone: "Asia/Dhaka",
});

    return (
        <div className='max-w-[1164] mx-auto px-2'>
            <div className='flex justify-between items-center max-w-[1164] mx-auto bg-[#FAFCFA] text-[#171d19] border border-gray-100 rounded-md shadow-sm mt-10'>
                {/* Date heading texts */}
                <div className='flex flex-col items-start justify-center gap-2'>
                    <span className='text-green-900 bg-green-200 rounded-2xl text-sm px-2'>{date}</span>

                    <h2>আজকের বাজারের দাম এক নজরে</h2>
                    <p>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>

                    <button className='bg-green-700 text-white font-semibold px-3 py-1.5 rounded-md'>সব পণ্য দেখুন</button>
                </div>

                {/* banner logo */}
                <div>
                    <Image 
                    src={BannerLogo}
                    height={263}
                    width={315}
                    alt="Bazar Hero"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;