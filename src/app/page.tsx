import { Hero } from "@/components/sections/hero"
import { FeaturedWork } from "@/components/sections/featured-work"
import { AboutTeaser } from "@/components/sections/about-teaser"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel"
import { CtaBanner } from "@/components/sections/cta-banner"

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <AboutTeaser />
      <WhyChooseUs />
      <TestimonialCarousel />
      <CtaBanner />
    </>
  )
}
