"use client";

import { BookOpen, ChevronLeft, ChevronRight, LogOut, Star, StickyNote, Swords, Target, TrendingUp, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/app/store/sidebar.store";
import { cn } from "@/app/utils/cn";

const menuItems = [
  { href: "/home", icon: BookOpen, label: "AI Recommended", activeColor: "purple" },
  { href: "/favorites", icon: Star, label: "My Favorites", activeColor: "blue" },
  { href: "/progress", icon: TrendingUp, label: "Progress Track", activeColor: "purple" },
  { href: "/notes", icon: StickyNote, label: "Notes", activeColor: "purple" },
  { href: "/quest", icon: Swords, label: "Quest", activeColor: "gray" },
  { href: "/settings", icon: User, label: "Settings", activeColor: "purple" },
  { href: "/", icon: LogOut, label: "Đăng Xuất", activeColor: "purple" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isCollapsed, isHovered, toggleSidebar, setHovered } = useSidebarStore();

  const shouldExpand = !isCollapsed || isHovered;

  return (
    <aside
      className={cn(
        "shrink-0 transition-all duration-300 ease-in-out relative",
        shouldExpand ? "w-64" : "w-20"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        onClick={toggleSidebar}
        className={cn(
          "absolute -right-3 top-6 z-10 p-1.5 rounded-full bg-white shadow-lg border border-gray-200",
          "hover:bg-purple-50 hover:border-purple-300 transition-all duration-200",
          "flex items-center justify-center"
        )}
        title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4 text-gray-600" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        )}
      </button>

      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-5 mb-4">
        <h3
          className={cn(
            "font-semibold text-gray-800 mb-4 flex items-center gap-2 transition-all duration-300",
            !shouldExpand && "justify-center"
          )}
        >
          <Target className="w-5 h-5 text-purple-600 shrink-0" />
          <span
            className={cn(
              "transition-all duration-300 whitespace-nowrap overflow-hidden",
              shouldExpand ? "opacity-100 w-auto" : "opacity-0 w-0"
            )}
          >
            Learning Path
          </span>
        </h3>
        <div className="space-y-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer group transition-all duration-200",
                  isActive
                    ? "bg-purple-50 border-2 border-purple-200"
                    : "hover:bg-purple-50/50 border-2 border-transparent",
                  !shouldExpand && "justify-center px-2"
                )}
                title={!shouldExpand ? item.label : undefined}
              >
                <Icon
                  className={cn(
                    "w-5 h-5 shrink-0 transition-colors duration-200",
                    isActive ? "text-purple-600" : "text-gray-400 group-hover:text-purple-600"
                  )}
                />
                <span
                  className={cn(
                    "text-sm font-medium transition-all duration-300 whitespace-nowrap overflow-hidden",
                    isActive ? "text-purple-900" : "text-gray-600 group-hover:text-purple-600",
                    shouldExpand ? "opacity-100 w-auto" : "opacity-0 w-0"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div
        className={cn(
          "bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-5 transition-all duration-300",
          !shouldExpand && "px-3"
        )}
      >
        <h3
          className={cn(
            "font-semibold text-gray-800 mb-4 transition-all duration-300 whitespace-nowrap overflow-hidden",
            !shouldExpand && "text-center text-xs"
          )}
        >
          {shouldExpand ? "Your Stats" : "Stats"}
        </h3>
        <div className="space-y-4">
          <div>
            <div
              className={cn(
                "flex justify-between text-sm mb-2 transition-all duration-300",
                !shouldExpand && "flex-col items-center gap-1"
              )}
            >
              <span
                className={cn(
                  "text-gray-600 transition-all duration-300 whitespace-nowrap overflow-hidden",
                  shouldExpand ? "opacity-100" : "opacity-0 h-0 hidden"
                )}
              >
                Problems Solved
              </span>
              <span className="font-bold text-purple-600">1/125</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-linear-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: "1%" }}
              ></div>
            </div>
          </div>
          <div
            className={cn(
              "grid gap-2 pt-3 border-t transition-all duration-300",
              shouldExpand ? "grid-cols-3" : "grid-cols-1"
            )}
          >
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">0</div>
              <div className="text-xs text-gray-500">Easy</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-yellow-600">0</div>
              <div className="text-xs text-gray-500">Medium</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-red-600">0</div>
              <div className="text-xs text-gray-500">Hard</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}