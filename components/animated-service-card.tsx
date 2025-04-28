"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

interface AnimatedServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  technologies: string[]
}

export default function AnimatedServiceCard({
  icon,
  title,
  description,
  link,
  technologies,
}: AnimatedServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <ScrollReveal>
      <Card
        className="bg-white border-none shadow-lg transition-all duration-500 overflow-hidden h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              className="p-3 bg-zinc-100 rounded-full"
              animate={{
                scale: isHovered ? 1.1 : 1,
                backgroundColor: isHovered ? "rgb(244, 244, 245)" : "rgb(244, 244, 245)",
              }}
              transition={{ duration: 0.3 }}
            >
              {icon}
            </motion.div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-zinc-500">{description}</p>
          </div>

          <motion.div
            className="mt-6 pt-4 border-t border-zinc-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-medium text-sm mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech, index) => (
                <span key={index} className="text-xs bg-zinc-100 px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="mt-auto pt-4">
            <Link href={link} className="text-zinc-900 font-medium inline-flex items-center group">
              Learn more
              <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </ScrollReveal>
  )
}

