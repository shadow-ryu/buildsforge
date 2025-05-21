"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function BuildsForgeLanding() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [suppressPopup] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/join-waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    await res.json();
    setSuccess(true);
    setLoading(false);
    setEmail("");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (success) return;
      if (suppressPopup) {
        setShowPopup(false);
        return;
      }
      const footer = document.querySelector("footer");
      if (!footer) return;
      const rect = footer.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight;
      setShowPopup(
        !isVisible &&
          window.scrollY / (document.body.scrollHeight - window.innerHeight) >
            0.4
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [success, suppressPopup]);

  return (
    <main className="bg-[#0f0f11] text-white px-6">
      <header className="py-6 border-b border-[#23262F]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/builds-forge.png" alt="Logo" width={28} height={28} />
            <h1 className="text-2xl font-bold text-white">BuildsForge</h1>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto mt-20 px-4 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
          Ship your idea in 10 days — if you actually show up.
        </h1>

        <p className="text-zinc-400 text-lg">
          BuildsForge gives you the plan, the streaks, and the momentum. You
          just have to build.
        </p>

        {!success && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center gap-3 mt-6"
          >
            <Input
              ref={emailInputRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="sm:w-80 bg-[#181A20] border border-zinc-700 text-white placeholder-zinc-500"
            />
            <Button
              type="submit"
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-xl"
            >
              {loading ? "Joining..." : "Join the wait list"}
            </Button>
          </form>
        )}

        {success && (
          <p className="text-green-500 text-sm">You&apos;re on the list! 🚀</p>
        )}

        <p className="text-sm text-zinc-500 mt-4">
          You commit. The system keeps you on track. That’s it.
        </p>
      </section>

      {/* Why I Built This */}
      <section className="mt-28 max-w-3xl mx-auto px-4 space-y-6 text-center">
        <h2 className="text-3xl font-bold text-white">Why I built this</h2>
        <p className="text-zinc-400 text-base leading-relaxed">
          I’ve started too many projects that never shipped. Not because the
          idea was bad — but because I got lost halfway. No roadmap. No
          momentum. No system.
        </p>
        <p className="text-zinc-400 text-base leading-relaxed">
          BuildsForge is what I wish I had: a tool that turns your idea into a
          real plan, then helps you show up every day and track progress — even
          if it’s messy.
        </p>
        <p className="text-zinc-400 text-base leading-relaxed">
          It’s not a task app. It’s a launch engine. One that helps you actually
          finish something.
        </p>
        <div className="mt-6">
          <span className="text-sm text-zinc-500">
            – The solo builder behind BuildsForge
          </span>
        </div>
      </section>

      {/* Features */}
      <section className="mt-28 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">What it gives you</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            {
              emoji: (
                <Image
                  src="/treasure-map.svg"
                  alt="Treasure Map"
                  width={32}
                  height={32}
                />
              ),
              title: "AI roadmap",
              desc:
                "Instantly turns your idea into a day-by-day launch plan. Edit, tweak, ship.",
            },
            {
              emoji: "🔥",
              title: "Streak system",
              desc:
                "Track momentum. Stay accountable. Build habits, not burnout.",
            },
            {
              emoji: "📣",
              title: "Build logs",
              desc:
                "Generate daily logs to reflect, share, and keep your streak alive.",
            },
          ].map(({ emoji, title, desc }, i) => (
            <motion.div
              key={i}
              className="bg-[#181A20] p-6 rounded-xl border border-[#23262F]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl mb-2">{emoji}</div>
              <h4 className="font-semibold text-lg mb-1">{title}</h4>
              <p className="text-zinc-400 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section className="mt-24 text-center max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">See it in action</h3>
        <p className="text-zinc-400 mb-10">
          Idea → roadmap → logs → launch. All in one place.
        </p>
        {["roadmap", "dashboard", "progress"].map((key) => (
          <div key={key} className="mb-12">
            <div className="w-full max-w-5xl mx-auto  rounded-xl border border-[#2a2a2a] shadow-2xl overflow-hidden">
              {/* Browser mock header */}
              <div className="flex items-center gap-2 px-4 py-2 bg-[#2c2c2f] border-b border-[#3a3a3d] mb-4" >
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="ml-4 text-xs text-zinc-400">{key}</span>
              </div>
              {/* Screenshot */}
              <Image
                src={`/screenshot-${key}.png`}
                alt={`${key} screenshot`}
                width={960}
                height={540}
                className="w-full h-auto p-3"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Not Another AI App */}
      <section className="mt-8 max-w-3xl mx-auto px-4 space-y-6 text-center">
        <h2 className="text-3xl font-bold text-white">
          Is this just another AI tool?
        </h2>
        <p className="text-zinc-400 text-base leading-relaxed">
          Honestly, most “AI productivity” tools are wrappers — they generate a
          wall of tasks you’ll never follow.
        </p>
        <p className="text-zinc-400 text-base leading-relaxed">
          BuildsForge is different. It gives you a launch plan you’ll actually
          use, tracks your progress, and helps you finish.
        </p>
        <p className="text-zinc-400 text-base leading-relaxed">
          This isn’t a dashboard. It’s a deadline. And a system that makes you
          stick to it.
        </p>
      </section>

      {/* Footer CTA */}
      <footer className="mt-28 py-16 border-t border-zinc-800 text-center px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Don’t let another idea fade away.
          </h2>
          <p className="text-zinc-400 text-base">
            Most builders quit before they ship. Join the waitlist and get the
            system that helps you finish what you start — without burning out.
          </p>

          {!success && (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row justify-center gap-3"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="sm:w-80 bg-[#181A20] border border-zinc-700 text-white placeholder-zinc-500"
              />
              <Button
                type="submit"
                disabled={loading}
                className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-xl"
              >
                {loading ? "Joining..." : "Join the wait list"}
              </Button>
            </form>
          )}

          {success && (
            <p className="text-green-500 text-sm">
              You&apos;re on the list! 🚀
            </p>
          )}

          <p className="text-xs text-zinc-600 pt-6">
            © {new Date().getFullYear()} BuildsForge — built in public by a solo
            dev who finally shipped.
          </p>
        </div>
      </footer>

      {/* Sticky Join Box */}
      {showPopup && !success && (
        <div className="fixed bottom-4 right-4 bg-[#181A20] p-5 rounded-xl border border-[#2a2a2a] shadow-lg z-50">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <p className="text-sm text-white font-semibold">
              🚀 Start your build streak
            </p>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter your email"
              className="w-64"
            />
            <Button
              type="submit"
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-500 text-white w-full"
            >
              {loading ? "Joining..." : "Join Now"}
            </Button>
          </form>
        </div>
      )}
    </main>
  );
}
