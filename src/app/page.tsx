import { Hero } from "@/components/sections/hero"
import { FeaturedWork } from "@/components/sections/featured-work"
import { AboutTeaser } from "@/components/sections/about-teaser"
import { ServicesTeaser } from "@/components/sections/services-teaser"
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel"
import { InstagramGrid } from "@/components/sections/instagram-grid"
import { CtaBanner } from "@/components/sections/cta-banner"

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <AboutTeaser />
      <ServicesTeaser />
      <TestimonialCarousel />
      <InstagramGrid />
      <CtaBanner />
    </>
  )
}
