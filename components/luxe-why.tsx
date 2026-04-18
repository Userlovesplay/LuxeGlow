"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Leaf, Cpu, Recycle, TrendingUp } from "lucide-react"
import { useLanguage } from "@/components/language-context"

const iconMap = {
  leaf: Leaf,
  cpu: Cpu,
  recycle: Recycle,
  trending: TrendingUp,
}

export function LuxeWhy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const benefits = [
    {
      icon: Leaf,
      titleKey: "why.benefits.0.title",
      descKey: "why.benefits.0.description",
    },
    {
      icon: Cpu,
      titleKey: "why.benefits.1.title",
      descKey: "why.benefits.1.description",
    },
    {
      icon: Recycle,
      titleKey: "why.benefits.2.title",
      descKey: "why.benefits.2.description",
    },
    {
      icon: TrendingUp,
      titleKey: "why.benefits.3.title",
      descKey: "why.benefits.3.description",
    },
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-foreground to-foreground/95 text-background overflow-hidden w-full" id="about">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-background/20 to-transparent" />

      {/* Animated background elements */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 -right-48 h-96 w-96 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl -translate-y-1/2"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2 text-sm font-medium text-primary border border-background/20 mb-6"
          >
            <TrendingUp className="h-4 w-4" />
            {t("why.badge")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl text-balance"
          >
            {t("why.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 text-lg leading-relaxed text-background/80 max-w-2xl mx-auto"
          >
            {t("why.description")}
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative text-center"
              >
                {/* Card background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-background/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  {/* Icon container */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-background/10 transition-all group-hover:bg-primary/20 group-hover:shadow-lg"
                  >
                    <Icon className="h-8 w-8 text-primary transition-colors group-hover:text-primary/90" />
                  </motion.div>

                  <h3 className="font-serif text-xl font-medium">
                    {t(benefit.titleKey)}
                  </h3>
                  <p className="mt-3 text-background/70 leading-relaxed">
                    {t(benefit.descKey)}
                  </p>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 -z-10"
                />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-background/20 to-transparent" />
    </section>
  )
}
