"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function OptimizedLandingPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const emailInputRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/join-waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setLoading(false);
    setSuccess(true);
    setSuccessMessage(data.message);
    setEmail("");
  };

  return (
    <main className="bg-black text-white px-6">
      {/* Header */}
      <header className="py-6 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/builds-forge.png" alt="Logo" width={28} height={28} />
            <h1 className="text-2xl font-bold">BuildsForge</h1>
          </div>
          <nav className="space-x-6 text-sm text-gray-400">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#proof" className="hover:text-white">
              Proof
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="text-center max-w-4xl mx-auto mt-16 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold leading-tight">
          Your MVP, shipped fast — no more graveyard of ideas.
        </h2>
        <p className="text-zinc-400 text-lg">
          Turn your idea into a product with AI-powered roadmaps, build streaks,
          and progress dashboards.
        </p>

        <p className="text-zinc-500 text-sm max-w-2xl mx-auto">
          I built this because I’ve felt the frustration of starting with
          passion and watching it fade — not from lack of will, but from lack of
          structure. If you’ve ever opened a blank screen, full of ambition but
          unsure what to do next, this is for you. BuildsForge is the tool I
          wish I had — to make daily progress visible, real, and finishable.
        </p>
      </motion.section>

      {/* Visual Proof Section with Tabs */}
      <section id="proof" className="mt-24 text-center max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8">What You&apos;ll Get</h3>
        <Tabs defaultValue="roadmap" className="w-full max-w-4xl mx-auto">
          <TabsList className="flex justify-center space-x-2 mb-6">
            <TabsTrigger value="roadmap">Daily Roadmap</TabsTrigger>
            <TabsTrigger value="dashboard">Build Streak</TabsTrigger>
            <TabsTrigger value="progress">Motivation</TabsTrigger>
          </TabsList>
          <TabsContent value="roadmap">
            <Image
              src="/screenshot-roadmap.png"
              alt="Daily Roadmap"
              width={960}
              height={540}
              className="rounded-xl mx-auto"
            />
          </TabsContent>
          <TabsContent value="dashboard">
            <Image
              src="/screenshot-dashboard.png"
              alt="Build Dashboard"
              width={960}
              height={540}
              className="rounded-xl mx-auto"
            />
          </TabsContent>
          <TabsContent value="progress">
            <Image
              src="/screenshot-progress.png"
              alt="Progress Tracker"
              width={960}
              height={540}
              className="rounded-xl mx-auto"
            />
          </TabsContent>
        </Tabs>
      </section>

      {/* Features */}
      <section id="features" className="mt-24 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">
          Why Builders Love It
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Clarity with next steps",
            "Daily wins, visible progress",
            "Structured focus",
            "No more solo burnout",
          ].map((text, i) => (
            <motion.div
              key={i}
              className="bg-zinc-900 p-6 rounded-xl border border-zinc-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="text-xl font-semibold mb-2">🔥 {text}</h4>
              <p className="text-zinc-400 text-sm">
                Practical tools that keep you moving every day.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA with Waitlist Form */}
      <footer className="mt-32 py-12 border-t border-zinc-800 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Let’s finish what you started.
        </h2>

        {success ? (
          <p className="text-green-500 text-sm mb-4">{successMessage}</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-6"
          >
            <Input
              ref={emailInputRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com"
              className="w-full sm:w-80 "
            />
            <Button
              type="submit"
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 font-semibold rounded-2xl"
            >
              {loading ? "Joining..." : "Join the Wait list Now"}
            </Button>
          </form>
        )}

        <div className="text-sm text-zinc-400 space-x-6">
          <a
            href="https://x.com/shadow_ryuga"
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow on X
          </a>
          <a
            href="https://discord.gg/74mDWYwr9G"
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Discord
          </a>
        </div>

        <p className="text-xs text-zinc-600 mt-6">
          © {new Date().getFullYear()} BuildsForge.
        </p>
      </footer>
    </main>
  );
}
