"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface StripeProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  priceId: string;
  currency: string;
  interval: string;
}

export default function PricingPage() {
  const [products, setProducts] = useState<StripeProduct[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("/api/stripe/products")
      .then((res) => {
        setProducts(res.data?.products || []);
        setStatus("success");
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setStatus("error");
      });
  }, []);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-300 bg-[#0f0f11]">
        Loading pricing...
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400 bg-[#0f0f11]">
        Failed to load plans. Please try again later.
      </div>
    );
  }

  const handleSubscribe = async (priceId: string) => {
    if (!priceId) {
      alert("Missing price ID in URL");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        body: JSON.stringify({ priceId }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert("Checkout failed.");
        setLoading(false);
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0f0f11] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h1>
        <p className="text-purple-300 text-sm max-w-xl mx-auto">
          Pick the plan that fits your solo founder journey — from MVP to
          momentum.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {products.map((product) => {
          const displayPrice = product.price
            ? `$${(product.price / 100).toFixed(2)}`
            : "N/A";

          const interval =
            product.interval === "month" ? "month" : product.interval;

          return (
            <Card
              key={product.id}
              className="bg-[#181A20] border border-purple-800 hover:border-purple-600 transition shadow-md"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-white">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm text-purple-300">
                  {displayPrice} / {interval}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 text-sm text-gray-300">
                <ul className="list-disc list-inside space-y-1">
                  {product.description
                    .split("✅")
                    .filter(Boolean)
                    .map((line, i) => (
                      <li key={i} className="text-sm text-gray-300">
                        {line.trim()}
                      </li>
                    ))}
                </ul>

                <div className="pt-4">
                  <Button onClick={() => handleSubscribe(product.priceId)} disabled={loading}>
                    {loading ? "Redirecting…" : "Subscribe"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
