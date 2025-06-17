"use client"

import { useEffect, useState } from "react"
import { GenovoLogo } from "./genovo-logo"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8 animate-pulse">
          <GenovoLogo size={80} variant="full" className="text-white justify-center" />
        </div>

        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-gray-400 font-mono text-sm">Initializing Genovo Systems... {Math.round(progress)}%</div>
        <div className="mt-4 text-xs text-gray-600 font-mono">Loading advanced AI modules...</div>
      </div>
    </div>
  )
}
