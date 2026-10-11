import React from 'react';

const Footer = () => {
    return (
          <footer className="mt-10 w-full bg-base-200 text-base-content">
      <div className="mx-auto flex max-w-291 flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:px-6 md:flex-row md:text-left">
        {/* Left side */}
        <p className="text-sm font-medium">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        {/* Right side */}
        <p className="max-w-xl text-xs leading-6 text-base-content/70 md:text-right sm:text-sm">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
    );
};

export default Footer;