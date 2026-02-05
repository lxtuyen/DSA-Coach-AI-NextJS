import type { Hint } from "@/app/types/hint";
import { Lightbulb } from "lucide-react";

interface Props {
    hints: Hint[];
}

const HintsSection = ({ hints }: Props) => {
    return (
        <div className="h-full overflow-y-auto px-6 py-6 space-y-4 custom-scrollbar">
            <div className="bg-linear-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 mb-4">
                <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                        <h3 className="font-semibold text-amber-900 text-sm">
                            Progressive Hints
                        </h3>
                        <p className="text-xs text-amber-700 mt-1">
                            Click on each hint to reveal. Try to solve with fewer hints
                            for better learning!
                        </p>
                    </div>
                </div>
            </div>

            {hints.map((hint) => (
                <div
                    key={hint.level}
                    className={`bg-white rounded-xl border-2 border-slate-200 overflow-hidden transition-all hover:border-indigo-300 ${hint.locked ? "opacity-60" : ""
                        }`}
                >
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <div className="bg-linear-to-br from-indigo-500 to-purple-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">
                                    {hint.level}
                                </div>
                                <h3 className="font-semibold text-slate-800 text-sm">
                                    {hint.title}
                                </h3>
                            </div>
                            {hint.locked && (
                                <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                                    Locked
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed pl-9">
                            {hint.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HintsSection;