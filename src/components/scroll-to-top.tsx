"use client"

import * as React from "react"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { useLenis } from "@/components/smooth-scroll"

export function ScrollToTop() {
  const [visible, setVisible] = React.useState(false)
  const { scrollY } = useScroll()
  const lenisRef = useLenis()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 600)
  })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={() =>
            lenisRef?.current
              ? lenisRef.current.scrollTo(0)
              : window.scrollTo({ top: 0, behavior: "smooth" })
          }
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
