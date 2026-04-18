"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-context"
import { Language } from "@/lib/i18n"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const languages: { code: Language; label: string }[] = [
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
  ]

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-2 sm:right-4 lg:right-6 z-40 hidden lg:flex items-center gap-2 bg-background/80 backdrop-blur-lg border border-primary/20 rounded-full p-1 shadow-lg">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
            language === lang.code
              ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg"
              : "text-foreground/70 hover:text-foreground"
          }`}
        >
          {lang.label}
        </motion.button>
      ))}
    </div>
  )
}
