"use client"
import { galleryImages } from "@/lib/constants"
import useScrollReveal from "@/lib/useScrollReveal"

export default function Gallery() {
  const { ref: headerRef } = useScrollReveal("fade-up")
  const { ref: gridRef } = useScrollReveal("fade-up")

  return (
    <section id="galeria" className="py-14 sm:py-20 md:py-28 bg-cream relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cream-warm/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 sm:mb-10">
        <div ref={headerRef} className={`text-center`}>
          <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-[3px] uppercase text-sage-dark bg-sage/20 px-2.5 sm:px-4 py-1 sm:py-2 rounded-full mb-2 sm:mb-4">
            Galería
          </span>
          <h2 className="font-display text-xl sm:text-3xl md:text-5xl font-bold text-chocolate leading-tight">
            Capturamos momentos
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-5">
            <span className="block w-8 sm:w-14 md:w-20 h-px sm:h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <svg className="w-3 sm:w-4 h-3 sm:h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="block w-8 sm:w-14 md:w-20 h-px sm:h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </div>
      </div>

      <div ref={gridRef} className={`grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 px-1 md:px-2`}>
        {galleryImages.map((img, i) => (
          <div
            key={img.alt}
            className={`relative overflow-hidden rounded-lg cursor-pointer group ${
              img.span && "md:col-span-2 md:row-span-2"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full min-h-[120px] sm:min-h-[180px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay al hover - solo en desktop */}
            <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent items-end p-3 md:p-6 opacity-0 group-hover:opacity-100 transition-all duration-400">
              <span className="font-display text-white text-lg md:text-xl font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                {img.alt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
