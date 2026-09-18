"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Camera, Gem, Sparkles, Star } from "lucide-react"
import { useIsClient } from "@/lib/use-is-client"

const services = [
  {
    id: 1,
    title: "Wedding Photography",
    description:
      "Full day coverage, second shooter, high-res edited gallery, and a custom heirloom album.",
    priceLabel: "Starting at ₹1,50,000",
    icon: Camera,
    popular: false,
  },
  {
    id: 2,
    title: "Pre-Wedding & Engagement",
    description:
      "Multi-location shoots, cinematic storytelling, and save-the-date short films.",
    priceLabel: "Starting at ₹50,000",
    icon: Gem,
    popular: true,
  },
  {
    id: 3,
    title: "Commercial & Editorials",
    description:
      "Brand campaigns, fashion editorials, and product photography for magazines and digital.",
    priceLabel: "Custom Quote",
    icon: Sparkles,
    popular: false,
  },
]

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  })

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function generateBokeh(count: number) {
  return Array.from({ length: count }).map(() => ({
    size: Math.random() * 60 + 20,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.06 + 0.02,
    riseBy: Math.random() * 40 + 20,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 3,
  }))
}

function BokehParticles() {
  const isClient = useIsClient()
  const [bokeh] = React.useState(() => generateBokeh(12))

  if (!isClient) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bokeh.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            top: `${b.top}%`,
            background: `radial-gradient(circle, rgba(201, 162, 75, ${b.opacity}), transparent 70%)`,
          }}
          animate={{
            y: [0, -b.riseBy],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay,
          }}
        />
      ))}
    </div>
  )
}

export function ServicesTeaser() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <BokehParticles />

      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
            Services & Pricing
          </p>
          <h2 className="font-heading text-h2 font-bold text-balance mb-5">
            Invest in <span className="italic">Memories</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Transparent pricing with zero hidden fees. We offer tailored
            collections for every unique story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <TiltCard
                className={`relative glass rounded-3xl p-8 md:p-10 text-left flex flex-col h-full gradient-border transition-shadow duration-500 ${
                  service.popular
                    ? "shadow-lg shadow-primary/10 ring-1 ring-primary/20"
                    : "hover:shadow-lg hover:shadow-primary/5"
                }`}
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <span className="gold-shimmer text-white text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full flex items-center gap-1.5">
                      <Star className="h-3 w-3 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="font-heading text-2xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
                  {service.description}
                </p>

                <div>
                  <p className="text-sm font-semibold tracking-wide text-primary mb-5">
                    {service.priceLabel}
                  </p>
                  <Link
                    href="/services"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "w-full rounded-full h-11 font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                    )}
                  >
                    View Details
                  </Link>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
