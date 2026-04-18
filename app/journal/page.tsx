"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"

export default function Journal() {
  const { t } = useLanguage()
  const articles = t("journal.articles") || []

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
            {t("journal.title")}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            {t("journal.viewAll")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {articles.map((article: any, index: number) => (
            <article key={index} className="group cursor-pointer flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary/10 shadow-sm group-hover:shadow-lg transition-all bg-gradient-to-br from-primary/10 to-accent/10 mb-4 sm:mb-6">
                {article.image && (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3 sm:mb-4 flex-wrap">
                  <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>

                <h2 className="font-serif text-lg sm:text-xl font-medium text-foreground group-hover:text-primary transition-colors mb-2 sm:mb-3 line-clamp-2 flex-1">
                  {article.title}
                </h2>

                <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 line-clamp-2">
                  {article.excerpt}
                </p>

                <Link
                  href={`/journal/${index}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-xs sm:text-sm font-medium"
                >
                  {t("journal.readMore")}
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
