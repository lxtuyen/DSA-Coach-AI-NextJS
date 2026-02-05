import { Submission } from "@/app/types/submission";
import { ArrowLeft, Check, X, Clock, AlertCircle } from "lucide-react";
import Editor from "@monaco-editor/react";

interface Props {
    submission: Submission;
    onBack: () => void;
}

const SubmissionDetail = ({ submission, onBack }: Props) => {
    const getStatusConfig = (status: Submission["status"]) => {
        const configs = {
            accepted: {
                icon: Check,
                color: "text-green-500",
                bgColor: "bg-green-500/10",
                borderColor: "border-green-500",
                label: "Accepted",
            },
            "wrong-answer": {
                icon: X,
                color: "text-red-500",
                bgColor: "bg-red-500/10",
                borderColor: "border-red-500",
                label: "Wrong Answer",
            },
            "runtime-error": {
                icon: AlertCircle,
                color: "text-orange-500",
                bgColor: "bg-orange-500/10",
                borderColor: "border-orange-500",
                label: "Runtime Error",
            },
            "time-limit-exceeded": {
                icon: Clock,
                color: "text-yellow-500",
                bgColor: "bg-yellow-500/10",
                borderColor: "border-yellow-500",
                label: "Time Limit Exceeded",
            },
            "memory-limit-exceeded": {
                icon: AlertCircle,
                color: "text-purple-500",
                bgColor: "bg-purple-500/10",
                borderColor: "border-purple-500",
                label: "Memory Limit Exceeded",
            },
        };
        return configs[status];
    };

    const config = getStatusConfig(submission.status);
    const Icon = config.icon;

    return (
        <div className="h-full flex flex-col">
            <div className="p-4 border-b border-[#1a1f2e]">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm">Back to submissions</span>
                </button>

                <div
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 ${config.borderColor} ${config.bgColor}`}
                >
                    <Icon className={`w-6 h-6 ${config.color}`} />
                    <div className="flex-1">
                        <h3 className={`text-lg font-semibold ${config.color}`}>
                            {config.label}
                        </h3>
                        <p className="text-sm text-gray-400">
                            Submitted on{" "}
                            {new Date(submission.timestamp).toLocaleString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-4 border-b border-[#1a1f2e] bg-[#0a0e1a]">
                <div className="grid grid-cols-4 gap-4">
                    <div className="bg-[#0f1419] p-3 rounded-lg border border-[#1a1f2e]">
                        <p className="text-xs text-gray-500 mb-1">Runtime</p>
                        <p className="text-lg font-semibold text-cyan-400">
                            {submission.runtime}ms
                        </p>
                    </div>
                    <div className="bg-[#0f1419] p-3 rounded-lg border border-[#1a1f2e]">
                        <p className="text-xs text-gray-500 mb-1">Memory</p>
                        <p className="text-lg font-semibold text-purple-400">
                            {submission.memory}MB
                        </p>
                    </div>
                    <div className="bg-[#0f1419] p-3 rounded-lg border border-[#1a1f2e]">
                        <p className="text-xs text-gray-500 mb-1">Tests Passed</p>
                        <p className="text-lg font-semibold text-green-400">
                            {submission.testsPassed}/{submission.totalTests}
                        </p>
                    </div>
                    <div className="bg-[#0f1419] p-3 rounded-lg border border-[#1a1f2e]">
                        <p className="text-xs text-gray-500 mb-1">Language</p>
                        <p className="text-lg font-semibold text-orange-400 uppercase">
                            {submission.language}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-hidden p-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    Submitted Code
                </h4>
                <div className="h-[calc(100%-2rem)] border border-[#1a1f2e] rounded-lg overflow-hidden">
                    <Editor
                        height="100%"
                        language={submission.language}
                        theme="vs-dark"
                        value={submission.code}
                        options={{
                            readOnly: true,
                            minimap: { enabled: false },
                            fontFamily: "JetBrains Mono",
                            fontSize: 13,
                            automaticLayout: true,
                            scrollBeyondLastLine: false,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SubmissionDetail;
