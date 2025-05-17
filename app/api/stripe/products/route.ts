import stripe from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await stripe.products.list({ active: true });

    // Attach prices to each product
    const productsWithPrices = await Promise.all(
      products.data.map(async (product) => {
        const prices = await stripe.prices.list({
          product: product.id,
          active: true,
        });

        return {
          id: product.id,
          name: product.name,
          description: product.description,
          price: prices.data[0]?.unit_amount,
          priceId: prices.data[0]?.id,
          currency: prices.data[0]?.currency,
          interval: prices.data[0]?.recurring?.interval,
        };
      })
    );

    return NextResponse.json({ products: productsWithPrices });
  } catch (error) {
    console.error("Error fetching products from Stripe:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
