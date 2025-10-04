"use client"

import type React from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface ParallaxProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down"
}

export function Parallax({ children, className, speed = 0.5, direction = "up" }: ParallaxProps) {
  const { elementRef, scrollProgress } = useScrollAnimation()
  
  // Calculate parallax offset
  const offset = scrollProgress * 100 * speed * (direction === "up" ? -1 : 1)

  return (
    <div
      ref={elementRef}
      className={cn("transition-transform duration-100 ease-out", className)}
      style={{
        transform: `translateY(${offset}px)`,
      }}
    >
      {children}
    </div>
  )
}
