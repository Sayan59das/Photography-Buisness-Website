import * as React from "react"
import Link from "next/link"
import { Camera, Gem, Sparkles, CheckCircle2 } from "lucide-react"

const services = [
  {
    id: "wedding",
    title: "Wedding Collection",
    price: "Starting at ₹1,50,000",
    description: "Comprehensive coverage for your special day, capturing every fleeting moment with cinematic precision.",
    icon: Camera,
    features: [
      "10 Hours of continuous coverage",
      "Lead Photographer + Second Shooter",
      "Engagement Session included",
      "Minimum 800 fully edited high-res images",
      "Online private gallery for 1 year",
      "12x12 Custom Heirloom Album (40 pages)",
      "Print release for personal use"
    ]
  },
  {
    id: "pre-wedding",
    title: "Pre-Wedding & Engagement",
    price: "Starting at ₹50,000",
    description: "An intimate, creative session to tell your love story before you say 'I do'.",
    icon: Gem,
    features: [
      "4 Hours on location",
      "Multiple outfit changes",
      "Creative direction and styling advice",
      "Minimum 100 fully edited high-res images",
      "Cinematic 2-minute short film",
      "Online private gallery"
    ]
  },
  {
    id: "commercial",
    title: "Commercial & Editorials",
    price: "Custom Quote",
    description: "Elevate your brand with striking, high-end visual content tailored for magazines and digital campaigns.",
    icon: Sparkles,
    features: [
      "Full or half-day rates available",
      "Art direction and conceptualization",
      "Studio or location shoots",
      "Commercial usage rights",
      "High-end retouching",
      "Fast turnaround times"
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <section className="py-20 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
          Investment
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          Services & <span className="italic">Pricing</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We believe in transparent pricing and tailored experiences. Explore our core collections below, or contact us for a custom quote.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 lg:px-8 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="glass p-8 md:p-10 rounded-3xl flex flex-col h-full gradient-border">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-heading text-3xl font-bold mb-3">{service.title}</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-8">
                <p className="text-xl font-bold text-primary">{service.price}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="w-full text-center py-4 rounded-full font-medium border border-border hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                Inquire Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Banner */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="font-heading text-4xl font-bold mb-6">Have Questions?</h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Every story is unique, and your photography collection should be too. We are happy to customize our services to perfectly fit your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-foreground text-background rounded-full font-medium hover:bg-primary transition-colors"
          >
            Let's Talk
          </Link>
        </div>
      </section>
    </div>
  )
}
