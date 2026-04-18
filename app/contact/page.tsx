"use client"

import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm sm:text-base">Voltar</span>
        </Link>

        <div className="mb-8 sm:mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-medium text-foreground mb-2 sm:mb-4">
            Entre em Contato
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Estamos aqui para responder suas dúvidas e ouvir seus comentários.
          </p>
        </div>

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 mb-12 sm:mb-16">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex gap-3 sm:gap-4">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground text-sm sm:text-base mb-1">Email</h3>
                <a
                  href="mailto:contato@luxeglow.com"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  contato@luxeglow.com
                </a>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground text-sm sm:text-base mb-1">Telefone</h3>
                <a
                  href="tel:+5511999999999"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +55 (11) 99999-9999
                </a>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground text-sm sm:text-base mb-1">Endereço</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Av. Paulista, 1000<br />
                  São Paulo, SP 01000-000<br />
                  Brasil
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                Nome
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg sm:rounded-xl border border-primary/10 bg-card px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/30 focus:outline-none transition-all"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg sm:rounded-xl border border-primary/10 bg-card px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/30 focus:outline-none transition-all"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                Assunto
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-lg sm:rounded-xl border border-primary/10 bg-card px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/30 focus:outline-none transition-all"
                placeholder="Assunto da mensagem"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                Mensagem
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full rounded-lg sm:rounded-xl border border-primary/10 bg-card px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/30 focus:outline-none transition-all resize-none"
                placeholder="Sua mensagem aqui..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 shadow-lg"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
