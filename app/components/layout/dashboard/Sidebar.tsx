import { BookOpen, GraduationCap, Star, Swords, Target, TrendingUp } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="w-64 shrink-0">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-5 mb-4">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-600" />
                Learning Path
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-purple-50 border-2 border-purple-200 cursor-pointer">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-purple-900">AI Recommended</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 cursor-pointer">
                  <Star className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-600">My Favorites</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 cursor-pointer">
                  <TrendingUp className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-600">Progress Track</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 cursor-pointer">
                  <Swords className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-600">Quest</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 cursor-pointer">
                  <GraduationCap className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-600">Study Plan</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-5">
              <h3 className="font-semibold text-gray-800 mb-4">Your Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Problems Solved</span>
                    <span className="font-bold text-purple-600">1/125</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-linear-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '1%' }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-3 border-t">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">0</div>
                    <div className="text-xs text-gray-500">Easy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-600">0</div>
                    <div className="text-xs text-gray-500">Medium</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600">0</div>
                    <div className="text-xs text-gray-500">Hard</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
    )
}