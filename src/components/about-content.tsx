"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { FadeImage } from "@/components/fade-image"

const values = [
  {
    title: "Authenticity First",
    desc: "We prioritize raw, unfiltered emotions over stiff, overly-posed portraits.",
  },
  {
    title: "Cinematic Aesthetics",
    desc: "We use film-industry lighting and coloring techniques to give your memories a timeless, movie-like quality.",
  },
  {
    title: "Discreet Presence",
    desc: "We act as a fly on the wall, allowing you to be fully present with your loved ones while we capture the magic.",
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
}

export function AboutContent() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <motion.section
        {...fadeUp}
        className="py-20 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto text-center"
      >
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
          Behind the Lens
        </p>
        <h1 className="font-heading text-h1 font-bold text-balance mb-6 leading-tight">
          Crafting <span className="italic">Timeless</span> Stories
        </h1>
      </motion.section>

      {/* Intro Image & Text */}
      <section className="px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[600px] rounded-3xl overflow-hidden"
          >
            <FadeImage
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070&auto=format&fit=crop"
              alt="Photographer behind the scenes"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
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

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-balance mb-4">Our Philosophy</h2>
            <p className="text-muted-foreground">The principles that guide our craft.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <div className="text-6xl font-heading text-primary/20 mb-6 font-bold">0{i + 1}</div>
                <h3 className="font-heading text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section {...fadeUp} className="py-32 px-6 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-balance mb-8">Ready to tell your story?</h2>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-primary text-white rounded-full font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1"
        >
          Get in Touch
        </Link>
      </motion.section>
    </div>
  )
}
