"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"

export function LuxeResults() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)
  const { t } = useLanguage()

  const results = [
    {
      id: 1,
      name: "Sofia M.",
      age: 34,
      concern: t("language") === "pt" ? "Linhas finas e opacidade" : "Fine lines & dullness",
      result: t("language") === "pt" ? "Pele visivelmente mais lisa e radiante em 6 semanas" : "Visibly smoother, radiant skin in 6 weeks",
      beforeImage: "/images/before-1.jpg",
      afterImage: "/images/after-1.jpg",
    },
    {
      id: 2,
      name: "Emma K.",
      age: 28,
      concern: t("language") === "pt" ? "Textura irregular e cicatrizes de acne" : "Uneven texture & acne scars",
      result: t("language") === "pt" ? "Textura refinada e cicatrizes desbotadas em 8 semanas" : "Refined texture and faded scarring in 8 weeks",
      beforeImage: "/images/before-2.jpg",
      afterImage: "/images/after-2.jpg",
    },
    {
      id: 3,
      name: "Diana L.",
      age: 42,
      concern: t("language") === "pt" ? "Perda de firmeza" : "Loss of firmness",
      result: t("language") === "pt" ? "Aparência mais firme e levantada em 10 semanas" : "Firmer, lifted appearance in 10 weeks",
      beforeImage: "/images/before-3.jpg",
      afterImage: "/images/after-3.jpg",
    },
  ]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? results.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === results.length - 1 ? 0 : prev + 1))
  }

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-secondary/20 via-background to-secondary/10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20 mb-6"
          >
            <Check className="h-4 w-4" />
            {t("results.badge")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
          >
            {t("results.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto"
          >
            {t("results.description")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16"
        >
          {/* Result selector */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {results.map((result, index) => (
              <motion.button
                key={result.id}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-card border border-primary/10 text-foreground hover:border-primary/30 hover:bg-primary/5"
                }`}
              >
                {result.name}
              </motion.button>
            ))}
          </div>

          {/* Before/After display */}
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center mb-12">
            {/* Before */}
            <motion.div
              key={`before-${activeIndex}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-background border border-primary/10 shadow-lg group"
            >
              <div className="absolute top-4 left-4 z-10 rounded-full bg-background/90 backdrop-blur-sm px-4 py-2 text-sm font-medium text-foreground border border-primary/20">
                {t("results.before")}
              </div>
              <Image
                src={results[activeIndex].beforeImage}
                alt={`${results[activeIndex].name} ${t("results.before")}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* After */}
            <motion.div
              key={`after-${activeIndex}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 shadow-lg group"
            >
              <div className="absolute top-4 left-4 z-10 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg">
                {t("results.after")}
              </div>
              <Image
                src={results[activeIndex].afterImage}
                alt={`${results[activeIndex].name} ${t("results.after")}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Result details */}
          <motion.div
            key={`details-${activeIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="font-serif text-3xl font-medium text-foreground mb-4">
              {results[activeIndex].name}, {results[activeIndex].age}
            </h3>

            <p className="text-muted-foreground mb-2">
              <span className="font-medium text-foreground">{t("results.concern")}:</span> {results[activeIndex].concern}
            </p>

            <p className="text-lg font-serif text-primary mt-4">
              {results[activeIndex].result}
            </p>
          </motion.div>

          {/* Navigation controls */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-colors border border-primary/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            <div className="flex gap-2">
              {results.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-8 bg-gradient-to-r from-primary to-accent"
                      : "w-2 bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-colors border border-primary/20"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
