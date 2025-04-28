"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => setScrolled(window.scrollY > 10)
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        // Use a solid background to ensure visibility from the start.
        "bg-white",
        scrolled && "shadow-sm"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className={cn("text-2xl font-bold", "text-zinc-900")} style={{ fontFamily: "times new roman" }}>
            OptimusDev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn("text-sm font-medium", "text-zinc-600")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn("md:hidden", "text-zinc-900")}
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Sidebar */}
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 z-50 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Sidebar */}
              <motion.div
                className="fixed left-0 top-0 h-full w-64 bg-white z-50 md:hidden shadow-xl"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                      <span className="text-xl font-bold text-zinc-900" style={{ fontFamily: "times new roman" }}>
                        OptimusDev
                      </span>
                    </Link>
                    <button
                      className="text-zinc-900 p-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <nav className="flex-1 p-4">
                    <div className="flex flex-col gap-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-zinc-900 text-lg font-medium hover:text-zinc-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header >
  )
}
