"use client";

import { Camera, Calendar, Trophy, Flame, Award } from "lucide-react";
import { cn } from "@/app/utils/cn";

interface User {
  name: string;
  email: string;
  avatar: string | null;
  joinDate: string;
  streak: number;
  totalSolved: number;
  ranking: number;
}

interface ProfileHeaderProps {
  user: User;
  activeTab: "overview" | "activity" | "settings";
  setActiveTab: (tab: "overview" | "activity" | "settings") => void;
}

export default function ProfileHeader({ user, activeTab, setActiveTab }: ProfileHeaderProps) {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "activity", label: "Activity" },
    { id: "settings", label: "Settings" },
  ] as const;

  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 overflow-hidden">
      <div className="h-32 bg-linear-to-r from-purple-600 via-blue-600 to-indigo-600 relative">
        <div className="absolute inset-0 opacity-30"></div>
      </div>

      <div className="px-6 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12 relative z-10">
          <div className="relative group">
            <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-xl border-4 border-white">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-full h-full rounded-2xl object-cover" />
              ) : (
                user.name.charAt(0).toUpperCase()
              )}
            </div>
            <button className="absolute bottom-0 right-0 p-1.5 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="flex-1 pb-2">
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-500 text-sm">{user.email}</p>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>Joined {user.joinDate}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="font-semibold text-orange-600">{user.streak} day streak</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pb-2">
            <div className="text-center px-4 py-2 bg-linear-to-br from-purple-50 to-indigo-50 rounded-xl">
              <div className="flex items-center justify-center gap-1">
                <Trophy className="w-4 h-4 text-purple-600" />
                <span className="font-bold text-purple-600">{user.totalSolved}</span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">Solved</p>
            </div>
            <div className="text-center px-4 py-2 bg-linear-to-br from-blue-50 to-cyan-50 rounded-xl">
              <div className="flex items-center justify-center gap-1">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="font-bold text-blue-600">#{user.ranking}</span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">Ranking</p>
            </div>
          </div>
        </div>

        <div className="flex gap-1 mt-6 border-b border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 py-2.5 text-sm font-medium rounded-t-lg transition-all",
                activeTab === tab.id
                  ? "text-purple-600 bg-purple-50 border-b-2 border-purple-600"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
