"use client"

import { useState, useEffect } from "react"
import useScrollReveal from "@/lib/useScrollReveal"

interface FormData {
  name: string
  email: string
  phone: string
  type: string
  date: string
  time: string
  guests: string
  message: string
}

export default function ReservationForm() {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", type: "", date: "", time: "", guests: "2", message: "",
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const { ref: sectionRef } = useScrollReveal("fade-up")

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 6000)
      return () => clearTimeout(timer)
    }
  }, [success])

  const validate = (): boolean => {
    const errs: Partial<FormData> = {}
    if (!form.name.trim()) errs.name = "Este campo es obligatorio"
    if (!form.email.trim()) errs.email = "Este campo es obligatorio"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Correo inválido"
    if (!form.phone.trim()) errs.phone = "Este campo es obligatorio"
    else if (form.phone.replace(/\D/g, "").length < 10) errs.phone = "Mín. 10 dígitos"
    if (!form.type) errs.type = "Selecciona una opción"
    if (!form.date) errs.date = "Selecciona una fecha"
    else {
      const selected = new Date(form.date + "T00:00:00")
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selected < today) errs.date = "La fecha debe ser hoy o posterior"
    }
    if (!form.time) errs.time = "Selecciona una hora"
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitting(false)
    setSuccess(true)
    setForm({ name: "", email: "", phone: "", type: "", date: "", time: "", guests: "2", message: "" })
  }

  return (
    <section id="reservaciones" className="py-16 sm:py-20 md:py-28 bg-dark-section relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div ref={sectionRef} className={`text-center mb-8 sm:mb-14 md:mb-18`}>
          <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-[3px] uppercase text-gold bg-gold/15 px-2.5 sm:px-4 py-1 sm:py-2 rounded-full mb-2 sm:mb-4">
            Reservaciones
          </span>
          <h2 className="font-display text-xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
            Reserva tu experiencia
          </h2>
          <p className="text-white/40 text-xs sm:text-base mt-2 sm:mt-3 max-w-md mx-auto px-4">
            Vive una experiencia gaucha inolvidable
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-5">
            <span className="block w-8 sm:w-14 md:w-20 h-px sm:h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <svg className="w-3 sm:w-4 h-3 sm:h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="block w-8 sm:w-14 md:w-20 h-px sm:h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Info */}
          <div className="order-2 lg:order-1">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
              ¡Te esperamos!
            </h3>
            <p className="text-white/50 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              Ya sea para una cena íntima, una celebración especial o una estancia inolvidable, en Niño Gaucho te brindaremos una experiencia única.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z", label: "Teléfono", value: "+52 247 205 5070" },
                { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Email", value: "contacto@ninogaucho.com" },
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", label: "Dirección", value: "C. Juárez Nte. 215, Huamantla, Tlaxcala" },
                { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Horario", value: "Lun-Dom: 12:00 - 23:00" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 sm:gap-4 group">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold/20 group-hover:scale-105 transition-all duration-300">
                    <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <strong className="text-white block text-xs sm:text-sm">{item.label}</strong>
                    <span className="text-white/40 text-xs sm:text-sm truncate block">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="order-1 lg:order-2 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 sm:p-5 md:p-8 backdrop-blur-sm">
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <InputField name="name" label="Nombre completo" value={form.name} onChange={handleChange} error={errors.name} placeholder="Tu nombre" />
              <InputField name="email" label="Correo electrónico" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="tu@correo.com" />
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <InputField name="phone" label="Teléfono" type="tel" value={form.phone} onChange={handleChange} error={errors.phone} placeholder="+52 222..." />
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 tracking-wide">Tipo de reservación</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm bg-white/[0.06] border border-white/[0.1] text-white outline-none focus:border-gold focus:bg-gold/5 transition-colors appearance-none cursor-pointer"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='rgba(255,255,255,0.4)'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 0.75rem center", backgroundSize: "1.25rem" }}
                >
                  <option value="" className="bg-dark-section">Selecciona...</option>
                  <option value="restaurante" className="bg-dark-section">Restaurante</option>
                  <option value="hotel" className="bg-dark-section">Hotel</option>
                  <option value="ambos" className="bg-dark-section">Restaurante + Hotel</option>
                </select>
                {errors.type && <p className="text-xs text-red-400 mt-1">{errors.type}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <InputField name="date" label="Fecha" type="date" value={form.date} onChange={handleChange} error={errors.date} />
              <InputField name="time" label="Hora" type="time" value={form.time} onChange={handleChange} error={errors.time} />
              <InputField name="guests" label="Personas" type="number" min={1} max={20} value={form.guests} onChange={handleChange} />
            </div>

            <div className="mb-4 sm:mb-5">
              <label className="block text-xs font-semibold text-white/70 mb-1.5 tracking-wide">Comentarios adicionales</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Alergias, ocasión especial, preferencias..."
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm bg-white/[0.06] border border-white/[0.1] text-white outline-none focus:border-gold focus:bg-gold/5 transition-colors resize-y placeholder:text-white/30"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gold hover:bg-gold-light text-chocolate font-bold py-3 sm:py-3.5 px-6 rounded-full transition-all duration-300 hover:shadow-gold-lg text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {submitting ? (
                <>
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  Enviando...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  Confirmar Reservación
                </>
              )}
            </button>

            {success && (
              <div className="flex items-center gap-2 mt-4 p-3 sm:p-4 bg-olive/20 border border-olive/30 rounded-lg text-mint text-sm animate-fade-in">
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>¡Reservación enviada con éxito! Te contactaremos pronto.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function InputField({
  name, label, type = "text", value, onChange, error, placeholder, min, max,
}: {
  name: string
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  placeholder?: string
  min?: number
  max?: number
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-semibold text-white/70 mb-1.5 tracking-wide">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm bg-white/[0.06] border outline-none transition-colors placeholder:text-white/30 ${
          error ? "border-red-400" : "border-white/[0.1] focus:border-gold focus:bg-gold/5"
        }`}
        style={type === "date" || type === "time" ? { colorScheme: "dark" } : undefined}
      />
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  )
}
