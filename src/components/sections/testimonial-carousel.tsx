"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    clientName: "Sarah & David",
    eventType: "Wedding",
    quote:
      "They didn't just take pictures; they captured the feeling of our wedding day. Looking through our album is like reliving the joy, the tears, and the love all over again.",
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1973&auto=format&fit=crop",
  },
  {
    id: 2,
    clientName: "Emily & John",
    eventType: "Pre-Wedding",
    quote:
      "The team made us feel so comfortable in front of the camera. The cinematic quality of our engagement photos belongs in a magazine. We couldn't be happier!",
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1549416878-b9ca95e1bbab?q=80&w=1964&auto=format&fit=crop",
  },
  {
    id: 3,
    clientName: "The Martinez Family",
    eventType: "Maternity",
    quote:
      "Such a beautiful experience from start to finish. The attention to detail, lighting, and art direction was flawless. A memory we will cherish forever.",
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=1964&auto=format&fit=crop",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = React.useState(0)
  const [direction, setDirection] = React.useState(0)
  const timerRef = React.useRef<NodeJS.Timeout | null>(null)

  const resetTimer = React.useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
  }, [])

  React.useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [resetTimer])

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
    resetTimer()
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
    resetTimer()
  }

  const next = () => {
    setDirection(1)
    setCurrent((c) => (c + 1) % testimonials.length)
    resetTimer()
  }

  const t = testimonials[current]

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  }

  return (
    <section className="py-28 md:py-36 bg-muted/20 overflow-hidden relative">
      {/* Decorative quote marks */}
      <div className="absolute top-20 left-10 text-[200px] font-heading text-primary/[0.03] leading-none pointer-events-none select-none">
        &ldquo;
      </div>
      <div className="absolute bottom-10 right-10 text-[200px] font-heading text-primary/[0.03] leading-none pointer-events-none select-none rotate-180">
        &ldquo;
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
            Testimonials
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Kind <span className="italic">Words</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stories from couples who trusted us with their most precious
            moments.
          </p>
        </motion.div>

        {/* Split layout: Image + Quote */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[480px]">
            {/* Image side */}
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={t.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={t.imageUrl}
                    alt={t.clientName}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Gold ring border */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-primary/20 pointer-events-none" />
            </div>

            {/* Quote side */}
            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={t.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium leading-snug mb-8 text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div>
                    <p className="font-bold text-lg">{t.clientName}</p>
                    <p className="text-sm text-primary font-medium tracking-[0.15em] uppercase">
                      {t.eventType}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center gap-6 mt-10">
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-11 h-11 hover:bg-primary hover:text-white hover:border-primary transition-all"
                    onClick={prev}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-11 h-11 hover:bg-primary hover:text-white hover:border-primary transition-all"
                    onClick={next}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>

                {/* Dot indicators */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === current
                          ? "w-8 h-2 bg-primary"
                          : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Counter */}
                <span className="text-sm text-muted-foreground ml-auto">
                  {String(current + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
