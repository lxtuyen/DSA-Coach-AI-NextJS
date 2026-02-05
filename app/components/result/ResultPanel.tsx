import { TestResult, TestCase } from "@/app/types/testcase";
import ResultEmpty from "./ResultEmpty";
import ResultFailed from "./ResultFailed";
import ResultRunning from "./ResultRunning";
import ResultSuccess from "./ResultSuccess";

const ResultPanel = ({
  testResult,
  testCases,
}: {
  testResult: TestResult;
  testCases: TestCase[];
}) => {
  if (testResult === null) return <ResultEmpty />;
  if (testResult === "running") return <ResultRunning />;
  if (testResult === "success")
    return <ResultSuccess testCases={testCases} />;
  return <ResultFailed />;
};

export default ResultPanel;
