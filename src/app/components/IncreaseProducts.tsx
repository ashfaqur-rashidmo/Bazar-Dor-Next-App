
import React from "react";
import IncreaseProductCard from "./IncreaseProductCard";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  nameBn: string;
  unit: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
  image: string;
}

const IncreaseProducts = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  console.log("Increase Products Data:", data);

  const increaseProducts = data.filter(
    (item: {
      id: number;
      change: { dir: string; pct: number };
    }) => item.change.dir === "up"
  ).sort((a: { change: { pct: number } }, 
    b: { change: { pct: number } }) => b.change.pct - a.change.pct).slice(0,6);

 

  return (
    <section className="mx-auto mt-8 w-full max-w-[1120px] px-3 sm:mt-10 sm:px-4">
      {/* Section heading */}
      <div className="mb-5 flex items-center gap-2">
        <span className="font-bold text-red-600">▲</span>
        <h2 className="text-xl font-bold">
          আজ দাম বেড়েছে
        </h2>
      </div>

      {/* Product cards */}
      {increaseProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {increaseProducts.map((item) => (
            <ProductCard item={item} key={item.id}/>
          ))}
        </div>
      ) : (
        <p className="rounded-lg bg-gray-50 p-5 text-center text-gray-600">
          আজ কোনো পণ্যের দাম বাড়েনি।
        </p>
      )}
    </section>
  );
};

export default IncreaseProducts;
