"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lightbulb, Code, Paintbrush, Rocket, Wrench, BarChart } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    id: 1,
    title: "Discovery",
    icon: <Lightbulb className="h-6 w-6" />,
    description:
      "We begin by understanding your business goals, target audience, and project requirements through in-depth consultations and research.",
    details: [
      "Stakeholder interviews",
      "Market research",
      "Competitive analysis",
      "User persona development",
      "Requirements gathering",
    ],
  },
  {
    id: 2,
    title: "Planning",
    icon: <BarChart className="h-6 w-6" />,
    description:
      "We create a comprehensive project plan outlining the scope, timeline, deliverables, and technical approach.",
    details: [
      "Project scope definition",
      "Technical architecture planning",
      "Timeline development",
      "Resource allocation",
      "Risk assessment",
    ],
  },
  {
    id: 3,
    title: "Design",
    icon: <Paintbrush className="h-6 w-6" />,
    description:
      "Our designers create intuitive user interfaces and engaging user experiences that align with your brand and business objectives.",
    details: ["Wireframing", "UI/UX design", "Prototyping", "User testing", "Design system creation"],
  },
  {
    id: 4,
    title: "Development",
    icon: <Code className="h-6 w-6" />,
    description:
      "Our development team brings the designs to life using modern technologies and best practices to ensure scalable, maintainable code.",
    details: [
      "Frontend development",
      "Backend development",
      "API integration",
      "Database implementation",
      "Code reviews",
    ],
  },
  {
    id: 5,
    title: "Testing",
    icon: <Wrench className="h-6 w-6" />,
    description:
      "We rigorously test all aspects of your application to ensure it's bug-free, secure, and performs optimally across all devices.",
    details: [
      "Functional testing",
      "Performance testing",
      "Security testing",
      "Cross-browser/device testing",
      "User acceptance testing",
    ],
  },
  {
    id: 6,
    title: "Launch",
    icon: <Rocket className="h-6 w-6" />,
    description:
      "We deploy your application to production and provide ongoing support to ensure a smooth launch and continued success.",
    details: [
      "Deployment preparation",
      "Go-live strategy",
      "Performance monitoring",
      "Post-launch support",
      "Knowledge transfer",
    ],
  },
]

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <div className="relative">
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 transform -translate-x-1/2"></div>
      <div className="space-y-12 relative">
        {steps.map((step, index) => (
          <ScrollReveal key={step.id} delay={index * 0.1}>
            <div className="relative">
              <div className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                <div
                  className={`md:flex ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"} md:pr-8 md:pl-0 pl-8 relative`}
                >
                  {/* Mobile dot */}
                  <div className="absolute left-0 top-0 md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 text-white">
                    {step.icon}
                  </div>

                  {/* Desktop dot */}
                  <div className="hidden md:flex absolute md:left-auto md:right-0 md:top-0 items-center justify-center w-8 h-8 rounded-full bg-zinc-900 text-white transform translate-x-1/2 -translate-y-0">
                    {step.icon}
                  </div>

                  <div className={`${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-zinc-500 mt-2">{step.description}</p>
                    <button
                      onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                      className="text-sm font-medium text-zinc-900 mt-2 hover:underline focus:outline-none"
                    >
                      {activeStep === step.id ? "Show less" : "Learn more"}
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {activeStep === step.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`md:border-l md:border-zinc-200 md:pl-8 mt-4 md:mt-0 ${index % 2 === 0 ? "" : "md:border-l-0 md:border-r md:border-zinc-200 md:pr-8 md:pl-0"}`}
                    >
                      <div className="bg-zinc-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Key Activities:</h4>
                        <ul className="space-y-1">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-center">
                              <div className="mr-2 h-1 w-1 rounded-full bg-zinc-900"></div>
                              <span className="text-zinc-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

