"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Smartphone, TabletSmartphone, Tablet, Layers, Zap } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import swift from '../../../public/services/icons/swift.jpeg'
import swiftuimg from '../../../public/services/icons/swiftui.jpeg'
import jetimg from '../../../public/services/icons/JetpackCompose.png'
import kotlinimg from '../../../public/services/icons/kotlin.jpeg'
import icnic from '../../../public/services/icons/ionic.jpeg'
import reactimg from '../../../public/services/icons/React-icon.png'
import flutterimg from '../../../public/services/icons/flutterlogo.png'
import xamarin from '../../../public/services/icons/xamarin.png'
import firebaseimg from '../../../public/services/icons/firebase.jpeg'
import figmaimg from '../../../public/services/icons/figma-logo.png'
import appcenter from '../../../public/services/icons/appcenter.png'
import fastlane from '../../../public/services/icons/fastlane.jpeg'
import mobile from '../../../public/mob.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/scroll-reveal"
import "./page.css"

const ImageSlider = () => {
  const images = Array.from({ length: 8 }, (_, i) => i + 1);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="image-slider">
      <div className="glow-effect" />

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        watchSlidesProgress={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,       // Increased depth for a stronger 3D effect
          modifier: 1.5,    // Smoother transition modifier
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
        className="swiper-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map((index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <motion.div
              initial={{ opacity: 0.1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0.1, y: -20 }}
              transition={{ duration: 0.5 }}
              className="slide-content"
            >
              <Image
                src={`/mobile/mob${index}.jpg`}
                alt={`Mobile ${index}`}
                width={1000}
                height={600}
                className="slider-image"
                priority={index === 1}
              />
            </motion.div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

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

export default function MobileDevelopmentPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('https://static-website-backend.vercel.app/the-optimus-dev/get-all-projects')
        if (!res.ok) {
          throw new Error('Failed to fetch projects')
        }
        const data = await res.json()
        setProjects(data.data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const mobileProjects = projects.filter(project => project.category === "Mobile Development")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollReveal>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Mobile Application Development
                </h1>
                <p className="text-zinc-300 md:text-xl">
                  We build modern, responsive mobile applications that deliver exceptional user experiences and drive
                  business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact">
                    <Button className="bg-white text-zinc-900 hover:bg-zinc-100">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/portfolio?category=mobile">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10" style={{ color: "black" }}>
                      View Mobile Projects
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={mobile}
                  alt="Mobile Development"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technologies We Use</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed">
                We leverage cutting-edge technologies to build robust and scalable mobile applications
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ScrollReveal delay={0.1}>
              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <Image src={reactimg} alt="React Native" width={64} height={64} />
                  </div>
                  <h3 className="font-medium">React Native</h3>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <Image src={flutterimg} alt="Flutter" width={64} height={64} />
                  </div>
                  <h3 className="font-medium">Flutter</h3>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <Image src={kotlinimg} alt="Kotlin" width={64} height={64} />
                  </div>
                  <h3 className="font-medium">Kotlin</h3>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <Image src={swift} alt="Swift" width={64} height={64} />
                  </div>
                  <h3 className="font-medium">Swift</h3>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mobile Projects</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed">
                Explore our latest mobile development projects and see how we've helped our clients achieve their goals
              </p>
            </div>
          </ScrollReveal>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zinc-900"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {mobileProjects.map((project, index) => (
                <ScrollReveal key={project._id} delay={0.1 * (index + 1)}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          )}

          <div className="flex justify-center mt-8">
            <Link href="/portfolio?category=mobile">
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
                  Ready to Start Your Mobile Project?
                </h2>
                <p className="max-w-[900px] text-zinc-300 md:text-xl/relaxed">
                  Let's discuss how we can help bring your vision to life with a custom mobile application
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

