import { TestCase } from "@/app/types/testcase";

interface Props {
  testCase: TestCase;
}

const TestcaseDetail = ({ testCase }: Props) => {
  return (
    <div className="space-y-3">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-500 font-medium">x =</span>
        </div>

        <div className="border-2 border-[#1a1f2e] rounded-lg p-3">
          <code className="text-sm text-gray-300 font-mono">
            {testCase.input}
          </code>
        </div>
      </div>
    </div>
  );
};

export default TestcaseDetail;
