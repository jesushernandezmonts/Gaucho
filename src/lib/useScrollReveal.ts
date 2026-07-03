"use client"

import { useEffect, useRef, useState } from "react"

type AnimationVariant = "fade-in" | "reveal" | "reveal-left" | "reveal-right" | "reveal-scale"

export default function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  variant: AnimationVariant = "reveal"
) {
  const ref = useRef<T>(null)
  const [className, setClassName] = useState("")

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Mobile/small screens: no animations, show immediately
    if (window.innerWidth < 768) {
      setClassName("")
      return
    }

    // Desktop: use IntersectionObserver
    if (typeof IntersectionObserver === "undefined") {
      setClassName(`animate-${variant}`)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setClassName(`animate-${variant}`)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    )

    // Start invisible
    setClassName("opacity-0")
    observer.observe(el)
    return () => observer.disconnect()
  }, [variant])

  return { ref, className }
}
