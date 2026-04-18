"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, ArrowRight, Sparkles, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"

interface LuxeHeroProps {
  onOpenQuiz?: () => void
}

export function LuxeHero({ onOpenQuiz }: LuxeHeroProps) {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-20 w-full">
      {/* Premium gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8" />

      {/* Animated decorative circles */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 -right-64 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-accent/15 to-accent/0 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 lg:px-8 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium tracking-widest text-primary uppercase">{t("hero.badge")}</span>
            </motion.div>

            <h1 className="font-serif text-5xl font-medium leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
              {t("hero.title1")}{" "}
              <span className="relative inline-block">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                >
                  {t("hero.title2")}
                </motion.span>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  {t("hero.title2")}
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-primary via-accent to-primary origin-left"
                />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-lg"
            >
              {t("hero.description")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.button
                onClick={onOpenQuiz}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-medium text-primary-foreground transition-all animate-glow-pulse btn-premium shadow-lg shadow-primary/30 hover:shadow-primary/50"
              >
                {t("hero.cta1")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#products"
                  className="inline-flex items-center justify-center rounded-full border-2 border-primary/30 backdrop-blur-sm px-8 py-4 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary hover:bg-primary/5"
                >
                  {t("hero.cta2")}
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                  >
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>
              <div className="h-4 w-px bg-foreground/20 hidden sm:block" />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">87,000+</span> {t("hero.customers")}
              </p>
              <div className="h-4 w-px bg-foreground/20 hidden sm:block" />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">4.98</span> {t("hero.rating")}
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Floating Product */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex items-center justify-center lg:justify-end h-full min-h-[600px] lg:min-h-auto"
          >
            <div className="relative w-full aspect-square">
              {/* Premium glow effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute inset-0 -z-10 blur-3xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-accent/20 to-primary/40 rounded-full" />
              </motion.div>

              {/* Floating product image */}
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative product-glow w-full h-full"
              >
                <Image
                  src="/images/serum-hero.png"
                  alt="LuxeGlow Signature Serum"
                  fill
                  className="object-contain drop-shadow-2xl filter brightness-105"
                  priority
                />
              </motion.div>

              {/* Decorative rotating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 h-24 w-24 rounded-full border-2 border-primary/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full border-2 border-accent/20"
              />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-10 left-0 bg-background/80 backdrop-blur-lg border border-primary/20 rounded-2xl px-6 py-4 shadow-xl"
              >
                <p className="text-sm font-medium text-foreground">{t("hero.clinicallyProven")}</p>
                <p className="text-xs text-muted-foreground mt-1">{t("hero.resultsIn4Weeks")}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-muted-foreground uppercase">{t("hero.scroll")}</span>
          <div className="h-12 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
