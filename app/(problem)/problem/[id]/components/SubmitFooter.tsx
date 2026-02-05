import { useState } from "react";
import FooterTabs from "./FooterTabs";
import TestcasePanel from "../../../../components/testcase/TestcasePanel";
import ResultPanel from "../../../../components/result/ResultPanel";
import SubmissionsPanel from "../../../../components/submissions/SubmissionsPanel";
import { TestCase, TestResult } from "@/app/types/testcase";
import { Submission } from "@/app/types/submission";

interface Props {
  testResult: TestResult;
  runCode: () => void;
}

const SubmitFooter = ({ testResult }: Props) => {
  const [activeTab, setActiveTab] =
    useState<"testcase" | "result" | "submissions">("testcase");
  const [selectedCase, setSelectedCase] = useState(1);
  const [isExpanded, setIsExpanded] = useState(true);

  const testCases: TestCase[] = [
    { id: 1, input: "121", expectedOutput: "true", actualOutput: "true" },
    { id: 2, input: "-121", expectedOutput: "false", actualOutput: "false" },
    { id: 3, input: "10", expectedOutput: "false", actualOutput: "false" },
  ];

  const mockSubmissions: Submission[] = [
    {
      id: "sub-1",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      status: "accepted",
      runtime: 52,
      memory: 42.1,
      code: `function isPalindrome(x) {
  if (x < 0) return false;
  const str = x.toString();
  return str === str.split('').reverse().join('');
}`,
      language: "javascript",
      testsPassed: 3,
      totalTests: 3,
    },
    {
      id: "sub-2",
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
      status: "wrong-answer",
      runtime: 48,
      memory: 41.8,
      code: `function isPalindrome(x) {
  return x.toString() === x.toString().split('').reverse().join('');
}`,
      language: "javascript",
      testsPassed: 2,
      totalTests: 3,
    },
    {
      id: "sub-3",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      status: "runtime-error",
      runtime: 0,
      memory: 0,
      code: `function isPalindrome(x) {
  return x === x.reverse();
}`,
      language: "javascript",
      testsPassed: 0,
      totalTests: 3,
    },
  ];

  return (
    <div className="border-t border-[#1a1f2e]">
      <FooterTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isExpanded={isExpanded}
        toggleExpand={() => setIsExpanded(!isExpanded)}
      />

      {isExpanded && (
        <div className="max-h-96 overflow-y-auto custom-scrollbar">
          {activeTab === "testcase" && (
            <TestcasePanel
              testCases={testCases}
              selectedCase={selectedCase}
              onSelect={setSelectedCase}
            />
          )}

          {activeTab === "result" && (
            <ResultPanel testResult={testResult} testCases={testCases} />
          )}

          {activeTab === "submissions" && (
            <SubmissionsPanel submissions={mockSubmissions} />
          )}
        </div>
      )}
    </div>
  );
};

export default SubmitFooter;
