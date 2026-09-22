"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useIsClient } from "@/lib/use-is-client"

const heroImages = [
  "/images/hero/architectural-silhouette.jpg",
  "/images/hero/bridal-portrait.jpg",
  "/images/hero/crowd-celebration.jpg",
  "/images/hero/sangeet-dance.jpg",
  "/images/hero/ring-moment.jpg",
  "/images/hero/jaimala-ceremony.jpg",
]

function generateParticles(count: number) {
  return Array.from({ length: count }).map(() => ({
    width: Math.random() * 6 + 2,
    height: Math.random() * 6 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.4 + 0.1,
    riseBy: Math.random() * 100 + 50,
    driftBy: (Math.random() - 0.5) * 60,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 4,
  }))
}

function FloatingParticles() {
  const isClient = useIsClient()
  // Computed once per mount; only rendered after hydration so the random
  // values never mismatch between the server-rendered and client markup.
  const [particles] = React.useState(() => generateParticles(20))

  if (!isClient) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.width,
            height: p.height,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: `radial-gradient(circle, rgba(201, 162, 75, ${p.opacity}), transparent)`,
          }}
          animate={{
            y: [0, -p.riseBy],
            x: [0, p.driftBy],
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export function Hero() {
  const [currentImage, setCurrentImage] = React.useState(0)
  const sectionRef = React.useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const headlineWords = "Your Story, Our Lens".split(" ")

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex w-full overflow-hidden -mt-20"
    >
      {/* Background Images with crossfade */}
      {heroImages.map((src, i) => (
        <motion.div
          key={src}
          className="absolute inset-0 z-0"
          initial={false}
          animate={{
            opacity: i === currentImage ? 1 : 0,
            scale: i === currentImage ? 1.05 : 1,
          }}
          transition={{ opacity: { duration: 1.5 }, scale: { duration: 8 } }}
        >
          <Image
            src={src}
            alt="Photography"
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      ))}

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      {/* Floating particles */}
      <FloatingParticles />


      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center text-white pt-32 pb-32"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs md:text-sm font-medium tracking-[0.4em] uppercase mb-6 text-white/60"
        >
          Premium Photography Studio
        </motion.p>

        {/* Headline with word-by-word reveal */}
        <h1 className="font-heading text-display font-bold tracking-tight mb-8 max-w-5xl text-balance">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block mr-[0.3em]"
              style={
                word.replace(",", "") === "Story" || word === "Lens"
                  ? { fontStyle: "italic" }
                  : undefined
              }
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-base md:text-xl text-white/70 mb-12 max-w-2xl font-light leading-relaxed"
        >
          We capture the raw, authentic emotion of your most important days —
          turning fleeting moments into timeless art.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/portfolio"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full text-base h-14 px-10 gold-shimmer border-0 text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
            )}
          >
            View Portfolio
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "rounded-full text-base h-14 px-10 bg-white/5 text-white border-white/20 hover:bg-white/15 hover:border-white/40 backdrop-blur-sm transition-all"
            )}
          >
            Book a Consultation
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/40 tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-white/40" />
        </motion.div>
      </motion.div>

      {/* Image indicator dots */}
      <div className="absolute bottom-8 right-8 z-10 flex items-center gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`transition-all duration-300 rounded-full ${
              i === currentImage
                ? "w-8 h-2 bg-primary"
                : "w-2 h-2 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
