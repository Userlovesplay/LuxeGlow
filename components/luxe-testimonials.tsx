"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"

export function LuxeTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const testimonials = [
    {
      id: 1,
      quote: t("testimonials.customer1"),
      author: "Alexandra R.",
      role: t("language") === "pt" ? "Cliente Verificada" : "Verified Customer",
      image: "/images/testimonial-1.jpg",
      rating: 5,
    },
    {
      id: 2,
      quote: t("testimonials.customer2"),
      author: "Michelle T.",
      role: t("language") === "pt" ? "Editora de Beleza" : "Beauty Editor",
      image: "/images/testimonial-2.jpg",
      rating: 5,
    },
    {
      id: 3,
      quote: t("testimonials.customer3"),
      author: "Jennifer L.",
      role: t("language") === "pt" ? "Dermatologista" : "Dermatologist",
      image: "/images/testimonial-3.jpg",
      rating: 5,
    },
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20 mb-6"
          >
            <Star className="h-4 w-4" />
            {t("testimonials.badge")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
          >
            {t("testimonials.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto"
          >
            {t("testimonials.subtitle")}
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl bg-gradient-to-br from-primary/5 via-secondary to-accent/5 p-8 shadow-sm border border-primary/10 transition-all hover:shadow-lg hover:border-primary/20 backdrop-blur-sm overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote icon */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative mb-6"
              >
                <Quote className="h-10 w-10 text-primary/20" />
              </motion.div>

              {/* Rating */}
              <div className="relative flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.35 + index * 0.1 + i * 0.05 }}
                  >
                    <Star className="h-4 w-4 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="relative text-lg leading-relaxed text-foreground mb-8"
              >
                &ldquo;{testimonial.quote}&rdquo;
              </motion.p>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45 + index * 0.1 }}
                className="relative flex items-center gap-4 pt-6 border-t border-primary/10"
              >
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary/20 bg-gradient-to-br from-primary/20 to-accent/10">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
