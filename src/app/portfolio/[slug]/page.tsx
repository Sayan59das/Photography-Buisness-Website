import * as React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, MapPin, CalendarDays } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"
import { FadeImage } from "@/components/fade-image"
import { portfolioShoots, getPortfolioShoot } from "@/lib/portfolio-data"

export async function generateStaticParams() {
  return portfolioShoots.map((shoot) => ({ slug: shoot.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const shoot = getPortfolioShoot(slug)
  if (!shoot) return {}

  return {
    title: `${shoot.title} — ${siteConfig.name}`,
    description: shoot.description,
  }
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const shoot = getPortfolioShoot(slug)
  if (!shoot) notFound()

  const index = portfolioShoots.findIndex((s) => s.slug === slug)
  const next = portfolioShoots[(index + 1) % portfolioShoots.length]

  return (
    <article className="min-h-screen bg-background">
      {/* Hero Cover */}
      <section className="relative h-[70vh] md:h-[85vh] w-full">
        <Image
          src={shoot.coverImage}
          alt={shoot.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        {/* Back button */}
        <div className="absolute top-24 left-6 lg:left-12 z-20">
          <Link
            href="/portfolio"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wider uppercase"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>

        {/* Title Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white p-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase mb-6 bg-white/10 backdrop-blur-md border border-white/20">
            {shoot.category}
          </span>
          <h1 className="font-heading text-h1 font-bold text-balance text-center mb-6">
            {shoot.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm md:text-base text-white/80 font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" />
              {shoot.location}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4 text-primary" />
              {shoot.date}
            </span>
          </div>
        </div>
      </section>

      {/* Story text */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {shoot.description}
        </p>
      </section>

      {/* Photo Gallery Grid */}
      <section className="px-4 md:px-6 lg:px-8 pb-24 max-w-[1600px] mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {shoot.gallery.map((src, i) => (
            <div
              key={i}
              className="relative w-full break-inside-avoid rounded-xl overflow-hidden group animate-in fade-in duration-700"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "backwards" }}
            >
              <FadeImage
                src={src}
                alt={`${shoot.title} photo ${i + 1}`}
                width={800}
                height={1200}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Next project */}
      <Link
        href={`/portfolio/${next.slug}`}
        className="group relative block h-[45vh] md:h-[55vh] w-full overflow-hidden"
      >
        <FadeImage
          src={next.coverImage}
          alt={next.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <span className="text-xs font-medium tracking-[0.4em] uppercase mb-4 text-white/60">
            Next Story
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-balance mb-6">
            {next.title}
          </h2>
          <span className="flex items-center gap-2 text-sm font-medium tracking-wider uppercase">
            View Gallery
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-balance mb-8">
          Love what you see?{" "}
          <span className="italic gold-shimmer-text">Let&rsquo;s create yours.</span>
        </h2>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full text-base h-14 px-10 gold-shimmer border-0 text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-shadow"
          )}
        >
          Book a Consultation
        </Link>
      </section>
    </article>
  )
}
