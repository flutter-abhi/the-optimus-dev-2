"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Database, Laptop, Monitor, Phone, Settings } from "lucide-react"
import { motion } from "framer-motion"
import webi from '../../public/services/webpage.jpg'
import desk from '../../public/services/deskt.png'
import mobileimg from '../../public/services/icons/mobile_app.png'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function ServicesPage() {
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
                Our Services
              </h1>
              <p className="max-w-[900px] text-zinc-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer comprehensive digital solutions tailored to your specific needs
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid gap-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Web Development */}
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              variants={fadeInUp}
            >
              <div className="space-y-6">
                <div className="inline-block p-4 bg-zinc-100 rounded-xl">
                  <Monitor className="h-10 w-10 text-zinc-900" />
                </div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600">Web Application Development</h2>
                <p className="text-zinc-600 md:text-lg leading-relaxed">
                  We build modern, responsive web applications that deliver exceptional user experiences. Our web
                  solutions are designed to be scalable, secure, and optimized for performance.
                </p>
                <ul className="space-y-3">
                  {[
                    "Custom web application development",
                    "Progressive Web Apps (PWAs)",
                    "E-commerce solutions",
                    "Content Management Systems (CMS)"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-zinc-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="mr-3 h-2 w-2 rounded-full bg-zinc-900" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <div>
                  <Link href="/services/web-development">
                    <Button className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <motion.div
                className="relative aspect-video overflow-hidden rounded-xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  src={webi}
                  alt="Web Development"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </motion.div>

            {/* Mobile Development */}
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              variants={fadeInUp}
            >
              <div className="space-y-6 md:order-2">
                <div className="inline-block p-4 bg-zinc-100 rounded-xl">
                  <Phone className="h-10 w-10 text-zinc-900" />
                </div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600">Mobile Application Development</h2>
                <p className="text-zinc-600 md:text-lg leading-relaxed">
                  We create native and cross-platform mobile applications that engage users and drive business growth.
                  Our mobile solutions are designed with a focus on performance, usability, and security.
                </p>
                <ul className="space-y-3">
                  {[
                    "iOS app development",
                    "Android app development",
                    "Cross-platform app development",
                    "Mobile app maintenance and support"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-zinc-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="mr-3 h-2 w-2 rounded-full bg-zinc-900" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <div>
                  <Link href="/services/mobile-development">
                    <Button className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <motion.div
                className="relative aspect-video overflow-hidden rounded-xl shadow-2xl md:order-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  src={mobileimg}
                  alt="Mobile Development"
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </motion.div>

            {/* Desktop Development */}
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              variants={fadeInUp}
            >
              <div className="space-y-6">
                <div className="inline-block p-4 bg-zinc-100 rounded-xl">
                  <Laptop className="h-10 w-10 text-zinc-900" />
                </div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600">Desktop Application Development</h2>
                <p className="text-zinc-600 md:text-lg leading-relaxed">
                  We develop powerful desktop applications that streamline workflows and boost productivity. Our desktop
                  solutions are designed to be robust, efficient, and user-friendly.
                </p>
                <ul className="space-y-3">
                  {[
                    "Windows application development",
                    "macOS application development",
                    "Cross-platform desktop applications",
                    "Legacy system modernization"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-zinc-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="mr-3 h-2 w-2 rounded-full bg-zinc-900" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <div>
                  <Link href="/services/desktop-development">
                    <Button className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <motion.div
                className="relative aspect-video overflow-hidden rounded-xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  src={desk}
                  alt="Desktop Development"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </motion.div>

            {/* Additional Services */}
            <motion.div
              className="pt-12"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600">Additional Services</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Code,
                    title: "Custom API Development",
                    description: "We build secure, scalable, and well-documented APIs that connect your systems and enable seamless data exchange."
                  },
                  {
                    icon: Database,
                    title: "Database Design & Development",
                    description: "We design and implement efficient database solutions that ensure data integrity, security, and optimal performance."
                  },
                  {
                    icon: Settings,
                    title: "DevOps & Cloud Services",
                    description: "We provide comprehensive DevOps and cloud services to streamline your development processes and optimize infrastructure."
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                      <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                        <div className="p-4 bg-zinc-100 rounded-xl">
                          <service.icon className="h-10 w-10 text-zinc-900" />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900">{service.title}</h3>
                        <p className="text-zinc-600 leading-relaxed">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
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
                Ready to Get Started?
              </h2>
              <p className="max-w-[900px] text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss your project and how we can help bring your vision to life
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="border-zinc-900 text-zinc-900 hover:bg-zinc-900/10 transition-colors">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

