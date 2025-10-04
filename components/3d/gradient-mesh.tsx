"use client"

import { useRef, useEffect } from "react"

export function GradientMesh() {
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

      // Create multiple gradient circles that move
      const circles = [
        {
          x: canvas.width * (0.3 + Math.sin(time * 0.0008) * 0.2),
          y: canvas.height * (0.3 + Math.cos(time * 0.0006) * 0.2),
          radius: Math.min(canvas.width, canvas.height) * 0.4,
          color1: "rgba(59, 130, 246, 0.4)", // blue
          color2: "rgba(59, 130, 246, 0)",
        },
        {
          x: canvas.width * (0.7 + Math.sin(time * 0.0007 + 2) * 0.15),
          y: canvas.height * (0.6 + Math.cos(time * 0.0009 + 2) * 0.15),
          radius: Math.min(canvas.width, canvas.height) * 0.35,
          color1: "rgba(139, 92, 246, 0.35)", // purple
          color2: "rgba(139, 92, 246, 0)",
        },
        {
          x: canvas.width * (0.5 + Math.sin(time * 0.0006 + 4) * 0.18),
          y: canvas.height * (0.8 + Math.cos(time * 0.0008 + 4) * 0.18),
          radius: Math.min(canvas.width, canvas.height) * 0.3,
          color1: "rgba(236, 72, 153, 0.3)", // pink
          color2: "rgba(236, 72, 153, 0)",
        },
      ]

      circles.forEach((circle) => {
        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius)
        gradient.addColorStop(0, circle.color1)
        gradient.addColorStop(1, circle.color2)

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50 blur-3xl" />
}
