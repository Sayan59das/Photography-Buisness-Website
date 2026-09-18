"use client"

import * as React from "react"
import Lenis from "lenis"

const LenisContext = React.createContext<React.RefObject<Lenis | null> | null>(null)

/** Returns the active Lenis instance, if any. Read `.current` at call time (e.g. in an event handler) — it is not reactive state. */
export function useLenis() {
  return React.useContext(LenisContext)
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = React.useRef<Lenis | null>(null)

  React.useEffect(() => {
    const instance = new Lenis({
      duration: 0.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })

    lenisRef.current = instance

    function raf(time: number) {
      instance.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      instance.destroy()
      lenisRef.current = null
    }
  }, [])

  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
}
