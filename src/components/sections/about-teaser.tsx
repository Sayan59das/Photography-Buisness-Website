"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutTeaser() {
  const ref = React.useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  return (
    <section ref={ref} className="py-28 md:py-36 bg-background relative overflow-hidden">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
              <motion.div className="absolute inset-[-10%]" style={{ y: imgY }}>
                <Image
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070&auto=format&fit=crop"
                  alt="The photographer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 md:right-[-2rem] glass rounded-2xl px-6 py-5 shadow-xl max-w-[220px]"
            >
              <p className="text-3xl font-heading font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground mt-1">
                Years of crafting visual stories
              </p>
            </motion.div>

            {/* Gold accent frame */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl pointer-events-none" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
              About the Studio
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
              The Artist Behind<br />
              <span className="italic">the Lens</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                With over a decade of experience, we&rsquo;ve learned that the
                most powerful photographs aren&rsquo;t posed — they&rsquo;re
                felt. Our approach blends documentary authenticity with
                cinematic artistry.
              </p>
              <p>
                Every wedding is a world of its own. We don&rsquo;t just show
                up with cameras — we immerse ourselves in your story, your
                family, your joy, so every frame reflects the real, unfiltered
                beauty of your day.
              </p>
            </div>

            {/* Signature */}
            <div className="mb-8">
              <p className="font-heading text-2xl italic text-foreground/80">
                Shubham
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Founder & Lead Photographer
              </p>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-foreground font-medium hover:text-primary transition-colors"
            >
              <span className="relative">
                Learn Our Story
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
