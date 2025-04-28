"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

const technologies = {
  frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Vue.js", level: 75 },
    { name: "Angular", level: 70 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: ".NET", level: 75 },
    { name: "Java", level: 70 },
    { name: "PHP", level: 65 },
  ],
  mobile: [
    { name: "React Native", level: 85 },
    { name: "Flutter", level: 80 },
    { name: "Swift", level: 75 },
    { name: "Kotlin", level: 70 },
    { name: "Xamarin", level: 65 },
  ],
  database: [
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "Firebase", level: 70 },
    { name: "Redis", level: 65 },
  ],
  devops: [
    { name: "Docker", level: 80 },
    { name: "Kubernetes", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Azure", level: 65 },
    { name: "CI/CD", level: 85 },
  ],
}

type TechCategory = keyof typeof technologies

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>("frontend")

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-2">
        {(Object.keys(technologies) as TechCategory[]).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {technologies[activeCategory].map((tech, index) => (
            <ScrollReveal key={tech.name} delay={index * 0.1}>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-100">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{tech.name}</h3>
                  <span className="text-sm text-zinc-500">{tech.level}%</span>
                </div>
                <div className="w-full bg-zinc-100 rounded-full h-2.5">
                  <motion.div
                    className="bg-zinc-900 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  ></motion.div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

