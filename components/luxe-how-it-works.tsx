"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ClipboardList, Cpu, Package, Sparkles, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export function LuxeHowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const steps = t("howItWorks.steps")
  const icons = [ClipboardList, Cpu, Sparkles, Package]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-secondary/30 via-background to-secondary/20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20 mb-6"
          >
            <Sparkles className="h-4 w-4" />
            {t("howItWorks.badge")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
          >
            {t("howItWorks.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto"
          >
            {t("howItWorks.subtitle")}
          </motion.p>
        </div>

        <div className="relative">
          {/* Connector line - desktop only */}
          <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
            {steps.map((step: any, index: number) => {
              const Icon = icons[index]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="text-center lg:text-left">
                    {/* Icon container */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="mb-8 relative inline-flex"
                    >
                      <div className="relative flex h-24 w-24 items-center justify-center">
                        {/* Background circle with gradient */}
                        <motion.div
                          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                          transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 group-hover:from-primary/40 group-hover:to-accent/20 transition-all"
                        />

                        {/* Step number badge */}
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.35 + index * 0.1 }}
                          className="absolute -top-1 -right-1 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent text-xs font-bold text-primary-foreground shadow-lg"
                        >
                          {index + 1}
                        </motion.span>

                        {/* Icon */}
                        <Icon className="h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                      </div>
                    </motion.div>

                    <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Arrow to next step - desktop only */}
                    {index < steps.length - 1 && (
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="hidden lg:flex absolute -right-16 top-12 text-primary/40"
                      >
                        <ArrowRight className="h-6 w-6" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
