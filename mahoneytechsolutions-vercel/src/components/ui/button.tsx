import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "white" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono text-[0.78rem] tracking-[0.1em] uppercase transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-rust text-white border-2 border-rust hover:bg-rust2 hover:border-rust2": variant === "default",
            "bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#070d1a]": variant === "outline",
            "bg-white text-rust border-2 border-white hover:bg-[#070d1a] hover:text-white hover:border-[#070d1a]": variant === "white",
            "bg-transparent text-steel hover:bg-[#070d1a] hover:text-white": variant === "ghost",
            "h-12 px-6 py-3": size === "default",
            "h-9 px-4 py-2 text-[0.7rem]": size === "sm",
            "h-14 px-8 py-4 text-[0.85rem]": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
