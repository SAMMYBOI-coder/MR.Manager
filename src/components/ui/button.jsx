import React from "react";
import { cn } from "@/lib/utils";

export function Button({ children, className, size = "md", variant = "default", ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md text-sm font-medium",
        variant === "ghost" && "bg-transparent hover:bg-gray-100",
        variant === "default" && "bg-black text-white hover:bg-gray-800",
        size === "sm" && "px-3 py-1 text-xs",
        size === "icon" && "p-2 w-8 h-8 flex items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
