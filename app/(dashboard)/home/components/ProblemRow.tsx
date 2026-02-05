import { Brain } from "lucide-react";
import Link from "next/link";

interface ProblemRowProps {
  problem: {
    id: number;
    title: string;
    difficulty: string;
    aiSuggested: boolean;
    completed: boolean;
  };
}

export default function ProblemRow({ problem }: ProblemRowProps) {
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
  return (
    <Link
      href={`/problem/${problem.id}`}
      key={problem.id}
      className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors border border-gray-100 group cursor-pointer"
    >
      <div className="shrink-0">
        {problem.completed ? (
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">✓</span>
          </div>
        ) : (
          <div className="w-6 h-6 border-2 border-gray-300 rounded-full group-hover:border-purple-400"></div>
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">#{problem.id}</span>
          <h4 className="font-medium text-gray-800 group-hover:text-purple-600">
            {problem.title}
          </h4>
          {problem.aiSuggested && (
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium flex items-center gap-1">
              <Brain className="w-3 h-3" />
              AI Pick
            </span>
          )}
        </div>
      </div>
      <div
        className={`px-3 py-1 rounded-lg text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}
      >
        {problem.difficulty}
      </div>
    </Link>
  );
}
