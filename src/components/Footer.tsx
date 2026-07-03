"use client"
import GauchoLogo from "./GauchoLogo"
import useScrollReveal from "@/lib/useScrollReveal"

export default function Footer() {
  const { ref } = useScrollReveal("fade-up")

  return (
    <footer className="bg-charcoal text-white/60 relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-0 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <GauchoLogo />
              <span className="font-script text-xl sm:text-2xl text-gold">Niño Gaucho</span>
            </div>
            <p className="text-sm leading-relaxed text-white/40 mb-4 sm:mb-5 max-w-xs">
              Donde la tradición gaucha se encuentra con la más alta cocina y hospitalidad.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {[
                { icon: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z", label: "Teléfono" },
                { icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z", label: "LinkedIn" },
                { icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", label: "Twitter" },
                { icon: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm3.5 7.5l-5-3v6l5-3z", label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-8 sm:w-9 h-8 sm:h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:bg-gold hover:border-gold hover:text-chocolate transition-all duration-300"
                >
                  <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-display text-white text-sm sm:text-base mb-4 sm:mb-5">Enlaces rápidos</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#nosotros", label: "Nosotros" },
                { href: "#menu", label: "Menú" },
                { href: "#habitaciones", label: "Habitaciones" },
                { href: "#galeria", label: "Galería" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/40 hover:text-gold transition-all duration-200 hover:pl-1 block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-display text-white text-sm sm:text-base mb-4 sm:mb-5">Servicios</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {["Reservaciones", "Eventos Privados", "Servicio a Habitación", "Estacionamiento", "WiFi Gratuito", "WhatsApp"].map((s) => (
                <li key={s}>
                  <a
                    href={s === "WhatsApp" ? "https://wa.me/5212472055070" : "#reservaciones"}
                    target={s === "WhatsApp" ? "_blank" : undefined}
                    rel={s === "WhatsApp" ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/40 hover:text-gold transition-all duration-200 hover:pl-1 block"
                  >
                    {s === "WhatsApp" ? "📱 " : ""}{s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-white text-sm sm:text-base mb-4 sm:mb-5">Newsletter</h4>
            <p className="text-sm text-white/40 mb-3 sm:mb-4">Recibe ofertas exclusivas y novedades</p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const input = (e.target as HTMLFormElement).querySelector("input")!
                const email = input.value.trim()
                if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                  input.style.borderColor = "#ef4444"
                  return
                }
                input.style.borderColor = ""
                input.value = ""
                input.placeholder = "¡Suscrito! 🎉"
                setTimeout(() => { input.placeholder = "tu@correo.com" }, 3000)
              }}
              className="flex"
            >
              <input
                type="email"
                placeholder="tu@correo.com"
                className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-l-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-gold transition-colors"
              />
              <button type="submit" aria-label="Suscribirse" className="shrink-0 bg-gold hover:bg-gold-light text-chocolate px-3 sm:px-4 rounded-r-full transition-all duration-300 cursor-pointer">
                <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 py-4 sm:py-5 text-[11px] sm:text-xs text-white/25">
          <span>&copy; 2026 Niño Gaucho. Todos los derechos reservados.</span>
          <span>Hecho con <svg className="w-3 h-3 inline text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg> para vos</span>
        </div>
      </div>
    </footer>
  )
}
