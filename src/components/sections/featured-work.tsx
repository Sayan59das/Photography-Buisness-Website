"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ParallaxImageCard } from "@/components/parallax-image-card"

const featuredShoots = [
  {
    id: 1,
    title: "Aura & James",
    category: "Wedding",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    href: "/portfolio/aura-james",
  },
  {
    id: 2,
    title: "Golden Hour",
    category: "Pre-Wedding",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
    href: "/portfolio/golden-hour",
  },
  {
    id: 3,
    title: "Diamond Exchange",
    category: "Ring-Ceremony",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
    href: "/portfolio/ring-ceremony",
  },
  {
    id: 4,
    title: "Estate Wedding",
    category: "Wedding",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
    href: "/portfolio/estate-wedding",
  },
  {
    id: 5,
    title: "Sweet Sixteen",
    category: "Birthdays",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8892b12a15?q=80&w=2070&auto=format&fit=crop",
    href: "/portfolio/sweet-sixteen",
  },
  {
    id: 6,
    title: "Tuscany Dreams",
    category: "Pre-Wedding",
    image:
      "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=2070&auto=format&fit=crop",
    href: "/portfolio/tuscany-dreams",
  },
]

const gridStyles = [
  "md:col-span-2 md:row-span-2 aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "md:col-span-2 lg:col-span-1 md:aspect-[21/9] lg:aspect-[4/5] aspect-[4/5]",
]

export function FeaturedWork() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
              Portfolio
            </p>
            <h2 className="font-heading text-h2 font-bold text-balance mb-4 leading-[1.05]">
              A Closer Look<br />
              <span className="italic">At Our Craft</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              A curated selection of our favorite stories, told through light,
              color, and emotion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/portfolio"
              className="group flex items-center gap-3 text-foreground font-medium text-base hover:text-primary transition-colors"
            >
              <span className="relative">
                View All Galleries
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {featuredShoots.map((shoot, i) => (
            <ParallaxImageCard
              key={shoot.id}
              href={shoot.href}
              image={shoot.image}
              title={shoot.title}
              category={shoot.category}
              index={i}
              className={gridStyles[i]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
