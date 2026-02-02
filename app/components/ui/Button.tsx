"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/app/utils/cn";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
} & HTMLMotionProps<"button">;

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition";

  const variants = {
    primary:
      "bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700",
    secondary:
      "border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800",
    ghost: "text-slate-600 hover:bg-slate-100 dark:text-slate-400",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
