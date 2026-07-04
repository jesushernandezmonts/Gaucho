"use client"

import { useState } from "react"
import { menuItems } from "@/lib/constants"
import useScrollReveal from "@/lib/useScrollReveal"

const categories = [
  { key: "desayunos", label: "Desayunos" },
  { key: "mexicanos", label: "Platillos Mexicanos" },
  { key: "pastas", label: "Pastas" },
  { key: "pizzas", label: "Pizzas" },
  { key: "parrilla", label: "Parrilla" },
  { key: "sopas", label: "Sopas" },
  { key: "ensaladas", label: "Ensaladas" },
  { key: "sandwiches", label: "Sandwiches" },
  { key: "guarniciones", label: "Guarniciones" },
  { key: "bebidas", label: "Bebidas" },
  { key: "cocteles", label: "Cocteles" },
]

export default function Menu() {
  const [activeCat, setActiveCat] = useState("desayunos")
  const { ref: headerRef } = useScrollReveal("fade-up")

  const activeItems = menuItems.find((c) => c.category === activeCat)?.items || []

  return (
    <section id="menu" className="py-14 sm:py-20 md:py-28 bg-dark-section relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-6 sm:mb-10">
          <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-[3px] uppercase text-gold bg-gold/15 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-2 sm:mb-4">
            Nuestra Cocina
          </span>
          <h2 className="font-display text-xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">Sabores que enamoran</h2>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-5">
            <span className="block w-8 sm:w-14 md:w-20 h-px sm:h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <svg className="w-3 sm:w-4 h-3 sm:h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <span className="block w-8 sm:w-14 md:w-20 h-px sm:h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-10 overflow-x-auto pb-1 sm:pb-0 scrollbar-none -mx-4 sm:mx-0 px-4 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCat(cat.key)}
              className={`shrink-0 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-semibold border transition-all duration-300 ${
                activeCat === cat.key
                  ? "bg-gold border-gold text-chocolate"
                  : "border-white/20 text-white/60 hover:border-gold hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid - responsive columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {activeItems.map((item, i) => (
            <div
              key={item.name}
              className="flex gap-2 bg-white/[0.04] border border-white/[0.06] rounded-xl p-2.5 transition-all duration-200 hover:bg-white/[0.07] hover:border-gold/20 hover:-translate-y-0.5 cursor-default"
              style={{ animation: `menuItemIn 0.3s ease-out ${i * 0.03}s both` }}
            >
              <img src={item.image} alt={item.name} loading="lazy" className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-lg object-cover" />
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <h4 className="text-xs sm:text-sm text-white font-semibold leading-tight truncate">{item.name}</h4>
                <span className="text-[11px] sm:text-xs font-bold text-gold mt-0.5">${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
