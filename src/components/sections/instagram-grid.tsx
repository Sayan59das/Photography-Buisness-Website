"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Camera } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { FadeImage } from "@/components/fade-image"

const instagramPhotos = [
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=400&auto=format&fit=crop",
]

export function InstagramGrid() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
            Follow Along
          </p>
          <h2 className="font-heading text-h2 font-bold text-balance mb-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors inline-flex items-center gap-3"
            >
              {siteConfig.social.instagramHandle}
              <Camera className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            </a>
          </h2>
          <p className="text-muted-foreground text-lg">
            Behind the scenes, recent work, and daily inspiration.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {instagramPhotos.map((src, i) => (
            <motion.a
              key={i}
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <FadeImage
                src={src}
                alt={`Instagram photo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
