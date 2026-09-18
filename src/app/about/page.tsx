import type { Metadata } from "next"
import { AboutContent } from "@/components/about-content"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description: `Meet ${siteConfig.founder}, the artist behind ${siteConfig.name}, and the philosophy that shapes every shoot.`,
}

export default function AboutPage() {
  return <AboutContent />
}
