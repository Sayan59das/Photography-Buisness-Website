"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const heroImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2070&auto=format&fit=crop",
]

const stats = [
  { value: 500, suffix: "+", label: "Weddings Captured" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Awards Won" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = React.useState(0)
  const ref = React.useRef<HTMLSpanElement>(null)
  const hasAnimated = React.useRef(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, rgba(201, 162, 75, ${
              Math.random() * 0.4 + 0.1
            }), transparent)`,
          }}
          animate={{
            y: [0, -(Math.random() * 100 + 50)],
            x: [0, (Math.random() - 0.5) * 60],
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            delay: Math.random() * 4,
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

  const headlineWords = "Cinematic Stories for Modern Romantics".split(" ")

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden -mt-20"
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

      {/* Gold accent line */}
      <motion.div
        className="absolute top-1/2 left-0 h-px z-[2] opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center text-white"
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
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-8 max-w-5xl leading-[0.95]">
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
                word === "Cinematic" || word === "Romantics"
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16 flex items-center gap-8 md:gap-16"
        >
          {stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              {i > 0 && (
                <div className="w-px h-10 bg-white/20" />
              )}
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-heading font-bold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs text-white/50 tracking-wider uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
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
