"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ParallaxImageCard } from "@/components/parallax-image-card"
import { portfolioShoots } from "@/lib/portfolio-data"

const portfolioCategories = ["All", "Wedding", "Pre-Wedding", "Haldi", "Ring-Ceremony", "Portraits"]

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
      <div className="flex flex-wrap justify-center gap-3 px-6 mb-16">
        {portfolioCategories.map((cat) => {
          const isActive = currentCategory === cat.toLowerCase()
          return (
            <Link
              key={cat}
              href={cat.toLowerCase() === "all" ? "/portfolio" : `/portfolio?category=${cat.toLowerCase()}`}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive
                  ? "text-white"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="portfolio-category-active"
                  className="absolute inset-0 rounded-full gold-shimmer -z-10 shadow-md shadow-primary/20"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
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
              <ParallaxImageCard
                key={shoot.slug}
                href={`/portfolio/${shoot.slug}`}
                image={shoot.coverImage}
                title={shoot.title}
                category={shoot.category}
                index={i}
                className={`${shoot.colSpan} h-full`}
              />
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
