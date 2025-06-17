"use client"

import { useRef, useEffect } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  connections: number[]
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

      // Reinitialize particles on resize
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.floor((canvas.clientWidth * canvas.clientHeight) / 15000)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.clientWidth,
          y: Math.random() * canvas.clientHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          connections: [],
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

      // Update particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.clientWidth) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.clientHeight) particle.vy *= -1

        // Keep in bounds
        particle.x = Math.max(0, Math.min(canvas.clientWidth, particle.x))
        particle.y = Math.max(0, Math.min(canvas.clientHeight, particle.y))

        // Find connections
        particle.connections = []
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x
          const dy = particles[j].y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            particle.connections.push(j)
          }
        }
      })

      // Draw connections
      ctx.strokeStyle = "rgba(100, 116, 139, 0.2)"
      ctx.lineWidth = 0.5
      particles.forEach((particle, i) => {
        particle.connections.forEach((j) => {
          const target = particles[j]
          const dx = target.x - particle.x
          const dy = target.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const opacity = ((100 - distance) / 100) * 0.3

          ctx.globalAlpha = opacity
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(target.x, target.y)
          ctx.stroke()
        })
      })

      // Draw particles
      ctx.globalAlpha = 1
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100, 116, 139, ${particle.opacity})`
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />
}
