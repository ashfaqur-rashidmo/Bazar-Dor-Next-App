
import ProductCard, { type Product } from "./ProductCard";

const IncreaseProducts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: Product[] = await res.json();

  const increaseProducts = data
    .filter((item) => item.change.dir.toLowerCase() === "up")
    .sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct))
    .slice(0, 6);

  return (
    <section className="mx-auto mt-8 w-full max-w-7xl scroll-mt-24 px-3 sm:mt-10 sm:px-5 lg:px-6">
      <div className="mb-4 flex items-center gap-2 sm:mb-5">
        <span className="font-bold text-red-600">▲</span>
        <h2 className="text-lg font-bold sm:text-xl">
          আজ দাম বেড়েছে
        </h2>
      </div>

      {increaseProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {increaseProducts.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg bg-gray-50 p-4 text-center text-sm text-gray-600 sm:p-5 sm:text-base">
          আজ কোনো পণ্যের দাম বাড়েনি।
        </p>
      )}
    </section>
  );
};

export default IncreaseProducts;
