import { X } from "lucide-react";

const ResultFailed = () => {
  return (
    <div className="px-6 py-4 space-y-4">
      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
        <div className="flex items-center gap-2 text-red-400 mb-2">
          <X className="w-5 h-5" />
          <span className="font-semibold text-lg">
            Wrong Answer
          </span>
        </div>
        <p className="text-sm text-gray-400">
          1 of 3 test cases failed
        </p>
      </div>

      <div className="bg-[#0a0e1a] border border-red-500/20 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <X className="w-4 h-4 text-red-400" />
          <span className="text-sm font-medium text-red-400">
            Case 2 Failed
          </span>
        </div>

        <div className="space-y-2 text-xs font-mono">
          <div>
            <span className="text-gray-500">Input: </span>
            <span className="text-cyan-400">-121</span>
          </div>
          <div>
            <span className="text-gray-500">Expected: </span>
            <span className="text-emerald-400">false</span>
          </div>
          <div>
            <span className="text-gray-500">Your Output: </span>
            <span className="text-red-400">true</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultFailed;
