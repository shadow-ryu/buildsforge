import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "danger" | "info" | "outline" | "purple" | "blue";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variant === "default" && "bg-[#23262F] text-[#A1A1AA]",
        variant === "success" && "bg-green-900 text-green-400",
        variant === "warning" && "bg-yellow-900 text-yellow-400",
        variant === "danger" && "bg-red-900 text-red-400",
        variant === "info" && "bg-blue-900 text-blue-400",
        variant === "outline" && "border border-[#23262F] text-[#A1A1AA]",
        variant === "purple" && "bg-purple-900 text-purple-300",
        variant === "blue" && "bg-blue-600 text-white",
        className
      )}
      {...props}
    />
  );
}
