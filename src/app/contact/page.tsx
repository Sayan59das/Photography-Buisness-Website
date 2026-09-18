import * as React from "react"
import type { Metadata } from "next"
import { MapPin, Mail, Phone } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { siteConfig } from "@/lib/site-config"
import { InstagramIcon } from "@/components/icons/social-icons"

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name} to book your wedding, pre-wedding, or commercial shoot.`,
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <section className="py-20 md:py-24 px-6 lg:px-8 max-w-7xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
          Inquiries
        </p>
        <h1 className="font-heading text-h1 font-bold text-balance mb-6">
          Let&rsquo;s <span className="italic">Connect</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We take on a limited number of commissions each year to ensure every client receives our full creative dedication.
        </p>
      </section>

      <section className="px-6 lg:px-8 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Contact Form */}
          <div className="glass rounded-3xl p-8 md:p-12 gradient-border relative animate-in fade-in slide-in-from-left-6 duration-700">
            <h2 className="font-heading text-3xl font-bold mb-8">Tell us about your day</h2>
            <ContactForm />
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center space-y-12 animate-in fade-in slide-in-from-right-6 duration-700">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6">Studio Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                While we are based in Mumbai, our passports are always ready. We regularly travel worldwide for destination weddings and commercial editorials.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Studio Address</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {siteConfig.address.line1}
                      <br />
                      {siteConfig.address.line2}
                      <br />
                      (By Appointment Only)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-muted-foreground text-sm mt-1 hover:text-primary transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a
                      href={`tel:${siteConfig.phoneHref}`}
                      className="text-muted-foreground text-sm mt-1 hover:text-primary transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="font-heading text-xl font-bold mb-6">Follow Our Journey</h3>
              <div className="flex gap-4">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
