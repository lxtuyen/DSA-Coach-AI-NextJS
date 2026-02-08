"use client";

import { FolderOpen } from "lucide-react";

interface CategoryData {
    name: string;
    solved: number;
    total: number;
}

interface CategoryProgressProps {
    categories: CategoryData[];
}

export default function CategoryProgress({ categories }: CategoryProgressProps) {
    const sortedCategories = [...categories].sort((a, b) => {
        const percentA = a.total > 0 ? a.solved / a.total : 0;
        const percentB = b.total > 0 ? b.solved / b.total : 0;
        return percentB - percentA;
    });

    return (
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6">
            <h3 className="font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-purple-600" />
                Category Progress
            </h3>

            <div className="space-y-4 max-h-[320px] overflow-y-auto custom-scrollbar pr-2">
                {sortedCategories.map((cat, index) => {
                    const percentage = cat.total > 0 ? Math.round((cat.solved / cat.total) * 100) : 0;
                    const isTop = index < 3;

                    return (
                        <div key={cat.name} className="group">
                            <div className="flex items-center justify-between mb-1.5">
                                <div className="flex items-center gap-2">
                                    {isTop && (
                                        <span className="w-5 h-5 bg-linear-to-br from-purple-500 to-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                                            {index + 1}
                                        </span>
                                    )}
                                    <span className={`text-sm ${isTop ? "font-medium text-gray-800" : "text-gray-600"}`}>
                                        {cat.name}
                                    </span>
                                </div>
                                <div className="text-xs">
                                    <span className="font-medium text-gray-700">{cat.solved}</span>
                                    <span className="text-gray-400">/{cat.total}</span>
                                </div>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className={`h-full rounded-full transition-all duration-500 ${isTop
                                            ? "bg-linear-to-r from-purple-500 to-blue-500"
                                            : "bg-linear-to-r from-gray-400 to-gray-500"
                                        }`}
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
