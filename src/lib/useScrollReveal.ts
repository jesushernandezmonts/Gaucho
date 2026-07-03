"use client"

import { useEffect, useRef } from "react"

type Variant = "fade-up" | "fade-left" | "fade-right" | "fade-scale" | "fade-in"

const variantStyles: Record<Variant, { transform: string; transition: string }> = {
  "fade-up": {
    transform: "translateY(30px)",
    transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
  },
  "fade-left": {
    transform: "translateX(-30px)",
    transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
  },
  "fade-right": {
    transform: "translateX(30px)",
    transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
  },
  "fade-scale": {
    transform: "scale(0.9)",
    transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)",
  },
  "fade-in": {
    transform: "translateY(20px)",
    transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)",
  },
}

export default function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  variant: Variant = "fade-up"
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const style = variantStyles[variant]

    // Start invisible (client-side only — no hydration mismatch)
    el.style.opacity = "0"
    el.style.transform = style.transform
    el.style.transition = style.transition
    el.style.willChange = "transform, opacity"

    if (typeof IntersectionObserver === "undefined") {
      el.style.opacity = "1"
      el.style.transform = "translateY(0) scale(1)"
      el.style.transition = "none"
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1"
          el.style.transform = "translateY(0) scale(1)"
          observer.unobserve(el)
        }
      },
      { threshold: 0.05 }
    )

    // Small delay for first render
    requestAnimationFrame(() => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [variant])

  return { ref }
}
