"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Scan, FlaskConical, ArrowRight, Zap } from "lucide-react"
import { useLanguage } from "@/components/language-context"

interface LuxeAITeaserProps {
  onOpenQuiz?: () => void
}

export function LuxeAITeaser({ onOpenQuiz }: LuxeAITeaserProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const features = [
    { icon: Scan, label: t("aiTeaser.features.0.title"), desc: t("aiTeaser.features.0.description") },
    { icon: Sparkles, label: t("aiTeaser.features.1.title"), desc: t("aiTeaser.features.1.description") },
    { icon: FlaskConical, label: t("aiTeaser.features.2.title"), desc: t("aiTeaser.features.2.description") },
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-background" id="quiz">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Animated decorative elements */}
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/0 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-gradient-to-br from-accent/15 to-accent/0 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20"
          >
            <Zap className="h-4 w-4 animate-pulse" />
            {t("aiTeaser.badge")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-8 font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
          >
            {t("aiTeaser.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto"
          >
            {t("aiTeaser.description")}
          </motion.p>

          <motion.button
            onClick={onOpenQuiz}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-medium text-primary-foreground transition-all animate-glow-pulse btn-premium shadow-lg shadow-primary/30 hover:shadow-primary/50 mt-10"
          >
            {t("aiTeaser.cta")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-2xl bg-gradient-to-br from-primary/5 via-secondary to-accent/5 p-8 shadow-sm border border-primary/10 transition-all hover:shadow-lg hover:border-primary/20 backdrop-blur-sm"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-transparent to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg"
                >
                  <Icon className="h-7 w-7" />
                </motion.div>

                <h3 className="relative font-serif text-xl font-medium text-foreground">
                  {feature.label}
                </h3>
                <p className="relative mt-3 text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
