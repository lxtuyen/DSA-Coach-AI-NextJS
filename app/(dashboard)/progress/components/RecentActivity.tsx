"use client";

import { Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

interface Activity {
    id: number;
    problemId: number;
    problemTitle: string;
    difficulty: string;
    solvedAt: Date;
}

interface RecentActivityProps {
    activities: Activity[];
}

export default function RecentActivity({ activities }: RecentActivityProps) {
    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "Easy":
                return "bg-green-100 text-green-700";
            case "Medium":
                return "bg-amber-100 text-amber-700";
            case "Hard":
                return "bg-red-100 text-red-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    const formatDate = (date: Date) => {
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (days === 0) return "Today";
        if (days === 1) return "Yesterday";
        if (days < 7) return `${days} days ago`;
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    };

    return (
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6">
            <h3 className="font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-600" />
                Recent Activity
            </h3>

            {activities.length > 0 ? (
                <div className="relative">
                    <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200" />

                    <div className="space-y-4">
                        {activities.map((activity, index) => (
                            <Link
                                key={activity.id}
                                href={`/problem/${activity.problemId}`}
                                className="flex items-start gap-4 group relative"
                            >
                                <div className="shrink-0 z-10">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center ring-4 ring-white">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                </div>

                                <div className="flex-1 pb-4">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-xs text-gray-400">#{activity.problemId}</span>
                                        <h4 className="text-sm font-medium text-gray-800 group-hover:text-purple-600 transition-colors">
                                            {activity.problemTitle}
                                        </h4>
                                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getDifficultyColor(activity.difficulty)}`}>
                                            {activity.difficulty}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-1">
                                        Solved {formatDate(activity.solvedAt)}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="text-center py-8">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Clock className="w-6 h-6 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500">No recent activity</p>
                    <p className="text-xs text-gray-400 mt-1">Start solving problems!</p>
                </div>
            )}
        </div>
    );
}
