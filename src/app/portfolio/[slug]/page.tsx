import * as React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { FadeImage } from "@/components/fade-image"

// Mock data for the static generation
const shootDetails = {
  title: "Aura & James",
  category: "Wedding",
  date: "October 12, 2023",
  location: "Lake Como, Italy",
  description: "A breathtaking destination wedding on the shores of Lake Como. Aura and James exchanged vows under a floral archway as the sun set over the mountains, casting a golden glow across the water. The celebration continued into the night with a candlelit dinner in a historic villa.",
  coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
  gallery: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
  ]
}

export async function generateStaticParams() {
  return [
    { slug: 'aura-james' },
    { slug: 'golden-hour' },
    { slug: 'sweet-sixteen' },
    { slug: 'estate-wedding' },
    { slug: 'ring-ceremony' },
    { slug: 'tuscany-dreams' },
    { slug: 'vogue' }
  ]
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${shootDetails.title} — ${siteConfig.name}`,
    description: shootDetails.description,
  }
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // In a real app, fetch the shoot details using the slug from Prisma here
  await params

  return (
    <article className="min-h-screen bg-background">
      {/* Hero Cover */}
      <section className="relative h-[70vh] md:h-[85vh] w-full">
        <Image
          src={shootDetails.coverImage}
          alt={shootDetails.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

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
            {shootDetails.category}
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-6">
            {shootDetails.title}
          </h1>
          <div className="flex items-center gap-4 text-sm md:text-base text-white/80 font-medium">
            <span>{shootDetails.location}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>{shootDetails.date}</span>
          </div>
        </div>
      </section>

      {/* Story text */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {shootDetails.description}
        </p>
      </section>

      {/* Photo Gallery Grid */}
      <section className="px-4 md:px-6 lg:px-8 pb-32 max-w-[1600px] mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {shootDetails.gallery.map((src, i) => (
            <div
              key={i}
              className="relative w-full break-inside-avoid rounded-xl overflow-hidden group animate-in fade-in duration-700"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "backwards" }}
            >
              <FadeImage
                src={src}
                alt={`${shootDetails.title} photo ${i + 1}`}
                width={800}
                height={1200}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}
