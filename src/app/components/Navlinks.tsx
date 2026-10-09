import Link from 'next/link';
import React from 'react';

const Navlinks = async() => {
    const navLinks = await fetch("https://api.api-store.workers.dev/api/bazardor/categories")
    const data = await navLinks.json()
    console.log("Navlinks Data: ",data)

    return (
        <nav className='max-w-[1164] flex justify-start gap-4  text-black py-2'>
            {
                data.map((link) => (
                    <Link key={link.id} href={`/category/${link.slug}`} className="">{link.icon}
                    <p>{link.nameBn}</p>
                    </Link>
                    
                ))
            }
        </nav>
    );
};

export default Navlinks;