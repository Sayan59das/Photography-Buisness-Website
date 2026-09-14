"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
    title: "Vogue Editorial",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop",
    href: "/portfolio/vogue",
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
    title: "Midnight Bloom",
    category: "Maternity",
    image:
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=2070&auto=format&fit=crop",
    href: "/portfolio/midnight-bloom",
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

// Asymmetric layout: varied heights for visual interest
const gridStyles = [
  "md:col-span-2 md:row-span-2 aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[3/4]",
  "aspect-[3/4]",
  "aspect-[3/4]",
  "md:col-span-2 aspect-[16/9]",
]

function ShootCard({
  shoot,
  index,
  className,
}: {
  shoot: (typeof featuredShoots)[0]
  index: number
  className: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${className}`}
    >
      <Link href={shoot.href} className="absolute inset-0 z-20">
        <span className="sr-only">View {shoot.title}</span>
      </Link>

      {/* Parallax Image */}
      <motion.div className="absolute inset-[-10%] z-0" style={{ y: imgY }}>
        <Image
          src={shoot.image}
          alt={shoot.title}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Index number */}
      <div className="absolute top-6 right-6 z-10">
        <span className="text-white/20 font-heading text-5xl font-bold">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
        {/* Category pill */}
        <motion.span
          className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase mb-3 bg-white/10 backdrop-blur-md text-white/90 border border-white/10"
          initial={false}
        >
          {shoot.category}
        </motion.span>

        {/* Title */}
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-white translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
          {shoot.title}
        </h3>

        {/* Arrow */}
        <div className="mt-3 overflow-hidden h-0 group-hover:h-8 transition-all duration-500">
          <div className="flex items-center gap-2 text-sm text-primary font-medium">
            View Story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function FeaturedWork() {
  return (
    <section className="py-28 md:py-36 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
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
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.05]">
              Selected<br />
              <span className="italic">Works</span>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
          {featuredShoots.map((shoot, i) => (
            <ShootCard
              key={shoot.id}
              shoot={shoot}
              index={i}
              className={gridStyles[i]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
