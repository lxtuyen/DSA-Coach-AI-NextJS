"use client";

import { useState, useMemo, useEffect } from "react";
import FavoriteStats from "./components/FavoriteStats";
import FavoriteFilterBar from "./components/FavoriteFilterBar";
import FavoriteProblemRow from "./components/FavoriteProblemRow";
import EmptyFavorites from "./components/EmptyFavorites";
import Pagination from "../home/components/Pagination";
import { Heart } from "lucide-react";

const ITEMS_PER_PAGE = 5;

interface FavoriteProblem {
    id: number;
    title: string;
    difficulty: string;
    aiSuggested: boolean;
    completed: boolean;
    category: string;
    addedAt: Date;
}

export default function FavoritesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [difficultyFilter, setDifficultyFilter] = useState("All");
    const [sortBy, setSortBy] = useState("recent");
    const [currentPage, setCurrentPage] = useState(1);

    const [favorites, setFavorites] = useState<FavoriteProblem[]>([
        {
            id: 1,
            title: "Two Sum",
            difficulty: "Easy",
            aiSuggested: true,
            completed: true,
            category: "Array",
            addedAt: new Date("2026-02-07"),
        },
        {
            id: 2,
            title: "Binary Tree Inorder Traversal",
            difficulty: "Easy",
            aiSuggested: true,
            completed: false,
            category: "Tree",
            addedAt: new Date("2026-02-06"),
        },
        {
            id: 4,
            title: "Longest Increasing Subsequence",
            difficulty: "Medium",
            aiSuggested: true,
            completed: false,
            category: "Dynamic Programming",
            addedAt: new Date("2026-02-05"),
        },
        {
            id: 5,
            title: "Merge K Sorted Lists",
            difficulty: "Hard",
            aiSuggested: false,
            completed: false,
            category: "Sorting",
            addedAt: new Date("2026-02-04"),
        },
        {
            id: 6,
            title: "Valid Parentheses",
            difficulty: "Easy",
            aiSuggested: true,
            completed: true,
            category: "String",
            addedAt: new Date("2026-02-03"),
        },
        {
            id: 8,
            title: "Climbing Stairs",
            difficulty: "Easy",
            aiSuggested: true,
            completed: true,
            category: "Dynamic Programming",
            addedAt: new Date("2026-02-02"),
        },
    ]);

    const handleUnfavorite = (id: number) => {
        setFavorites((prev) => prev.filter((p) => p.id !== id));
    };

    const filteredAndSortedFavorites = useMemo(() => {
        let result = [...favorites];

        if (searchQuery) {
            result = result.filter((p) =>
                p.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (difficultyFilter !== "All") {
            result = result.filter((p) => p.difficulty === difficultyFilter);
        }

        switch (sortBy) {
            case "recent":
                result.sort((a, b) => b.addedAt.getTime() - a.addedAt.getTime());
                break;
            case "difficulty":
                const diffOrder = { Easy: 1, Medium: 2, Hard: 3 };
                result.sort(
                    (a, b) =>
                        (diffOrder[a.difficulty as keyof typeof diffOrder] || 0) -
                        (diffOrder[b.difficulty as keyof typeof diffOrder] || 0)
                );
                break;
            case "title":
                result.sort((a, b) => a.title.localeCompare(b.title));
                break;
        }

        return result;
    }, [favorites, searchQuery, difficultyFilter, sortBy]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, difficultyFilter, sortBy]);

    const totalFilteredItems = filteredAndSortedFavorites.length;
    const totalPages = Math.ceil(totalFilteredItems / ITEMS_PER_PAGE);
    const paginatedFavorites = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredAndSortedFavorites.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredAndSortedFavorites, currentPage]);

    const totalFavorites = favorites.length;
    const completedCount = favorites.filter((p) => p.completed).length;
    const pendingCount = totalFavorites - completedCount;

    return (
        <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-linear-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">My Favorites</h2>
                    <p className="text-sm text-gray-500">{totalFavorites} saved problems</p>
                </div>
            </div>

            <FavoriteStats
                totalFavorites={totalFavorites}
                completedCount={completedCount}
                pendingCount={pendingCount}
            />

            <FavoriteFilterBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                difficultyFilter={difficultyFilter}
                setDifficultyFilter={setDifficultyFilter}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />

            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-5">
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h3 className="font-bold text-gray-800 text-lg">Favorite Problems</h3>
                        <p className="text-sm text-gray-500 mt-0.5">
                            Showing {paginatedFavorites.length} of {totalFilteredItems} filtered ({totalFavorites} total)
                        </p>
                    </div>
                    {(searchQuery || difficultyFilter !== "All") && (
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setDifficultyFilter("All");
                            }}
                            className="px-4 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        >
                            Clear Filters
                        </button>
                    )}
                </div>

                {paginatedFavorites.length > 0 ? (
                    <>
                        <div className="space-y-3">
                            {paginatedFavorites.map((problem) => (
                                <FavoriteProblemRow
                                    key={problem.id}
                                    problem={problem}
                                    onUnfavorite={handleUnfavorite}
                                />
                            ))}
                        </div>
                        {totalPages > 1 && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                                itemsPerPage={ITEMS_PER_PAGE}
                                totalItems={totalFilteredItems}
                            />
                        )}
                    </>
                ) : favorites.length === 0 ? (
                    <EmptyFavorites />
                ) : (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="w-8 h-8 text-gray-400" />
                        </div>
                        <h4 className="font-medium text-gray-700 mb-1">No matches found</h4>
                        <p className="text-sm text-gray-500">Try adjusting your filters or search query</p>
                    </div>
                )}
            </div>
        </div>
    );
}
