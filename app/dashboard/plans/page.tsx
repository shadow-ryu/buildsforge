"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import plansData, { Plan } from "@/lib/plans"; // Import type and default

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PlansPage() {
  const router = useRouter();
  const { user } = useUser();
  // @ts-expect-error plansData
  const plans: Plan[] = plansData; // Type the plans array explicitly

  return (
    <div className="bg-[#0f0f11] min-h-screen text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-400 hover:text-white"
        >
          <ArrowLeft className="mr-1 h-5 w-5" />
          <span className="text-sm font-medium">Back</span>
        </button>
        <h1 className="text-lg font-semibold text-center flex-1">Plans</h1>
        <div className="w-10" /> {/* Spacer to center the title */}
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-6 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {plans.map((plan: Plan) => (
          <Card
            key={plan.name}
            className="bg-[#1a1a1c] text-white rounded-2xl border border-gray-800 flex flex-col"
          >
            <CardContent className="p-5 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-lg font-bold mb-2">{plan.name}</h2>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-md font-semibold text-purple-500">
                    {plan.price}
                  </p>
                  {plan.discount && (
                    <span className="text-sm text-green-400">
                      {plan.discount}
                    </span>
                  )}
                </div>
                <ul className="space-y-1 text-sm text-gray-400 mb-4">
                  {plan.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
              </div>

              {/* Optional chaining in case some plans don't include URLs */}
              {plan?.url ? (
                <form
                  action={`${plan.url}?checkout[discount_code]=IZNTK1NG`}
                  method="POST"
                  target="_blank"
                >
                  {user && (
                    <input
                      type="hidden"
                      name="checkout[email]"
                      value={user.emailAddresses[0]?.emailAddress}
                    />
                  )}
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Choose Plan
                  </Button>
                </form>
              ) : (
                <p className="text-sm text-gray-500 text-center">
                  No card required
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
