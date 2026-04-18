"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Plus, Minus, HelpCircle } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export function LuxeFAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { t } = useLanguage()

  const faqs = t("faq.faqs")

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-accent/3" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20 mb-6"
          >
            <HelpCircle className="h-4 w-4" />
            {t("faq.badge")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
          >
            {t("faq.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto"
          >
            {t("faq.subtitle")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-4"
        >
          {faqs.map((faq: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 + index * 0.05 }}
              className="rounded-2xl border border-primary/10 bg-gradient-to-r from-primary/5 to-accent/5 transition-all overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors"
              >
                <span className="font-serif text-lg font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {openIndex === index ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-primary/10"
                  >
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="px-6 py-4 text-muted-foreground leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">{t("language") === "pt" ? "Ainda tem dúvidas?" : "Still have questions?"}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all border border-primary/20"
          >
            {t("faq.contact")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
