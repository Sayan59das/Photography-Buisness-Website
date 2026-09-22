import * as React from "react"
import type { Metadata } from "next"
import { PortfolioContent } from "@/components/portfolio-content"
import { BokehField } from "@/components/bokeh-field"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Portfolio — ${siteConfig.name}`,
  description: `Explore curated wedding, pre-wedding, and editorial galleries from ${siteConfig.name}.`,
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative overflow-hidden py-24 md:py-36 px-6 lg:px-8 max-w-7xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <BokehField count={10} />
        <div className="relative z-10">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
            Our Work
          </p>
          <h1 className="font-heading text-h1 font-bold text-balance mb-6">
            The <span className="italic text-primary">Portfolio</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated collections of visual stories, spanning from intimate elopements to grand celebrations and editorial campaigns.
          </p>
        </div>
      </section>

      <React.Suspense fallback={<div className="min-h-[500px] flex justify-center py-20 text-muted-foreground">Loading portfolio...</div>}>
        <PortfolioContent />
      </React.Suspense>
    </div>
  )
}
