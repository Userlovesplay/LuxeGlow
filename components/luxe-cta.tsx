"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Sparkles, CheckCircle2, Shield, Lock } from "lucide-react"
import { useLanguage } from "@/components/language-context"

interface LuxeCTAProps {
  onOpenQuiz?: () => void
}

export function LuxeCTA({ onOpenQuiz }: LuxeCTAProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const benefits = t("cta.benefits")

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-background overflow-hidden w-full" id="final-cta">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8" />

      {/* Animated decorative elements */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 -right-48 h-96 w-96 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gradient-to-br from-accent/12 to-accent/0 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 text-sm font-medium tracking-widest text-primary uppercase mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Sparkles className="h-4 w-4" />
              {t("cta.badge")}
            </motion.div>

            <h2 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              {t("cta.title")}
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-lg"
            >
              {t("cta.description")}
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 space-y-3"
            >
              {benefits.map((benefit: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100/20 border border-emerald-200/50">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-muted-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              onClick={onOpenQuiz}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-medium text-primary-foreground transition-all animate-glow-pulse btn-premium shadow-lg shadow-primary/30 hover:shadow-primary/50"
            >
              {t("cta.startQuiz")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                {t("cta.safe")}
              </span>
              <span className="h-4 w-px bg-border hidden sm:block" />
              <span className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-emerald-500" />
                {t("cta.dataProtected")}
              </span>
              <span className="h-4 w-px bg-border hidden sm:block" />
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-500" />
                {t("cta.noCommitment")}
              </span>
            </motion.div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-full min-h-[500px] flex items-center justify-center lg:justify-end"
          >
            {/* Glow background */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-2xl"
            />

            {/* Feature cards */}
            <div className="relative w-full space-y-6">
              {[
                {
                  icon: Sparkles,
                  title: t("language") === "pt" ? "IA Avançada" : "Advanced AI",
                  desc: t("language") === "pt" ? "Análise profunda da sua pele" : "Deep analysis of your skin"
                },
                {
                  icon: CheckCircle2,
                  title: t("language") === "pt" ? "100% Personalizado" : "100% Personalized",
                  desc: t("language") === "pt" ? "Formulação só para você" : "Formula made just for you"
                },
                {
                  icon: Shield,
                  title: t("language") === "pt" ? "Ingredientes Puros" : "Pure Ingredients",
                  desc: t("language") === "pt" ? "Sem químicos agressivos" : "No harsh chemicals"
                }
              ].map((feature, i) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.15 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="relative bg-background/50 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <Icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
