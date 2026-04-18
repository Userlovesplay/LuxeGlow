"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, ShoppingBag, Sparkles } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"

export function LuxeProducts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const products = t("products.products")

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-background overflow-hidden" id="products">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-accent/3" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20 mb-4"
            >
              <Sparkles className="h-4 w-4" />
              {t("products.badge")}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
            >
              {t("products.title")}
            </motion.h2>
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ x: 4 }}
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
          >
            {t("products.viewAll")}
            <span>→</span>
          </motion.button>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Product image container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-background border border-primary/10">
                {/* Product image with glow */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative product-glow w-full h-full flex items-center justify-center">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Image
                        src={index === 0 ? "/images/product-serum.png" : index === 1 ? "/images/product-cream.png" : index === 2 ? "/images/product-mask.png" : "/images/product-eye.png"}
                        alt={product.name}
                        width={200}
                        height={280}
                        className="object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-xl"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Hover overlay with glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full bg-background backdrop-blur-sm px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-primary/10 border border-primary/20 shadow-lg"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    {t("products.addToCart")}
                  </motion.button>
                </motion.div>
              </div>

              {/* Product info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + index * 0.1 }}
                className="mt-6"
              >
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < 4
                            ? "fill-primary text-primary"
                            : "text-primary/30"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">4.9</span>
                  <span className="text-sm text-muted-foreground">(2000+)</span>
                </div>

                <h3 className="mt-3 font-serif text-lg font-medium text-foreground">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="mt-3 text-lg font-serif text-primary"
                >
                  {product.price}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
