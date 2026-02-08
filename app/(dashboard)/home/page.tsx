"use client";

import { useState, useMemo, useEffect } from "react";
import Categories from "./components/Categories";
import FilterBar from "./components/FilterBar";
import ProblemRow from "./components/ProblemRow";
import Pagination from "./components/Pagination";
import { BookOpen, TrendingUp, Sparkles } from "lucide-react";

const ITEMS_PER_PAGE = 5;

export default function DSACoachDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [aiFilter, setAiFilter] = useState<boolean | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    { name: "Array", count: 125 },
    { name: "String", count: 89 },
    { name: "Tree", count: 67 },
    { name: "Graph", count: 54 },
    { name: "Dynamic Programming", count: 48 },
    { name: "Sorting", count: 42 },
  ];

  const problems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      aiSuggested: true,
      completed: true,
      category: "Array",
    },
    {
      id: 2,
      title: "Binary Tree Inorder Traversal",
      difficulty: "Easy",
      aiSuggested: true,
      completed: false,
      category: "Tree",
    },
    {
      id: 3,
      title: "Validate Binary Search Tree",
      difficulty: "Medium",
      aiSuggested: false,
      completed: false,
      category: "Tree",
    },
    {
      id: 4,
      title: "Longest Increasing Subsequence",
      difficulty: "Medium",
      aiSuggested: true,
      completed: false,
      category: "Dynamic Programming",
    },
    {
      id: 5,
      title: "Merge K Sorted Lists",
      difficulty: "Hard",
      aiSuggested: false,
      completed: false,
      category: "Sorting",
    },
    {
      id: 6,
      title: "Valid Parentheses",
      difficulty: "Easy",
      aiSuggested: true,
      completed: true,
      category: "String",
    },
    {
      id: 7,
      title: "Course Schedule",
      difficulty: "Medium",
      aiSuggested: false,
      completed: false,
      category: "Graph",
    },
    {
      id: 8,
      title: "Climbing Stairs",
      difficulty: "Easy",
      aiSuggested: true,
      completed: true,
      category: "Dynamic Programming",
    },
  ];

  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      if (searchQuery && !problem.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      if (difficultyFilter !== "All" && problem.difficulty !== difficultyFilter) {
        return false;
      }
      if (statusFilter === "Completed" && !problem.completed) {
        return false;
      }
      if (statusFilter === "Not Completed" && problem.completed) {
        return false;
      }
      if (aiFilter === true && !problem.aiSuggested) {
        return false;
      }
      if (selectedCategory && problem.category !== selectedCategory) {
        return false;
      }
      return true;
    });
  }, [searchQuery, difficultyFilter, statusFilter, aiFilter, selectedCategory, problems]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, difficultyFilter, statusFilter, aiFilter, selectedCategory]);
  const totalFilteredItems = filteredProblems.length;
  const totalPages = Math.ceil(totalFilteredItems / ITEMS_PER_PAGE);
  const paginatedProblems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProblems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProblems, currentPage]);

  const totalProblems = problems.length;
  const completedProblems = problems.filter((p) => p.completed).length;
  const aiPicksCount = problems.filter((p) => p.aiSuggested).length;

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-linear-to-br from-purple-500 to-indigo-600 rounded-2xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">Total Problems</p>
              <p className="text-3xl font-bold mt-1">{totalProblems}</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm font-medium">Completed</p>
              <p className="text-3xl font-bold mt-1">{completedProblems}</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-3">
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all"
                style={{ width: `${(completedProblems / totalProblems) * 100}%` }}
              />
            </div>
            <p className="text-xs text-emerald-100 mt-1">
              {Math.round((completedProblems / totalProblems) * 100)}% completed
            </p>
          </div>
        </div>
        <div className="bg-linear-to-br from-blue-500 to-cyan-600 rounded-2xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">AI Recommendations</p>
              <p className="text-3xl font-bold mt-1">{aiPicksCount}</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <FilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        difficultyFilter={difficultyFilter}
        setDifficultyFilter={setDifficultyFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        aiFilter={aiFilter}
        setAiFilter={setAiFilter}
      />

      <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-bold text-gray-800 text-lg">
              {selectedCategory ? `${selectedCategory} Problems` : "All Problems"}
            </h3>
            <p className="text-sm text-gray-500 mt-0.5">
              Showing {paginatedProblems.length} of {totalFilteredItems} filtered ({totalProblems} total)
            </p>
          </div>
          {(searchQuery || difficultyFilter !== "All" || statusFilter !== "All" || aiFilter || selectedCategory) && (
            <button
              onClick={() => {
                setSearchQuery("");
                setDifficultyFilter("All");
                setStatusFilter("All");
                setAiFilter(null);
                setSelectedCategory(null);
              }}
              className="px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>

        {paginatedProblems.length > 0 ? (
          <>
            <div className="space-y-3">
              {paginatedProblems.map((problem) => (
                <ProblemRow key={problem.id} problem={problem} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              itemsPerPage={ITEMS_PER_PAGE}
              totalItems={totalFilteredItems}
            />
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-gray-400" />
            </div>
            <h4 className="font-medium text-gray-700 mb-1">No problems found</h4>
            <p className="text-sm text-gray-500">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>
    </div>
  );
}
