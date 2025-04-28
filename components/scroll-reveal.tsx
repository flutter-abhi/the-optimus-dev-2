"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  once?: boolean
  className?: string
}

export function ScrollReveal({ children, delay = 0, duration = 0.5, once = true, className = "" }: ScrollRevealProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px 0px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible")
      if (once) {
        setHasAnimated(true)
      }
    } else if (!isInView && !once && hasAnimated) {
      controls.start("hidden")
      setHasAnimated(false)
    }
  }, [isInView, controls, once, hasAnimated])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

