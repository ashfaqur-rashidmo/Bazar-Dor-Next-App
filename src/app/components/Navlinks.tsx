
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// interface NavLink {
//   id: number;
//   name: string;
//   nameBn: string;
//   slug: string;
//   icon: string;
// }

// const Navlinks = () => {
//   const [data, setData] = useState<NavLink[]>([]);
//   const pathname = usePathname();

//   useEffect(() => {
//     const getData = async () => {
//       const response = await fetch(
//         "https://openapi.programming-hero.com/api/bazardor/categories"
//       );
//       const categories: NavLink[] = await response.json();
//       setData(categories);
//     };

//     getData();
//   }, []);

//   return (
//     <nav className="flex max-w-291 justify-start gap-4 py-2 text-black">
//       {data.map((link) => (
//         <Link
//           key={link.id}
//           href={`/category/${link.slug}`}
//           className={`rounded-lg px-4 py-2 ${
//             pathname === `/category/${link.slug}`
//               ? "bg-green-500 text-white"
//               : "bg-gray-200 text-gray-700"
//           }`}
//         >
//           {link.icon} {link.nameBn}
//         </Link>
//       ))}
//     </nav>
//   );
// };

// export default Navlinks;




"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavLink {
  id: number;
  name: string;
  nameBn: string;
  slug: string;
  icon: string;
}

const Navlinks = () => {
  const [data, setData] = useState<NavLink[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://openapi.programming-hero.com/api/bazardor/categories"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }

        const categories: NavLink[] = await response.json();
        setData(categories);
      } catch (error) {
        console.error("Could not load categories:", error);
      }
    };

    getData();
  }, []);

  return (
    <nav
      aria-label="পণ্যের ক্যাটাগরি"
      className="flex w-full gap-2 overflow-x-auto overscroll-x-contain py-2 sm:gap-3 lg:flex-wrap lg:overflow-visible"
    >
      {data.map((link) => {
        const href = `/category/${link.slug}`;
        const isActive = pathname === href;

        return (
          <Link
            key={link.id}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`shrink-0 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-4 sm:text-base ${
              isActive
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-800"
            }`}
          >
            {link.icon} {link.nameBn}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navlinks;
