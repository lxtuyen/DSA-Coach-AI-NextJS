import {
  ChevronDown,
  Code2,
  Maximize2,
  Play,
  RotateCcw,
  Settings,
} from "lucide-react";

const CodeEdtHeader = () => {
  return (
    <div className="bg-[#0b0f1a] px-6 py-3 border-b border-[#1c2233] flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-[#131827] px-3 py-1.5 rounded-lg border border-[#1c2233]">
          <Code2 className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-gray-300">JavaScript</span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>

        <button className="text-xs text-gray-400 hover:text-cyan-400 flex items-center gap-1 transition-colors">
          <Maximize2 className="w-3 h-3" />
          Auto
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 rounded-lg hover:bg-[#131827] transition-colors">
          <RotateCcw className="w-4 h-4 text-gray-400 hover:text-gray-200" />
        </button>

        <button className="p-2 rounded-lg hover:bg-[#131827] transition-colors">
          <Settings className="w-4 h-4 text-gray-400 hover:text-gray-200" />
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-[#131827] text-gray-300 rounded-lg hover:bg-[#1c2233] hover:text-cyan-400 transition-colors font-medium text-sm border border-[#1c2233]">
          <Play className="w-4 h-4" />
          Run
        </button>

        <button className="flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-sm
          bg-linear-to-r from-emerald-500/90 to-cyan-500/90
          hover:from-emerald-500 hover:to-cyan-500
          text-white transition-all shadow-md shadow-cyan-500/20">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CodeEdtHeader;
