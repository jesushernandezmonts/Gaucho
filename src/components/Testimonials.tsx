"use client"

import { useState, useEffect } from "react"
import { testimonials } from "@/lib/constants"
import useScrollReveal from "@/lib/useScrollReveal"

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { ref: sectionRef, className: sectionClass } = useScrollReveal("reveal")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const t = testimonials[current]

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-dark-section relative overflow-hidden">
      {/* Efectos decorativos */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div ref={sectionRef} className={`text-center mb-10 sm:mb-12 ${sectionClass}`}>
          <span className="inline-block text-[10px] md:text-xs font-semibold tracking-[3px] uppercase text-gold bg-gold/15 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            Testimonios
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">Lo que dicen de nosotros</h2>
          <div className="flex items-center justify-center gap-3 mt-4 sm:mt-5">
            <span className="block w-10 sm:w-14 md:w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            <span className="block w-10 sm:w-14 md:w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-0 sm:px-4">
          <div
            key={current}
            className="text-center animate-testimonial"
          >
            {/* Estrellas */}
            <div className="flex justify-center gap-1 mb-4 sm:mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            {/* Comilla decorativa */}
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gold/30 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
            </svg>
            <p className="font-display text-lg sm:text-xl md:text-2xl italic text-white/90 leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <img src={t.image} alt={t.author} loading="lazy" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover border-2 border-gold" />
              <div className="text-left">
                <strong className="text-white block text-xs sm:text-sm">{t.author}</strong>
                <span className="text-white/40 text-[11px] sm:text-xs">{t.role}</span>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current ? "w-6 sm:w-8 bg-gold" : "w-2 sm:w-2.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
