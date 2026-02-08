"use client";

import { BarChart3 } from "lucide-react";

interface WeeklyData {
    day: string;
    count: number;
}

interface ActivityChartProps {
    weeklyData: WeeklyData[];
}

export default function ActivityChart({ weeklyData }: ActivityChartProps) {
    const maxCount = Math.max(...weeklyData.map((d) => d.count));
    const totalThisWeek = weeklyData.reduce((sum, d) => sum + d.count, 0);

    return (
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-5">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="font-bold text-gray-800 text-lg">Weekly Activity</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{totalThisWeek} problems this week</p>
                </div>
                <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                </div>
            </div>

            <div className="flex items-end justify-between gap-2 h-40">
                {weeklyData.map((data, index) => {
                    const heightPercent = maxCount > 0 ? (data.count / maxCount) * 100 : 0;
                    const isToday = index === weeklyData.length - 1;

                    return (
                        <div key={data.day} className="flex-1 flex flex-col items-center gap-2">
                            <span className="text-xs font-medium text-gray-600">{data.count}</span>
                            <div className="w-full h-32 bg-gray-100 rounded-lg relative overflow-hidden">
                                <div
                                    className={`absolute bottom-0 w-full rounded-lg transition-all duration-500 ${isToday
                                            ? "bg-linear-to-t from-purple-600 to-indigo-500"
                                            : "bg-linear-to-t from-blue-500 to-cyan-400"
                                        }`}
                                    style={{ height: `${heightPercent}%` }}
                                />
                            </div>
                            <span
                                className={`text-xs font-medium ${isToday ? "text-purple-600 font-bold" : "text-gray-500"}`}
                            >
                                {data.day}
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-linear-to-r from-blue-500 to-cyan-400"></div>
                        <span className="text-gray-600">Previous days</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-linear-to-r from-purple-600 to-indigo-500"></div>
                        <span className="text-gray-600">Today</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
