"use client"

import { useEffect, useRef, useState } from "react"

type AnimationVariant = "reveal" | "reveal-left" | "reveal-right" | "reveal-scale"

export default function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  variant: AnimationVariant = "reveal",
  threshold = 0.15
) {
  const ref = useRef<T>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || revealed) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, revealed])

  const className = revealed ? `animate-${variant}` : "opacity-0"

  return { ref, className, revealed }
}
