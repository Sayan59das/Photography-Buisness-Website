"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { FadeImage } from "@/components/fade-image"

const portfolioCategories = ["All", "Wedding", "Pre-Wedding", "Birthdays", "Ring-Ceremony"]

const portfolioShoots = [
  {
    id: 1,
    title: "Aura & James",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    href: "/portfolio/aura-james",
    colSpan: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Golden Hour",
    category: "Pre-Wedding",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
    href: "/portfolio/golden-hour",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Sweet Sixteen",
    category: "Birthdays",
    image: "https://images.unsplash.com/photo-1530103862676-de8892b12a15?q=80&w=2070&auto=format&fit=crop",
    href: "/portfolio/sweet-sixteen",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Estate Wedding",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
    href: "/portfolio/estate-wedding",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    title: "Diamond Exchange",
    category: "Ring-Ceremony",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
    href: "/portfolio/ring-ceremony",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    title: "Tuscany Dreams",
    category: "Pre-Wedding",
    image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=2070&auto=format&fit=crop",
    href: "/portfolio/tuscany-dreams",
    colSpan: "md:col-span-2 md:row-span-1",
  },
]

export function PortfolioContent() {
  const searchParams = useSearchParams()

  // Read category from URL, default to "All"
  const currentCategory = searchParams.get("category")?.toLowerCase() || "all"

  // Filter the shoots
  const filteredShoots = portfolioShoots.filter(shoot => {
    if (currentCategory === "all") return true
    return shoot.category.toLowerCase() === currentCategory
  })

  return (
    <>
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 px-6 mb-16">
        {portfolioCategories.map((cat) => {
          const isActive = currentCategory === cat.toLowerCase()
          return (
            <Link
              key={cat}
              href={cat.toLowerCase() === "all" ? "/portfolio" : `/portfolio?category=${cat.toLowerCase()}`}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isActive
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
            </Link>
          )
        })}
      </div>

      {/* Grid */}
      <section className="px-6 lg:px-8 pb-32 max-w-[1400px] mx-auto min-h-[500px]">
        {filteredShoots.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[300px] md:auto-rows-[400px]">
            {filteredShoots.map((shoot, i) => (
              <motion.div
                key={shoot.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={shoot.colSpan}
              >
                <Link
                  href={shoot.href}
                  className="group relative block h-full w-full overflow-hidden rounded-2xl"
                >
                  <FadeImage
                    src={shoot.image}
                    alt={shoot.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase mb-3 bg-white/20 backdrop-blur-md text-white border border-white/20">
                      {shoot.category}
                    </span>
                    <h3 className="font-heading text-3xl font-bold text-white">
                      {shoot.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-20">
            No projects found for {currentCategory}.
          </div>
        )}
      </section>
    </>
  )
}
