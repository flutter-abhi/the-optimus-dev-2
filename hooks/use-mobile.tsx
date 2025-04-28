"use client"

import { useEffect, useState } from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Initialize with a default value that works for both client and server
  const [isMobile, setIsMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Mark as mounted after first render
    setIsMounted(true)

    // Only run on client side
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      }

      // Initial check
      checkMobile()

      // Add listener
      window.addEventListener("resize", checkMobile)

      // Cleanup
      return () => window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Return false during SSR to avoid hydration mismatch
  return isMounted ? isMobile : false
}

export function useMediaQuery(query: string): boolean {
  // Add default value for server-side rendering
  if (typeof window === 'undefined') return false

  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    const updateMatch = () => setMatches(media.matches)

    // Initial check
    updateMatch()

    // Add listener
    media.addEventListener("change", updateMatch)

    // Cleanup
    return () => media.removeEventListener("change", updateMatch)
  }, [query])

  return matches
}
