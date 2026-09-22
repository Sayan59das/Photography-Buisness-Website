"use client"

import * as React from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { PlayCircle, X, ChevronLeft, ChevronRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"
import { BokehField } from "@/components/bokeh-field"
import { FadeImage } from "@/components/fade-image"

const videos = [
  {
    id: 1,
    title: "The Quiet Before",
    category: "Bridal",
    duration: "0:12",
    src: "/videos/reel-1.mp4",
    poster: "/images/videos/reel-1-poster.jpg",
  },
  {
    id: 2,
    title: "Sangeet Nights",
    category: "Sangeet",
    duration: "0:32",
    src: "/videos/reel-2.mp4",
    poster: "/images/videos/reel-2-poster.jpg",
  },
  {
    id: 3,
    title: "The Grand Entrance",
    category: "Wedding",
    duration: "0:34",
    src: "/videos/reel-3.mp4",
    poster: "/images/videos/reel-3-poster.jpg",
  },
  {
    id: 4,
    title: "Rituals & Rasams",
    category: "Ceremony",
    duration: "0:28",
    src: "/videos/reel-4.mp4",
    poster: "/images/videos/reel-4-poster.jpg",
  },
  {
    id: 5,
    title: "A Quiet Moment Together",
    category: "Reception",
    duration: "0:15",
    src: "/videos/reel-5.mp4",
    poster: "/images/videos/reel-5-poster.jpg",
  },
  {
    id: 6,
    title: "The Haldi Ceremony",
    category: "Haldi",
    duration: "0:13",
    src: "/videos/reel-6.mp4",
    poster: "/images/videos/reel-6-poster.jpg",
  },
  {
    id: 7,
    title: "Under the Fairy Lights",
    category: "Candid",
    duration: "0:29",
    src: "/videos/reel-7.mp4",
    poster: "/images/videos/reel-7-poster.jpg",
  },
]

const heroSlides = [
  "/images/hero/architectural-silhouette.jpg",
  "/images/hero/bridal-portrait.jpg",
  "/images/hero/crowd-celebration.jpg",
  "/images/hero/sangeet-dance.jpg",
  "/images/hero/ring-moment.jpg",
  "/images/hero/jaimala-ceremony.jpg",
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
}

function VideoLightbox({
  index,
  onClose,
  onNavigate,
}: {
  index: number
  onClose: () => void
  onNavigate: (next: number) => void
}) {
  const video = videos[index]

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNavigate((index + 1) % videos.length)
      if (e.key === "ArrowLeft") onNavigate((index - 1 + videos.length) % videos.length)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [index, onClose, onNavigate])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      {/* Prev / Next */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNavigate((index - 1 + videos.length) % videos.length)
        }}
        aria-label="Previous film"
        className="hidden sm:flex absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 items-center justify-center text-white transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNavigate((index + 1) % videos.length)
        }}
        aria-label="Next film"
        className="hidden sm:flex absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 items-center justify-center text-white transition-colors"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <motion.div
        key={video.id}
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-sm md:max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          key={video.src}
          src={video.src}
          poster={video.poster}
          controls
          autoPlay
          playsInline
          className="w-full aspect-[9/16] rounded-2xl bg-black shadow-2xl"
        />
        <div className="mt-4 flex items-center justify-between text-white">
          <div>
            <p className="font-heading text-xl font-bold">{video.title}</p>
            <p className="text-sm text-white/60 uppercase tracking-widest mt-1">{video.category}</p>
          </div>
          <span className="text-sm text-white/50 tabular-nums">
            {index + 1} / {videos.length}
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-4 -right-4 md:top-0 md:-right-14 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </motion.div>
    </motion.div>
  )
}

function VideoCard({
  video,
  index,
  onPlay,
  className,
}: {
  video: (typeof videos)[number]
  index: number
  onPlay: () => void
  className?: string
}) {
  const ref = React.useRef<HTMLButtonElement>(null)
  const [hovering, setHovering] = React.useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])

  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onClick={onPlay}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={cn(
        "group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer text-left bg-muted",
        className
      )}
    >
      <motion.div className="absolute inset-[-10%] z-0" style={{ y: imgY }}>
        <FadeImage
          src={video.poster}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </motion.div>

      {/* Muted preview on hover (desktop only) */}
      {hovering && (
        <video
          src={video.src}
          muted
          loop
          autoPlay
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover z-[1]"
        />
      )}

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

      {/* Duration badge */}
      <span className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-md text-[10px] font-semibold tabular-nums bg-black/50 backdrop-blur-sm text-white border border-white/10">
        {video.duration}
      </span>

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <PlayCircle className="w-10 h-10 md:w-12 md:h-12 text-white opacity-90 scale-90 group-hover:opacity-0 transition-all duration-300" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-10">
        <span className="inline-block px-2.5 py-1 rounded-full text-[9px] font-semibold tracking-[0.15em] uppercase mb-2 bg-white/15 backdrop-blur-md text-white border border-white/10">
          {video.category}
        </span>
        <h3 className="font-heading text-base md:text-lg font-bold text-white leading-tight">
          {video.title}
        </h3>
      </div>
    </motion.button>
  )
}

export function VideosContent() {
  const heroRef = React.useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const headlineWords = "Stories in Motion".split(" ")

  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)

  const [currentSlide, setCurrentSlide] = React.useState(0)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Cinematic hero with a rotating slideshow backdrop of real footage */}
      <section
        ref={heroRef}
        className="relative min-h-[90svh] flex items-center w-full overflow-hidden -mt-20"
      >
        {heroSlides.map((src, i) => (
          <motion.div
            key={src}
            className="absolute inset-0 z-0"
            initial={false}
            animate={{
              opacity: i === currentSlide ? 1 : 0,
              scale: i === currentSlide ? 1.05 : 1,
            }}
            transition={{ opacity: { duration: 1.5 }, scale: { duration: 8 } }}
          >
            <Image
              src={src}
              alt="Behind the scenes of a wedding film"
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        ))}

        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/65 via-black/60 to-black/92" />
        <BokehField count={16} className="z-[2]" />

        <motion.div
          style={{ y: bgY, opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center text-white pt-32 pb-20"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs md:text-sm font-medium tracking-[0.4em] uppercase mb-6 text-white/60"
          >
            Cinematography
          </motion.p>

          <h1 className="font-heading text-h1 font-bold tracking-tight mb-6 max-w-4xl text-balance">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "inline-block mr-[0.3em]",
                  word === "Motion" && "italic"
                )}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-base md:text-xl text-white/70 max-w-2xl font-light leading-relaxed"
          >
            We don&rsquo;t just record video; we direct a movie of your life.
          </motion.p>
        </motion.div>
      </section>

      {/* Video Grid */}
      <section className="px-6 lg:px-8 py-24 md:py-32 max-w-[1400px] mx-auto">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
            The Archive &mdash; {videos.length} Films and Counting
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-balance">
            More <span className="italic">Films</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7 max-w-4xl mx-auto">
          {videos.map((video, i) => (
            <VideoCard
              key={video.id}
              video={video}
              index={i}
              onPlay={() => setActiveIndex(i)}
              className={cn(
                i % 2 === 1 && "mt-10 sm:mt-0",
                i % 3 === 1 && "md:mt-14",
                i % 3 === 2 && "md:mt-7"
              )}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section {...fadeUp} className="pb-24 md:pb-32 px-6 text-center">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
          {siteConfig.shortName} Films
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-balance mb-8 max-w-2xl mx-auto">
          Want a film like this made about you?
        </h2>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full text-base h-14 px-10 gold-shimmer border-0 text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-shadow"
          )}
        >
          Book a Consultation
        </Link>
      </motion.section>

      <AnimatePresence mode="wait">
        {activeIndex !== null && (
          <VideoLightbox
            index={activeIndex}
            onClose={() => setActiveIndex(null)}
            onNavigate={setActiveIndex}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
