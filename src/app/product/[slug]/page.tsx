import Link from "next/link";
import { notFound } from "next/navigation";


interface Market {
  market: string;
  division: string;
  min: number;
  max: number;
}

interface Product {
  id: number;
  nameBn: string;
  slug: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  image: string;
  unit: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: string;
    pct: number;
  };
  markets: Market[];
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const response = await fetch(`https://openapi.programming-hero.com/api/bazardor/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: Product[] = await response.json();

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const markets = product.markets ?? [];

  
  const lowestPrice = markets.length
    ? Math.min(...markets.map((market) => market.min))
    : product.today;

  const highestPrice = markets.length
    ? Math.max(...markets.map((market) => market.max))
    : product.today;

  const averagePrice = markets.length
    ? markets.reduce((total, market) => total + (market.min + market.max) / 2, 0) /
      markets.length
    : product.today;

  const getUnit = (unit: string) => {
    switch (unit) {
      case "kg":
        return "কেজি";
      case "litre":
        return "লিটার";
      case "piece":
        return "পিস";
      case "dozen":
        return "ডজন";
      default:
        return unit;
    }
  };

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-5 sm:px-6">
      <div className="mx-auto max-w-291">
       
        <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <Link href="/">হোম</Link>
          <span>›</span>
          <Link href={`/category/${product.category}`}>
            {product.categoryNameBn}
          </Link>
          <span>›</span>
          <span className="text-gray-800">{product.nameBn}</span>
        </div>

        
        <section className="flex flex-col justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-3xl">
              {product.image}
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                {product.nameBn}
              </h1>

              <p className="text-sm text-gray-500">
                {product.categoryNameBn} · {getUnit(product.unit)}
              </p>

              <p className="mt-1 text-sm text-gray-600">
                গতকালের তুলনায় আজকের দাম{" "}
                {product.change.dir === "up"
                  ? "বেড়েছে"
                  : product.change.dir === "down"
                    ? "কমেছে"
                    : "অপরিবর্তিত"}{" "}
                · {Math.abs(product.change.pct).toFixed(1)}%
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-[#f0f5f0] p-4 text-center sm:min-w-28">
            <p className="text-xs text-gray-500">আজকের দাম</p>
            <p className="text-2xl font-bold text-gray-900">
              {product.today}
            </p>
            <p className="text-xs text-gray-500">
              টাকা / {getUnit(product.unit)}
            </p>

            <p
              className={`mt-1 text-xs font-semibold ${
                product.change.dir === "up"
                  ? "text-red-600"
                  : product.change.dir === "down"
                    ? "text-green-700"
                    : "text-gray-500"
              }`}
            >
              {product.change.dir === "up"
                ? "▲"
                : product.change.dir === "down"
                  ? "▼"
                  : "—"}{" "}
              {Math.abs(product.change.pct).toFixed(1)}%
            </p>
          </div>
        </section>

       
        <section className="mt-4 rounded-xl border border-gray-200 bg-white p-4">
          <h2 className="mb-4 font-bold text-gray-800">
            দামের সংক্ষিপ্তসার
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-sm text-gray-600">সর্বনিম্ন দাম</p>
              <p className="mt-1 font-bold text-green-600">
                {lowestPrice} টাকা
              </p>
              <p className="text-xs text-gray-500">বাজারের সর্বনিম্ন মূল্য</p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-sm text-gray-600">সর্বোচ্চ দাম</p>
              <p className="mt-1 font-bold text-red-600">
                {highestPrice} টাকা
              </p>
              <p className="text-xs text-gray-500">বাজারের সর্বোচ্চ মূল্য</p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-sm text-gray-600">গড় দাম</p>
              <p className="mt-1 font-bold text-green-600">
                {averagePrice.toFixed(2)} টাকা
              </p>
              <p className="text-xs text-gray-500">প্রতি বাজারের min ও max-এর গড়</p>
            </div>
          </div>
        </section>

        
        <section className="mt-4 rounded-xl border border-gray-200 bg-white p-4">
          <h2 className="mb-4 font-bold text-gray-800">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="bg-gray-50 text-gray-500">
                <tr>
                  <th className="px-3 py-3">বাজার</th>
                  <th className="px-3 py-3">বিভাগ</th>
                  <th className="px-3 py-3 text-right">সর্বনিম্ন</th>
                  <th className="px-3 py-3 text-right">সর্বোচ্চ</th>
                  <th className="px-3 py-3 text-right">গড়</th>
                </tr>
              </thead>

              <tbody>
                {markets.map((market, index) => (
                  <tr
                    key={`${market.market}-${index}`}
                    className="border-t border-gray-200 hover:bg-green-50"
                  >
                    <td className="px-3 py-3">{market.market}</td>
                    <td className="px-3 py-3">{market.division}</td>
                    <td className="px-3 py-3 text-right">
                      {market.min} টাকা
                    </td>
                    <td className="px-3 py-3 text-right">
                      {market.max} টাকা
                    </td>
                    <td className="px-3 py-3 text-right font-medium">
                      {((market.min + market.max) / 2).toFixed(2)} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

       
        
      </div>
    </main>
  );
}