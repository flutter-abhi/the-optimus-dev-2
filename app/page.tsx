import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Laptop, Monitor, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import AnimatedCounter from "@/components/animated-counter"
import HeroAnimation from "@/components/hero-animation"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Transform Your Digital Presence
                </h1>
                <p className="max-w-[600px] text-zinc-200 md:text-xl">
                  We build innovative web, mobile, and desktop applications that elevate your business and delight your
                  users.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/services">
                  <Button className="bg-white text-zinc-900 hover:bg-zinc-100">
                    Discover Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-black hover:bg-white/10 hover:text-zinc-900 hover:border-transparent">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[500px] aspect-square relative">
                <HeroAnimation />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </section>

      {/* Introduction Section */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About optimusDev</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are a team of passionate developers and designers providing exceptional digital solutions at
                the lowest prices in the industry. Our approach combines innovative technology with cost-effective
                strategies to deliver high-quality applications that won't break your budget.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Highlights */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer comprehensive digital solutions tailored to your specific needs
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-zinc-100 rounded-full">
                  <Monitor className="h-8 w-8 text-zinc-900" />
                </div>
                <h3 className="text-xl font-bold">Web Application Development</h3>
                <p className="text-zinc-500">
                  Custom web applications built with modern frameworks and responsive design principles.
                </p>
                <Link href="/services/web-development" className="text-zinc-900 font-medium inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-zinc-100 rounded-full">
                  <Phone className="h-8 w-8 text-zinc-900" />
                </div>
                <h3 className="text-xl font-bold">Mobile Application Development</h3>
                <p className="text-zinc-500">
                  Native and cross-platform mobile apps that deliver exceptional user experiences.
                </p>
                <Link
                  href="/services/mobile-development"
                  className="text-zinc-900 font-medium inline-flex items-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-zinc-100 rounded-full">
                  <Laptop className="h-8 w-8 text-zinc-900" />
                </div>
                <h3 className="text-xl font-bold">Desktop Application Development</h3>
                <p className="text-zinc-500">
                  Powerful desktop solutions that streamline workflows and boost productivity.
                </p>
                <Link
                  href="/services/desktop-development"
                  className="text-zinc-900 font-medium inline-flex items-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <AnimatedCounter end={30} suffix="+" className="text-4xl font-bold" />
              <p className="text-zinc-400">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <AnimatedCounter end={15} suffix="+" className="text-4xl font-bold" />
              <p className="text-zinc-400">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <AnimatedCounter end={3} suffix="+" className="text-4xl font-bold" />
              <p className="text-zinc-400">Years Experience</p>
            </div>
            <div className="space-y-2">
              <AnimatedCounter end={10} className="text-4xl font-bold" />
              <p className="text-zinc-400">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it - hear from some of our satisfied clients
              </p>
            </div>
          </div>
          <div className="mt-12">
            <TestimonialCarousel />
          </div>
          {/* <div className="mt-12 flex flex-wrap justify-center gap-8">
            <Image
              src="/client1.jpg?height=40&width=120"
              alt="Client Logo 1"
              width={120}
              height={40}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/client2.jpg?height=40&width=120"
              alt="Client Logo 2"
              width={120}
              height={40}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/client3.jpg?height=40&width=120"
              alt="Client Logo 3"
              width={120}
              height={40}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/client4.jpg?height=40&width=120"
              alt="Client Logo 4"
              width={120}
              height={40}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />

          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss your project and how we can help bring your vision to life
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="border-zinc-900 text-zinc-900 hover:bg-zinc-900/10">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

