import type * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: "light" | "medium" | "heavy"
  className?: string
  children?: React.ReactNode
}

export function GlassCard({ intensity = "medium", className, children, ...props }: GlassCardProps) {
  const intensityStyles = {
    light: "bg-white/40 backdrop-blur-sm border-white/20 shadow-sm",
    medium: "bg-white/30 backdrop-blur-md border-white/30 shadow",
    heavy: "bg-white/20 backdrop-blur-lg border-white/40 shadow-md",
  }

  return (
    <div className={cn("rounded-xl border", intensityStyles[intensity], className)} {...props}>
      {children}
    </div>
  )
}
