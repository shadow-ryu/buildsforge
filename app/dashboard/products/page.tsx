"use client";

import React from "react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { Product } from "@prisma/client";

export default function ProductsPage() {
  const [products, setProducts] = React.useState<Partial<Product>[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/products")
      .then(async (res) => {
        const data = await res.json();
        if (!data.success)
          throw new Error(data.error || "Failed to fetch products");
        setProducts(data.products);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="mx-auto w-full p-12 min-h-screen bg-[#181A20] shadow-lg border border-[#23262F]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#F4F4F5] tracking-tight">
          Your Products
        </h1>
        <Link
          href="/products/new"
          className="bg-[#FBBF24] text-[#181A20] font-bold px-4 py-2 rounded shadow hover:bg-[#fbbf24]/90 transition"
        >
          Create New Product
        </Link>
      </div>
      {loading ? (
        <div className="text-[#A1A1AA] text-center py-12">
          Loading products...
        </div>
      ) : error ? (
        <div className="text-red-400 text-center py-12">{error}</div>
      ) : (
        <div className="space-y-6 mt-8">
          {products.length === 0 ? (
            <div className="text-[#A1A1AA] text-center py-12">
              No products found.
            </div>
          ) : (
            products.map((product) => (
              <Link
                key={product.id}
                href={`/dashboard/products/${product.id}`}
                className="block bg-[#23262F] border border-[#23262F] p-6 rounded-lg shadow-sm hover:bg-[#23262F]/90 transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-lg text-[#F4F4F5]">
                    {product.name}
                  </span>
                  <span className="text-xs text-[#FBBF24]">
                    {/* {product.percent}% complete */}
                  </span>
                </div>
                <Progress
                  // value={product.percent}
                  value={50}
                  className="h-2 rounded-full bg-[#FBBF24]/30"
                />
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
