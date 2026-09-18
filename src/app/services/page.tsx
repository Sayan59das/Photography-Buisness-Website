import type { Metadata } from "next"
import { ServicesContent } from "@/components/services-content"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Services & Pricing — ${siteConfig.name}`,
  description: `Transparent pricing for wedding, pre-wedding, and commercial photography from ${siteConfig.name}.`,
}

export default function ServicesPage() {
  return <ServicesContent />
}
