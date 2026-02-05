export type SubmissionStatus =
  | "accepted"
  | "wrong-answer"
  | "runtime-error"
  | "time-limit-exceeded"
  | "memory-limit-exceeded";

export interface Submission {
  id: string;
  timestamp: Date;
  status: SubmissionStatus;
  runtime: number;
  memory: number;
  code: string;
  language: string;
  testsPassed: number;
  totalTests: number;
}
