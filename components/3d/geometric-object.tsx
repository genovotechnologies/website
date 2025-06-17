"use client"

import { useRef, useEffect } from "react"

export function GeometricObject() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let rotation = 0

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const size = Math.min(canvas.width, canvas.height) * 0.25

      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)

      // Draw main hexagon
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size)
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)")
      gradient.addColorStop(1, "rgba(59, 130, 246, 0.2)")

      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2
        const x = Math.cos(angle) * size
        const y = Math.sin(angle) * size
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.closePath()
      ctx.fillStyle = gradient
      ctx.fill()
      ctx.strokeStyle = "rgba(59, 130, 246, 0.6)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw inner rotating elements
      ctx.rotate(rotation * 2)
      for (let i = 0; i < 3; i++) {
        const angle = (i / 3) * Math.PI * 2
        const distance = size * 0.5
        const x = Math.cos(angle) * distance
        const y = Math.sin(angle) * distance

        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(rotation * 3)

        ctx.beginPath()
        ctx.rect(-10, -10, 20, 20)
        ctx.fillStyle = "rgba(139, 92, 246, 0.7)"
        ctx.fill()
        ctx.strokeStyle = "rgba(139, 92, 246, 1)"
        ctx.lineWidth = 1
        ctx.stroke()

        ctx.restore()
      }

      ctx.restore()

      rotation += 0.01
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

  return <canvas ref={canvasRef} className="w-full h-full" />
}
