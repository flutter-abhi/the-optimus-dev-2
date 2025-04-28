"use client"

import { ProjectDetail } from './ProjectDetail'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

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

export default function ProjectPage({
    params,
}: {
    params: { slug: string }
}) {
    const searchParams = useSearchParams()
    const [project, setProject] = useState<Project | null>(null)
    const [sequence, setSequence] = useState<Project[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const data = searchParams.get('data')
        const sequenceData = searchParams.get('sequence')

        if (data && sequenceData) {
            try {
                const decodedData = decodeURIComponent(data)
                const decodedSequence = decodeURIComponent(sequenceData)
                const currentProject = JSON.parse(decodedData) as Project
                const projectSequence = JSON.parse(decodedSequence) as Project[]

                setProject(currentProject)
                setSequence(projectSequence)
            } catch (error) {
                console.error('Error parsing project data:', error)
            }
        }
        setIsLoading(false)
    }, [searchParams])

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zinc-900"></div>
            </div>
        )
    }

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
                <h1 className="text-2xl font-bold text-zinc-900 mb-4">Project Not Found</h1>
                <p className="text-zinc-600 mb-6">The requested project could not be loaded.</p>
                <a
                    href="/portfolio"
                    className="px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors"
                >
                    Back to Portfolio
                </a>
            </div>
        )
    }

    return <ProjectDetail
        project={project}
        sequence={sequence}
    />
} 