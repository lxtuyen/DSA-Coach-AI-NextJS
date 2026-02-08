"use client";

import { Heart, CheckCircle, Clock } from "lucide-react";

interface FavoriteStatsProps {
    totalFavorites: number;
    completedCount: number;
    pendingCount: number;
}

export default function FavoriteStats({
    totalFavorites,
    completedCount,
    pendingCount,
}: FavoriteStatsProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-linear-to-br from-pink-500 to-rose-600 rounded-2xl p-5 text-white shadow-lg">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-pink-100 text-sm font-medium">Total Favorites</p>
                        <p className="text-3xl font-bold mt-1">{totalFavorites}</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Heart className="w-6 h-6" />
                    </div>
                </div>
            </div>
            <div className="bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl p-5 text-white shadow-lg">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-emerald-100 text-sm font-medium">Completed</p>
                        <p className="text-3xl font-bold mt-1">{completedCount}</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-6 h-6" />
                    </div>
                </div>
                {totalFavorites > 0 && (
                    <div className="mt-3">
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-white rounded-full transition-all"
                                style={{ width: `${(completedCount / totalFavorites) * 100}%` }}
                            />
                        </div>
                        <p className="text-xs text-emerald-100 mt-1">
                            {Math.round((completedCount / totalFavorites) * 100)}% completed
                        </p>
                    </div>
                )}
            </div>
            <div className="bg-linear-to-br from-amber-500 to-orange-600 rounded-2xl p-5 text-white shadow-lg">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-amber-100 text-sm font-medium">Pending</p>
                        <p className="text-3xl font-bold mt-1">{pendingCount}</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </div>
    );
}
