"use client";

import { Search, Filter, ChevronDown } from "lucide-react";

interface FavoriteFilterBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    difficultyFilter: string;
    setDifficultyFilter: (filter: string) => void;
    sortBy: string;
    setSortBy: (sort: string) => void;
}

export default function FavoriteFilterBar({
    searchQuery,
    setSearchQuery,
    difficultyFilter,
    setDifficultyFilter,
    sortBy,
    setSortBy,
}: FavoriteFilterBarProps) {
    const difficulties = ["All", "Easy", "Medium", "Hard"];
    const sortOptions = [
        { value: "recent", label: "Recently Added" },
        { value: "difficulty", label: "Difficulty" },
        { value: "title", label: "Title" },
    ];

    return (
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-5 mb-6">
            <div className="flex flex-col gap-4">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search favorites..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50/80 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 focus:outline-none transition-all text-gray-700 placeholder:text-gray-400"
                    />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Filter className="w-4 h-4" />
                        <span className="font-medium">Filters:</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        {difficulties.map((diff) => (
                            <button
                                key={diff}
                                onClick={() => setDifficultyFilter(diff)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${difficultyFilter === diff
                                    ? diff === "Easy"
                                        ? "bg-linear-to-r from-green-500 to-emerald-500 text-white shadow-md"
                                        : diff === "Medium"
                                            ? "bg-linear-to-r from-amber-500 to-orange-500 text-white shadow-md"
                                            : diff === "Hard"
                                                ? "bg-linear-to-r from-red-500 to-rose-500 text-white shadow-md"
                                                : "bg-linear-to-r from-pink-500 to-rose-500 text-white shadow-md"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {diff}
                            </button>
                        ))}
                    </div>

                    <div className="w-px h-6 bg-gray-200 hidden sm:block" />

                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="appearance-none pl-3 pr-8 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose-100"
                        >
                            {sortOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    );
}
