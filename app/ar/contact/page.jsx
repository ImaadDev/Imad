import React from 'react'
import Contact from '@/components/Contact/Contact'

export const metadata = {
  title: "اتصل بنا - محفظة عماد خان",
  description: "تواصل مع عماد خان، مهندس برمجيات متخصص في MERN و Next.js. اتصل بي لمشاريع تطوير الويب والتعاون أو الاستفسارات.",
  keywords: "اتصل بنا, عماد خان, مهندس برمجيات, MERN stack, Next.js, تطوير الويب, المحفظة, الرياض, السعودية",
  authors: [{ name: "عماد خان" }],
  creator: "عماد خان",
  publisher: "عماد خان",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.imadkhan.online'),
  alternates: {
    canonical: '/ar/contact',
    languages: {
      'en': '/en/contact',
      'ar': '/ar/contact',
    },
  },
  openGraph: {
    title: "اتصل بنا - محفظة عماد خان",
    description: "تواصل مع عماد خان، مهندس برمجيات متخصص في MERN و Next.js. اتصل بي لمشاريع تطوير الويب والتعاون أو الاستفسارات.",
    url: "https://www.imadkhan.online/ar/contact",
    siteName: "محفظة عماد خان",
    images: [
      {
        url: "https://www.imadkhan.online/logo.png",
        width: 1200,
        height: 630,
        alt: "محفظة عماد خان",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "اتصل بنا - محفظة عماد خان",
    description: "تواصل مع عماد خان، مهندس برمجيات متخصص في MERN و Next.js.",
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