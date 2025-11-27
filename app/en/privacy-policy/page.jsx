import PrivacyPolicy from '@/components/PrivacyPolicy/PrivacyPolicy'
import React from 'react'

export const metadata = {
  title: "Privacy Policy - Imad Khan Portfolio",
  description: "Learn how Imad Khan Portfolio collects, uses, and protects your personal information. Our privacy policy covers data collection, cookies, Google AdSense, and your rights.",
  keywords: "privacy policy, data protection, cookies, personal information, Google AdSense, Imad Khan, portfolio, web development",
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
    canonical: '/en/privacy-policy',
    languages: {
      'en': '/en/privacy-policy',
      'ar': '/ar/privacy-policy',
    },
  },
  openGraph: {
    title: "Privacy Policy - Imad Khan Portfolio",
    description: "Learn how Imad Khan Portfolio collects, uses, and protects your personal information. Our privacy policy covers data collection, cookies, Google AdSense, and your rights.",
    url: "https://www.imadkhan.online/en/privacy-policy",
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
    title: "Privacy Policy - Imad Khan Portfolio",
    description: "Learn how Imad Khan Portfolio collects, uses, and protects your personal information.",
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

const PrivacyPolicyPage = () => {
  return (
    <>
    <PrivacyPolicy/>
    </>
  )
}

export default PrivacyPolicyPage