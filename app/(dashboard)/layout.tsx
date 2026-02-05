import type { ReactNode } from "react";
import Header from "../components/layout/dashboard/Header";
import Sidebar from "../components/layout/dashboard/Sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-6">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
}
