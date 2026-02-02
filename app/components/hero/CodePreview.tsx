"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  "def two_sum(nums, target):",
  "    seen = {}",
  "    for i, num in enumerate(nums):",
  "        diff = target - num",
  "        if diff in seen:",
  "            return [seen[diff], i]",
  "        seen[num] = i",
];

export default function CodePreview() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <motion.div
      className="relative w-full max-w-xl"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-75 blur-xl" />
      
      <div className="relative rounded-2xl border border-slate-700/50 bg-linear-to-br from-slate-900 to-slate-800 shadow-2xl backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-slate-700/50 bg-slate-800/50 px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
            <span className="h-3 w-3 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50" />
            <span className="h-3 w-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
          </div>
          <span className="text-xs font-mono text-slate-400">
            DSA Coach AI — two_sum.py
          </span>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs text-blue-400">AI Active</span>
          </div>
        </div>

        <div className="relative px-6 py-4 font-mono text-sm leading-relaxed">
          {codeLines.slice(0, visibleLines).map((line, index) => {
            const isHighlight = line.includes("if diff in seen");

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-4 py-0.5 ${
                  isHighlight
                    ? "rounded bg-blue-500/10 border-l-2 border-blue-500 pl-2 -ml-2"
                    : ""
                }`}
              >
                <span className="w-8 select-none text-right text-slate-600">
                  {index + 1}
                </span>
                <span className="whitespace-pre text-slate-200">
                  {line}
                  {index === visibleLines - 1 && (
                    <motion.span
                      className="inline-block h-4 w-0.5 bg-blue-400 ml-1 align-middle"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </span>
              </motion.div>
            );
          })}
        </div>

        {visibleLines >= codeLines.length && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="absolute -right-8 bottom-8 w-80"
          >
            <div className="absolute -inset-1 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 opacity-50 blur-lg" />
            
            <div className="relative rounded-xl border border-blue-400/30 bg-linear-to-br from-slate-900 to-slate-800 p-5 shadow-2xl backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                <span className="font-bold text-blue-400">AI Coach</span>
                <div className="ml-auto flex gap-1">
                  <div className="h-1 w-1 rounded-full bg-blue-400 animate-pulse" />
                  <div className="h-1 w-1 rounded-full bg-blue-400 animate-pulse delay-100" />
                  <div className="h-1 w-1 rounded-full bg-blue-400 animate-pulse delay-200" />
                </div>
              </div>
              
              <p className="text-sm leading-relaxed text-slate-300">
                Great choice using a hash map!  
                This reduces the time complexity from{" "}
                <span className="rounded bg-red-500/20 px-1.5 py-0.5 font-mono text-red-400 font-semibold">
                  O(n²)
                </span>{" "}
                to{" "}
                <span className="rounded bg-green-500/20 px-1.5 py-0.5 font-mono text-green-400 font-semibold">
                  O(n)
                </span>.
                <br />
                <span className="mt-2 inline-block text-blue-400">
                  Can you explain why? 💡
                </span>
              </p>

              <div className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l border-b border-blue-400/30 bg-linear-to-br from-slate-900 to-slate-800" />
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}