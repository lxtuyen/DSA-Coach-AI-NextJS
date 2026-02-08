"use client";

import { Target, TrendingUp, Clock } from "lucide-react";

interface ProgressOverviewProps {
    totalSolved: number;
    totalProblems: number;
    avgPerWeek: number;
}

export default function ProgressOverview({ totalSolved, totalProblems, avgPerWeek }: ProgressOverviewProps) {
    const percentage = Math.round((totalSolved / totalProblems) * 100);
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6">
            <h3 className="font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-600" />
                Progress Overview
            </h3>

            <div className="flex items-center gap-8">
                <div className="relative">
                    <svg className="w-32 h-32 -rotate-90">
                        <circle
                            cx="64"
                            cy="64"
                            r="45"
                            stroke="#e5e7eb"
                            strokeWidth="10"
                            fill="none"
                        />
                        <circle
                            cx="64"
                            cy="64"
                            r="45"
                            stroke="url(#progressGradient)"
                            strokeWidth="10"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            className="transition-all duration-1000"
                        />
                        <defs>
                            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#8b5cf6" />
                                <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold text-gray-800">{percentage}%</span>
                        <span className="text-xs text-gray-500">Complete</span>
                    </div>
                </div>

                <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-800">{totalSolved}</p>
                            <p className="text-xs text-gray-500">of {totalProblems} solved</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Clock className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-800">{avgPerWeek}</p>
                            <p className="text-xs text-gray-500">avg per week</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
