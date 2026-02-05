import { Message } from "@/app/types/message";

interface Props  {
    message: Message;
}

const MessageBubble = ({ message }: Props) => {
    return (
                                            <div
                                        className={`flex-1 max-w-[80%] ${message.type === "user" ? "text-right" : ""
                                            }`}
                                    >
                                        <div
                                            className={`inline-block rounded-2xl px-4 py-3 ${message.type === "ai"
                                                    ? "bg-white border border-slate-200 text-slate-800"
                                                    : "bg-linear-to-r from-indigo-600 to-purple-600 text-white"
                                                }`}
                                        >
                                            <p className="text-sm leading-relaxed">
                                                {message.content}
                                            </p>
                                        </div>
                                        <div className="text-xs text-slate-400 mt-1 px-2">
                                            {message.timestamp.toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </div>
                                    </div>
    );
};

export default MessageBubble;