"use client";

import { Lock, Medal } from "lucide-react";
import { cn } from "@/app/utils/cn";

interface Achievement {
    id: number;
    name: string;
    icon: string;
    description: string;
    unlocked: boolean;
    progress?: number;
}

interface AchievementBadgesProps {
    achievements: Achievement[];
}

export default function AchievementBadges({ achievements }: AchievementBadgesProps) {
    const unlockedCount = achievements.filter((a) => a.unlocked).length;

    return (
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-5">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="font-bold text-gray-800 text-lg">Achievements</h3>
                    <p className="text-sm text-gray-500 mt-0.5">
                        {unlockedCount} of {achievements.length} unlocked
                    </p>
                </div>
                <div className="w-10 h-10 bg-linear-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <Medal className="w-5 h-5 text-white" />
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {achievements.map((achievement) => (
                    <div
                        key={achievement.id}
                        className={cn(
                            "relative p-3 rounded-xl border-2 transition-all duration-200 group cursor-pointer",
                            achievement.unlocked
                                ? "bg-linear-to-br from-amber-50 to-orange-50 border-amber-200 hover:border-amber-300 hover:shadow-md"
                                : "bg-gray-50 border-gray-200 opacity-60"
                        )}
                    >
                        <div className="flex flex-col items-center text-center">
                            <div
                                className={cn(
                                    "text-3xl mb-2 transition-transform group-hover:scale-110",
                                    !achievement.unlocked && "grayscale"
                                )}
                            >
                                {achievement.icon}
                            </div>
                            <h4
                                className={cn(
                                    "font-semibold text-sm",
                                    achievement.unlocked ? "text-gray-800" : "text-gray-500"
                                )}
                            >
                                {achievement.name}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">{achievement.description}</p>

                            {!achievement.unlocked && achievement.progress !== undefined && (
                                <div className="w-full mt-2">
                                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-linear-to-r from-amber-400 to-orange-500 rounded-full"
                                            style={{ width: `${(achievement.progress / 50) * 100}%` }}
                                        />
                                    </div>
                                    <p className="text-xs text-gray-400 mt-1">{achievement.progress}/50</p>
                                </div>
                            )}

                            {!achievement.unlocked && achievement.progress === undefined && (
                                <div className="absolute top-2 right-2">
                                    <Lock className="w-3.5 h-3.5 text-gray-400" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
