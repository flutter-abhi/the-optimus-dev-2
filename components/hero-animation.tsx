"use client"

import { useEffect, useRef } from "react"

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const devicePixelRatio = window.devicePixelRatio || 1

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      canvasWidth: number
      canvasHeight: number
      dpr: number

      constructor(width: number, height: number, dpr: number) {
        this.canvasWidth = width
        this.canvasHeight = height
        this.dpr = dpr
        this.x = (Math.random() * width) / dpr
        this.y = (Math.random() * height) / dpr
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 1
        this.speedY = (Math.random() - 0.5) * 1
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > this.canvasWidth / this.dpr) this.x = 0
        if (this.x < 0) this.x = this.canvasWidth / this.dpr
        if (this.y > this.canvasHeight / this.dpr) this.y = 0
        if (this.y < 0) this.y = this.canvasHeight / this.dpr
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.fill()
      }
    }

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = 100

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle(canvas.width, canvas.height, devicePixelRatio))
    }

    // Connect particles with lines
    function connect() {
      const maxDistance = 100
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx!.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx!.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx!.stroke()
          }
        }
      }
    }

    // Animation loop
    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw(ctx!)
      }

      connect()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

