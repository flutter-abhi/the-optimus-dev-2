import { PortfolioClient } from "./components/PortfolioClient"

async function getProjects() {
  const res = await fetch('https://static-website-backend.vercel.app/the-optimus-dev/get-all-projects')
  if (!res.ok) {
    throw new Error('Failed to fetch projects')
  }
  const data = await res.json()
  return data.data
}

export default async function PortfolioPage() {
  const projects = await getProjects()

  // Organize projects by category
  const organizedProjects = {
    all: projects,
    web: projects.filter((project: any) => project.category === "Web Development"),
    mobile: projects.filter((project: any) => project.category === "Mobile Development"),
    desktop: projects.filter((project: any) => project.category === "Desktop Development"),
  }

  return <PortfolioClient projects={organizedProjects} />
}

