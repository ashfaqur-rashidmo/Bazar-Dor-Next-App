// import Link from 'next/link';
// import React from 'react';

// export interface Product {
//         id: number;
//         nameBn: string;
//         unit: string;
//         today: number;
//         change: {
//             dir: string;
//             pct: number;
//         };
//         image: string;
//         slug: string;
//     }

//     type ProductCardProps = {
//         item: Product;
//         type?: "increase" | "decrease" | "all";
//     };

// const ProductCard = ({ item, type = "all" }: ProductCardProps) => {
   
//       const getUnit = (unit: string) => {
//     switch (unit) {
//       case "kg":
//         return "প্রতি কেজি";
//       case "litre":
//         return "প্রতি লিটার";
//       case "piece":
//         return "প্রতি পিস";
//       case "dozen":
//         return "প্রতি ডজন";
//       default:
//         return unit;
//     }
//   };

//   const isUp = item.change.dir === "up"; 
//   const isDown = item.change.dir === "down"; 
//   const changeColor = isUp ? "bg-red-50 text-red-600" : isDown ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-600"; 

//   const changeIcon = isUp ? "▲" : isDown ? "▼" : "—";


//     return (
//         <Link href={`/product/${item.slug}`}
//               key={item.id}
//               className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
//             >
//               <div className="mb-4 flex items-center gap-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-3xl">
//                   {item.image}
//                 </div>

//                 <div>
//                   <h3 className="font-bold text-gray-900">
//                     {item.nameBn}
//                   </h3>
//                   <p className="text-sm text-gray-500">
//                     {getUnit(item.unit)}
//                   </p>
//                 </div>
//               </div>

//               <p className="text-sm text-gray-500">
//                 আজকের দাম
//               </p>

//               <div className="mt-1 flex items-center justify-between gap-2">
//                 <p className="text-lg font-bold text-gray-900">
//                   {item.today} টাকা
//                 </p>
               
//                 <span className={`rounded-full bg-green-50 px-2 py-1 text-sm font-semibold ${changeColor}`}>
//                   {changeIcon} +{Math.abs(item.change.pct).toFixed(1)}%
//                 </span>
//               </div>
//             </Link>
//     );
// };

// export default ProductCard;




import Link from "next/link";

export interface Product {
  id: number;
  nameBn: string;
  unit: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
  image: string;
  slug: string;
}

type ProductCardProps = {
  item: Product;
};

const ProductCard = ({ item }: ProductCardProps) => {
  const getUnit = (unit: string) => {
    switch (unit) {
      case "kg":
        return "প্রতি কেজি";
      case "litre":
        return "প্রতি লিটার";
      case "piece":
        return "প্রতি পিস";
      case "dozen":
        return "প্রতি ডজন";
      default:
        return unit;
    }
  };

  const direction = item.change.dir.toLowerCase();
  const isUp = direction === "up";
  const isDown = direction === "down";

  const changeColor = isUp
    ? "bg-red-50 text-red-700"
    : isDown
      ? "bg-green-50 text-green-700"
      : "bg-gray-100 text-gray-600";

  const changeIcon = isUp ? "▲" : isDown ? "▼" : "—";
  const changeSign = isUp ? "+" : isDown ? "−" : "";

  return (
    <Link
      href={`/product/${item.slug}`}
      className="flex h-full min-w-0 flex-col rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 sm:p-4"
    >
      <div className="mb-4 flex min-w-0 items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50 text-2xl sm:h-12 sm:w-12 sm:text-3xl">
          {item.image}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="break-words text-sm font-bold leading-6 text-gray-900 sm:text-base">
            {item.nameBn}
          </h3>

          <p className="text-xs text-gray-500 sm:text-sm">
            {getUnit(item.unit)}
          </p>
        </div>
      </div>

      <div className="mt-auto">
        <p className="text-xs text-gray-500 sm:text-sm">আজকের দাম</p>

        <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
          <p className="text-base font-bold text-gray-900 sm:text-lg">
            {item.today.toLocaleString("bn-BD")} টাকা
          </p>

          <span
            className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold sm:text-sm ${changeColor}`}
          >
            <span>{changeIcon}</span>
            <span>
              {changeSign}
              {Math.abs(item.change.pct).toFixed(1)}%
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
