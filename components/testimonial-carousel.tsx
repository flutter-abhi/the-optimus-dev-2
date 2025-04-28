"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { getTestimonials, Testimonial } from "@/lib/api"

export default function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials()
        setTestimonials(data)
      } catch (error) {
        console.error("Error fetching testimonials:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchTestimonials()
  }, [])

  const next = () => {
    setDirection(1)
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay || testimonials.length === 0) return

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(next, 6000)
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [current, autoplay, testimonials.length])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  if (loading || testimonials.length === 0) {
    return (
      <div className="relative overflow-hidden py-20 bg-zinc-50">
        <div className="flex items-center justify-center h-64">
          <div className="animate-pulse text-zinc-500">Loading testimonials...</div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative overflow-hidden py-20 bg-zinc-50"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-zinc-200 opacity-20">
        <Quote size={120} />
      </div>

      <div className="container mx-auto px-4">
        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full"
            >
              <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
                {/* Company Logo */}
                <motion.div
                  className="relative w-28 h-28 sm:w-32 sm:h-32 mb-8"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-zinc-200">
                    <Image
                      src={testimonials[current].logo}
                      alt={testimonials[current].company}
                      fill
                      sizes="(max-width: 640px) 112px, 128px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Rating Stars */}
                <motion.div
                  className="flex"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 mx-1 ${i < testimonials[current].rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-zinc-200 text-zinc-200"
                        }`}
                    />
                  ))}
                </motion.div>

                {/* Testimonial Content */}
                <motion.blockquote
                  className="max-w-2xl text-lg md:text-xl italic text-zinc-700 relative z-10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  "{testimonials[current].content}"
                </motion.blockquote>

                {/* Name and Role */}
                <motion.div
                  className="space-y-1"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="font-semibold text-lg text-zinc-900">{testimonials[current].name}</div>
                  <div className="text-sm text-zinc-500">
                    {testimonials[current].role}, {testimonials[current].company}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white z-10 shadow-lg"
          onClick={prev}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white z-10 shadow-lg"
          onClick={next}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${current === index ? "bg-zinc-900 w-6" : "bg-zinc-300"
                }`}
              onClick={() => {
                setDirection(index > current ? 1 : -1)
                setCurrent(index)
              }}
            >
              <span className="sr-only">Testimonial {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

