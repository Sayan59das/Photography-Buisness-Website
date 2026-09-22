"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Clock, Heart, Globe2 } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { siteConfig } from "@/lib/site-config"
import { BokehField } from "@/components/bokeh-field"
import { InstagramIcon, YoutubeIcon, FacebookIcon } from "@/components/icons/social-icons"

const socialLinks = [
  { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: YoutubeIcon, href: siteConfig.social.youtube, label: "YouTube" },
  { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
]

const trustBadges = [
  { icon: Clock, label: "Replies within 48 hours" },
  { icon: Heart, label: "500+ Happy Couples" },
  { icon: Globe2, label: "Available Worldwide" },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
}

export function ContactContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative overflow-hidden py-24 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <BokehField count={10} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
            Inquiries
          </p>
          <h1 className="font-heading text-h1 font-bold text-balance mb-6">
            Let&rsquo;s <span className="italic text-primary">Connect</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            We take on a limited number of commissions each year to ensure every client receives our full creative dedication.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {trustBadges.map((badge) => (
              <span
                key={badge.label}
                className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground bg-muted/60 border border-border/60 rounded-full px-4 py-2"
              >
                <badge.icon className="h-3.5 w-3.5 text-primary" />
                {badge.label}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="px-6 lg:px-8 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-3xl p-8 md:p-12 gradient-border relative"
          >
            <h2 className="font-heading text-3xl font-bold mb-8">Tell us about your day</h2>
            <ContactForm />
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center space-y-12"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6">Studio Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                While we are based in Mumbai, our passports are always ready. We regularly travel worldwide for destination weddings and commercial editorials.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <MapPin className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-300" />
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

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Mail className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-300" />
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

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Phone className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-300" />
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
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white hover:shadow-[0_0_20px_rgba(201,162,75,0.25)] transition-all duration-300"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
