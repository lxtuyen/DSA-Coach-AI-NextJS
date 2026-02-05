import { Code2 } from "lucide-react";
import { Approach } from "@/app/types/approach";

interface Props {
    approaches: Approach[];
}

const ApproachesSection = ({ approaches }: Props) => {
    return (
        <div className="h-full overflow-y-auto px-6 py-6 space-y-4 custom-scrollbar">
            <div className="bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 mb-4">
                <div className="flex items-start gap-3">
                    <Code2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                        <h3 className="font-semibold text-blue-900 text-sm">
                            Solution Approaches
                        </h3>
                        <p className="text-xs text-blue-700 mt-1">
                            Multiple ways to solve this problem. Choose the one that
                            makes most sense to you.
                        </p>
                    </div>
                </div>
            </div>

            {approaches.map((approach) => (
                <div
                    key={approach.id}
                    className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden hover:border-indigo-300 transition-all hover:shadow-lg group"
                >
                    <div className="p-5">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="bg-linear-to-br from-indigo-500 to-purple-600 p-2 rounded-lg">
                                    <Code2 className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800">
                                        {approach.name}
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-0.5">
                                        {approach.description}
                                    </p>
                                </div>
                            </div>
                            <span
                                className={`text-xs font-semibold px-3 py-1 rounded-full ${approach.difficulty === "Easy"
                                        ? "bg-emerald-100 text-emerald-700"
                                        : "bg-amber-100 text-amber-700"
                                    }`}
                            >
                                {approach.difficulty}
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-4">
                            <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-100">
                                <div className="text-xs text-blue-600 font-medium mb-1">
                                    Time Complexity
                                </div>
                                <div className="font-mono font-bold text-blue-900">
                                    {approach.timeComplexity}
                                </div>
                            </div>
                            <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-lg p-3 border border-purple-100">
                                <div className="text-xs text-purple-600 font-medium mb-1">
                                    Space Complexity
                                </div>
                                <div className="font-mono font-bold text-purple-900">
                                    {approach.spaceComplexity}
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-lg font-medium text-sm hover:from-indigo-700 hover:to-purple-700 transition-all group-hover:shadow-md">
                            View Code Template
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ApproachesSection;   