"use client";

import { motion } from "framer-motion";
import CodePreview from "./CodePreview";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-purple-600/15 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >


            <motion.h1
              variants={item}
              className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Master{" "}
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Data Structures
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 w-full bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
              <br />
              <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                & Algorithms
              </span>
              <br />
              <span className="text-slate-300">
                with Your Personal AI Coach
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="max-w-xl text-lg leading-relaxed text-slate-400"
            >
              Practice smarter with{" "}
              <span className="text-blue-400 font-semibold">step-by-step guidance</span>,{" "}
              <span className="text-indigo-400 font-semibold">real-time feedback</span>,
              and personalized problem paths — just like having a senior
              engineer mentoring you 24/7.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-4 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-600/50 transition-all"
              >
                <span className="relative z-10">Get Started Free</span>
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-indigo-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl border-2 border-slate-700 bg-slate-800/50 px-8 py-4 font-bold text-slate-200 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-slate-800"
              >
                Try a Demo
              </motion.a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap gap-8"
            >
              <div>
                <div className="text-3xl font-bold text-blue-400">10K+</div>
                <div className="text-sm text-slate-500">Problems Solved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-400">95%</div>
                <div className="text-sm text-slate-500">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-slate-500">AI Assistance</div>
              </div>
            </motion.div>
          </motion.div>

          <div className="flex justify-center">
            <CodePreview />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-950 to-transparent" />
    </section>
  );
}