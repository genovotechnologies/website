"use client"

import { useRef, useEffect } from "react"

export function ManufacturingScene() {
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
    let rotation = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.clientWidth / 2
      const centerY = canvas.clientHeight / 2
      const baseSize = Math.min(canvas.clientWidth, canvas.clientHeight) * 0.15

      // Draw central sphere
      ctx.save()
      ctx.translate(centerX, centerY)

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, baseSize)
      gradient.addColorStop(0, "rgba(226, 232, 240, 0.8)")
      gradient.addColorStop(1, "rgba(226, 232, 240, 0.2)")

      ctx.beginPath()
      ctx.arc(0, 0, baseSize, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
      ctx.strokeStyle = "#e2e8f0"
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw orbiting components
      const components = [
        { distance: baseSize * 2, size: baseSize * 0.4, color: "#4a5568" },
        { distance: baseSize * 2.5, size: baseSize * 0.3, color: "#2d3748" },
        { distance: baseSize * 3, size: baseSize * 0.35, color: "#1a202c" },
        { distance: baseSize * 2.2, size: baseSize * 0.25, color: "#4a5568" },
      ]

      components.forEach((comp, index) => {
        const angle = rotation + (index / components.length) * Math.PI * 2
        const x = Math.cos(angle) * comp.distance
        const y = Math.sin(angle) * comp.distance * 0.6

        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(rotation * 2)

        // Draw component as rounded rectangle
        const width = comp.size * 1.5
        const height = comp.size
        const radius = comp.size * 0.2

        ctx.beginPath()
        ctx.roundRect(-width / 2, -height / 2, width, height, radius)
        ctx.fillStyle = comp.color
        ctx.fill()
        ctx.strokeStyle = "#e2e8f0"
        ctx.lineWidth = 1
        ctx.stroke()

        ctx.restore()
      })

      ctx.restore()

      rotation += 0.008
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

  return <canvas ref={canvasRef} className="w-full h-full" style={{ background: "transparent" }} />
}
