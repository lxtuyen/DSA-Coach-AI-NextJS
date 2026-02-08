"use client";

import { Flame, Calendar } from "lucide-react";

interface StreakCardProps {
    currentStreak: number;
    bestStreak: number;
    weeklyActivity: boolean[];
}

export default function StreakCard({ currentStreak, bestStreak, weeklyActivity }: StreakCardProps) {
    const days = ["M", "T", "W", "T", "F", "S", "S"];

    return (
        <div className="bg-linear-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold flex items-center gap-2">
                    <Flame className="w-5 h-5" />
                    Daily Streak
                </h3>
                <div className="flex items-center gap-1 text-sm bg-white/20 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4" />
                    Best: {bestStreak} days
                </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl font-bold">{currentStreak}</div>
                <div className="text-orange-100">
                    <p className="text-lg font-medium">days</p>
                    <p className="text-sm opacity-80">Keep it going! 🔥</p>
                </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
                <p className="text-xs text-orange-100 mb-3">This Week</p>
                <div className="flex justify-between">
                    {days.map((day, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                            <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium transition-all ${weeklyActivity[index]
                                        ? "bg-white text-orange-600"
                                        : "bg-white/20 text-white/60"
                                    }`}
                            >
                                {weeklyActivity[index] ? "✓" : ""}
                            </div>
                            <span className="text-xs text-orange-100">{day}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
