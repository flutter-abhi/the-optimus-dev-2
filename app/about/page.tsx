"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Calendar, CheckCircle, Users } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Import images
import piyushimg from '../../public/services/icons/Piyush.jpg'
import vickyimg from '../../public/services/icons/vickkkkkkkkkk.jpg'
import devimg from '../../public/services/icons/developers-team.png'
import abhiimg from '../../public/services/icons/abhi-removebg-preview.png'

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

export default function AboutPage() {
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
                About optimusDev
              </h1>
              <p className="max-w-[900px] text-zinc-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are a team of passionate developers and designers dedicated to creating exceptional digital solutions
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600">Our Story</h2>
              <p className="text-zinc-600 md:text-lg leading-relaxed">
                Founded in 2024, optimusDev began with a simple mission: to create digital solutions that make a
                difference. What started as a small team of three passionate developers has grown into a diverse group
                of talented professionals united by a common goal.
              </p>
              <p className="text-zinc-600 md:text-lg leading-relaxed">
                Our journey has been marked by continuous learning, innovation, and a relentless pursuit of excellence.
                We've had the privilege of working with clients across various industries, helping them transform their
                ideas into reality and achieve their business objectives.
              </p>
            </div>
            <motion.div
              className="relative aspect-video overflow-hidden rounded-xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image src={devimg} alt="Our Team" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600">Mission, Vision & Values</h2>
            <p className="max-w-[900px] text-zinc-600 md:text-lg">
              Our guiding principles that shape our work and culture
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Tabs defaultValue="mission" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 bg-zinc-100 p-1 rounded-lg">
                <TabsTrigger value="mission" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md">Mission</TabsTrigger>
                <TabsTrigger value="vision" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md">Vision</TabsTrigger>
                <TabsTrigger value="values" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md">Values</TabsTrigger>
              </TabsList>
              <TabsContent value="mission" className="p-6 bg-white rounded-lg mt-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-zinc-900">Our Mission</h3>
                <p className="text-zinc-600 leading-relaxed">
                  To empower businesses through innovative digital solutions that solve real-world problems, enhance user
                  experiences, and drive sustainable growth.
                </p>
              </TabsContent>
              <TabsContent value="vision" className="p-6 bg-white rounded-lg mt-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-zinc-900">Our Vision</h3>
                <p className="text-zinc-600 leading-relaxed">
                  To be a global leader in digital innovation, recognized for our technical excellence, creative approach,
                  and the tangible value we bring to our clients and their users.
                </p>
              </TabsContent>
              <TabsContent value="values" className="p-6 bg-white rounded-lg mt-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-zinc-900">Our Values</h3>
                <ul className="space-y-4">
                  {[
                    { title: "Excellence", desc: "We strive for excellence in everything we do, from code quality to client communication." },
                    { title: "Innovation", desc: "We embrace new technologies and approaches to solve complex problems." },
                    { title: "Integrity", desc: "We operate with honesty, transparency, and ethical standards." },
                    { title: "Collaboration", desc: "We believe in the power of teamwork and partnership." },
                    { title: "User-Centered", desc: "We put users at the heart of our design and development process." }
                  ].map((value, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-zinc-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-5 w-5 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-900">{value.title}:</strong> {value.desc}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600">Meet Our Team</h2>
            <p className="max-w-[900px] text-zinc-600 md:text-lg">The talented individuals behind our success</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Abhishek Jadhav",
                role: "Founder & CEO",
                image: abhiimg,
                desc: "With over 5 years of experience in software development, Abhishek leads our team with vision and technical expertise."
              },
              {
                name: "Vicky Autade",
                role: "CTO",
                image: vickyimg,
                desc: "Vicky oversees our technical strategy and ensures we stay at the forefront of technological innovation."
              },
              {
                name: "Piyush Bandal",
                role: "Lead Designer",
                image: piyushimg,
                desc: "Piyush brings creativity and user-centered design principles to every project we undertake."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-6 h-full">
                    <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-zinc-100 shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 160px) 100vw, 160px"
                        priority={index === 0}
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-zinc-900">{member.name}</h3>
                      <p className="text-zinc-600 font-medium">{member.role}</p>
                    </div>
                    <p className="text-zinc-600 text-base leading-relaxed flex-grow">
                      {member.desc}
                    </p>
                    <div className="flex gap-4 mt-4">
                      <a href="#" className="p-2 rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="p-2 rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="p-2 rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600">Our Milestones</h2>
            <p className="max-w-[900px] text-zinc-600 md:text-lg">Key achievements in our journey</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-zinc-200" />

            {/* Milestones */}
            <div className="space-y-12">
              {[
                {
                  year: "2018",
                  title: "Company Founded",
                  icon: Calendar,
                  desc: "optimusDev was founded with a vision to create innovative digital solutions that make a difference.",
                  position: "left"
                },
                {
                  year: "2020",
                  title: "Team Expansion",
                  icon: Users,
                  desc: "Our team grew to 10 members, allowing us to take on larger and more complex projects.",
                  position: "right"
                },
                {
                  year: "2022",
                  title: "Industry Recognition",
                  icon: Award,
                  desc: "Received multiple industry awards for our innovative approach to digital solutions.",
                  position: "left"
                },
                {
                  year: "2023",
                  title: "Global Expansion",
                  icon: Calendar,
                  desc: "Expanded our operations globally, opening offices in Europe and Asia to better serve our international clients.",
                  position: "right"
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center justify-between gap-8 ${milestone.position === "left" ? "flex-row" : "flex-row-reverse"
                    }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${milestone.position === "left" ? "text-right" : "text-left"}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-bold text-zinc-900 mb-2">{milestone.year}</h3>
                      <h4 className="text-lg font-semibold text-zinc-700 mb-3">{milestone.title}</h4>
                      <p className="text-zinc-600 leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white shadow-lg">
                      <milestone.icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Spacer for right-aligned content */}
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
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
                Join Our Journey
              </h2>
              <p className="max-w-[900px] text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Whether you're looking to work with us or join our team, we'd love to hear from you
              </p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <Button className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/careers">
                <Button variant="outline" className="border-zinc-900 text-zinc-900 hover:bg-zinc-900/10 transition-colors">
                  View Careers
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

