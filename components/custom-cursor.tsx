"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isDarkBackground, setIsDarkBackground] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detectar se é mobile/tablet
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      // Detectar cor de fundo
      const element = document.elementFromPoint(e.clientX, e.clientY)
      if (element) {
        const bgColor = window.getComputedStyle(element).backgroundColor
        const isDark = isColorDark(bgColor)
        setIsDarkBackground(isDark)
      }
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Função para detectar se a cor é escura
  const isColorDark = (rgb: string): boolean => {
    const match = rgb.match(/\d+/g)
    if (!match || match.length < 3) return false

    const [r, g, b] = match.map(Number)
    // Usar luminância relativa
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
    return luminance < 0.5
  }

  const cursorColor = isDarkBackground ? "bg-amber-600" : "bg-white"
  const borderColor = isDarkBackground ? "border-amber-500" : "border-gray-900"
  const shadowColor = isDarkBackground ? "shadow-amber-600/80" : "shadow-white/80"

  // Não renderizar cursor em mobile/tablet
  if (isMobile) {
    return null
  }

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
        button, a {
          cursor: none !important;
        }
      `}</style>

      <motion.div
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        className={`pointer-events-none fixed w-4 h-4 rounded-full mix-blend-multiply shadow-lg border ${cursorColor} ${borderColor} ${shadowColor}`}
        style={{ zIndex: 2147483647 }}
      />

      <motion.div
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          opacity: isVisible ? 0.5 : 0,
          scale: isClicking ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.8,
        }}
        className={`pointer-events-none fixed w-8 h-8 border-2 rounded-full mix-blend-multiply shadow-lg ${borderColor}`}
        style={{
          zIndex: 2147483646,
          borderColor: isDarkBackground ? "rgb(180, 83, 9)" : "rgb(255, 255, 255)",
          boxShadow: isDarkBackground
            ? "0 0 12px rgba(217, 119, 6, 0.8), inset 0 0 4px rgba(0, 0, 0, 0.3)"
            : "0 0 12px rgba(255, 255, 255, 0.8), inset 0 0 4px rgba(0, 0, 0, 0.3)",
        }}
      />
    </>
  )
}
