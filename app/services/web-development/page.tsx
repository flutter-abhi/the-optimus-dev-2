import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Code, Database, Globe, Layout, Server } from "lucide-react"
import webi from '../../../public/services/webpage.jpg'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/scroll-reveal"
import { types } from "util"

import react from '../../../public/services/icons/React-icon.png'
import next from '../../../public/services/icons/next-js.png'
import type from '../../../public/services/icons/typescript.png'
import tailw from '../../../public/services/icons/tailwind_css.png'
import nodeimg from '../../../public/services/icons/node-js.png'
import expressimg from '../../../public/services/icons/express-js.png'
import pythonimg from '../../../public/services/icons/python-logo.png'
import dja from '../../../public/services/icons/Django-Logo.png'
import fireimg from '../../../public/services/icons/firebase.jpeg'
import vercelimg from '../../../public/services/icons/vercel.jpg'
import postimg from '../../../public/services/icons/postgresql-icon.png'
import mongoimg from '../../../public/services/icons/mongodb.jpg'
import redisimg from '../../../public/services/icons/redis-icon.png'
import dockerimg from '../../../public/services/icons/Docker-Symbol.png'
import Awsimg from '../../../public/services/icons/Aws.png'
import gitimg from '../../../public/services/icons/github.jpeg'

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

async function getProjects(): Promise<ProjectsResponse> {
  const res = await fetch('https://static-website-backend.vercel.app/the-optimus-dev/get-all-projects')
  if (!res.ok) {
    throw new Error('Failed to fetch projects')
  }
  return res.json()
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.mainImage}
          alt={project.alt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-zinc-500 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-zinc-100 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        {/* <Link href={`/portfolio/${project.name}`}>
          <Button variant="outline" className="border-zinc-900 text-zinc-900 hover:bg-zinc-900/10">
            View Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link> */}
      </CardContent>
    </Card>
  )
}

export default async function WebDevelopmentPage() {
  const { data: projects } = await getProjects()
  const webProjects = projects.filter((project: Project) =>
    project.category === "Web Development"
  )

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollReveal>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Web Application Development
                </h1>
                <p className="text-zinc-300 md:text-xl">
                  We build modern, responsive web applications that deliver exceptional user experiences and drive
                  business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact">
                    <Button className="bg-white text-zinc-900 hover:bg-zinc-100">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/portfolio?category=web">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10" style={{ color: "black" }}>
                      View Web Projects
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={webi}
                  alt="Web Development"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Web Development Services
              </h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed">
                We offer comprehensive web development solutions tailored to your specific business needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="p-3 bg-zinc-100 rounded-full w-fit">
                      <Layout className="h-6 w-6 text-zinc-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Custom Web Applications</h3>
                  <p className="text-zinc-500 mb-4 flex-grow">
                    Tailored web applications designed to address your unique business challenges and opportunities.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Scalable architecture</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Responsive design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Intuitive user interfaces</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="p-3 bg-zinc-100 rounded-full w-fit">
                      <Globe className="h-6 w-6 text-zinc-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">E-commerce Solutions</h3>
                  <p className="text-zinc-500 mb-4 flex-grow">
                    Powerful online stores that drive sales and provide seamless shopping experiences.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Secure payment processing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Inventory management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Customer account management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="p-3 bg-zinc-100 rounded-full w-fit">
                      <Server className="h-6 w-6 text-zinc-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Content Management Systems</h3>
                  <p className="text-zinc-500 mb-4 flex-grow">
                    User-friendly CMS solutions that empower you to manage your content with ease.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Custom admin dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Role-based access control</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Content workflow management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="p-3 bg-zinc-100 rounded-full w-fit">
                      <Code className="h-6 w-6 text-zinc-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Progressive Web Apps</h3>
                  <p className="text-zinc-500 mb-4 flex-grow">
                    Fast, reliable, and engaging web applications that work offline and feel like native apps.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Offline functionality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Push notifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">App-like experience</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="p-3 bg-zinc-100 rounded-full w-fit">
                      <Database className="h-6 w-6 text-zinc-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">API Development & Integration</h3>
                  <p className="text-zinc-500 mb-4 flex-grow">
                    Robust APIs that connect your systems and enable seamless data exchange.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">RESTful API design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Third-party integrations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Secure authentication</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="p-3 bg-zinc-100 rounded-full w-fit">
                      <Server className="h-6 w-6 text-zinc-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Web Application Maintenance</h3>
                  <p className="text-zinc-500 mb-4 flex-grow">
                    Ongoing support and maintenance to keep your web applications secure and up-to-date.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Security updates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Performance optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Feature enhancements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technologies We Use</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed">
                We leverage cutting-edge technologies to build robust and scalable web applications
              </p>
            </div>
          </ScrollReveal>

          <Tabs defaultValue="frontend" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="database">Database</TabsTrigger>
                <TabsTrigger value="tools">Tools & DevOps</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="frontend" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ScrollReveal delay={0.1}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={react} alt="React" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">React</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={next} alt="Next.js" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Next.js</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={type} alt="TypeScript" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">TypeScript</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={tailw} alt="Tailwind CSS" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Tailwind CSS</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </TabsContent>

            <TabsContent value="backend" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ScrollReveal delay={0.1}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={nodeimg} alt="Node.js" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Node.js</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={expressimg} alt="Express" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Express</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={pythonimg} alt="Python" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Python</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={dja} alt="Django" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Django</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </TabsContent>

            <TabsContent value="database" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ScrollReveal delay={0.1}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={postimg} alt="PostgreSQL" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">PostgreSQL</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={mongoimg} alt="MongoDB" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">MongoDB</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={redisimg} alt="Redis" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Redis</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={fireimg} alt="Firebase" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Firebase</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </TabsContent>

            <TabsContent value="tools" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ScrollReveal delay={0.1}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={dockerimg} alt="Docker" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Docker</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={Awsimg} alt="AWS" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">AWS</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={gitimg} alt="GitHub" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">GitHub</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={vercelimg} alt="Vercel" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Vercel</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Web Projects</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed">
                Explore our latest web development projects and see how we've helped our clients achieve their goals
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {webProjects.map((project, index) => (
              <ScrollReveal key={project._id} delay={0.1 * (index + 1)}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/portfolio?category=web">
              <Button className="bg-zinc-900 text-white hover:bg-zinc-800 mt-8">
                View All Projects
                {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <ScrollReveal>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Your Web Project?
                </h2>
                <p className="max-w-[900px] text-zinc-300 md:text-xl/relaxed">
                  Let's discuss how we can help bring your vision to life with a custom web application
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center items-center">
                <Link href="/contact">
                  <Button className="bg-white text-zinc-900 hover:bg-zinc-100">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <Link href="/services">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10" style={{ color: "black" }}>
                    Explore Other Services
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

