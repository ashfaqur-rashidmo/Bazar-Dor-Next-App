import React from 'react';

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

    type ProductCardProps = {
        item: Product;
        type?: "increase" | "decrease" | "all";
    };

const ProductCard = ({ item, type = "all" }: ProductCardProps) => {
   
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

  const isUp = item.change.dir === "up"; 
  const isDown = item.change.dir === "down"; 
  const changeColor = isUp ? "bg-red-50 text-red-600" : isDown ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-600"; 

  const changeIcon = isUp ? "▲" : isDown ? "▼" : "—";


    return (
        <div
              key={item.id}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-3xl">
                  {item.image}
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    {item.nameBn}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {getUnit(item.unit)}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-500">
                আজকের দাম
              </p>

              <div className="mt-1 flex items-center justify-between gap-2">
                <p className="text-lg font-bold text-gray-900">
                  {item.today} টাকা
                </p>
               
                <span className={`rounded-full bg-green-50 px-2 py-1 text-sm font-semibold ${changeColor}`}>
                  {changeIcon} +{Math.abs(item.change.pct).toFixed(1)}%
                </span>
              </div>
            </div>
    );
};

export default ProductCard;