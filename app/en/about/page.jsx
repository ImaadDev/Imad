import About from '@/components/About/About'
import React from 'react'

export const metadata = {
  title: "About Imad Khan | Full Stack Engineer & MERN Developer",
  description: "Discover Imad Khan's journey as a full stack engineer. 4+ years of experience building scalable web applications with MERN stack, Next.js, and modern technologies. Based in Riyadh, KSA.",
  keywords: ["Imad Khan", "Full Stack Developer", "MERN Stack", "Next.js", "React", "Node.js", "MongoDB", "Web Developer", "Riyadh", "Saudi Arabia"],
  openGraph: {
    title: "About Imad Khan | Full Stack Engineer",
    description: "Meet Imad Khan, a passionate full stack engineer creating digital ecosystems with cutting-edge technologies.",
    url: "https://imadkhan.dev/en/about",
    siteName: "Imad Khan Portfolio",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Imad Khan - Full Stack Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Imad Khan | Full Stack Engineer",
    description: "Discover Imad Khan's expertise in full stack development and modern web technologies.",
    images: ["/og-about.jpg"],
  },
  alternates: {
    canonical: "https://imadkhan.dev/en/about",
    languages: {
      'en': 'https://imadkhan.dev/en/about',
      'ar': 'https://imadkhan.dev/ar/about',
    },
  },
};

const AboutusPage = () => {
  return (
    <>
    <About/>
    </>
  )
}

export default AboutusPage