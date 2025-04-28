"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedProjectGrid } from "./AnimatedProjectGrid"

interface Project {
    _id: string
    id: string
    title: string
    name: string
    category: string
    description: string
    technologies: string[]
    mainImage: string
    additionalImages: string[]
    alt: string
    createdAt: string
    updatedAt: string
    __v: number
}

interface Projects {
    all: Project[]
    web: Project[]
    mobile: Project[]
    desktop: Project[]
}

interface PortfolioClientProps {
    projects: Projects
}

export function PortfolioClient({ projects }: PortfolioClientProps) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-zinc-900 to-zinc-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="container px-4 md:px-6 relative">
                    <motion.div
                        className="flex flex-col items-center justify-center space-y-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-300">
                                Our Portfolio
                            </h1>
                            <p className="max-w-[900px] text-zinc-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Explore our diverse range of projects across web, mobile, and desktop development.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                <div className="container px-4 md:px-6">
                    <Tabs defaultValue="all" className="w-full">
                        <TabsList className="grid grid-cols-2 sm:flex sm:flex-row w-full gap-3 mb-20 bg-zinc-100/50 p-2 rounded-xl">
                            <TabsTrigger
                                value="all"
                                className="w-full data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-md rounded-lg py-3 px-6 text-base font-medium transition-all duration-200 hover:bg-white/50"
                            >
                                All Projects
                            </TabsTrigger>
                            <TabsTrigger
                                value="web"
                                className="w-full data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-md rounded-lg py-3 px-6 text-base font-medium transition-all duration-200 hover:bg-white/50"
                            >
                                Web Development
                            </TabsTrigger>
                            <TabsTrigger
                                value="mobile"
                                className="w-full data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-md rounded-lg py-3 px-6 text-base font-medium transition-all duration-200 hover:bg-white/50"
                            >
                                Mobile Development
                            </TabsTrigger>
                            <TabsTrigger
                                value="desktop"
                                className="w-full data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-md rounded-lg py-3 px-6 text-base font-medium transition-all duration-200 hover:bg-white/50"
                            >
                                Desktop Development
                            </TabsTrigger>
                        </TabsList>
                        <div className="mt-8">
                            <AnimatedProjectGrid projects={projects} />
                        </div>
                    </Tabs>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
                <div className="container px-4 md:px-6">
                    <motion.div
                        className="flex flex-col items-center justify-center space-y-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600">
                                Ready to Start Your Project?
                            </h2>
                            <p className="max-w-[900px] text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Let's discuss how we can help bring your vision to life
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link href="/contact">
                                <Button className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
                                    Contact Us
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button variant="outline" className="border-zinc-900 text-zinc-900 hover:bg-zinc-900/10 transition-colors">
                                    View Services
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
} 