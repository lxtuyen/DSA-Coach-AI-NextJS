import {
  Bell,
  Brain,
  ChevronLeft,
  ChevronRight,
  Clock,
  Settings,
  User,
} from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-400/10 rounded-lg transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            DSA Coach AI
          </span>
        </div>
        <div className="flex items-center gap-2 ml-6">
          <button className="p-2 hover:bg-gray-400/10 rounded-lg transition-colors">
            <ChevronLeft className="w-4 h-4 text-gray-400" />
          </button>
          <span className="text-sm text-gray-400">Problem List</span>
          <button className="p-2 hover:bg-gray-400/10 rounded-lg transition-colors">
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-gray-400/10 rounded-lg transition-colors">
          <Settings className="w-5 h-5 text-gray-400" />
        </button>
        <button className="p-2 hover:bg-gray-400/10 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-gray-400" />
        </button>
        <div className="w-8 h-8 bg-linear-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
        <button className="px-4 py-2 bg-linear-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold text-sm hover:from-amber-600 hover:to-orange-600 transition-all">
          Premium
        </button>
      </div>
    </header>
  );
};

export default Header;
