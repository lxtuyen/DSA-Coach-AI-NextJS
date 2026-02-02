"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/app/components/ui/SectionTitle";

const features = [
  {
    icon: "🧠",
    title: "AI Code Analysis",
    desc: "Real-time analysis of your solutions with intelligent feedback and guidance — understand what’s right and what’s missing.",
    delay: 0,
    gradient: "from-yellow-400 to-orange-500",
    glowColor: "yellow",
  },
  {
    icon: "🧩",
    title: "Problem Scraping",
    desc: "Automatically extracts problem statements and test cases for deeper, structured analysis.",
    delay: 0.05,
    gradient: "from-blue-400 to-cyan-500",
    glowColor: "blue",
  },
  {
    icon: "📘",
    title: "Personal Pattern Journal",
    desc: "AI-generated playbook with pattern clues, variations, and your past attempts — all in one place.",
    delay: 0.1,
    gradient: "from-purple-500 to-pink-500",
    glowColor: "purple",
  },
  {
    icon: "🎯",
    title: "Approach Learning",
    desc: "Learn problem-solving approaches without direct solutions — master the thinking process.",
    delay: 0.15,
    gradient: "from-green-400 to-emerald-500",
    glowColor: "green",
  },
  {
    icon: "🗂️",
    title: "Pattern Recognition",
    desc: "Automatically identifies and categorizes DSA patterns as you solve problems.",
    delay: 0.2,
    gradient: "from-indigo-500 to-sky-500",
    glowColor: "blue",
  },
  {
    icon: "💡",
    title: "Smart Hints System",
    desc: "Contextual hints that guide you forward without spoiling the learning experience.",
    delay: 0.25,
    gradient: "from-amber-400 to-yellow-500",
    glowColor: "yellow",
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    desc: "Visual analytics to track your pattern mastery and improvement over time.",
    delay: 0.3,
    gradient: "from-emerald-400 to-teal-500",
    glowColor: "green",
  },
  {
    icon: "⚡",
    title: "Zero Note-Taking",
    desc: "We build your revision journal automatically — focus on solving, not documenting.",
    delay: 0.35,
    gradient: "from-slate-400 to-slate-600",
    glowColor: "gray",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-600/10 blur-3xl delay-1000" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Features"
          title="Revolutionary Features That Transform Learning"
          description="Stop memorizing solutions. Start understanding patterns.
           DSACoach analyzes your approach and builds a personalized learning system just for you."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: f.delay,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-slate-700/50 bg-linear-to-br from-slate-900 to-slate-800 p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-slate-600 hover:shadow-2xl">
                <div
                  className={`absolute -inset-1 rounded-2xl bg-linear-to-br ${f.gradient} opacity-0 blur-xl transition-all duration-300 group-hover:opacity-20`}
                />

                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r ${f.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
                />

                <div className="relative flex h-full flex-col">
                  <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-900/50 text-4xl shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-slate-600 group-hover:shadow-2xl">
                    <div
                      className={`absolute inset-0 rounded-xl bg-linear-to-br ${f.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-20`}
                    />
                    <span className="relative">{f.icon}</span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white transition-colors">
                    {f.title}
                  </h3>

                  <p className="grow text-sm leading-relaxed text-slate-400 transition-colors group-hover:text-slate-300">
                    {f.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
