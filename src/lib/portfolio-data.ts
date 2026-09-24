export type PortfolioShoot = {
  slug: string
  title: string
  category: string
  date: string
  location: string
  description: string
  coverImage: string
  gallery: string[]
  colSpan: string
}

function galleryPaths(slug: string, count: number) {
  return Array.from({ length: count }, (_, i) => `/images/portfolio/${slug}/${String(i + 1).padStart(2, "0")}.jpg`)
}

export const portfolioShoots: PortfolioShoot[] = [
  {
    slug: "a-portrait-in-red",
    title: "A Portrait in Red",
    category: "Portraits",
    date: "2024",
    location: "India",
    description:
      "A bride at rest before the ceremony, wrapped in red silk and golden light.",
    coverImage: "/images/portfolio/a-portrait-in-red/01.jpg",
    gallery: galleryPaths("a-portrait-in-red", 7),
    colSpan: "md:col-span-2 md:row-span-2",
  },
  {
    slug: "vows-beneath-the-blooms",
    title: "Vows Beneath the Blooms",
    category: "Wedding",
    date: "2024",
    location: "India",
    description:
      "An intimate mandap ceremony framed by cascading florals and quiet devotion.",
    coverImage: "/images/portfolio/vows-beneath-the-blooms/01.jpg",
    gallery: galleryPaths("vows-beneath-the-blooms", 18),
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    slug: "wandering-together",
    title: "Wandering Together",
    category: "Pre-Wedding",
    date: "2024",
    location: "Rajasthan, India",
    description:
      "Two people, hand in hand, exploring sun-washed corridors far from home.",
    coverImage: "/images/portfolio/wandering-together/01.jpg",
    gallery: galleryPaths("wandering-together", 14),
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    slug: "roots-and-reverence",
    title: "Roots and Reverence",
    category: "Pre-Wedding",
    date: "2024",
    location: "Rajasthan, India",
    description:
      "A pre-wedding story told against centuries-old mud architecture and desert light.",
    coverImage: "/images/portfolio/roots-and-reverence/06.jpg",
    gallery: galleryPaths("roots-and-reverence", 27),
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    slug: "quiet-moments-desert-light",
    title: "Quiet Moments, Desert Light",
    category: "Pre-Wedding",
    date: "2024",
    location: "Rajasthan, India",
    description:
      "Soft silhouettes and stolen glances against the warm tones of the desert.",
    coverImage: "/images/portfolio/quiet-moments-desert-light/08.jpg",
    gallery: galleryPaths("quiet-moments-desert-light", 9),
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    slug: "at-the-palace-gate",
    title: "At the Palace Gate",
    category: "Pre-Wedding",
    date: "2024",
    location: "Rajasthan, India",
    description:
      "Festive colors and fortress walls set the stage for this regal pre-wedding session.",
    coverImage: "/images/portfolio/at-the-palace-gate/09.jpg",
    gallery: galleryPaths("at-the-palace-gate", 14),
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    slug: "marigolds-and-laughter",
    title: "Marigolds & Laughter",
    category: "Haldi",
    date: "2024",
    location: "India",
    description:
      "A joyful, marigold-draped celebration ahead of the big day.",
    coverImage: "/images/portfolio/marigolds-and-laughter/01.jpg",
    gallery: galleryPaths("marigolds-and-laughter", 9),
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    slug: "henna-and-gold",
    title: "Henna & Gold",
    category: "Portraits",
    date: "2024",
    location: "India",
    description:
      "Intricate henna, warm jewel tones, and the quiet anticipation before the vows.",
    coverImage: "/images/portfolio/henna-and-gold/01.jpg",
    gallery: galleryPaths("henna-and-gold", 12),
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    slug: "sealed-with-joy",
    title: "Sealed with Joy",
    category: "Ring-Ceremony",
    date: "2024",
    location: "India",
    description:
      "A candid, laughter-filled moment shared between two people newly promised.",
    coverImage: "/images/portfolio/sealed-with-joy/01.jpg",
    gallery: galleryPaths("sealed-with-joy", 3),
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    slug: "a-getaway-romance",
    title: "A Day to Remember",
    category: "Wedding",
    date: "2024",
    location: "India",
    description:
      "From sunlit garden portraits to a candlelit mandap — a full day of celebration.",
    coverImage: "/images/portfolio/a-getaway-romance/13.jpg",
    gallery: galleryPaths("a-getaway-romance", 27),
    colSpan: "md:col-span-2 md:row-span-1",
  },
]

export function getPortfolioShoot(slug: string) {
  return portfolioShoots.find((shoot) => shoot.slug === slug)
}
