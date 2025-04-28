"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useRouter } from "next/navigation"

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

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

function ProjectCard({ project, projects }: { project: Project, projects: Projects }) {
    const router = useRouter()
    const handleProjectClick = (project: Project) => {
        // Get the current project's index
        const currentIndex = projects.all.findIndex(p => p._id === project._id)

        // Get all projects in sequence starting from current project
        const sequence = [
            ...projects.all.slice(currentIndex),
            ...projects.all.slice(0, currentIndex)
        ]

        // Encode the current project and the sequence
        const currentProjectData = encodeURIComponent(JSON.stringify(project))
        const sequenceData = encodeURIComponent(JSON.stringify(sequence))

        router.push(`/portfolio/${project.name}?data=${currentProjectData}&sequence=${sequenceData}`)
    }

    return (
        <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="h-full cursor-pointer"
            onClick={() => handleProjectClick(project)}
        >
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full h-[450px] flex flex-col">
                <div className="relative h-[250px] overflow-hidden rounded-t-xl">
                    <Image
                        src={project.mainImage}
                        alt={project.alt || project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={90}
                        priority
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex-1 flex flex-col space-y-4">
                    <div className="flex justify-between items-start">
                        <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-zinc-900 truncate">{project.title}</h3>
                            <p className="text-sm text-zinc-600">{project.category}</p>
                        </div>
                        <div className="p-2 rounded-full hover:bg-zinc-100 transition-colors flex-shrink-0">
                            <ArrowUpRight className="h-4 w-4" />
                            <span className="sr-only">View project</span>
                        </div>
                    </div>
                    <p className="text-zinc-600 text-sm line-clamp-3 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="text-xs bg-zinc-100 px-2 py-1 rounded-full text-zinc-600">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}

export function AnimatedProjectGrid({ projects }: { projects: Projects }) {
    return (
        <AnimatePresence mode="wait">
            {Object.entries(projects).map(([category, categoryProjects]) => (
                <TabsContent key={category} value={category} className="mt-0">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                    >
                        {categoryProjects.map((project: Project) => (
                            <ProjectCard key={project._id} project={project} projects={projects} />
                        ))}
                    </motion.div>
                </TabsContent>
            ))}
        </AnimatePresence>
    )
} 