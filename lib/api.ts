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

interface ProjectsResponse {
    success: boolean
    data: Project[]
}

export async function getProjects(): Promise<Project[]> {
    const response = await fetch("https://static-website-backend.vercel.app/the-optimus-dev/get-all-projects")
    const data: ProjectsResponse = await response.json()
    return data.data
}

export interface Testimonial {
    _id: string
    name: string
    role: string
    content: string
    rating: number
    company: string
    logo: string
    id: string
    createdAt: string
    updatedAt: string
    __v: number
}

interface TestimonialsResponse {
    success: boolean
    data: Testimonial[]
}

export async function getTestimonials(): Promise<Testimonial[]> {
    const response = await fetch("https://static-website-backend.vercel.app/the-optimus-dev/get-all-feedbacks/")
    const data: TestimonialsResponse = await response.json()
    return data.data
} 