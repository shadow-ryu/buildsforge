"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { completeOnboarding } from "./_actions";

export default function OnboardingPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  const [step, setStep] = useState(0);
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
  }, [isLoaded, user]);

  const mutation = useMutation({
    mutationFn: async (payload: typeof userData) => {
      await axios.post("/api/onboarding/user", payload);
      await completeOnboarding();
      await user?.reload?.();
    },
    onSuccess: () => {
      router.push("/dashboard");
    },
    onError: (err) => {
      console.error("Onboarding failed:", err);
    },
  });

  const handleChange = (key: keyof typeof userData, value: string) => {
    setUserData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(userData);
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  if (mutation.isPending) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-12">
        <Card className="w-full max-w-md bg-black border border-purple-700 rounded-xl shadow-2xl">
          <CardHeader>
            <CardTitle className="text-center text-white text-lg">
              Setting up your profile...
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-1/3 bg-[#2E2E2E]" />
                <Skeleton className="h-10 w-full bg-[#2E2E2E]" />
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    );
  }

  if (mutation.isError) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-12">
        <Card className="w-full max-w-md bg-black border border-purple-800 rounded-2xl shadow-2xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-400">
              Error
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">
              We&apos;re sorry, something went wrong. Please try again.
            </p>
          </CardContent>
        </Card>
      </main>
    );
  }

  if (mutation.isSuccess) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-12">
        <Card className="w-full max-w-md bg-black border border-purple-800 rounded-2xl shadow-2xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-400">
              Success
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">
              Your profile has been created successfully.
            </p>
            <p className="text-gray-300">
              You will be redirected to the dashboard.
            </p>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-12">
      <Card className="w-full max-w-md bg-black border border-purple-800 rounded-2xl shadow-2xl overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-400 transition-all duration-500">
            {step === 0 ? "Let’s stop the cycle." : "Let’s get to know you."}
          </CardTitle>
        </CardHeader>

        <CardContent className="relative">
          <AnimatePresence mode="wait">
            {step === 0 ? (
              <motion.div
                key="step-0"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <p className="text-gray-300">
                  No more graveyard of half-finished projects. This time, you’ll
                  finish — and we’ll help you stick with it.
                </p>
                <Button
                  onClick={() => setStep(1)}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full py-2 transition"
                >
                  Get Started
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="step-1"
                onSubmit={handleSubmit}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm mb-1 text-white">Name</label>
                  <Input
                    value={userData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="bg-black text-white placeholder-gray-500 border border-purple-500"
                    placeholder="e.g. Vishnu"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-white">
                    Username
                  </label>
                  <Input
                    value={userData.username}
                    onChange={(e) => handleChange("username", e.target.value)}
                    className="bg-black text-white placeholder-gray-500 border border-purple-500"
                    placeholder="e.g. vishnukulkarni"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-white">
                    Your Role
                  </label>
                  <Input
                    value={userData.role}
                    onChange={(e) => handleChange("role", e.target.value)}
                    className="bg-black text-white placeholder-gray-500 border border-purple-500"
                    placeholder="e.g. Indie hacker, solo founder"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-white">
                    How did you discover BuildsForge?{" "}
                    <span className="text-gray-400">(optional)</span>
                  </label>
                  <Input
                    value={userData.discovery}
                    onChange={(e) => handleChange("discovery", e.target.value)}
                    className="bg-black text-white placeholder-gray-500 border border-purple-500"
                    placeholder="e.g. Twitter, Reddit"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full py-2 transition"
                >
                  {mutation.isPending ? "Creating profile..." : "Continue"}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </main>
  );
}
