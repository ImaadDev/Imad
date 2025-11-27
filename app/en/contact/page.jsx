import Contact from '@/components/Contact/Contact'
import React from 'react'

export const metadata = {
  title: "Contact - Imad Khan Portfolio",
  description: "Get in touch with Imad Khan, a full-stack engineer specializing in MERN & Next.js. Contact me for web development projects, collaborations, or inquiries.",
  keywords: "contact, Imad Khan, full-stack engineer, MERN stack, Next.js, web development, portfolio, Riyadh, Saudi Arabia",
  authors: [{ name: "Imad Khan" }],
  creator: "Imad Khan",
  publisher: "Imad Khan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.imadkhan.online'),
  alternates: {
    canonical: '/en/contact',
    languages: {
      'en': '/en/contact',
      'ar': '/ar/contact',
    },
  },
  openGraph: {
    title: "Contact - Imad Khan Portfolio",
    description: "Get in touch with Imad Khan, a full-stack engineer specializing in MERN & Next.js. Contact me for web development projects, collaborations, or inquiries.",
    url: "https://www.imadkhan.online/en/contact",
    siteName: "Imad Khan Portfolio",
    images: [
      {
        url: "https://www.imadkhan.online/logo.png",
        width: 1200,
        height: 630,
        alt: "Imad Khan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Imad Khan Portfolio",
    description: "Get in touch with Imad Khan, a full-stack engineer specializing in MERN & Next.js.",
    images: ["https://www.imadkhan.online/logo.png"],
    creator: "@imadkhan",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const ContactPage = () => {
  return (
    <>
    <Contact/>
    </>
  )
}

export default ContactPage