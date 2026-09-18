import * as React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { FadeImage } from "@/components/fade-image"

const blogPosts = [
  {
    id: 1,
    title: "10 Locations in Italy for the Perfect Elopement",
    category: "Guides",
    date: "Sep 12, 2023",
    image: "https://images.unsplash.com/photo-1516483638261-f40889f1d8c1?q=80&w=2070&auto=format&fit=crop",
    href: "/blog/10-locations-in-italy",
  },
  {
    id: 2,
    title: "How to Prepare for Your Engagement Shoot",
    category: "Tips",
    date: "Aug 24, 2023",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
    href: "/blog/engagement-shoot-prep",
  },
  {
    id: 3,
    title: "Film vs Digital: Why We Use Both",
    category: "Behind the Scenes",
    date: "Jul 05, 2023",
    image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=1974&auto=format&fit=crop",
    href: "/blog/film-vs-digital",
  }
]

export const metadata: Metadata = {
  title: `Journal — ${siteConfig.name}`,
  description: `Tips, guides, and behind-the-scenes stories from ${siteConfig.name}.`,
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <section className="py-20 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
          Journal
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          The <span className="italic">Blog</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Thoughts, tips, and behind-the-scenes stories from our latest shoots and travels.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="px-6 lg:px-8 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogPosts.map((post, i) => (
            <article
              key={post.id}
              className="group flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "backwards" }}
            >
              <Link href={post.href} className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 block">
                <FadeImage
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase bg-white/90 text-black backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
              </Link>

              <div className="flex flex-col flex-1">
                <p className="text-sm text-muted-foreground mb-3">{post.date}</p>
                <Link href={post.href}>
                  <h2 className="font-heading text-2xl font-bold hover:text-primary transition-colors leading-tight mb-4">
                    {post.title}
                  </h2>
                </Link>
                <div className="mt-auto pt-4">
                  <Link href={post.href} className="text-sm font-medium uppercase tracking-widest text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    Read Story
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
