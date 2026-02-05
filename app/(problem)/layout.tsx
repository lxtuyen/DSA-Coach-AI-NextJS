import Header from "@/app/components/layout/problem/Header";
import type { ReactNode } from "react";

export default function ProblemLayout({ children }: { children: ReactNode }) {
    return (
        <div className="h-screen flex flex-col bg-linear-to-br from-blue-50 via-purple-50 to-pink-50">
            <Header />

            <main className="flex-1 min-h-0 overflow-hidden">
                {children}
            </main>
        </div>

    );
}
