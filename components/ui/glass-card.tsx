"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl",
        hover && "transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl hover:border-white/30 dark:hover:border-white/20",
        "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-50",
        className,
      )}
    >
      {children}
    </div>
  )
}
