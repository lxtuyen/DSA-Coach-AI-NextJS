import { Submission } from "@/app/types/submission";
import { Check, X, Clock, AlertCircle } from "lucide-react";

interface Props {
    submission: Submission;
    isSelected: boolean;
    onClick: () => void;
}

const SubmissionItem = ({ submission, isSelected, onClick }: Props) => {
    const getStatusConfig = (status: Submission["status"]) => {
        const configs = {
            accepted: {
                icon: Check,
                color: "text-green-500",
                bgColor: "bg-green-500/10",
                label: "Accepted",
            },
            "wrong-answer": {
                icon: X,
                color: "text-red-500",
                bgColor: "bg-red-500/10",
                label: "Wrong Answer",
            },
            "runtime-error": {
                icon: AlertCircle,
                color: "text-orange-500",
                bgColor: "bg-orange-500/10",
                label: "Runtime Error",
            },
            "time-limit-exceeded": {
                icon: Clock,
                color: "text-yellow-500",
                bgColor: "bg-yellow-500/10",
                label: "Time Limit Exceeded",
            },
            "memory-limit-exceeded": {
                icon: AlertCircle,
                color: "text-purple-500",
                bgColor: "bg-purple-500/10",
                label: "Memory Limit Exceeded",
            },
        };
        return configs[status];
    };

    const getRelativeTime = (timestamp: Date) => {
        const now = new Date();
        const diff = now.getTime() - new Date(timestamp).getTime();
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
        if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
        if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
        return "just now";
    };

    const config = getStatusConfig(submission.status);
    const Icon = config.icon;

    return (
        <div
            onClick={onClick}
            className={`p-4 border-b border-[#1a1f2e] cursor-pointer transition-all hover:bg-[#0f1419] ${isSelected ? "bg-[#0f1419] border-l-4 border-l-cyan-500" : ""
                }`}
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                    <div className={`p-2 rounded-lg ${config.bgColor}`}>
                        <Icon className={`w-4 h-4 ${config.color}`} />
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <span className={`font-medium ${config.color}`}>
                                {config.label}
                            </span>
                            <span className="text-xs text-gray-500">
                                {getRelativeTime(submission.timestamp)}
                            </span>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>
                                Runtime:{" "}
                                <span className="text-gray-300">{submission.runtime}ms</span>
                            </span>
                            <span>
                                Memory:{" "}
                                <span className="text-gray-300">{submission.memory}MB</span>
                            </span>
                            <span>
                                Tests:{" "}
                                <span className="text-gray-300">
                                    {submission.testsPassed}/{submission.totalTests}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {submission.language}
                </div>
            </div>
        </div>
    );
};

export default SubmissionItem;
