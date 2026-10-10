

// import { link } from 'fs/promises';
// import Link from 'next/link';

// interface NavLink {
//     id: number;
//     name: string;
//     nameBn: string;
//     slug: string;
//     icon: string;
// }

// const Navlinks = async() => {
//     // const navLinks = await fetch("https://api.api-store.workers.dev/api/bazardor/categories")
//     const navLinks = await fetch("https://api.abcz.workers.dev/api/bazardor/categories")
//     const data: NavLink[] = await navLinks.json()
//     console.log("Navlinks Data: ",data)

//     // const [data, setData] = useState<NavLink[]>([]);



//     return (
//         <nav className='max-w-[1164] flex justify-start gap-4  text-black py-2'>
//             {
//                 data.map((link) => (
//                     <Link key={link.id} href={`/category/${link.slug}`} className={`rounded-lg px-4 py-2 ${ `/category/${link.slug}` ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}>{link.icon}
//                     <p>{link.nameBn}</p>
//                     </Link>
                    
//                 ))
//             }
//         </nav>
//     );
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
      const response = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/categories"
      );
      const categories: NavLink[] = await response.json();
      setData(categories);
    };

    getData();
  }, []);

  return (
    <nav className="flex max-w-[1164px] justify-start gap-4 py-2 text-black">
      {data.map((link) => (
        <Link
          key={link.id}
          href={`/category/${link.slug}`}
          className={`rounded-lg px-4 py-2 ${
            pathname === `/category/${link.slug}`
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {link.icon} {link.nameBn}
        </Link>
      ))}
    </nav>
  );
};

export default Navlinks;