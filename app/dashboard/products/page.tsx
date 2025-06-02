"use client";

import React from "react";
import Link from "next/link";
import { Product } from "@/generated/prisma";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <div className="w-full min-h-screen bg-[#0f0f11] px-6 md:px-12 py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Your Products
        </h1>
        <Link href="/dashboard/products/new">
          <div
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-purple-500 hover:bg-purple-600 text-white"
            )}
          >
            Create New Product
          </div>
        </Link>
      </div>

      {loading ? (
        <div className="space-y-4 mt-10">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-24 bg-purple-900/10 rounded-lg animate-pulse"
            />
          ))}
        </div>
      ) : error ? (
        <div className="text-red-400 text-center py-12">{error}</div>
      ) : products.length === 0 ? (
        <div className="text-center text-gray-400 mt-24">
          No products yet.
          <div className="mt-4">
            <Link
              href="/dashboard/products/new"
              className="text-purple-400 underline text-sm"
            >
              Create your first product →
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const progress = Number(product.progress ?? 0);
            return (
              <Link key={product.id} href={`/dashboard/products/${product.id}`}>
                <Card className="bg-[#1a1b22] border border-purple-900 hover:border-purple-700 transition shadow-md">
                  <CardHeader>
                    <CardTitle className="text-white">{product.name}</CardTitle>
                    <p className="text-sm text-gray-400">
                      {product.description || "No description"}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center text-xs text-gray-400">
                      <div className="space-x-1">
                        <Badge
                          variant="default"
                          className="bg-purple-600 text-white"
                        >
                          {progress}% complete
                        </Badge>
                        {product.active && (
                          <Badge
                            variant="outline"
                            className="text-purple-400 border-purple-700"
                          >
                            Active
                          </Badge>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="font-mono">
                          🔥 {product.currentStreak}d streak
                        </div>
                      </div>
                    </div>
                    <Progress value={progress} className="h-2 bg-purple-800" />
                    <div className="text-xs text-gray-500">
                      Deadline:{" "}
                      <span className="text-gray-300">
                        {new Date(product.deadline!).toLocaleDateString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
