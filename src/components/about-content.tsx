"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Heart, Film, Eye } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"
import { FadeImage } from "@/components/fade-image"
import { BokehField } from "@/components/bokeh-field"
import { AnimatedCounter } from "@/components/animated-counter"

function QuoteBand() {
  const ref = React.useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

  return (
    <section ref={ref} className="relative py-32 md:py-40 overflow-hidden">
      <motion.div className="absolute inset-[-20%] z-0" style={{ y: bgY }}>
        <FadeImage
          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop"
          alt="Behind the scenes at a wedding shoot"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 z-[1] bg-black/65" />
      <BokehField count={12} className="z-[2]" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-3xl md:text-5xl italic text-white text-balance leading-[1.3]"
        >
          &ldquo;The most powerful photographs aren&rsquo;t posed &mdash;{" "}
          <span className="text-primary">they&rsquo;re felt.</span>&rdquo;
        </motion.p>
      </div>
    </section>
  )
}

const values = [
  {
    icon: Heart,
    title: "Authenticity First",
    desc: "We prioritize raw, unfiltered emotions over stiff, overly-posed portraits.",
  },
  {
    icon: Film,
    title: "Cinematic Aesthetics",
    desc: "We use film-industry lighting and coloring techniques to give your memories a timeless, movie-like quality.",
  },
  {
    icon: Eye,
    title: "Discreet Presence",
    desc: "We act as a fly on the wall, allowing you to be fully present with your loved ones while we capture the magic.",
  },
]

const stats = [
  { value: 500, suffix: "+", label: "Weddings Captured" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Awards Won" },
  { value: 30, suffix: "+", label: "Countries Traveled" },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
}

export function AboutContent() {
  const introRef = React.useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start end", "end start"],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative overflow-hidden py-24 md:py-36 px-6 lg:px-8">
        <BokehField count={10} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4"
          >
            Behind the Lens
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-h1 font-bold text-balance mb-6 leading-tight"
          >
            Crafting <span className="italic text-primary">Timeless</span> Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A decade spent turning fleeting moments into heirlooms — one honest frame at a time.
          </motion.p>
        </div>
      </section>

      {/* Intro Image & Text */}
      <section ref={introRef} className="px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden">
              <motion.div className="absolute inset-[-10%]" style={{ y: imgY }}>
                <FadeImage
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070&auto=format&fit=crop"
                  alt="Photographer behind the scenes"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>

            {/* Gold accent frame */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-l-2 border-t-2 border-primary/30 rounded-tl-3xl pointer-events-none" />

            {/* Floating glass stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -right-4 md:-right-8 glass gradient-border rounded-2xl px-6 py-5 shadow-xl"
            >
              <p className="font-heading text-3xl font-bold text-primary leading-none">
                <AnimatedCounter value={10} suffix="+" />
              </p>
              <p className="text-xs text-muted-foreground tracking-wider uppercase mt-1">
                Years of Craft
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-balance">
              More than just capturing moments, we preserve emotions.
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded on the belief that every love story deserves to be told with cinematic grandeur, our studio has spent the last decade perfecting the art of visual storytelling.
              </p>
              <p>
                We are a collective of passionate artists, directors, and editors who blend documentary authenticity with editorial elegance. We don&rsquo;t just want to show you how your wedding looked&mdash;we want to remind you exactly how it felt.
              </p>
              <p>
                Based in Mumbai, but traveling worldwide to capture destination celebrations that inspire us.
              </p>
            </div>

            <div className="pt-4">
              <p className="font-script text-5xl text-primary leading-none mb-2">
                {siteConfig.founder}
              </p>
              <div className="h-px w-32 bg-gradient-to-r from-primary to-transparent mb-3" />
              <p className="font-heading font-medium tracking-widest text-sm uppercase text-muted-foreground">
                Founder & Lead Photographer
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <QuoteBand />

      {/* Stats strip */}
      <section className="py-16 border-y border-border/60">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs md:text-sm text-muted-foreground tracking-wider uppercase mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
              Our Philosophy
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-balance">The principles that guide our craft</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="glass gradient-border rounded-3xl p-8 md:p-10 text-left hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section {...fadeUp} className="py-24 md:py-32 px-6 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-balance mb-8">
          Ready to tell your story?
        </h2>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full text-base h-14 px-10 gold-shimmer border-0 text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-shadow"
          )}
        >
          Get in Touch
        </Link>
      </motion.section>
    </div>
  )
}
