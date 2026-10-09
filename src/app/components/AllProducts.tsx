import React from 'react';
import ProductCard from './ProductCard';

const AllProducts = async () => {
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

  console.log("Decrease Products Data:", data);

    return (
        <section className="mx-auto mt-8 w-full max-w-[1120px] px-3 sm:mt-10 sm:px-4">
      {/* Section heading */}
      <div className="mb-5 items-center gap-2">
       
        <h2 className="text-xl font-bold">
          সব পণ্য <br />
          
        </h2>
        <p className='text-gray-600 font-semibold mt-3'>মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
      </div>

      {/* Product cards */}
      
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {data.map((item) => (
            <ProductCard item={item} key={item.id}/>
          ))}
        </div>
      
      
    </section>
    );
};

export default AllProducts;