import About from '@/components/About/About'
import React from 'react'

export const metadata = {
  title: "عن عماد خان | مهندس برمجيات متكامل",
  description: "اكتشف رحلة عماد خان كمهندس برمجيات متكامل. أكثر من 4 سنوات من الخبرة في بناء تطبيقات ويب قابلة للتوسع باستخدام MERN، Next.js، والتقنيات الحديثة. مقره في الرياض، السعودية.",
  keywords: ["عماد خان", "مطور ويب متكامل", "MERN Stack", "Next.js", "React", "Node.js", "MongoDB", "مطور ويب", "الرياض", "السعودية"],
  openGraph: {
    title: "عن عماد خان | مهندس برمجيات متكامل",
    description: "تعرف على عماد خان، مهندس برمجيات متكامل شغوف بإنشاء أنظمة رقمية باستخدام التقنيات المتطورة.",
    url: "https://imadkhan.dev/ar/about",
    siteName: "محفظة عماد خان",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "عماد خان - مهندس برمجيات",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "عن عماد خان | مهندس برمجيات متكامل",
    description: "اكتشف خبرة عماد خان في التطوير المتكامل والتقنيات الحديثة للويب.",
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