"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  end: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const startTime = Date.now()
    const startValue = 0
    const endValue = end

    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    // Delay the start of the animation if needed
    const delayTimeout = setTimeout(() => {
      timerRef.current = setInterval(() => {
        const now = Date.now()
        const elapsed = now - startTime

        if (elapsed >= duration) {
          setCount(endValue)
          if (timerRef.current) {
            clearInterval(timerRef.current)
          }
          return
        }

        const progress = elapsed / duration
        const easedProgress = easeOutQuad(progress)
        const currentValue = Math.floor(startValue + (endValue - startValue) * easedProgress)

        if (currentValue !== countRef.current) {
          countRef.current = currentValue
          setCount(currentValue)
        }
      }, 16)
    }, delay)

    return () => {
      clearTimeout(delayTimeout)
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [end, duration, delay])

  // Easing function for smoother animation
  const easeOutQuad = (t: number): number => {
    return t * (2 - t)
  }

  return (
    <span className={cn("transition-all", className)}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

