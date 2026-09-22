"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeImage } from "@/components/fade-image"

/** Gallery tile with scroll-driven image parallax, a numbered index, and a hover-reveal caption — the treatment used across every image grid on the site. */
export function ParallaxImageCard({
  href,
  image,
  title,
  category,
  index,
  className = "",
  cta = "View Story",
}: {
  href: string
  image: string
  title: string
  category: string
  index: number
  className?: string
  cta?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${className}`}
    >
      <Link href={href} className="absolute inset-0 z-20">
        <span className="sr-only">View {title}</span>
      </Link>

      {/* Parallax Image */}
      <motion.div className="absolute inset-[-10%] z-0" style={{ y: imgY }}>
        <FadeImage
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Index number */}
      <div className="absolute top-6 right-6 z-10">
        <span className="text-white/20 font-heading text-5xl font-bold">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase mb-3 bg-white/10 backdrop-blur-md text-white/90 border border-white/10">
          {category}
        </span>

        <h3 className="font-heading text-2xl md:text-3xl font-bold text-white translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
          {title}
        </h3>

        <div className="mt-3 overflow-hidden h-0 group-hover:h-8 transition-all duration-500">
          <div className="flex items-center gap-2 text-sm text-primary font-medium">
            {cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
