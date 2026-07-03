"use client"

import { useState, useEffect } from "react"
import { navLinks } from "@/lib/constants"
import GauchoLogo from "./GauchoLogo"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) {
        const offset = 72
        const top = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: "smooth" })
      }
    }, 300)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-charcoal/95 backdrop-blur-xl shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16 md:h-[72px]">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setMobileOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}
            className="flex items-center gap-2 sm:gap-2.5 group"
            aria-label="Ir al inicio"
          >
            <GauchoLogo className="transition-transform duration-300 group-hover:scale-105 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            <span className="font-script text-xl sm:text-2xl md:text-3xl text-gold tracking-wide">Niño Gaucho</span>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1.5 z-[60] relative cursor-pointer"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            <span className={`block w-[22px] sm:w-[26px] h-[2px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block w-[22px] sm:w-[26px] h-[2px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-[22px] sm:w-[26px] h-[2px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 translate-y-[-5px]" : ""}`} />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-white/70 hover:text-white px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#reservaciones")}
              className="ml-2 bg-gold hover:bg-gold-light text-chocolate font-bold px-4 lg:px-5 py-2.5 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-gold"
            >
              Reservar
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu - simple show/hide with display */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[55] md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          {/* Full black background */}
          <div className="absolute inset-0 bg-charcoal" />
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={(e) => {
                  e.stopPropagation()
                  handleNav(link.href)
                }}
                className="text-white/80 hover:text-white w-full max-w-[280px] text-center py-4 text-lg font-medium hover:bg-white/10 rounded-xl transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNav("#reservaciones")
              }}
              className="bg-gold hover:bg-gold-light text-chocolate font-bold w-full max-w-[280px] text-center py-4 rounded-full text-lg mt-4 shadow-gold transition-colors"
            >
              Reservar
            </button>
          </div>
        </div>
      )}
    </>
  )
}
