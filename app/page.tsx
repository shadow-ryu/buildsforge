"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, Twitter } from "lucide-react";

export default function BuildsForgeLanding() {
  return (
    <main className="bg-[#0f0f11] text-white px-6">
      {/* Navbar */}
      <header className="py-6 border-b border-[#23262F]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/builds-forge.png" alt="Logo" width={28} height={28} />
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              BuildsForge
              <span className="text-xs bg-purple-700 text-white px-2 py-0.5 rounded-full uppercase">
                Beta
              </span>
            </h1>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto mt-20 px-4 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
          Stop Abandoning Good Ideas. <br /> Get a Launch Plan. Build Daily. Actually Ship.
        </h1>
        <p className="text-zinc-400 text-lg">
          You don’t need another tool — you need a system that helps you show up and ship. <br />
          BuildsForge gives you structure, momentum, and public accountability.
        </p>
        <div className="mt-6">
          <Link href="/sign-up">
            <Button className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-xl">
              Start Building Now
            </Button>
          </Link>
        </div>
        <p className="text-sm text-zinc-500 mt-4">
          Your project doesn’t need more planning. It needs progress.
        </p>
      </section>

      {/* Why I Built This */}
      <section className="mt-28 max-w-3xl mx-auto px-4 space-y-6 text-center">
        <h2 className="text-3xl font-bold text-white">Why I built this</h2>
        <p className="text-zinc-400 text-base leading-relaxed">
          I got tired of ghosting my own projects. I had good ideas — but no system. I&apos;d drift, stall, and quit before I shipped.
        </p>
        <p className="text-zinc-400 text-base leading-relaxed">
          BuildsForge is what I wish I had: a structure that turns vague ideas into daily plans, tracks your effort, and keeps you going — even when it’s messy.
        </p>
        <p className="text-zinc-400 text-base leading-relaxed">
          It’s not a task app. It’s a launch engine. One that makes finishing inevitable.
        </p>
        <div className="mt-6">
          <span className="text-sm text-zinc-500">
            – The solo builder behind BuildsForge
          </span>
        </div>
      </section>

      {/* Features */}
      <section className="mt-28 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
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
              desc: "Turn vague ambition into a concrete daily plan — in seconds.",
            },
            {
              emoji: "🔥",
              title: "Streak system",
              desc: "You don’t need discipline. You need momentum. We track it for you.",
            },
            {
              emoji: "📣",
              title: "Build logs",
              desc: "Keep your streak alive, reflect daily, and stay accountable to your launch.",
            },
            {
              emoji: "🌍",
              title: "Public Build Pages",
              desc: "Get a shareable link like username.buildsforge.com to showcase your projects and daily progress.",
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
            <div className="w-full max-w-5xl mx-auto rounded-xl border border-[#2a2a2a] shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#2c2c2f] border-b border-[#3a3a3d] mb-4">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="ml-4 text-xs text-zinc-400">{key}</span>
              </div>
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

      {/* Coming Soon */}
      {/*
      <section className="mt-20 max-w-3xl mx-auto px-4 space-y-6 text-center">
        <h2 className="text-3xl font-bold text-white">Coming Soon</h2>
        <p className="text-zinc-400 text-base leading-relaxed">
          This is just the start. Here’s what’s launching next:
        </p>
        <ul className="text-zinc-400 text-left list-disc pl-6 space-y-2">
          <li>Calendar sync — connect your launch plan to Google Calendar</li>
          <li>Smart scope adjuster — if you miss days, we’ll adapt your roadmap</li>
          <li>Shareable build streak cards for Twitter/X</li>
          <li>Public “builder wall” to explore others' logs</li>
        </ul>
      </section>
      */}

      {/* Builder Value Prop */}
      <section className="mt-20 max-w-3xl mx-auto px-4 space-y-6 text-center">
        <h2 className="text-3xl font-bold text-white">Why it actually works</h2>
        <p className="text-zinc-400 text-base leading-relaxed">
          Most side projects die because of lost momentum, vague scope, or no accountability. BuildsForge solves that.
        </p>
        <p className="text-zinc-400 text-base leading-relaxed">
          It gives you a real launch plan. A way to track your streak. And a public page to keep you honest.
        </p>
        <p className="text-zinc-400 text-base leading-relaxed">
          It turns your idea into a system — so you keep building, even when motivation fades.
        </p>
      </section>

      {/* Public pages */}
      <section className="text-center max-w-4xl mx-auto mt-20 px-4">
        <h3 className="text-xl font-semibold text-white">Live Public Pages</h3>
        <p className="text-zinc-400 text-sm mt-2 mb-4">
          Build in public, one log at a time.
        </p>
        <ul className="text-purple-400 mt-2 space-y-1 text-sm">
          <li>
            <a href="https://vishveshk.buildsforge.com" target="_blank" rel="noopener noreferrer">
              vishveshk.buildsforge.com
            </a>
          </li>
        </ul>
      </section>

      {/* Footer CTA */}
      <footer className="mt-28 py-16 border-t border-zinc-800 text-center px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Ready to finish what you started?
          </h2>
          <p className="text-zinc-400 text-base">
            Don’t let another idea die in drafts. Set your launch date — and show up every day until it&apos;s live.
          </p>
          <Link href="/sign-up">
            <Button className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-xl">
              Start Building Now
            </Button>
          </Link>
          <div className="flex justify-center gap-6 pt-8">
            <a href="https://discord.gg/your-invite" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition" aria-label="Discord">
              <MessageCircle size={22} />
            </a>
            <a href="https://x.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition" aria-label="Twitter/X">
              <Twitter size={22} />
            </a>
          </div>
          <p className="text-xs text-zinc-600 pt-6">
            © {new Date().getFullYear()} BuildsForge — built in public by a solo dev who finally shipped.
          </p>
        </div>
      </footer>
    </main>
  );
}
