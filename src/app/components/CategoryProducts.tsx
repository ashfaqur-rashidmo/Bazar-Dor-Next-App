"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  unit: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
  image: string;
}

interface Props {
  products: Product[];
}

export default function CategoryProducts({ products }: Props) {
  const [sortBy, setSortBy] = useState("featured");

  const sortedProducts = useMemo(() => {
    const result = [...products];

    if (sortBy === "price-low") {
      result.sort((a, b) => a.today - b.today);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.today - a.today);
    } else if (sortBy === "increase") {
      result.sort((a, b) => b.change.pct - a.change.pct);
    } else if (sortBy === "decrease") {
      result.sort((a, b) => a.change.pct - b.change.pct);
    }

    return result;
  }, [products, sortBy]);

  return (
    <>
      <div className="mb-4 flex items-center justify-end gap-3 rounded-xl border border-gray-200 bg-white p-3 sm:p-4">
        <span className="text-sm text-gray-600">সাজান</span>

        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          className="select select-bordered select-sm w-36"
          aria-label="পণ্যের তালিকা সাজান"
        >
          <option value="featured">ডিফল্ট</option>
          <option value="price-low">দাম: কম থেকে বেশি</option>
          <option value="price-high">দাম: বেশি থেকে কম</option>
          
        </select>
      </div>

      <p className="mb-3 text-sm text-gray-500">
        মোট {sortedProducts.length}টি পণ্য দেখানো হচ্ছে
      </p>

      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center text-gray-500">
          এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
        </div>
      )}
    </>
  );
}