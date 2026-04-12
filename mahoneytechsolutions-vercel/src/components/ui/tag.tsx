import React from "react";
import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "rust" | "white";
}

export function Tag({ children, className, variant = "rust", ...props }: TagProps) {
  return (
    <div 
      className={cn(
        "inline-flex items-center gap-[6px] font-mono text-[0.65rem] tracking-[0.18em] uppercase px-[10px] py-[4px] border border-solid",
        {
          "text-rust border-rust": variant === "rust",
          "text-white/80 border-white/40": variant === "white"
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
