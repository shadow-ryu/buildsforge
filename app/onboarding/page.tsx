"use client";

import { useState, useEffect } from "react";
import {  useUser } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import { completeOnboarding } from "./_actions";

export default function OnboardingPage() {
  const { user, isLoaded } = useUser();
  const [step, setStep] = useState(0);
  const [userLoading, setUserLoading] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    name: "",
    role: "",
    discovery: "",
  });

  useEffect(() => {
    if (isLoaded && user) {
      setUserData((prev) => ({
        ...prev,
        name: prev.name || user.firstName || "",
        username: prev.username || user.username || "",
        role: prev.role || (user.publicMetadata?.role as string) || "",
        discovery:
          prev.discovery || (user.publicMetadata?.discovery as string) || "",
      }));
    }
  }, [user, isLoaded]);

  const { user: currentUser } = useUser();
  const router = useRouter();

  const handleUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUserLoading(true);

    const response = await fetch("/api/onboarding/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userData }),
    });

  

    if (!response.ok) {
      console.error("Failed to onboard user");
      return;
    }

    await completeOnboarding();
    await currentUser?.reload();
    setUserLoading(false);
    router.push("/dashboard");
  };
  const handleUserChange = (key: string, value: string) => {
    setUserData({ ...userData, [key]: value });
  };

  if (userLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4 py-12 bg-[#0E0F12] text-[#F8F9FA]">
        <Card className="w-full max-w-xl mx-auto border-none bg-[#1A1D23] shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-center text-[#F8F9FA]">
              Setting up your profile...
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 py-6">
            <div className="space-y-2">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-10 w-full" />
            </div>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 bg-[#0E0F12] text-[#F8F9FA]">
      <Card className="w-full max-w-xl border-none bg-[#1A1D23] shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl font-semibold text-[#3ABEFF] ">
            {step === 0
              ? "Let’s stop the cycle."
              : step === 1
              ? "Let’s get to know you."
              : step === 2
              ? "Let’s shape your next launch."
              : ""}
          </CardTitle>
        </CardHeader>

        <CardContent>
          {step === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="mb-6 text-[#9CA3AF]">
                No more graveyard of half-finished projects. This time, you’ll
                finish. And we’ll help you stick with it.
              </p>
              <Button
                onClick={() => setStep(1)}
                variant="ghost"
                className="bg-blue-600 text-white rounded-full px-5 py-2 font-semibold text-base hover:bg-blue-700 flex items-center gap-2 mb-4 hover:text-[#F8F9FA]"
              >
                Get Started
              </Button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="flex flex-col gap-2">
                <label className="block mb-2 text-[#F8F9FA] font-medium">
                  What should we call you?
                </label>
                <Input
                  placeholder="e.g. Vishnu"
                  className="placeholder-[#9CA3AF] text-[#F8F9FA] bg-[#1A1D23] border border-[#3ABEFF]"
                  value={userData.name}
                  onChange={(e) => handleUserChange("name", e.target.value)}
                />

                <label className="block mb-2 text-[#F8F9FA] font-medium">
                  What should username be?
                </label>
                <Input
                  placeholder="e.g. vishnukulkarni"
                  className="placeholder-[#9CA3AF] text-[#F8F9FA] bg-[#1A1D23] border border-[#3ABEFF]"
                  value={userData.username}
                  onChange={(e) => handleUserChange("username", e.target.value)}
                />

                <label className="block mt-4 mb-2 text-[#F8F9FA] font-medium">
                  What’s your role in this journey?
                </label>
                <Input
                  placeholder="e.g. Indie hacker, solo founder"
                  className="placeholder-[#9CA3AF] text-[#F8F9FA] bg-[#1A1D23] border border-[#3ABEFF]"
                  value={userData.role}
                  onChange={(e) => handleUserChange("role", e.target.value)}
                />

                <label className="block mt-4 mb-2 text-[#F8F9FA] font-medium">
                  How did you discover BuildsForge?{" "}
                  <span className="text-[#9CA3AF]">(Optional)</span>
                </label>
                <Input
                  placeholder="e.g. Twitter, Reddit, Indie Hackers"
                  className="placeholder-[#9CA3AF] text-[#F8F9FA] bg-[#1A1D23] border border-[#3ABEFF]"
                  value={userData.discovery}
                  onChange={(e) =>
                    handleUserChange("discovery", e.target.value)
                  }
                />

                <Button
                  onClick={handleUserSubmit}
                  variant="ghost"
                  className="w-full mt-4 bg-[#3ABEFF] border border-[#3ABEFF] text-[#0E0F12] font-semibold hover:bg-[#1A8ED1] hover:border-[#1A8ED1] hover:text-[#F8F9FA] transition-colors"
                  disabled={userLoading}
                >
                  {userLoading ? "Creating your profile..." : "Next"}
                </Button>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
