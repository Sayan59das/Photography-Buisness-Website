import * as React from "react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <section className="py-20 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
          Behind the Lens
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Crafting <span className="italic">Timeless</span> Stories
        </h1>
      </section>

      {/* Intro Image & Text */}
      <section className="px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070&auto=format&fit=crop"
              alt="Photographer behind the scenes"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              More than just capturing moments, we preserve emotions.
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded on the belief that every love story deserves to be told with cinematic grandeur, our studio has spent the last decade perfecting the art of visual storytelling. 
              </p>
              <p>
                We are a collective of passionate artists, directors, and editors who blend documentary authenticity with editorial elegance. We don't just want to show you how your wedding looked—we want to remind you exactly how it felt.
              </p>
              <p>
                Based in Mumbai, but traveling worldwide to capture destination celebrations that inspire us.
              </p>
            </div>
            
            <div className="pt-4">
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Signature_of_John_Hancock.svg" 
                alt="Signature" 
                width={150} 
                height={50} 
                className="opacity-60 dark:invert"
              />
              <p className="mt-4 font-heading font-medium tracking-widest text-sm uppercase">
                Founder & Lead Director
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Philosophy</h2>
            <p className="text-muted-foreground">The principles that guide our craft.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Authenticity First",
                desc: "We prioritize raw, unfiltered emotions over stiff, overly-posed portraits."
              },
              {
                title: "Cinematic Aesthetics",
                desc: "We use film-industry lighting and coloring techniques to give your memories a timeless, movie-like quality."
              },
              {
                title: "Discreet Presence",
                desc: "We act as a fly on the wall, allowing you to be fully present with your loved ones while we capture the magic."
              }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-heading text-primary/20 mb-6 font-bold">0{i + 1}</div>
                <h3 className="font-heading text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">Ready to tell your story?</h2>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-primary text-white rounded-full font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  )
}
