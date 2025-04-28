import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Laptop, Monitor, Database, Code, Shield, Settings } from "lucide-react"
import netimg from '../../../public/services/icons/Microsoft_.NET_logo.png'
import Cimg from '../../../public/services/icons/icons8-c-sharp-logo-480.png'
import wpf from '../../../public/services/icons/wpf-icon-5.png'
import objcimg from '../../../public/services/icons/objC.png'
import swiftimg from '../../../public/services/icons/swift.jpeg'
//import swiftuiimg from '../../../public/services/icons/swift.jpeg'
import winui from '../../../public/services/icons/logo-winui.png'
import electronimg from '../../../public/services/icons/electron.png'
import pythonimg from '../../../public/services/icons/python-logo.png'
import swiftui from '../../../public/services/icons/swiftui.jpeg'
import tauri from '../../../public/services/icons/tarui.png'
import mobileimg from '../../../public/services/icons/mobile_app.png'

import desktopdash from '../../../public/services/dashboaddesk.jpg'

import qt from '../../../public/services/icons/qt.jpeg'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/scroll-reveal"

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

export default async function DesktopDevelopmentPage() {
  const { data: projects } = await getProjects()
  const desktopProjects = projects.filter((project: Project) =>
    project.category === "Desktop Development"
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
                  Desktop Application Development
                </h1>
                <p className="text-zinc-300 md:text-xl">
                  We build powerful, efficient desktop applications that deliver exceptional performance and user experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact">
                    <Button className="bg-white text-zinc-900 hover:bg-zinc-100">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/portfolio?category=desktop">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10" style={{ color: "black" }}>
                      View Desktop Projects
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={desktopdash}
                  alt="Desktop Development"
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
                Our Desktop Development Services
              </h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed">
                We offer comprehensive desktop application solutions tailored to your specific business needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="p-3 bg-zinc-100 rounded-full w-fit">
                      <Monitor className="h-6 w-6 text-zinc-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Windows Application Development</h3>
                  <p className="text-zinc-500 mb-4 flex-grow">
                    Custom Windows applications designed to meet your specific business requirements.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">.NET Framework & .NET Core</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">WPF & Windows Forms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">UWP & WinUI</span>
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
                      <Laptop className="h-6 w-6 text-zinc-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">macOS Application Development</h3>
                  <p className="text-zinc-500 mb-4 flex-grow">
                    Native macOS applications that provide a seamless user experience on Apple computers.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Swift & SwiftUI</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Objective-C & Cocoa</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Mac Catalyst</span>
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
                      <Code className="h-6 w-6 text-zinc-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cross-Platform Desktop Apps</h3>
                  <p className="text-zinc-500 mb-4 flex-grow">
                    Applications that run seamlessly across Windows, macOS, and Linux from a single codebase.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Electron</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Qt</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Tauri</span>
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
                      <Database className="h-6 w-6 text-zinc-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Database Applications</h3>
                  <p className="text-zinc-500 mb-4 flex-grow">
                    Powerful database applications for data management, analysis, and reporting.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">SQL Server integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">SQLite for local storage</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Data visualization</span>
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
                      <Settings className="h-6 w-6 text-zinc-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Legacy System Modernization</h3>
                  <p className="text-zinc-500 mb-4 flex-grow">
                    Updating and modernizing legacy desktop applications to improve performance and user experience.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Code refactoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">UI/UX modernization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Technology stack updates</span>
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
                      <Shield className="h-6 w-6 text-zinc-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Desktop App Maintenance</h3>
                  <p className="text-zinc-500 mb-4 flex-grow">
                    Ongoing support and maintenance to keep your desktop applications secure and up-to-date.
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Desktop Technologies</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed">
                We leverage cutting-edge technologies to build robust and efficient desktop applications
              </p>
            </div>
          </ScrollReveal>

          <Tabs defaultValue="windows" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="windows">Windows</TabsTrigger>
                <TabsTrigger value="macos">macOS</TabsTrigger>
                <TabsTrigger value="cross-platform">Cross-Platform</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="windows" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ScrollReveal delay={0.1}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={netimg} alt=".NET" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">.NET</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={wpf} alt="WPF" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">WPF</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={Cimg} alt="C#" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">C#</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={winui} alt="WinUI" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">WinUI</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </TabsContent>

            <TabsContent value="macos" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ScrollReveal delay={0.1}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={swiftimg} alt="Swift" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Swift</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={swiftui} alt="SwiftUI" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">SwiftUI</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={objcimg} alt="Objective-C" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Objective-C</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src="/placeholder.svg?height=64&width=64" alt="Cocoa" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Cocoa</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </TabsContent>

            <TabsContent value="cross-platform" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ScrollReveal delay={0.1}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={electronimg} alt="Electron" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Electron</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={qt} alt="Qt" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Qt</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={tauri} alt="Tauri" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Tauri</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src={pythonimg} alt="Python" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Python</h3>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Desktop Projects</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed">
                Explore our latest desktop development projects and see how we've helped our clients achieve their goals
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {desktopProjects.map((project, index) => (
              <ScrollReveal key={project._id} delay={0.1 * (index + 1)}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/portfolio?category=desktop">
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
                  Ready to Start Your Desktop Project?
                </h2>
                <p className="max-w-[900px] text-zinc-300 md:text-xl/relaxed">
                  Let's discuss how we can help bring your vision to life with a custom desktop application
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

