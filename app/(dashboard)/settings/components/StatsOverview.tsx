"use client";

import { CheckCircle2, Target } from "lucide-react";

interface Stats {
    easy: { solved: number; total: number };
    medium: { solved: number; total: number };
    hard: { solved: number; total: number };
    totalSubmissions: number;
    acceptanceRate: number;
}

interface StatsOverviewProps {
    stats: Stats;
}

export default function StatsOverview({ stats }: StatsOverviewProps) {
    const totalSolved = stats.easy.solved + stats.medium.solved + stats.hard.solved;
    const totalProblems = stats.easy.total + stats.medium.total + stats.hard.total;

    const difficultyStats = [
        {
            label: "Easy",
            solved: stats.easy.solved,
            total: stats.easy.total,
            bgGradient: "from-emerald-500 to-teal-600",
            textColor: "text-emerald-600",
        },
        {
            label: "Medium",
            solved: stats.medium.solved,
            total: stats.medium.total,
            bgGradient: "from-amber-500 to-orange-600",
            textColor: "text-amber-600",
        },
        {
            label: "Hard",
            solved: stats.hard.solved,
            total: stats.hard.total,
            bgGradient: "from-rose-500 to-red-600",
            textColor: "text-rose-600",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-5">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-700">Total Progress</h3>
                    <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                    </div>
                </div>
                <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-3xl font-bold text-gray-800">{totalSolved}</span>
                        <span className="text-sm text-gray-500">/ {totalProblems}</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-linear-to-r from-purple-500 to-indigo-600 rounded-full transition-all duration-500"
                            style={{ width: `${(totalSolved / totalProblems) * 100}%` }}
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                        {Math.round((totalSolved / totalProblems) * 100)}% completed
                    </p>
                </div>
            </div>

            {difficultyStats.map((stat) => (
                <div
                    key={stat.label}
                    className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-5"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-700">{stat.label}</h3>
                        <div
                            className={`w-10 h-10 bg-linear-to-br ${stat.bgGradient} rounded-xl flex items-center justify-center`}
                        >
                            <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className={`text-3xl font-bold ${stat.textColor}`}>{stat.solved}</span>
                        <span className="text-sm text-gray-500">/ {stat.total}</span>
                    </div>
                    <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className={`h-full bg-linear-to-r ${stat.bgGradient} rounded-full transition-all duration-500`}
                            style={{ width: `${(stat.solved / stat.total) * 100}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
