
// import React from "react";
// import ProductCard from "./ProductCard";

// interface Product {
//   id: number;
//   nameBn: string;
//   unit: string;
//   today: number;
//   change: {
//     dir: string;
//     pct: number;
//   };
//   image: string;
//   slug: string;
// }


// const DecreaseProducts = async () => {
//   const res = await fetch(
  
//     "https://openapi.programming-hero.com/api/bazardor/products",
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   const data: Product[] = await res.json();

//   console.log("Decrease Products Data:", data);

//   const decreaseProducts = data.filter(
//     (item: {
//       id: number;
//       change: { dir: string; pct: number };
//     }) => item.change.dir === "down"
//   ).sort((a: { change: { pct: number } }, 
//     b: { change: { pct: number } }) => a.change.pct - b.change.pct).slice(0,6);

 

//   return (
//     <section className="mx-auto mt-8 w-full max-w-280 px-3 sm:mt-10 sm:px-4">
//       {/* Section heading */}
//       <div className="mb-5 flex items-center gap-2">
//         <span className="font-bold text-green-600">▼</span>
//         <h2 className="text-xl font-bold">
//           আজ দাম কমেছে
//         </h2>
//       </div>

//       {/* Product cards */}
//       {decreaseProducts.length > 0 ? (
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
//           {decreaseProducts.map((item) => (
//             <ProductCard item={item} key={item.id}/>
//           ))}
//         </div>
//       ) : (
//         <p className="rounded-lg bg-gray-50 p-5 text-center text-gray-600">
//           আজ কোনো পণ্যের দাম বাড়েনি।
//         </p>
//       )}
//     </section>
//   );
// };

// export default DecreaseProducts;





import ProductCard, { type Product } from "./ProductCard";

const DecreaseProducts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: Product[] = await res.json();

  const decreaseProducts = data
    .filter((item) => item.change.dir.toLowerCase() === "down")
    .sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct))
    .slice(0, 6);

  return (
    <section className="mx-auto mt-8 w-full max-w-7xl px-3 sm:mt-10 sm:px-5 lg:px-6">
      <div className="mb-4 flex items-center gap-2 sm:mb-5">
        <span className="font-bold text-green-600">▼</span>
        <h2 className="text-lg font-bold sm:text-xl">
          আজ দাম কমেছে
        </h2>
      </div>

      {decreaseProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {decreaseProducts.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg bg-gray-50 p-4 text-center text-sm text-gray-600 sm:p-5 sm:text-base">
          আজ কোনো পণ্যের দাম কমেনি।
        </p>
      )}
    </section>
  );
};

export default DecreaseProducts;
