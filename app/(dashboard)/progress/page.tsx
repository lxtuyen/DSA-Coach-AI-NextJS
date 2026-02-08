"use client";

import { TrendingUp } from "lucide-react";
import StreakCard from "./components/StreakCard";
import ProgressOverview from "./components/ProgressOverview";
import DifficultyBreakdown from "./components/DifficultyBreakdown";
import CategoryProgress from "./components/CategoryProgress";
import RecentActivity from "./components/RecentActivity";

export default function ProgressPage() {
    const streakData = {
        currentStreak: 7,
        bestStreak: 14,
        weeklyActivity: [true, true, true, false, true, true, true],
    };

    const overviewData = {
        totalSolved: 42,
        totalProblems: 125,
        avgPerWeek: 8,
    };

    const difficultyData = {
        easy: { solved: 25, total: 45 },
        medium: { solved: 12, total: 50 },
        hard: { solved: 5, total: 30 },
    };

    const categories = [
        { name: "Array", solved: 18, total: 25 },
        { name: "String", solved: 12, total: 20 },
        { name: "Tree", solved: 8, total: 18 },
        { name: "Graph", solved: 3, total: 15 },
        { name: "Dynamic Programming", solved: 1, total: 22 },
        { name: "Sorting", solved: 0, total: 12 },
        { name: "Linked List", solved: 0, total: 8 },
        { name: "Stack", solved: 0, total: 5 },
    ];

    const recentActivities = [
        {
            id: 1,
            problemId: 1,
            problemTitle: "Two Sum",
            difficulty: "Easy",
            solvedAt: new Date("2026-02-07"),
        },
        {
            id: 2,
            problemId: 6,
            problemTitle: "Valid Parentheses",
            difficulty: "Easy",
            solvedAt: new Date("2026-02-06"),
        },
        {
            id: 3,
            problemId: 8,
            problemTitle: "Climbing Stairs",
            difficulty: "Easy",
            solvedAt: new Date("2026-02-05"),
        },
        {
            id: 4,
            problemId: 3,
            problemTitle: "Validate Binary Search Tree",
            difficulty: "Medium",
            solvedAt: new Date("2026-02-03"),
        },
        {
            id: 5,
            problemId: 5,
            problemTitle: "Merge K Sorted Lists",
            difficulty: "Hard",
            solvedAt: new Date("2026-01-28"),
        },
    ];

    return (
        <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Progress Track</h2>
                    <p className="text-sm text-gray-500">Monitor your DSA learning journey</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <StreakCard {...streakData} />
                <ProgressOverview {...overviewData} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <DifficultyBreakdown data={difficultyData} />
                <CategoryProgress categories={categories} />
            </div>

            <RecentActivity activities={recentActivities} />
        </div>
    );
}
