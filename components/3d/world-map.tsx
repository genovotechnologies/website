"use client"

import { useRef, useEffect } from "react"

export function WorldMapVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationId: number
    let time = 0

    const dots = [
      { x: 0.2, y: 0.3, phase: 0 },
      { x: 0.7, y: 0.2, phase: 1 },
      { x: 0.4, y: 0.6, phase: 2 },
      { x: 0.8, y: 0.7, phase: 3 },
      { x: 0.1, y: 0.8, phase: 4 },
    ]

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const width = canvas.clientWidth
      const height = canvas.clientHeight

      // Draw connecting lines
      ctx.strokeStyle = "rgba(96, 165, 250, 0.3)"
      ctx.lineWidth = 1

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dot1 = dots[i]
          const dot2 = dots[j]

          ctx.beginPath()
          ctx.moveTo(dot1.x * width, dot1.y * height)
          ctx.lineTo(dot2.x * width, dot2.y * height)
          ctx.stroke()
        }
      }

      // Draw animated dots
      dots.forEach((dot, index) => {
        const x = dot.x * width
        const y = dot.y * height
        const pulse = Math.sin(time * 0.05 + dot.phase) * 0.5 + 0.5
        const radius = 3 + pulse * 2

        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(96, 165, 250, ${0.6 + pulse * 0.4})`
        ctx.fill()

        // Glow effect
        ctx.beginPath()
        ctx.arc(x, y, radius * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(96, 165, 250, ${0.1 + pulse * 0.1})`
        ctx.fill()
      })

      time++
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-30 w-full h-full" />
}
