"use client"

import { useRef, useEffect, useState } from "react"

interface Point3D {
  x: number
  y: number
  z: number
}

export function SphereGeometry() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect()
      if (rect) {
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let rotation = 0
    const points: Point3D[] = []

    // Generate sphere points
    const radius = 100
    const density = 20
    for (let lat = 0; lat <= density; lat++) {
      const theta = (lat * Math.PI) / density
      for (let lon = 0; lon <= density; lon++) {
        const phi = (lon * 2 * Math.PI) / density
        points.push({
          x: radius * Math.sin(theta) * Math.cos(phi),
          y: radius * Math.sin(theta) * Math.sin(phi),
          z: radius * Math.cos(theta),
        })
      }
    }

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    const rotateY = (point: Point3D, angle: number): Point3D => {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      return {
        x: point.x * cos - point.z * sin,
        y: point.y,
        z: point.x * sin + point.z * cos,
      }
    }

    const rotateX = (point: Point3D, angle: number): Point3D => {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      return {
        x: point.x,
        y: point.y * cos - point.z * sin,
        z: point.y * sin + point.z * cos,
      }
    }

    const project = (point: Point3D, centerX: number, centerY: number): { x: number; y: number; scale: number } => {
      const perspective = 400
      const scale = perspective / (perspective + point.z)
      return {
        x: centerX + point.x * scale,
        y: centerY + point.y * scale,
        scale,
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Rotate based on mouse position
      const rotationY = rotation + mousePos.x * Math.PI * 0.5
      const rotationX = mousePos.y * Math.PI * 0.3

      // Transform and project points
      const projectedPoints = points.map((point) => {
        let rotated = rotateY(point, rotationY)
        rotated = rotateX(rotated, rotationX)
        return { ...project(rotated, centerX, centerY), z: rotated.z }
      })

      // Sort by z-depth for proper rendering
      projectedPoints.sort((a, b) => a.z - b.z)

      // Draw points
      projectedPoints.forEach((point) => {
        const size = 2 + point.scale * 2
        const opacity = (point.z + radius) / (2 * radius)

        ctx.save()
        ctx.globalAlpha = opacity * 0.8
        ctx.fillStyle = `hsl(${(rotation * 50) % 360}, 70%, 60%)`
        ctx.shadowColor = ctx.fillStyle
        ctx.shadowBlur = 10
        ctx.beginPath()
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      rotation += 0.005
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
  }, [mousePos])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
