"use client";

import { useState } from "react";
import {
    Sparkles,
    Send,
    Lightbulb,
    Code2,
    TrendingUp,
    MessageSquare,
    Bot,
    User,
} from "lucide-react";
import HintsSection from "./HintsSection";
import ApproachesSection from "./ApproachesSection";
import { Message } from "@/app/types/message";
import MessageBubble from "./MessageBubble";
import InputArea from "./InputArea";


const AICoachPanel = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            type: "ai",
            content:
                "Hello! I'm your AI Coach. I'm here to help you solve this problem step by step. Would you like a hint, or do you have any questions?",
            timestamp: new Date(),
        },
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [activeSection, setActiveSection] = useState<
        "chat" | "hints" | "approach"
    >("chat");

    const hints = [
        {
            level: 1,
            title: "Think about the problem",
            content:
                "How would you check if a string reads the same forwards and backwards?",
            locked: false,
        },
        {
            level: 2,
            title: "Consider edge cases",
            content:
                "What happens with negative numbers? Can they be palindromes?",
            locked: false,
        },
        {
            level: 3,
            title: "Optimization hint",
            content:
                "You don't need to convert the entire number to a string. Think about mathematical operations.",
            locked: true,
        },
    ];

    const approaches = [
        {
            id: 1,
            name: "String Conversion",
            difficulty: "Easy",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            description: "Convert the number to string and compare characters",
        },
        {
            id: 2,
            name: "Mathematical Reversal",
            difficulty: "Medium",
            timeComplexity: "O(log n)",
            spaceComplexity: "O(1)",
            description: "Reverse the number mathematically and compare",
        },
    ];

    const handleSendMessage = () => {
        if (!inputMessage.trim()) return;

        const newUserMessage: Message = {
            id: messages.length + 1,
            type: "user",
            content: inputMessage,
            timestamp: new Date(),
        };

        const aiResponse: Message = {
            id: messages.length + 2,
            type: "ai",
            content:
                "Great question! Let me help you with that. For this palindrome problem, think about how you can check if the number reads the same forwards and backwards.",
            timestamp: new Date(),
        };

        setMessages([...messages, newUserMessage, aiResponse]);
        setInputMessage("");
    };

    return (
        <div className="h-full flex flex-col bg-linear-to-br from-slate-50 to-blue-50/30 custom-scrollbar">

            <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-slate-200">
                {[
                    { id: "chat", label: "Chat", icon: MessageSquare },
                    { id: "hints", label: "Hints", icon: Lightbulb },
                    { id: "approach", label: "Approaches", icon: TrendingUp },
                ].map((section) => (
                    <button
                        key={section.id}
                        onClick={() =>
                            setActiveSection(section.id as "chat" | "hints" | "approach")
                        }
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeSection === section.id
                                ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                                : "text-slate-600 hover:bg-slate-100"
                            }`}
                    >
                        <section.icon className="w-4 h-4" />
                        {section.label}
                    </button>
                ))}
            </div>

            <div className="flex-1 overflow-hidden">
                {activeSection === "chat" && (
                    <div className="h-full flex flex-col">
                        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 custom-scrollbar">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex gap-3 ${message.type === "user" ? "flex-row-reverse" : ""
                                        }`}
                                >
                                    <div
                                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${message.type === "ai"
                                                ? "bg-linear-to-br from-indigo-500 to-purple-600"
                                                : "bg-linear-to-br from-blue-500 to-cyan-500"
                                            }`}
                                    >
                                        {message.type === "ai" ? (
                                            <Bot className="w-4 h-4 text-white" />
                                        ) : (
                                            <User className="w-4 h-4 text-white" />
                                        )}
                                    </div>

                                    <MessageBubble message={message} />
                                </div>
                            ))}
                        </div>

                        <InputArea inputMessage={inputMessage} setInputMessage={setInputMessage} handleSendMessage={handleSendMessage} />
                    </div>
                )}
                {activeSection === "hints" && (
                    <HintsSection hints={hints} />
                )}

                {activeSection === "approach" && (
                    <ApproachesSection approaches={approaches} />
                )}
            </div>
        </div>
    );
};

export default AICoachPanel;
