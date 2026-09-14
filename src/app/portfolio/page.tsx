"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams, useRouter } from "next/navigation"

const portfolioCategories = ["All", "Wedding", "Pre-Wedding", "Maternity", "Commercial"]

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
    title: "Vogue Editorial",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop",
    href: "/portfolio/vogue",
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
    title: "Midnight Bloom",
    category: "Maternity",
    image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=2070&auto=format&fit=crop",
    href: "/portfolio/midnight-bloom",
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

function PortfolioContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
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
            <button
              key={cat}
              onClick={() => {
                if (cat.toLowerCase() === "all") {
                  router.push("/portfolio", { scroll: false })
                } else {
                  router.push(`/portfolio?category=${cat.toLowerCase()}`, { scroll: false })
                }
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isActive
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Grid */}
      <section className="px-6 lg:px-8 pb-32 max-w-[1400px] mx-auto min-h-[500px]">
        {filteredShoots.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[300px] md:auto-rows-[400px]">
            {filteredShoots.map((shoot) => (
              <Link
                key={shoot.id}
                href={shoot.href}
                className={`group relative overflow-hidden rounded-2xl ${shoot.colSpan}`}
              >
                <Image
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

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <section className="py-20 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
          Our Work
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          The <span className="italic">Portfolio</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore our curated collections of visual stories, spanning from intimate elopements to grand celebrations and editorial campaigns.
        </p>
      </section>

      <React.Suspense fallback={<div className="min-h-[500px] flex justify-center py-20 text-muted-foreground">Loading portfolio...</div>}>
        <PortfolioContent />
      </React.Suspense>
    </div>
  )
}
