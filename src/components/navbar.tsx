"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Contact" },
]

function isLinkActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href)
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [hoveredHref, setHoveredHref] = React.useState<string | null>(null)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  const activeHref = navLinks.find((link) => isLinkActive(pathname, link.href))?.href
  const indicatorHref = hoveredHref ?? activeHref

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    setIsScrolled(latest > 50)
  })

  // Close the mobile menu on route change (adjusting state during render,
  // rather than in an effect, avoids an extra post-navigation render pass).
  const [prevPathname, setPrevPathname] = React.useState(pathname)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setIsOpen(false)
  }

  // Prevent scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 1 },
      }}
      initial={{ y: -24, opacity: 0 }}
      animate={hidden && !isOpen ? "hidden" : "visible"}
      transition={{ type: "spring", stiffness: 420, damping: 38, mass: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-[height,background-color,backdrop-filter,border-color,box-shadow] duration-500 ease-out ${
        isScrolled
          ? "h-16 bg-background/70 backdrop-blur-xl border-b border-border/30 shadow-sm"
          : "h-20 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "font-heading font-bold text-xl md:text-2xl tracking-tight z-50 group",
            !isScrolled ? "text-white" : "text-foreground"
          )}
        >
          <span className="transition-colors group-hover:text-primary">{siteConfig.shortName}</span>
          <span className="text-primary hidden sm:inline">
            {" "}
            Photography
          </span>
          <span className="text-primary sm:hidden inline-block transition-transform duration-300 ease-out group-hover:rotate-[20deg] group-hover:scale-125">
            .
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul
            className="flex items-center gap-8 text-sm font-medium"
            onMouseLeave={() => setHoveredHref(null)}
          >
            {navLinks.map((link) => {
              const active = isLinkActive(pathname, link.href)
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    onMouseEnter={() => setHoveredHref(link.href)}
                    onFocus={() => setHoveredHref(link.href)}
                    className={cn(
                      "relative block py-1 transition-colors duration-200",
                      active
                        ? (!isScrolled ? "text-white" : "text-foreground")
                        : (!isScrolled ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground")
                    )}
                  >
                    {link.label}
                  </Link>
                  {indicatorHref === link.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute left-0 right-0 -bottom-0.5 h-px bg-primary"
                      transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.5 }}
                    />
                  )}
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants(),
                "rounded-full font-semibold px-6 gold-shimmer border-0 text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.04] active:scale-95 transition-[box-shadow,transform] duration-200"
              )}
            >
              Book a Shoot
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className={cn("flex items-center gap-3 lg:hidden z-50", !isScrolled && "text-white [&_button]:text-white [&_button:hover]:bg-white/10")}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50"
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  transition={{ type: "spring", stiffness: 450, damping: 25 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  transition={{ type: "spring", stiffness: 450, damping: 25 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center"
            >
              {/* Decorative accent */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
              />

              <ul className="flex flex-col items-center gap-5 relative z-10">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      delay: i * 0.05,
                      type: "spring",
                      stiffness: 300,
                      damping: 26,
                    }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "inline-block font-heading text-3xl md:text-4xl font-bold transition-[color,transform] duration-150 active:scale-90 hover:text-primary",
                        isLinkActive(pathname, link.href) ? "text-primary" : "text-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  delay: navLinks.length * 0.05,
                  type: "spring",
                  stiffness: 300,
                  damping: 26,
                }}
                className="mt-10 relative z-10"
              >
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full px-10 text-lg h-14 gold-shimmer border-0 text-white font-semibold hover:scale-[1.04] active:scale-95 transition-transform duration-200"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Book a Shoot
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
