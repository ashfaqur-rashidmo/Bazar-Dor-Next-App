import CategoryProducts from "@/app/components/CategoryProducts";
import { notFound } from "next/navigation";


export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Get the selected category
  const categoryResponse = await fetch(`https://api.api-store.workers.dev/api/bazardor/categories/${slug}`);

  if (!categoryResponse.ok) {
    notFound();
  }

  const category = await categoryResponse.json();

  // Get only products belonging to this category
  const productsResponse = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`
  );

  if (!productsResponse.ok) {
    throw new Error("Failed to load products");
  }

  const products = await productsResponse.json();

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-5 sm:px-6">
      <div className="mx-auto max-w-[1560px]">
        {/* Category heading */}
        <section className="mb-4 flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-3xl">
            {category.categoryIcon ?? category.icon ?? "🛒"}
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              {category.nameBn}
            </h1>

            <p className="text-sm text-gray-500">
              {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </section>

        {/* Product sorting and cards */}
        <CategoryProducts products={products} />
      </div>
    </main>
  );
}