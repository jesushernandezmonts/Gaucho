"use client"

import { useEffect, useRef, useState } from "react"

type AnimationVariant = "fade-in" | "reveal" | "reveal-left" | "reveal-right" | "reveal-scale"

export default function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  variant: AnimationVariant = "reveal",
  threshold = 0.05
) {
  const ref = useRef<T>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || revealed) return

    // Fallback: si no soporta IntersectionObserver (raro pero seguro)
    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin: "0px 0px -20px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, revealed])

  // En mobile, siempre mostrar con animación inmediata para evitar el parpadeo
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640
  const className = revealed || isMobile ? `animate-${variant === "fade-in" ? "fade-in" : variant}` : "opacity-0"

  return { ref, className, revealed }
}
