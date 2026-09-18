"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { InstagramIcon, YoutubeIcon, FacebookIcon } from "@/components/icons/social-icons"

const socialLinks = [
  { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: YoutubeIcon, href: siteConfig.social.youtube, label: "YouTube" },
  { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
]

export function Footer() {
  return (
    <footer className="bg-[#0a0a0b] text-[#e8e4df] relative overflow-hidden">
      {/* Gold separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A24B]/30 to-transparent" />

      {/* Main footer */}
      <div className="container mx-auto px-6 lg:px-8 pt-20 pb-10">
        {/* Top section — Big headline + socials */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#C9A24B] mb-4">
              Get in Touch
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-balance text-white mb-4 leading-[1.1]">
              Let&rsquo;s Work{" "}
              <span className="italic text-[#C9A24B]">Together</span>
            </h2>
            <p className="text-[#888] leading-relaxed">
              Whether it&rsquo;s a grand wedding or an intimate portrait
              session, we&rsquo;d love to hear from you.
            </p>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-[#888] hover:text-white hover:border-[#C9A24B] hover:bg-[#C9A24B]/10 hover:shadow-[0_0_20px_rgba(201,162,75,0.15)] transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#222] mb-12" />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-heading font-bold text-2xl tracking-tight mb-6 inline-block text-white"
            >
              {siteConfig.shortName}
              <span className="text-[#C9A24B]"> Photography</span>
            </Link>
            <p className="text-[#777] text-sm leading-relaxed max-w-xs">
              Capturing authentic moments and cinematic stories for modern
              couples and visionary brands.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wider uppercase">
              Portfolio
            </h4>
            <ul className="space-y-3 text-sm text-[#888]">
              <li>
                <Link
                  href="/portfolio?category=wedding"
                  className="hover:text-[#C9A24B] transition-colors"
                >
                  Weddings
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio?category=pre-wedding"
                  className="hover:text-[#C9A24B] transition-colors"
                >
                  Pre-Weddings
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio?category=birthdays"
                  className="hover:text-[#C9A24B] transition-colors"
                >
                  Birthdays
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio?category=ring-ceremony"
                  className="hover:text-[#C9A24B] transition-colors"
                >
                  Ring Ceremony
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wider uppercase">
              Studio
            </h4>
            <ul className="space-y-3 text-sm text-[#888]">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#C9A24B] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#C9A24B] transition-colors"
                >
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="hover:text-[#C9A24B] transition-colors"
                >
                  Films
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#C9A24B] transition-colors"
                >
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wider uppercase">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-[#888]">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#C9A24B] shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#C9A24B] shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="hover:text-[#C9A24B] transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#C9A24B] shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#C9A24B] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-[#222] mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#555]">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-[#C9A24B] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#C9A24B] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
