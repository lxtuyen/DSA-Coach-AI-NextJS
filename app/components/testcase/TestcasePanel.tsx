import { TestCase } from "@/app/types/testcase";
import TestcaseList from "./TestcaseList";
import TestcaseDetail from "./TestcaseDetail";


const TestcasePanel = ({
  testCases,
  selectedCase,
  onSelect,
}: {
  testCases: TestCase[];
  selectedCase: number;
  onSelect: (id: number) => void;
}) => {
  const current = testCases.find((t) => t.id === selectedCase);

  return (
    <div className="px-6 py-4">
      <TestcaseList
        testCases={testCases}
        selectedCase={selectedCase}
        onSelect={onSelect}
      />
      {current && <TestcaseDetail testCase={current} />}
    </div>
  );
};

export default TestcasePanel;
