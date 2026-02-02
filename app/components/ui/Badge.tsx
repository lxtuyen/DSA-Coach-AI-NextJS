import { cn } from "@/app/utils/cn";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "info";
  className?: string;
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default:
      "border border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
    info:
      "border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
