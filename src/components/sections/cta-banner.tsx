"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function BokehOverlay() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 80 + 30,
            height: Math.random() * 80 + 30,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, rgba(201, 162, 75, ${
              Math.random() * 0.08 + 0.02
            }), transparent 70%)`,
          }}
          animate={{
            y: [0, -(Math.random() * 60 + 20)],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: Math.random() * 8 + 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  )
}

export function CtaBanner() {
  const ref = React.useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-44 overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-[-20%] z-0" style={{ y: bgY }}>
        <Image
          src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
          alt="Wedding photography"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black/60" />

      {/* Bokeh particles */}
      <BokehOverlay />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-[2]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-[2]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium tracking-[0.4em] uppercase mb-6 text-white/50"
        >
          Ready to Begin?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl mx-auto leading-[1.1]"
        >
          Let&rsquo;s Create Something{" "}
          <span className="italic gold-shimmer-text">Beautiful</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/60 text-lg mb-10 max-w-xl mx-auto"
        >
          Every love story deserves to be told with artistry and heart. Let&rsquo;s
          talk about yours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full text-base h-14 px-10 gold-shimmer border-0 text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all"
            )}
          >
            Book a Consultation
          </Link>
          <Link
            href="/portfolio"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "rounded-full text-base h-14 px-10 bg-white/5 text-white border-white/20 hover:bg-white/15 hover:border-white/40 backdrop-blur-sm transition-all"
            )}
          >
            Explore Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
