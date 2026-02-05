export interface TestCase {
  id: number;
  input: string;
  expectedOutput: string;
  actualOutput?: string;
  status?: "passed" | "failed" | "running";
}

export type TestResult = "running" | "success" | "failed" | null;
