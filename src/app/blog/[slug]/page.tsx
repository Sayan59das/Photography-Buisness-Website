import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const post = {
  title: "10 Locations in Italy for the Perfect Elopement",
  category: "Guides",
  date: "September 12, 2023",
  author: "Studio Director",
  coverImage: "https://images.unsplash.com/photo-1516483638261-f40889f1d8c1?q=80&w=2070&auto=format&fit=crop",
  content: `
    <p>Italy is a dream destination for couples looking to elope. From the rolling hills of Tuscany to the dramatic cliffs of the Amalfi Coast, every corner of this beautiful country offers a unique backdrop for your love story.</p>
    
    <h2>1. Lake Como</h2>
    <p>Nestled in the foothills of the Alps, Lake Como provides an atmosphere of aristocratic elegance. Historic villas, lush gardens, and the serene waters make it a timeless choice.</p>
    
    <h2>2. Amalfi Coast</h2>
    <p>For breathtaking drama, the Amalfi Coast is unmatched. Pastel-colored villages clinging to steep cliffs overlooking the azure Tyrrhenian Sea create spectacular cinematic moments.</p>

    <h2>3. Tuscany</h2>
    <p>Tuscany is the epitome of rustic romance. Think endless vineyards, ancient farmhouses, and paths lined with cypress trees. It's perfect for couples seeking an intimate, golden-hour elopement followed by a private feast of local wine and pasta.</p>

    <blockquote>"To elope in Italy is to step into a Renaissance painting where you are the masterpiece."</blockquote>

    <p>When planning an elopement in Italy, timing is everything. We highly recommend late spring (May) or early autumn (September) to avoid the peak summer crowds while still enjoying glorious weather.</p>
  `
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, fetch the post based on params.slug

  return (
    <article className="min-h-screen bg-background pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12 uppercase tracking-widest"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Journal
        </Link>

        {/* Post Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
            <span className="text-primary">{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-heading font-bold text-xl overflow-hidden">
              {/* Initials placeholder */}
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="font-medium">{post.author}</p>
              <p className="text-sm text-muted-foreground">Written by</p>
            </div>
          </div>
        </header>
      </div>

      {/* Cover Image */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 mb-16">
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Post Content */}
      <div className="max-w-3xl mx-auto px-6">
        <div 
          className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-blockquote:border-primary prose-blockquote:font-heading prose-blockquote:text-2xl prose-blockquote:italic prose-blockquote:text-muted-foreground max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  )
}
