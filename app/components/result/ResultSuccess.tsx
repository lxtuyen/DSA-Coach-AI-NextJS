import { CheckCircle } from "lucide-react";
import { TestCase } from "@/app/types/testcase";

interface Props {
  testCases: TestCase[];
}

const ResultSuccess = ({ testCases }: Props) => {
  return (
    <div className="px-6 py-4 space-y-4">
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
        <div className="flex items-center gap-2 text-emerald-400 mb-3">
          <CheckCircle className="w-5 h-5" />
          <span className="font-semibold text-lg">Accepted</span>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-gray-500 text-xs mb-1">Runtime</div>
            <div className="text-emerald-400 font-mono">152 ms</div>
            <div className="text-gray-600 text-xs mt-0.5">
              Beats 67.5%
            </div>
          </div>

          <div>
            <div className="text-gray-500 text-xs mb-1">Memory</div>
            <div className="text-emerald-400 font-mono">51.2 MB</div>
            <div className="text-gray-600 text-xs mt-0.5">
              Beats 43.8%
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-xs text-gray-500 font-medium mb-2">
          Test Cases: {testCases.length}/{testCases.length} passed
        </div>

        {testCases.map((tc) => (
          <div
            key={tc.id}
            className="bg-[#0a0e1a] border border-emerald-500/20 rounded-lg p-3 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-gray-300">
                Case {tc.id}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <div>
                <span className="text-gray-500">Input: </span>
                <span className="text-cyan-400 font-mono">
                  {tc.input}
                </span>
              </div>

              <div>
                <span className="text-gray-500">Output: </span>
                <span className="text-emerald-400 font-mono">
                  {tc.actualOutput}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultSuccess;
