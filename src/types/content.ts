export interface HeroContent {
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  imageAlt: string;
  buttons: { text: string; link: string; style: "primary" | "secondary" }[];
}

export interface AboutContent {
  sectionLabel: string;
  title: string[];
  image: string;
  imageAlt: string;
  paragraphs: string[];
  ctaText: string;
  ctaLink: string;
}

export interface VideosContent {
  sectionLabel: string;
  title: string[];
  videos: { id: string; title: string }[];
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryContent {
  images: GalleryImage[];
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  fullText?: string;
  thumbnail: string;
  images?: string[];
  youtube?: string;
  video?: string;
  type: "nastop" | "novica";
  upcoming?: boolean;
}

export interface NewsContent {
  items: NewsItem[];
}

export interface PonudbaContent {
  sectionLabel: string;
  title: string[];
  paragraphs: string[];
  image: string;
  imageAlt: string;
  ctaText: string;
  ctaLink: string;
}

export interface ContactContent {
  sectionLabel: string;
  title: string[];
  subtitle: string;
  email: string;
  phone?: string;
  socialLinks: { name: string; url: string }[];
}
