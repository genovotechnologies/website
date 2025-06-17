"use client"

import { useRef, useEffect } from "react"

export function TechGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gridSize = 40
      const width = canvas.width
      const height = canvas.height

      // Draw animated grid lines
      ctx.strokeStyle = "rgba(100, 116, 139, 0.15)"
      ctx.lineWidth = 1

      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        const offset = Math.sin(time * 0.01 + x * 0.01) * 8
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x + offset, height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        const offset = Math.cos(time * 0.01 + y * 0.01) * 8
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y + offset)
        ctx.stroke()
      }

      // Draw glowing intersection points
      ctx.fillStyle = "rgba(59, 130, 246, 0.8)"
      for (let x = 0; x <= width; x += gridSize * 2) {
        for (let y = 0; y <= height; y += gridSize * 2) {
          const pulse = Math.sin(time * 0.02 + x * 0.01 + y * 0.01) * 0.5 + 0.5
          const size = 1.5 + pulse * 1.5

          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()

          // Add glow effect
          ctx.save()
          ctx.globalAlpha = 0.3
          ctx.beginPath()
          ctx.arc(x, y, size * 3, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }
      }

      time++
      animationId = requestAnimationFrame(draw)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />
}
