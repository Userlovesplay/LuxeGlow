"use client"

import Link from "next/link"
import { ArrowLeft, ShoppingBag } from "lucide-react"

export default function Shop() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm sm:text-base">Voltar</span>
        </Link>

        <div className="mb-8 sm:mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-medium text-foreground mb-2 sm:mb-4">
            Loja
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            Explore nossa coleção completa de produtos de skincare premium personalizados com IA.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="group rounded-2xl sm:rounded-3xl border border-primary/10 bg-card p-4 sm:p-6 hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-3 sm:mb-4 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all" >
                <ShoppingBag className="h-12 w-12 text-primary/30" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-medium text-foreground mb-2">
                Produto Premium #{i}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                Ingredientes personalizados para sua pele
              </p>
              <div className="flex items-center justify-between">
                <p className="text-base sm:text-lg font-serif text-primary">R$ 199,00</p>
                <button className="rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary p-2 transition-all">
                  <ShoppingBag className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
