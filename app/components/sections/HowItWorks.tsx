"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/app/components/ui/SectionTitle";

const steps = [
  {
    step: "01",
    title: "Choose a DSA Problem",
    description:
      "Pick problems based on your level, topic, or interview goal. From arrays to dynamic programming.",
    icon: "📚",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    step: "02",
    title: "Solve with AI Guidance",
    description:
      "Get hints, explanations, and real-time feedback while coding — not just after submitting.",
    icon: "🤖",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    step: "03",
    title: "Learn & Improve Faster",
    description:
      "Understand time & space complexity, edge cases, and optimal approaches tailored to you.",
    icon: "🚀",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-600/10 blur-3xl delay-1000" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="How it works"
          title="Your AI Coach, Every Step of the Way"
          description="A smarter way to practice data structures & algorithms — guided, interactive, and personalized."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative grid gap-8 md:grid-cols-3"
        >
          <div className="absolute top-16 left-0 right-0 hidden h-1 md:block">
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-20 blur-sm" />
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-30" />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={item}
              className="relative group"
            >
              <div
                className="relative flex h-full flex-col items-center text-center overflow-hidden rounded-2xl border border-slate-700/50
               bg-linear-to-br from-slate-900 to-slate-800 p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-slate-600 hover:shadow-2xl"
              >
                <div
                  className={`absolute -inset-1 rounded-2xl bg-linear-to-br ${step.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20`}
                />

                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-slate-800 to-slate-700 text-2xl font-black text-white shadow-2xl ring-4 ring-slate-900 transition-all duration-300 group-hover:scale-110">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-linear-to-br ${step.gradient} opacity-20`}
                  />
                  <span className="relative">{step.step}</span>

                  <div
                    className={`absolute inset-0 rounded-2xl bg-linear-to-br ${step.gradient} opacity-0 transition-opacity group-hover:animate-ping group-hover:opacity-30`}
                  />
                </div>

                <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-linear-to-br from-slate-800 to-slate-700 text-5xl shadow-lg transition-transform group-hover:scale-110 group-hover:shadow-2xl">
                  <div
                    className={`absolute inset-0 rounded-xl bg-linear-to-br ${step.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}
                  />
                  <span className="relative">{step.icon}</span>
                </div>

                <h3 className="relative mb-4 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="relative text-sm leading-relaxed text-slate-400 transition-colors group-hover:text-slate-300">
                  {step.description}
                </p>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${step.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
                />

                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-16 hidden translate-x-1/2 md:block">
                    <svg
                      className="h-8 w-8 text-slate-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
