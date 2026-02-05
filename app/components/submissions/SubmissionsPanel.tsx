import { useState } from "react";
import { Submission } from "@/app/types/submission";
import SubmissionItem from "./SubmissionItem";
import SubmissionDetail from "./SubmissionDetail";
import { FileCode } from "lucide-react";

interface Props {
    submissions: Submission[];
}

const SubmissionsPanel = ({ submissions }: Props) => {
    const [selectedSubmission, setSelectedSubmission] =
        useState<Submission | null>(null);

    if (selectedSubmission) {
        return (
            <SubmissionDetail
                submission={selectedSubmission}
                onBack={() => setSelectedSubmission(null)}
            />
        );
    }

    if (submissions.length === 0) {
        return (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="bg-[#0f1419] p-6 rounded-full mb-4">
                    <FileCode className="w-12 h-12 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">
                    No submissions yet
                </h3>
                <p className="text-sm text-gray-500 max-w-md">
                    Your submission history will appear here once you submit your code.
                    Click the &quot;Submit&quot; button to test your solution.
                </p>
            </div>
        );
    }

    return (
        <div className="h-full overflow-y-auto custom-scrollbar">
            <div className="p-4 border-b border-[#1a1f2e] bg-[#0a0e1a] sticky top-0 z-10">
                <h3 className="text-sm font-semibold text-gray-300">
                    Submission History
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                    {submissions.length} submission{submissions.length !== 1 ? "s" : ""}
                </p>
            </div>

            <div>
                {submissions.map((submission) => (
                    <SubmissionItem
                        key={submission.id}
                        submission={submission}
                        isSelected={false}
                        onClick={() => setSelectedSubmission(submission)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SubmissionsPanel;
