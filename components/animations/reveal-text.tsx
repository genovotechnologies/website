"use client"

import type React from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface RevealTextProps {
  children: string
  className?: string
  delay?: number
  stagger?: number
}

export function RevealText({ children, className, delay = 0, stagger = 30 }: RevealTextProps) {
  const { elementRef, isVisible } = useScrollAnimation()
  const words = children.split(" ")

  return (
    <span ref={elementRef} className={cn("inline-block", className)}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="inline-block transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${delay + (wordIndex * word.length + charIndex) * stagger}ms`,
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  )
}
