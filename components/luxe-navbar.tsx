"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingBag, Menu, X, Sparkles } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { usePathname } from "next/navigation"
import { Language } from "@/lib/i18n"

interface LuxeNavbarProps {
  onOpenQuiz?: () => void
}

export function LuxeNavbar({ onOpenQuiz }: LuxeNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t, language, setLanguage } = useLanguage()
  const pathname = usePathname()
  const isHome = pathname === "/"

  const languages: { code: Language; label: string }[] = [
    { code: "pt", label: "Português" },
    { code: "en", label: "English" },
  ]

  const navLinks = [
    { name: t("nav.shop"), href: isHome ? "#products" : "/shop", external: !isHome },
    { name: t("nav.quiz"), href: "#", external: false },
    { name: t("nav.journal"), href: isHome ? "#journal" : "/journal", external: !isHome },
    { name: t("nav.about"), href: isHome ? "#about" : "/about", external: !isHome },
    { name: t("nav.contact"), href: isHome ? "#contact" : "/contact", external: !isHome },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleQuizClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (onOpenQuiz) {
      onOpenQuiz()
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl shadow-sm border-b border-primary/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <motion.span
                className="font-serif text-2xl font-medium tracking-tight text-foreground"
                whileHover={{ scale: 1.05 }}
              >
                Luxe<span className="text-primary">Glow</span>
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-10">
              {navLinks.map((link) => {
                const isQuiz = link.name === t("nav.quiz")
                return isQuiz ? (
                  <button
                    key={link.name}
                    onClick={handleQuizClick}
                    className="relative text-sm font-medium text-foreground/70 transition-colors hover:text-primary group"
                  >
                    {link.name}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full"
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative text-sm font-medium text-foreground/70 transition-colors hover:text-primary group"
                  >
                    {link.name}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full"
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                )
              })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={handleQuizClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:inline-flex items-center justify-center rounded-full bg-primary/90 backdrop-blur-sm px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary btn-premium shadow-lg shadow-primary/20 hover:shadow-primary/40"
              >
                {t("nav.takeQuiz")}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 text-foreground/80 transition-colors hover:text-primary"
              >
                <ShoppingBag className="h-5 w-5" />
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground shadow-lg"
                >
                  0
                </motion.span>
              </motion.button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-foreground lg:hidden hover:text-primary transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 h-full w-64 sm:w-72 md:w-80 bg-background/98 backdrop-blur-xl p-6 shadow-2xl border-l border-primary/10"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-xl font-medium">
                  Luxe<span className="text-primary">Glow</span>
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-foreground hover:bg-primary/10 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="mt-10 flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={link.name === t("nav.quiz") ? handleQuizClick : () => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={handleQuizClick}
                    className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground btn-premium shadow-lg shadow-primary/20"
                  >
                    {t("nav.takeQuiz")}
                  </button>
                </motion.div>

                {/* Language Switcher in Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-6 border-t border-primary/10"
                >
                  <p className="text-xs font-semibold text-foreground/60 uppercase mb-3">{t("nav.language") || "Language"}</p>
                  <div className="flex gap-2">
                    {languages.map((lang) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code)
                          setIsMobileMenuOpen(false)
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 px-4 py-2 rounded-full font-medium text-sm transition-all ${
                          language === lang.code
                            ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg"
                            : "bg-background/50 text-foreground/70 border border-primary/10"
                        }`}
                      >
                        {lang.label}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
