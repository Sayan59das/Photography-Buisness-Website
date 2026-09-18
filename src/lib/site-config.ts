// Single source of truth for brand + contact details used across the site
// (navbar, footer, metadata, structured data). Update the placeholders below
// with real business details before going live.
export const siteConfig = {
  name: "Shubham Photography",
  shortName: "Shubham",
  founder: "Shubham",
  tagline: "Cinematic Stories for Modern Romantics",
  description:
    "We capture the raw, authentic emotion of your most important days — wedding photography, pre-wedding shoots, editorial, and commercial work.",
  url: "https://shubhamphotography.com",
  email: "hello@shubhamphotography.com",
  phone: "+91 98765 43210",
  phoneHref: "+919876543210",
  address: {
    line1: "Bandra West",
    line2: "Mumbai, Maharashtra 400050",
    full: "Bandra West, Mumbai, Maharashtra 400050 (By Appointment Only)",
  },
  social: {
    instagram: "https://instagram.com/shubhamphotography",
    youtube: "https://youtube.com/@shubhamphotography",
    facebook: "https://facebook.com/shubhamphotography",
    instagramHandle: "@shubhamphotography",
  },
} as const
