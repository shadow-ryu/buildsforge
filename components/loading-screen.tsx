import { useState, useEffect } from "react";

import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
  variant?: "default" | "subtle";
}

export function LoadingSpinner({
  size = 24,
  className,
  variant = "default",
}: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        variant === "default" ? "text-[#F5F5DC]" : "text-primary/70",
        className
      )}
    >
      <Loader size={size} className="animate-spin" />
    </div>
  );
}

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadComplete?: () => void;
  message?: string;
  header?: string;
  className?: string;
}

export function LoadingScreen({
  isLoading,
  onLoadComplete,
  message = "Loading your experience",
  header = "Welcome",
  className,
}: LoadingScreenProps) {
  const [hasFinished, setHasFinished] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setHasFinished(false);
      setShouldShow(true);
    } else {
      setTimeout(() => {
        setHasFinished(true);
        setShouldShow(false);
        if (onLoadComplete) onLoadComplete();
      }, 500); // Fade out duration
    }
  }, [isLoading, onLoadComplete]);

  if (!shouldShow && hasFinished) return null;

  return (
    <div
      className={className + " w-full h-full flex items-center justify-center"}
    >
      <div className="w-full h-full max-w-md px-6 flex flex-col items-center">
        <div
          className="flex items-center gap-4 mb-8 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <LoadingSpinner size={36} />
          <h1 className="text-3xl font-bold text-[#F5F5DC]">{header}</h1>
        </div>

        <div className="w-full mb-8">
          <div
            className="mt-3 text-center animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-[#F5F5DC]/90 text-sm font-medium overflow-hidden">
              <span className="animate-typewriter">{message}</span>
            </p>
          </div>
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div
            className="w-2 h-2 rounded-full bg-[#F5F5DC] animate-pulse"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-[#F5F5DC] animate-pulse"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-[#F5F5DC] animate-pulse"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
}
