import * as React from "react";
import { cn } from "@/lib/utils";

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: "sm" | "md" | "lg";
}

export function Avatar({ className, size = "md", ...props }: AvatarProps) {
  return (
    <img
      className={cn(
        "rounded-full border-2 border-blue-600 object-cover",
        size === "sm" && "w-7 h-7",
        size === "md" && "w-9 h-9",
        size === "lg" && "w-14 h-14",
        className
      )}
      {...props}
    />
  );
}
