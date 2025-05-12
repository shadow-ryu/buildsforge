"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const emailInputRef = useRef<HTMLInputElement>(null);

  const focusEmailInput = () => {
    emailInputRef.current?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("/api/join-waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      console.error("Failed to join waitlist");
      return;
    }
    const data = await response.json();
    console.log("Joined waitlist successfully");
    setEmail("");
    setLoading(false);
    setSuccess(true);
    setSuccessMessage(data.message);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 ">
      <header className="w-full py-6 px-6 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/builds-forge.png"
              className="w-6 h-8"
              alt="Logo"
              width={24}
              height={24}
            />
            <div className="text-2xl font-bold text-white">BuildsForge</div>
          </div>
          <nav className="space-x-4 text-sm text-gray-300">
            <a href="#features" className="hover:text-white">
              Features
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center space-y-6 mt-6"
        id="waitlist"
      >
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-zinc-100">
          Stop abandoning projects.
        </h1>
        <p className="text-xl text-zinc-300">
          You start with energy. Then life hits. You get pulled into other
          things. You forget. You stall.
        </p>
        <p className="text-md text-zinc-400">
          You’re not lazy. You’re not broken. But you’re building alone. That’s
          the problem.
        </p>

        {success ? (
          <p className="text-green-500 mt-2">{successMessage}</p>
        ) : (
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Input
              type="email"
              ref={emailInputRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="bg-white text-black w-full sm:w-80"
            />
            <Button
              variant="default"
              className="px-6 py-3 text-base font-semibold rounded-2xl bg-[#009FCC] text-white transition-colors duration-300 hover:bg-[#00CFFF] focus:ring-2 focus:ring-[#00CFFF] focus:outline-none"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Joining..." : "Join the Waiting List"}
            </Button>
          </div>
        )}
        <p className="text-xs text-zinc-500">
          Early access. No spam. Just a better way to finish what you start.
        </p>
      </motion.section>
      <section className="mt-28 w-full max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">
          How BuildsForge helps you launch
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-zinc-900 rounded-xl p-6 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-4xl">💡</div>
            <h3 className="text-xl font-semibold">The idea strikes</h3>
            <p className="text-gray-400 text-sm">
              You’ve got the next big idea. But distractions creep in, and you
              lose momentum.
            </p>
          </motion.div>
          <motion.div
            className="bg-zinc-900 rounded-xl p-6 space-y-3 border border-zinc-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl">🤖</div>
            <h3 className="text-xl font-semibold">BuildsForge steps in</h3>
            <p className="text-gray-400 text-sm">
              Get an AI-powered MVP roadmap + daily build plan. Stay accountable
              with build logs, dashboards, and streaks.
            </p>
          </motion.div>
          <motion.div
            className="bg-zinc-900 rounded-xl p-6 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl">🚀</div>
            <h3 className="text-xl font-semibold">You ship the thing</h3>
            <p className="text-gray-400 text-sm">
              Your daily progress builds momentum. You finally launch that MVP —
              no more graveyard of ideas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Styled as tiles */}
      <section className="mt-24 w-full max-w-6xl " id="features">
        <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "🧠 Clarity without Overwhelm",
              desc:
                "Turn the idea in your head into a real roadmap. Not a spreadsheet. Not a wish. Just what to do next.",
            },
            {
              title: "📆 Something to Show Every Day",
              desc:
                "No more invisible work. Log a win every day. Ship tiny things. Build momentum.",
            },
            {
              title: "📊 Watch Yourself Make Progress",
              desc:
                "You’ve started before. This time, you’ll finish. And you’ll see it happen in real time.",
            },
            {
              title: "🔥 Keep Going When It’s Hard",
              desc:
                "This isn’t motivation. It’s structure. It’s a system to make sure you keep showing up.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-zinc-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <motion.footer
        className="mt-32 w-full max-w-3xl text-center space-y-6 px-4 py-12 border-t border-zinc-800"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold text-zinc-100">
          You don’t need more ideas.
        </h2>
        <p className="text-zinc-400">
          You need to finish what you started. We’ll help you stick with it —
          day after day.
        </p>
        <Button
          variant="default"
          onClick={focusEmailInput}
          className="px-6 py-3 text-base font-semibold rounded-2xl bg-[#009FCC] text-white transition-colors duration-300 hover:bg-[#00CFFF] focus:ring-2 focus:ring-[#00CFFF] focus:outline-none"
        >
          Join the Waiting List Now
        </Button>

        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} BuildsForge. All rights reserved.
        </p>
      </motion.footer>
    </main>
  );
}
