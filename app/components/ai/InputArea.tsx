import { Send } from "lucide-react";

interface Props {
    inputMessage: string;
    setInputMessage: (message: string) => void;
    handleSendMessage: () => void;
}

const InputArea = ({ inputMessage, setInputMessage, handleSendMessage }: Props) => {
    return (
        <div className="border-t border-slate-200 bg-white px-4 pt-4 pb-16">
                            <div className="flex gap-3 items-end">
                                <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-200 focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
                                    <textarea
                                        value={inputMessage}
                                        onChange={(e) => setInputMessage(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" && !e.shiftKey) {
                                                e.preventDefault();
                                                handleSendMessage();
                                            }
                                        }}
                                        placeholder="Ask me anything about this problem..."
                                        className="w-full px-4 py-3 bg-transparent outline-none resize-none text-sm text-slate-800 placeholder-slate-400"
                                        rows={1}
                                    />
                                </div>
                                <button
                                    onClick={handleSendMessage}
                                    className="bg-linear-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={!inputMessage.trim()}
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-xs text-slate-400 mt-2 px-2">
                                Press Enter to send, Shift+Enter for new line
                            </p>
                        </div>
    );
};

export default InputArea;