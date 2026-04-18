"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Sparkles, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"

export function LuxeJournal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const articles = t("journal.articles")

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-secondary/20 via-background to-secondary/10 overflow-hidden" id="journal">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row mb-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20 mb-6"
            >
              <BookOpen className="h-4 w-4" />
              {t("journal.badge")}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
            >
              {t("journal.title")}
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ x: 4 }}
          >
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
            >
              {t("journal.viewAll")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article: any, index: number) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* Image container */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary/10 shadow-sm group-hover:shadow-lg transition-all bg-gradient-to-br from-primary/10 to-accent/10">
                {article.image && (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={index === 0}
                  />
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + index * 0.1 }}
                  className="absolute top-4 left-4 rounded-full bg-background/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-foreground border border-primary/20"
                >
                  {article.category}
                </motion.div>

                {/* Read time badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="absolute bottom-4 right-4 rounded-full bg-primary/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-primary-foreground shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {article.readTime}
                </motion.div>
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="mt-6 flex flex-col flex-1"
              >
                <p className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
                  {article.readTime} {t("journal.readMore")}
                </p>

                <h3 className="mt-3 font-serif text-xl font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 flex-1">
                  {article.title}
                </h3>

                <p className="mt-3 text-muted-foreground line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.35 + index * 0.1 }}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {t("journal.readMore")}
                  <ArrowRight className="h-3 w-3" />
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
