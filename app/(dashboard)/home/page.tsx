"use client";

import { useState } from "react";
import {
 Brain
} from "lucide-react";
import LearningTips from "./components/LearningTips";
import DailyStreak from "./components/DailyStreak";
import Categories from "./components/Categories";
import TopicsFilter from "./components/TopicsFilter";
import ProblemRow from "./components/ProblemRow";

export default function DSACoachDashboard() {
  const [selectedTopic, setSelectedTopic] = useState("All Topics");

  const topics = [
    { name: "All Topics", icon: "📚" },
    { name: "Arrays", icon: "📊" },
    { name: "Trees", icon: "🌲" },
    { name: "Graphs", icon: "🕸️" },
    { name: "Dynamic Programming", icon: "💡" },
  ];

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
    },
    {
      id: 2,
      title: "Binary Tree Inorder Traversal",
      difficulty: "Easy",
      aiSuggested: true,
      completed: false,
    },
    {
      id: 3,
      title: "Validate Binary Search Tree",
      difficulty: "Medium",
      aiSuggested: false,
      completed: false,
    },
    {
      id: 4,
      title: "Longest Increasing Subsequence",
      difficulty: "Medium",
      aiSuggested: true,
      completed: false,
    },
    {
      id: 5,
      title: "Merge K Sorted Lists",
      difficulty: "Hard",
      aiSuggested: false,
      completed: false,
    },
  ];

  return (
    <div className="flex gap-6">
      <main className="flex-1">
        <Categories categories={categories} />

        <TopicsFilter topics={topics} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />

          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">
                Recommended Problems
              </h3>
              <span className="text-sm text-gray-500">5 problems</span>
            </div>
            <div className="space-y-3">
              {problems.map((problem) => (
                <ProblemRow key={problem.id} problem={problem} />
              ))}
            </div>
          </div>
      </main>
    </div>
  );
}
