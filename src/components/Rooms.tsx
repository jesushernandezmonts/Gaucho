"use client"
import { rooms } from "@/lib/constants"
import useScrollReveal from "@/lib/useScrollReveal"

const featureIcons: Record<string, string> = {
  "WiFi": "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0",
  "Clima": "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  "Jacuzzi": "M4 16v3a2 2 0 002 2h12a2 2 0 002-2v-3M20 8V5a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4",
  "Smart TV": "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
}

export default function Rooms() {
  const { ref: headerRef, className: headerClass } = useScrollReveal("reveal")
  const { ref: gridRef, className: gridClass } = useScrollReveal("reveal")

  return (
    <section id="habitaciones" className="py-16 sm:py-20 md:py-28 bg-cream relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-10 right-20 w-48 h-48 border border-gold/10 rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-20 w-64 h-64 border border-sage/20 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div ref={headerRef} className={`text-center mb-10 sm:mb-14 md:mb-18 ${headerClass}`}>
          <span className="inline-block text-[10px] md:text-xs font-semibold tracking-[3px] uppercase text-sage-dark bg-sage/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            Nuestro Hotel
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-chocolate leading-tight">Habitaciones con Alma</h2>
          <div className="flex items-center justify-center gap-3 mt-4 sm:mt-5">
            <span className="block w-10 sm:w-14 md:w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
            <span className="block w-10 sm:w-14 md:w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </div>

        <div ref={gridRef} className={`grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 ${gridClass}`}>
          {rooms.map((room, i) => (
            <div
              key={room.name}
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-500 group ${
                room.featured
                  ? "shadow-gold/20 shadow-xl hover:shadow-gold/30 hover:-translate-y-1 sm:hover:-translate-y-2 sm:col-span-2 md:col-span-1"
                  : "shadow-lg hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-[200px] sm:h-[220px] overflow-hidden relative">
                {room.featured && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 bg-gold text-chocolate text-[10px] font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full">
                    {room.badge}
                  </div>
                )}
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center justify-between mb-2 gap-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-chocolate truncate">{room.name}</h3>
                  {!room.featured && (
                    <span className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full ${room.badgeColor}`}>
                      {room.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-3 text-xs text-chocolate-light">
                  <span className="flex items-center gap-1 sm:gap-1.5">
                    <svg className="w-3 h-3 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {room.capacity}
                  </span>
                  {room.features.map((f) => (
                    <span key={f} className="flex items-center gap-1 sm:gap-1.5">
                      <svg className="w-3 h-3 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={featureIcons[f] || "M5 13l4 4L19 7"} />
                      </svg>
                      {f}
                    </span>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-chocolate-light leading-relaxed mb-4 sm:mb-5">{room.desc}</p>

                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-chocolate/10">
                  <span className="font-display text-lg sm:text-xl font-bold text-gold">
                    ${room.price.toLocaleString("es-MX")}{" "}
                    <span className="font-body text-[11px] sm:text-xs font-normal text-chocolate-light">/ noche</span>
                  </span>
                  <a
                    href="#reservaciones"
                    className="text-xs sm:text-sm font-bold bg-gold hover:bg-gold-light text-chocolate px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 hover:shadow-gold"
                  >
                    Reservar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
