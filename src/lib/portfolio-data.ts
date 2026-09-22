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

export const portfolioShoots: PortfolioShoot[] = [
  {
    slug: "aura-james",
    title: "Aura & James",
    category: "Wedding",
    date: "October 12, 2023",
    location: "Lake Como, Italy",
    description:
      "A breathtaking destination wedding on the shores of Lake Como. Aura and James exchanged vows under a floral archway as the sun set over the mountains, casting a golden glow across the water. The celebration continued into the night with a candlelit dinner in a historic villa.",
    coverImage:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
    ],
    colSpan: "md:col-span-2 md:row-span-2",
  },
  {
    slug: "golden-hour",
    title: "Golden Hour",
    category: "Pre-Wedding",
    date: "March 4, 2024",
    location: "Udaipur, Rajasthan",
    description:
      "An intimate pre-wedding shoot chasing the last light over the City of Lakes. From rooftop terraces to quiet lakeside ghats, every frame is soaked in the warm, cinematic glow that gives this shoot its name.",
    coverImage:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
    ],
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    slug: "sweet-sixteen",
    title: "Sweet Sixteen",
    category: "Birthdays",
    date: "June 21, 2024",
    location: "Alibaug, Maharashtra",
    description:
      "A beachside sweet sixteen celebration full of candid laughter, fairy lights, and confetti. We captured every unscripted moment — from the surprise entrance to the last dance under the stars.",
    coverImage:
      "https://images.unsplash.com/photo-1530103862676-de8892b12a15?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop",
    ],
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    slug: "estate-wedding",
    title: "Estate Wedding",
    category: "Wedding",
    date: "December 2, 2023",
    location: "Tuscany, Italy",
    description:
      "A grand estate wedding set against rolling vineyards and centuries-old stone architecture. Cinematic wide shots meet intimate portraiture in this celebration of old-world romance.",
    coverImage:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
    ],
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    slug: "ring-ceremony",
    title: "Diamond Exchange",
    category: "Ring-Ceremony",
    date: "February 14, 2024",
    location: "Bandra, Mumbai",
    description:
      "An elegant, intimate ring ceremony celebrating the first formal step of a lifelong journey. Soft studio light and quiet, unposed moments between families take center stage.",
    coverImage:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    ],
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    slug: "tuscany-dreams",
    title: "Tuscany Dreams",
    category: "Pre-Wedding",
    date: "September 18, 2024",
    location: "Val d'Orcia, Tuscany",
    description:
      "Rolling cypress-lined hills and endless golden fields set the stage for this dreamy pre-wedding shoot. A love letter to slow travel, soft light, and quiet Italian countryside.",
    coverImage:
      "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    ],
    colSpan: "md:col-span-2 md:row-span-1",
  },
]

export function getPortfolioShoot(slug: string) {
  return portfolioShoots.find((shoot) => shoot.slug === slug)
}
