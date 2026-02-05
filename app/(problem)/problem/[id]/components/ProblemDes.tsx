"use client";

import { CheckCircle } from "lucide-react";
import { useState } from "react";
import AICoachPanel from "@/app/components/ai/AICoachPanel";

const ProblemDescription = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="h-full border-r border-slate-200 flex flex-col overflow-hidden bg-slate-50 custom-scrollbar">
      <div className="bg-slate-100 px-6 py-4 border-b border-slate-200">
        <div className="flex items-start justify-between">
          <div className="flex flex-row gap-2 items-center">
            <span className="text-sm font-mono text-slate-500">9.</span>
            <h1 className="text-2xl font-bold text-slate-900">
              Palindrome Number
            </h1>

            <span className="ml-3 px-3 py-1 bg-emerald-100 text-emerald-600 text-xs font-bold rounded-full border border-emerald-200">
              EASY
            </span>

            <div className="flex items-center gap-1 text-xs text-slate-500">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Solved</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 px-6 py-2 bg-slate-100 border-b border-slate-200">
        {["description", "AI Coach"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors capitalize ${activeTab === tab
              ? "bg-white text-blue-600 shadow-sm"
              : "text-slate-500 hover:text-slate-700 hover:bg-white/60"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "AI Coach" ? (
        <div className="flex-1 overflow-hidden">
          <AICoachPanel />
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar">
          <div className="max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">
              Given an integer{" "}
              <code className="text-blue-600 bg-slate-200 px-2 py-1 rounded font-mono">
                x
              </code>
              , return{" "}
              <code className="text-blue-600 bg-slate-200 px-2 py-1 rounded font-mono">
                true
              </code>{" "}
              if{" "}
              <code className="text-blue-600 bg-slate-200 px-2 py-1 rounded font-mono">
                x
              </code>{" "}
              is a{" "}
              <span className="text-blue-600 font-semibold">palindrome</span>, and{" "}
              <code className="text-blue-600 bg-slate-200 px-2 py-1 rounded font-mono">
                false
              </code>{" "}
              otherwise.
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  id: 1,
                  input: "121",
                  output: "true",
                  ok: true,
                  explain:
                    "121 reads as 121 from left to right and from right to left.",
                },
                {
                  id: 2,
                  input: "-121",
                  output: "false",
                  ok: false,
                  explain:
                    "From left to right it reads -121. From right to left it becomes 121-.",
                },
                {
                  id: 3,
                  input: "10",
                  output: "false",
                  ok: false,
                  explain: "Reads 01 from right to left.",
                },
              ].map((ex) => (
                <div
                  key={ex.id}
                  className="bg-white rounded-xl p-5 border border-slate-200"
                >
                  <div className="text-xs text-slate-500 font-semibold mb-2">
                    Example {ex.id}:
                  </div>

                  <div className="font-mono text-sm space-y-1">
                    <div>
                      <span className="text-slate-500">Input:</span>{" "}
                      <span className="text-blue-600">x = {ex.input}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Output:</span>{" "}
                      <span
                        className={
                          ex.ok ? "text-emerald-600" : "text-red-500"
                        }
                      >
                        {ex.output}
                      </span>
                    </div>
                    <div className="text-slate-500 text-xs mt-2">
                      <span className="font-medium">Explanation:</span>{" "}
                      {ex.explain}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200">
              <div className="text-sm font-semibold mb-3 text-slate-900">
                Constraints:
              </div>
              <ul className="space-y-1 text-sm text-slate-700 font-mono">
                <li>-2³¹ ≤ x ≤ 2³¹ - 1</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemDescription;
