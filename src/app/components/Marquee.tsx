import Link from 'next/link';
import React from 'react';
import MarqueeText from 'react-marquee-text';

interface Product {
    id: number;
    name: string;
    nameBn: string;
    slug: string;
    categoryIcon: string;
    today: number;
    unit: string;
    change: {
        dir: string;
        pct: number;
    };
}

const Marquee = async() => {
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products`)
    const data: Product[] = await res.json()
    console.log("Marquee Data: ",data)

    return (
        <div className="border-y border-gray-200 bg-gray-50 py-2">
            <MarqueeText direction="right" duration={15} className="flex gap-4">
                {
                    data.map((item) => (
                        <Link href={`/products/${item.slug}`} key={item.id} className="mx-4 gap-1.5 inline-flex items-center text-sm text-gray-700 hover:text-gray-900">
                            {/* emoji product name */}
                            <span>{item.categoryIcon}</span>

                            <span>{item.nameBn}</span>

                            <span className='flex gap-1.5'>{item.today}টাকা/{item.unit == "kg" ? "কেজি" : item.unit}</span>

                            <span className={`font-semibold ${ item.change.dir == "Up" ? "text-red-600" : "text-green-600" }`} > {item.change.dir ? "▲" : "▼"} {item.change.pct}% </span>
                        </Link>
                    ))
                }
            </MarqueeText>
        </div>
    );
};

export default Marquee;