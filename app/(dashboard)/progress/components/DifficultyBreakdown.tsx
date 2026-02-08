"use client";

import { BarChart3 } from "lucide-react";

interface DifficultyData {
    easy: { solved: number; total: number };
    medium: { solved: number; total: number };
    hard: { solved: number; total: number };
}

interface DifficultyBreakdownProps {
    data: DifficultyData;
}

export default function DifficultyBreakdown({ data }: DifficultyBreakdownProps) {
    const difficulties = [
        { name: "Easy", ...data.easy, color: "from-green-500 to-emerald-500", bg: "bg-green-100", text: "text-green-700" },
        { name: "Medium", ...data.medium, color: "from-amber-500 to-orange-500", bg: "bg-amber-100", text: "text-amber-700" },
        { name: "Hard", ...data.hard, color: "from-red-500 to-rose-500", bg: "bg-red-100", text: "text-red-700" },
    ];

    return (
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6">
            <h3 className="font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-600" />
                Difficulty Breakdown
            </h3>

            <div className="space-y-5">
                {difficulties.map((diff) => {
                    const percentage = diff.total > 0 ? Math.round((diff.solved / diff.total) * 100) : 0;
                    return (
                        <div key={diff.name}>
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${diff.bg} ${diff.text}`}>
                                        {diff.name}
                                    </span>
                                </div>
                                <div className="text-sm">
                                    <span className="font-bold text-gray-800">{diff.solved}</span>
                                    <span className="text-gray-400"> / {diff.total}</span>
                                    <span className="text-gray-500 ml-2">({percentage}%)</span>
                                </div>
                            </div>
                            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className={`h-full bg-linear-to-r ${diff.color} rounded-full transition-all duration-700`}
                                    style={{ width: `${percentage}%` }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
