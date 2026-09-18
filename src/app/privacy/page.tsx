import * as React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Privacy Policy — ${siteConfig.name}`,
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">

        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-balance mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: September 14, 2023</p>
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-a:text-primary max-w-none">
          <p>
            At {siteConfig.name}, we are committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by {siteConfig.name}.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information from you when you visit our website, register on our site, place an order, subscribe to our newsletter, respond to a survey, or fill out a form.
          </p>
          <ul>
            <li>Name / Username</li>
            <li>Email address</li>
            <li>Phone numbers</li>
            <li>Billing addresses</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            Any of the information we collect from you may be used in one of the following ways:
          </p>
          <ul>
            <li>To personalize your experience</li>
            <li>To improve our website</li>
            <li>To improve customer service</li>
            <li>To process transactions</li>
            <li>To send periodic emails regarding your inquiry or services</li>
          </ul>

          <h2>Image Usage & Copyright</h2>
          <p>
            As a photography studio, images captured during our sessions are copyrighted by {siteConfig.name}. We reserve the right to use these images for portfolio, marketing, and promotional purposes unless a non-disclosure agreement (NDA) or privacy clause is explicitly agreed upon prior to the shoot.
          </p>

          <h2>Contact Us</h2>
          <p>
            If there are any questions regarding this privacy policy, you may contact us using the information on our <Link href="/contact">Contact Page</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
