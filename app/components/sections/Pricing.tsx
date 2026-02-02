"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/app/components/ui/SectionTitle";
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-indigo-600/10 blur-3xl delay-1000" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <SectionTitle
          eyebrow="Pricing"
          title="Simple, Transparent Pricing"
          description="Start free. Upgrade when you're ready."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group"
          >
            <div className="relative h-full overflow-hidden rounded-2xl border border-slate-700/50 bg-linear-to-br from-slate-900 to-slate-800 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-slate-600 hover:shadow-2xl">
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-br from-slate-600 to-slate-500 opacity-0 blur-xl transition-opacity group-hover:opacity-10" />

              <div className="relative p-8">
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold text-white">Free</h3>
                  <p className="text-sm text-slate-400">For getting started</p>
                </div>

                <div className="mb-8 flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-black text-white">$0</span>
                  <span className="text-lg text-slate-500">/month</span>
                </div>

                <ul className="mb-8 space-y-4 text-left">
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>50+ Practice Problems</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>Basic Hints</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-500">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                    <span>AI Explanations</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-500">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                    <span>Personalized Roadmap</span>
                  </li>
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-xl border-2 border-slate-700 bg-slate-800/50 py-3 font-bold text-slate-200 backdrop-blur-sm transition-all hover:border-slate-600 hover:bg-slate-800"
                >
                  <Link href={"/login"} >
                    Get Started</Link>
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group"
          >
            <div className="relative h-full overflow-hidden rounded-2xl border-2 border-blue-500/50 bg-linear-to-br from-slate-900 to-slate-800 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/70 hover:shadow-blue-500/25">
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600 opacity-30 blur-xl" />

              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-20" />

              <div className="relative p-8">
                <div className="mb-6">
                  <h3 className="mb-2 bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-2xl font-bold text-transparent">
                    Pro
                  </h3>
                  <p className="text-sm text-slate-400">For serious learners</p>
                </div>

                <div className="mb-8 flex items-baseline justify-center gap-2">
                  <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-5xl font-black text-transparent">
                    $9
                  </span>
                  <span className="text-lg text-slate-500">/month</span>
                </div>

                <ul className="mb-8 space-y-4 text-left">
                  <li className="flex items-center gap-3 text-white">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/50">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="font-semibold">Unlimited Problems</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/50">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="font-semibold">Advanced AI Coaching</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/50">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="font-semibold">Personalized Roadmap</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/50">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="font-semibold">Priority Support</span>
                  </li>
                </ul>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group/btn relative w-full overflow-hidden rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 py-3 font-bold text-white shadow-lg shadow-blue-600/50 transition-all"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Upgrade to Pro
                    <svg
                      className="h-5 w-5 transition-transform group-hover/btn:translate-x-1"
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
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-indigo-500 opacity-0 transition-opacity group-hover/btn:opacity-100" />
                </motion.button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
