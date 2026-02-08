"use client";

import { CheckCircle2, XCircle, Clock, ChevronRight } from "lucide-react";
import { cn } from "@/app/utils/cn";

interface Activity {
    id: number;
    type: "solved" | "attempted";
    problem: string;
    difficulty: "Easy" | "Medium" | "Hard";
    time: string;
}

interface RecentActivityProps {
    activities: Activity[];
}

const difficultyColors = {
    Easy: {
        bg: "bg-emerald-100",
        text: "text-emerald-700",
        dot: "bg-emerald-500",
    },
    Medium: {
        bg: "bg-amber-100",
        text: "text-amber-700",
        dot: "bg-amber-500",
    },
    Hard: {
        bg: "bg-rose-100",
        text: "text-rose-700",
        dot: "bg-rose-500",
    },
};

export default function RecentActivity({ activities }: RecentActivityProps) {
    return (
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-5">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="font-bold text-gray-800 text-lg">Recent Activity</h3>
                    <p className="text-sm text-gray-500 mt-0.5">Your problem solving history</p>
                </div>
                <button className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
                    View All
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>

            <div className="space-y-3">
                {activities.map((activity, index) => {
                    const colors = difficultyColors[activity.difficulty];
                    const isSolved = activity.type === "solved";

                    return (
                        <div
                            key={activity.id}
                            className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group"
                        >
                            <div
                                className={cn(
                                    "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                                    isSolved ? "bg-emerald-100" : "bg-amber-100"
                                )}
                            >
                                {isSolved ? (
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                ) : (
                                    <XCircle className="w-5 h-5 text-amber-600" />
                                )}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <h4 className="font-semibold text-gray-800 truncate group-hover:text-purple-600 transition-colors">
                                        {activity.problem}
                                    </h4>
                                    <span
                                        className={cn(
                                            "px-2 py-0.5 rounded-full text-xs font-medium shrink-0",
                                            colors.bg,
                                            colors.text
                                        )}
                                    >
                                        {activity.difficulty}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mt-0.5">
                                    {isSolved ? "Solved" : "Attempted"} • {activity.time}
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-gray-400">
                                <Clock className="w-4 h-4" />
                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    );
                })}
            </div>

            {activities.length === 0 && (
                <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-gray-400" />
                    </div>
                    <h4 className="font-medium text-gray-700 mb-1">No recent activity</h4>
                    <p className="text-sm text-gray-500">Start solving problems to see your activity here</p>
                </div>
            )}
        </div>
    );
}
