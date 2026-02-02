"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "@/app/components/ui/SectionTitle";

const faqs = [
  {
    question:
      "How does DSA Coach AI help me solve problems without giving direct solutions?",
    answer:
      "DSA Coach AI uses intelligent hints and guided questions to help you think through problems step-by-step. Instead of showing the answer, it asks clarifying questions, points out edge cases you might have missed, and suggests which data structures or algorithms might be helpful. This Socratic method helps you develop problem-solving intuition rather than memorizing solutions.",
  },
  {
    question:
      "What makes DSA Coach AI different from other learning platforms?",
    answer:
      "Unlike traditional platforms that only show solutions after submission, DSA Coach AI provides real-time feedback as you code. It understands your thought process, identifies misconceptions early, and adapts its teaching style to your learning pace. Plus, it creates personalized problem roadmaps based on your weak areas.",
  },
  {
    question: "How does the AI analyze my code and provide feedback?",
    answer:
      "Our AI analyzes your code's logic, efficiency, and approach in real-time. It can identify common mistakes, suggest optimizations, explain time and space complexity, and even predict edge cases you might not have considered. The feedback is contextual and educational, designed to help you understand 'why' not just 'what'.",
  },
  {
    question: "What's the difference between the Free and Pro plans?",
    answer:
      "The Free plan gives you access to 50+ curated problems with basic hints and explanations. The Pro plan unlocks unlimited problems, advanced AI coaching with personalized explanations, custom problem roadmaps tailored to your goals, detailed progress tracking, and priority support. Pro users also get early access to new features.",
  },
  {
    question: "Will DSA Coach AI work with all programming languages?",
    answer:
      "Yes! DSA Coach AI supports all major programming languages including Python, JavaScript, Java, C++, Go, Rust, and more. The AI understands language-specific syntax and idioms, so it can provide relevant feedback regardless of which language you prefer to use.",
  },
  {
    question: "Can I use this to prepare for technical interviews?",
    answer:
      "Absolutely! DSA Coach AI is specifically designed for interview preparation. It includes problems commonly asked at top tech companies, helps you practice explaining your thought process (crucial for interviews), and builds the problem-solving intuition that interviewers look for. Many users have successfully used it to land offers at FAANG companies.",
  },
  {
    question: "How much time will I save with AI-powered learning?",
    answer:
      "Most users report learning 2-3x faster compared to traditional self-study. Instead of spending hours stuck on a problem or searching for hints online, you get instant, contextual guidance. The personalized roadmap also ensures you're always working on the most impactful problems for your skill level.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes! We offer a 30-day money-back guarantee on all Pro subscriptions. If you're not satisfied with your progress or the platform doesn't meet your expectations, simply contact us within 30 days for a full refund, no questions asked.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-indigo-600/10 blur-3xl delay-1000" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      <div className="relative mx-auto max-w-4xl px-6">
        <SectionTitle
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about DSA Coach AI."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="overflow-hidden rounded-xl border border-slate-700/50 bg-linear-to-br from-slate-900 to-slate-800 shadow-xl transition-all hover:border-slate-600 hover:shadow-2xl">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-slate-800/50"
                >
                  <span className="text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <svg
                      className="h-5 w-5 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-700/50 px-6 py-4">
                        <p className="text-sm leading-relaxed text-slate-400">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
