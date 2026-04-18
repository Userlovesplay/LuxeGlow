"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Instagram, Twitter, Facebook, Youtube, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { toast } from "sonner"

export function LuxeFooter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const { t } = useLanguage()

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Youtube", icon: Youtube, href: "#" },
  ]

  const footerLinks = {
    shop: t("footer.shopLinks") || [],
    about: t("footer.aboutLinks") || [],
    help: t("footer.helpLinks") || [],
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      toast.error(t("language") === "pt" ? "Por favor, insira um email" : "Please enter an email")
      return
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success(
          t("language") === "pt"
            ? "Inscrição realizada com sucesso!"
            : "Subscribed successfully!"
        )
        setEmail("")
      } else {
        toast.error(data.error || "Erro ao inscrever")
      }
    } catch (error) {
      console.error("Newsletter error:", error)
      toast.error(
        t("language") === "pt"
          ? "Erro ao processar inscrição"
          : "Error processing subscription"
      )
    }
  }

  return (
    <footer ref={ref} className="bg-foreground text-background" id="contact">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        {/* Newsletter section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-8 border-b border-background/10 pb-12 lg:flex-row"
        >
          <div className="text-center lg:text-left">
            <h3 className="font-serif text-2xl font-medium">
              {t("footer.joinCommunity")}
            </h3>
            <p className="mt-2 text-background/70">
              {t("footer.subscribe")}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full sm:max-w-md gap-3">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("language") === "pt" ? "Insira seu email" : "Enter your email"}
              className="flex-1 rounded-full bg-background/10 px-6 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 shadow-lg"
            >
              {t("footer.subscribe_btn")}
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </form>
        </motion.div>

        {/* Links section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-12 py-12 sm:grid-cols-2 lg:grid-cols-5"
        >
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-2xl font-medium">
              Luxe<span className="text-primary">Glow</span>
            </Link>
            <p className="mt-4 max-w-xs text-background/70">
              {t("footer.brand")}
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background/70 transition-all hover:bg-primary hover:text-primary-foreground shadow-md hover:shadow-lg"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase">{t("footer.shop")}</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.shop?.map((link: any) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About column */}
          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase">{t("footer.about")}</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.about?.map((link: any) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase">{t("footer.help")}</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.help?.map((link: any) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 sm:flex-row"
        >
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link href="#" className="hover:text-background transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              {t("footer.terms")}
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              {t("footer.cookies")}
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
