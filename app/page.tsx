"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { LuxeNavbar } from "@/components/luxe-navbar"
import { LuxeHero } from "@/components/luxe-hero"
import { LuxeAITeaser } from "@/components/luxe-ai-teaser"
import { LuxeHowItWorks } from "@/components/luxe-how-it-works"
import { LuxeProducts } from "@/components/luxe-products"
import { LuxeWhy } from "@/components/luxe-why"
import { LuxeResults } from "@/components/luxe-results"
import { LuxeTestimonials } from "@/components/luxe-testimonials"
import { LuxeJournal } from "@/components/luxe-journal"
import { LuxeFAQ } from "@/components/luxe-faq"
import { LuxeCTA } from "@/components/luxe-cta"
import { LuxeFooter } from "@/components/luxe-footer"
import { LuxeQuiz } from "@/components/luxe-quiz"

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background relative z-0 overflow-x-hidden w-full">
      <LuxeNavbar onOpenQuiz={() => setIsQuizOpen(true)} />
      <LuxeHero onOpenQuiz={() => setIsQuizOpen(true)} />
      <LuxeAITeaser onOpenQuiz={() => setIsQuizOpen(true)} />
      <LuxeHowItWorks />
      <LuxeProducts />
      <LuxeWhy />
      <LuxeResults />
      <LuxeTestimonials />
      <LuxeJournal />
      <LuxeFAQ />
      <LuxeCTA onOpenQuiz={() => setIsQuizOpen(true)} />
      <LuxeFooter />

      <AnimatePresence>
        {isQuizOpen && <LuxeQuiz onClose={() => setIsQuizOpen(false)} />}
      </AnimatePresence>
    </main>
  )
}
