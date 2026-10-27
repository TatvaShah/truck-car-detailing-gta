import type { SiteConfig } from "@/lib/types";

const IG = "https://www.instagram.com/truckcardetailinggta/";

export const site: SiteConfig = {
  name: "Detail Your Truck or Car",
  tagline: "Mobile truck and car detailing anywhere in the GTA, from express truck washes to steam cleaning and seat shampoos.",
  category: "Mobile truck and car detailing",
  schemaType: "LocalBusiness",
  area: "Greater Toronto Area, ON",
  siteUrl: "https://truck-car-detailing-gta.vercel.app",

  theme: {
    preset: "barber-bold",
    colors: { accent: "#d62839" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Sunny K Truck and Car Detailing",
    headline: "Trucks and cars, cleaned inside and out",
    subhead: "Express truck washing, interior detailing, steam cleaning, and carpet shampoo, with service available anywhere in the GTA. Call Sunny or send a DM for a quote.",
    images: [
      { src: "/images/post-1.jpg", alt: "Car being detailed outside" },
      { src: "/images/post-5.jpg", alt: "Truck floor mat being shampooed" },
      { src: "/images/post-2.jpg", alt: "Clean car interior after detailing" },
    ],
    primaryCta: { label: "Call 647-529-7246", href: "tel:6475297246" },
    secondaryCta: { label: "DM on Instagram", href: IG },
  },

  highlights: ["Service anywhere in the GTA", "Trucks, trailers and cars", "Steam cleaning and shampoo", "Call or DM for a quote"],

  about: {
    title: "Detailing done by Sunny K",
    body: [
      "Detail Your Truck or Car is Sunny K's mobile detailing service for trucks and cars across the GTA. From dump trucks, day cabs and trailers to everyday cars and Jeeps, every vehicle gets a careful clean.",
      "Services include polish, steam cleaning, shampooing seats and carpets, leather conditioning, interior cleaning, and salt stain removal.",
    ],
    image: { src: "/images/post-4.jpg", alt: "Carpet being cleaned during interior detailing" },
  },

  menu: {
    label: "Services",
    title: "Detailing services",
    intro: "Every job is quoted for your vehicle. Call or send a DM with the make, model, and what it needs.",
    variant: "list",
    showPrices: false,
    priceNote: "Call or DM for a quote on your truck or car.",
    groups: [
      {
        title: "Trucks",
        items: [
          { name: "Express truck washing", description: "Trucks, trailers, and heavy equipment." },
          { name: "Interior detailing", description: "Cab interiors cleaned top to bottom." },
        ],
      },
      {
        title: "Deep cleaning",
        items: [
          { name: "Steam cleaning" },
          { name: "Carpet and seat shampoo", description: "Lifting dirt and stains from carpets and seats." },
          { name: "Salt stain removal" },
          { name: "Polish and leather conditioning" },
        ],
      },
      {
        title: "Cars",
        items: [{ name: "Car exterior and interior detailing" }],
      },
    ],
  },

  gallery: {
    title: "Recent work",
    items: [
      { src: "/images/post-1.jpg", width: 480, height: 600, alt: "Car detailing outside", caption: "Exterior detailing", href: "https://www.instagram.com/truckcardetailinggta/reel/C-YZQshR2nF/" },
      { src: "/images/post-4.jpg", width: 640, height: 640, alt: "Shampooing truck carpets", caption: "Shampooing carpets and seats", href: "https://www.instagram.com/truckcardetailinggta/reel/Ca-tTCkjh8v/" },
      { src: "/images/post-5.jpg", width: 640, height: 640, alt: "Removing stains from a floor mat", caption: "Removing dirt and stains", href: "https://www.instagram.com/truckcardetailinggta/reel/Ca8FfvWD-Zl/" },
      { src: "/images/post-2.jpg", width: 360, height: 640, alt: "Car interior after detailing", caption: "Interior detailing", href: "https://www.instagram.com/truckcardetailinggta/reel/Cvu_3COpr7s/" },
      { src: "/images/post-6.jpg", width: 200, height: 200, alt: "Express truck washing and detailing", caption: "Express truck washing" },
      { src: "/images/post-7.jpg", width: 200, height: 200, alt: "Truck and heavy equipment wash", caption: "Truck and heavy equipment wash" },
      { src: "/images/post-8.jpg", width: 200, height: 200, alt: "Express car detailing", caption: "Express car detailing" },
    ],
  },

  instagram: {
    handle: "truckcardetailinggta",
  },

  order: {
    label: "How to book",
    title: "Book in a quick call or DM",
    intro: "Call or text Sunny at 647-529-7246, or send a DM on Instagram. Tap the button to copy a starter message.",
    dmMessage: "Hi Sunny! I would like a quote for detailing.\nVehicle (truck, trailer or car):\nService needed:\nLocation in the GTA:\nPreferred date:",
    links: [{ label: "Call 647-529-7246", href: "tel:6475297246" }],
  },

  reviews: { items: [] },

  faq: [
    { q: "Where do you work?", a: "Service is available anywhere in the GTA." },
    { q: "What vehicles do you detail?", a: "Trucks, trailers, heavy equipment, and cars, inside and out." },
    { q: "How much does it cost?", a: "Every job is quoted for your vehicle. Call 647-529-7246 or send a DM for a price." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Anywhere in the GTA, Ontario",
    phone: "647-529-7246",
  },

  seo: {
    title: "Detail Your Truck or Car | Mobile truck and car detailing in the GTA",
    description: "Mobile truck and car detailing anywhere in the GTA: express truck washing, steam cleaning, carpet shampoo, salt stain removal. Call 647-529-7246 for a quote.",
    keywords: ["truck detailing GTA", "mobile car detailing Toronto", "truck washing GTA", "carpet shampoo car GTA"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
