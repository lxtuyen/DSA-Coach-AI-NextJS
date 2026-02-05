import { Plus } from "lucide-react";
import { TestCase } from "@/app/types/testcase";

interface Props {
  testCases: TestCase[];
  selectedCase: number;
  onSelect: (id: number) => void;
}

const TestcaseList = ({ testCases, selectedCase, onSelect }: Props) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      {testCases.map((tc) => (
        <button
          key={tc.id}
          onClick={() => onSelect(tc.id)}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            selectedCase === tc.id
              ? "bg-[#1a1f2e] text-cyan-400 border border-cyan-500/20"
              : "bg-[#0a0e1a] text-gray-400 hover:text-gray-300 border border-[#1a1f2e]"
          }`}
        >
          Case {tc.id}
        </button>
      ))}

      <button className="px-3 py-2 text-gray-500 hover:text-gray-400 transition-colors">
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};

export default TestcaseList;
