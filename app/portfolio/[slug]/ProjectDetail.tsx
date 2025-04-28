"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
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

interface ProjectDetailProps {
    project: Project
    sequence: Project[]
}

export function ProjectDetail({ project, sequence }: ProjectDetailProps) {
    const router = useRouter()
    const getNextProject = () => {
        if (!sequence.length) return null
        const currentIndex = sequence.findIndex(p => p._id === project._id)
        return sequence[(currentIndex + 1) % sequence.length]
    }

    const nextProject = getNextProject()

    const handleNextProject = () => {
        if (!nextProject) return
        const nextProjectData = encodeURIComponent(JSON.stringify(nextProject))
        const sequenceData = encodeURIComponent(JSON.stringify(sequence))
        router.push(`/portfolio/${nextProject.name}?data=${nextProjectData}&sequence=${sequenceData}`)
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Back Button */}
            <div className="container px-4 md:px-6 py-6">
                <Button
                    variant="ghost"
                    className="gap-2"
                    onClick={() => router.push('/portfolio')}
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Portfolio
                </Button>
            </div>

            {/* Project Content */}
            <div className="container px-4 md:px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Main Image */}
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                        <Image
                            src={project.mainImage}
                            alt={project.alt || project.title}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                            quality={90}
                            priority
                            loading="eager"
                        />
                    </div>

                    {/* Project Info */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-zinc-900 mb-2">{project.title}</h1>
                            <p className="text-zinc-600">{project.category}</p>
                        </div>

                        <p className="text-zinc-600 text-lg">{project.description}</p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-sm bg-zinc-100 px-3 py-1 rounded-full text-zinc-600"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Additional Images */}
                        {project.additionalImages && project.additionalImages.length > 0 && (
                            <div className="space-y-8">
                                <h2 className="text-2xl font-bold text-zinc-900">Project Gallery</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {project.additionalImages.map((image, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="relative aspect-video rounded-xl overflow-hidden"
                                        >
                                            <Image
                                                src={image}
                                                alt={`${project.title} - Image ${index + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-300 hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                quality={90}
                                                loading={index < 2 ? "eager" : "lazy"}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>

            {/* Next Project Section */}
            {nextProject && (
                <div className="bg-zinc-50 py-16">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col md:flex-row items-center gap-8"
                            >
                                <div className="relative w-full md:w-1/2 aspect-video rounded-xl overflow-hidden">
                                    <Image
                                        src={nextProject.mainImage}
                                        alt={nextProject.alt || nextProject.title}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        quality={90}
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                                <div className="w-full md:w-1/2 space-y-4">
                                    <div className="space-y-2">
                                        <p className="text-sm text-zinc-500">Next Project</p>
                                        <h2 className="text-2xl font-bold text-zinc-900">{nextProject.title}</h2>
                                        <p className="text-zinc-600">{nextProject.category}</p>
                                    </div>
                                    <p className="text-zinc-600 line-clamp-3">{nextProject.description}</p>
                                    <button
                                        onClick={handleNextProject}
                                        className="inline-flex items-center gap-2 text-zinc-900 hover:text-zinc-700 transition-colors"
                                    >
                                        View Project
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
} 