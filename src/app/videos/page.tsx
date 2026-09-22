import type { Metadata } from "next"
import { VideosContent } from "@/components/videos-content"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Films — ${siteConfig.name}`,
  description: `Cinematic short films and highlight reels from ${siteConfig.name}.`,
}

export default function VideosPage() {
  return <VideosContent />
}
