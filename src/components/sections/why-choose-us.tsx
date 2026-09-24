"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Heart, Film, Users, Clock, type LucideIcon } from "lucide-react"
import { FadeImage } from "@/components/fade-image"

const reasons: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Heart,
    title: "Documentary Authenticity",
    desc: "We capture real, unposed emotion as it happens — not stiff, staged portraits.",
  },
  {
    icon: Film,
    title: "Cinematic Craftsmanship",
    desc: "Film-inspired lighting, framing, and color grading give every photo a timeless quality.",
  },
  {
    icon: Users,
    title: "A Personal Experience",
    desc: "From your first consultation to final delivery, your plan is shaped around your story.",
  },
  {
    icon: Clock,
    title: "Prompt, Reliable Delivery",
    desc: "Beautifully edited galleries land in your inbox on schedule, every time.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <FadeImage
                src="/images/hero/why-choose-us.jpg"
                alt="A couple sharing an intimate embrace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 border-r-2 border-t-2 border-primary/20 rounded-tr-3xl pointer-events-none" />
          </motion.div>

          {/* Content */}
          <div className="order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12"
            >
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
                Why Choose Us
              </p>
              <h2 className="font-heading text-h2 font-bold text-balance leading-[1.1]">
                What Sets Our<br />
                <span className="italic">Work Apart</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <reason.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-1.5">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
