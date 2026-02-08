"use client";

import { Brain, Heart } from "lucide-react";
import Link from "next/link";

interface FavoriteProblem {
    id: number;
    title: string;
    difficulty: string;
    aiSuggested: boolean;
    completed: boolean;
    category: string;
    addedAt: Date;
}

interface FavoriteProblemRowProps {
    problem: FavoriteProblem;
    onUnfavorite: (id: number) => void;
}

export default function FavoriteProblemRow({ problem, onUnfavorite }: FavoriteProblemRowProps) {
    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "Easy":
                return "bg-green-100 text-green-700";
            case "Medium":
                return "bg-yellow-100 text-yellow-700";
            case "Hard":
                return "bg-red-100 text-red-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    const handleUnfavorite = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onUnfavorite(problem.id);
    };

    return (
        <Link
            href={`/problem/${problem.id}`}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-rose-50 transition-colors border border-gray-100 group cursor-pointer"
        >
            <div className="shrink-0">
                {problem.completed ? (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                    </div>
                ) : (
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full group-hover:border-rose-400"></div>
                )}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm text-gray-500">#{problem.id}</span>
                    <h4 className="font-medium text-gray-800 group-hover:text-rose-600 truncate">
                        {problem.title}
                    </h4>
                    {problem.aiSuggested && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium flex items-center gap-1 shrink-0">
                            <Brain className="w-3 h-3" />
                            AI Pick
                        </span>
                    )}
                </div>
                <p className="text-xs text-gray-400 mt-0.5">{problem.category}</p>
            </div>
            <div
                className={`px-3 py-1 rounded-lg text-xs font-medium shrink-0 ${getDifficultyColor(problem.difficulty)}`}
            >
                {problem.difficulty}
            </div>
            <button
                onClick={handleUnfavorite}
                className="shrink-0 p-2 rounded-lg hover:bg-rose-100 transition-colors group/btn"
                title="Remove from favorites"
            >
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500 group-hover/btn:scale-110 transition-transform" />
            </button>
        </Link>
    );
}
