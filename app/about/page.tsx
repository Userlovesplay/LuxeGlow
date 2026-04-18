"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function About() {
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

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-medium text-foreground mb-8 sm:mb-12">
          Sobre a LuxeGlow
        </h1>

        <div className="space-y-6 sm:space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground mb-3 sm:mb-4">
              Nossa Missão
            </h2>
            <p className="text-sm sm:text-base">
              A LuxeGlow foi criada com uma visão simples mas revolucionária: tornar skincare premium e personalizado acessível para todas as mulheres. Acreditamos que sua pele merece mais do que soluções genéricas - merece um tratamento tão único quanto você.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground mb-3 sm:mb-4">
              Tecnologia de IA
            </h2>
            <p className="text-sm sm:text-base">
              Nossa plataforma combina inteligência artificial de ponta com conhecimento dermatológico profundo. O sistema analisa mais de 50 fatores diferentes sobre sua pele, ambiente e objetivos para criar uma formulação verdadeiramente personalizada.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground mb-3 sm:mb-4">
              Compromisso com a Sustentabilidade
            </h2>
            <p className="text-sm sm:text-base">
              Todas as embalagens LuxeGlow são 100% recicláveis e produzidas com materiais ecologicamente responsáveis. Oferecemos programas de recarga para reduzir resíduos e compensamos todas as emissões de carbono do nosso envio.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground mb-3 sm:mb-4">
              Ingredientes Limpos
            </h2>
            <p className="text-sm sm:text-base">
              Somos 100% veganos, cruelty-free e nunca testamos em animais. Cada ingrediente é cuidadosamente selecionado por sua eficácia e segurança, nunca usando parabenos, sulfatos ou fragrâncias sintéticas.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground mb-3 sm:mb-4">
              Transparência Total
            </h2>
            <p className="text-sm sm:text-base">
              Você pode ver exatamente quais ingredientes estão em seus produtos personalizados e por quê. Nosso compromisso é educar você sobre sua pele e ajudá-la a tomar decisões informadas sobre seu cuidado.
            </p>
          </section>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-primary/10">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground mb-3 sm:mb-6">
            Conecte-se com a Gente
          </h2>
          <p className="text-sm sm:text-base text-foreground/80 mb-4">
            Tem dúvidas ou sugestões? Adoraríamos ouvir de você!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs sm:text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 shadow-lg"
          >
            Entre em Contato
          </Link>
        </div>
      </div>
    </main>
  )
}
