"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export default function ParallaxSection({ children, className = "", speed = 0.2 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)

  const { scrollY } = useScroll()

  // Calculate the element's position relative to the viewport
  useEffect(() => {
    if (!ref.current) return

    const setValues = () => {
      const element = ref.current
      const rect = element.getBoundingClientRect()
      setElementTop(rect.top + window.scrollY)
      setClientHeight(window.innerHeight)
    }

    setValues()
    window.addEventListener("resize", setValues)
    window.addEventListener("scroll", setValues)

    return () => {
      window.removeEventListener("resize", setValues)
      window.removeEventListener("scroll", setValues)
    }
  }, [ref])

  // Calculate the parallax effect
  const y = useTransform(scrollY, [elementTop - clientHeight, elementTop + clientHeight], [-speed * 100, speed * 100])

  return (
    <motion.section ref={ref} className={className} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </motion.section>
  )
}

