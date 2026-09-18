import * as React from "react"
import type { Metadata } from "next"
import { PlayCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const videos = [
  {
    id: 1,
    title: "Aura & James Highlights",
    category: "Wedding Film",
    thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "The Tuscan Sun",
    category: "Destination",
    thumbnail: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Vogue India Campaign",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Golden Hour Romance",
    category: "Pre-Wedding",
    thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
  }
]

export const metadata: Metadata = {
  title: `Films — ${siteConfig.name}`,
  description: `Cinematic short films and highlight reels from ${siteConfig.name}.`,
}

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <section className="py-20 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
          Cinematography
        </p>
        <h1 className="font-heading text-h1 font-bold text-balance mb-6">
          Motion <span className="italic">Pictures</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Immerse yourself in our cinematic short films and highlight reels. We don&rsquo;t just record video; we direct a movie of your life.
        </p>
      </section>

      {/* Featured Video */}
      <section className="px-6 lg:px-8 pb-16 max-w-[1400px] mx-auto animate-in fade-in zoom-in-95 duration-1000">
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden group cursor-pointer">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <PlayCircle className="w-20 h-20 md:w-24 md:h-24 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
            <h2 className="mt-6 font-heading text-3xl md:text-5xl font-bold text-center">The Amalfi Coast Elopement</h2>
            <p className="mt-2 text-white/80 font-medium tracking-widest uppercase text-sm">Featured Film</p>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="px-6 lg:px-8 pb-32 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {videos.map((video, i) => (
            <div
              key={video.id}
              className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "backwards" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${video.thumbnail}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="w-12 h-12 text-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 p-6 z-10">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase mb-2 bg-white/20 backdrop-blur-md text-white border border-white/20">
                  {video.category}
                </span>
                <h3 className="font-heading text-2xl font-bold text-white">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
