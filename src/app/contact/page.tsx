import type { Metadata } from "next"
import { ContactContent } from "@/components/contact-content"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name} to book your wedding, pre-wedding, or commercial shoot.`,
}

export default function ContactPage() {
  return <ContactContent />
}
