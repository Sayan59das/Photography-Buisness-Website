"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useIsClient } from "@/lib/use-is-client"

function generateBokeh(count: number) {
  return Array.from({ length: count }).map(() => ({
    size: Math.random() * 70 + 25,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.08 + 0.02,
    riseBy: Math.random() * 50 + 20,
    duration: Math.random() * 7 + 5,
    delay: Math.random() * 4,
  }))
}

/** Ambient gold bokeh particles for section backdrops. Decorative and non-interactive; renders only after hydration so random values never mismatch server/client markup. */
export function BokehField({ count = 14, className = "" }: { count?: number; className?: string }) {
  const isClient = useIsClient()
  const [bokeh] = React.useState(() => generateBokeh(count))

  if (!isClient) return null

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
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
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
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
