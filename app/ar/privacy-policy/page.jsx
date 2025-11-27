import PrivacyPolicy from '@/components/PrivacyPolicy/PrivacyPolicy'
import React from 'react'

export const metadata = {
  title: "سياسة الخصوصية - محفظة عماد خان",
  description: "تعرف على كيفية جمع محفظة عماد خان واستخدام وحماية معلوماتك الشخصية. تغطي سياسة الخصوصية لدينا جمع البيانات والملفات المؤقتة وGoogle AdSense وحقوقك.",
  keywords: "سياسة الخصوصية, حماية البيانات, ملفات تعريف الارتباط, المعلومات الشخصية, Google AdSense, عماد خان, المحفظة, تطوير الويب",
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
    canonical: '/ar/privacy-policy',
    languages: {
      'en': '/en/privacy-policy',
      'ar': '/ar/privacy-policy',
    },
  },
  openGraph: {
    title: "سياسة الخصوصية - محفظة عماد خان",
    description: "تعرف على كيفية جمع محفظة عماد خان واستخدام وحماية معلوماتك الشخصية. تغطي سياسة الخصوصية لدينا جمع البيانات والملفات المؤقتة وGoogle AdSense وحقوقك.",
    url: "https://www.imadkhan.online/ar/privacy-policy",
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
    title: "سياسة الخصوصية - محفظة عماد خان",
    description: "تعرف على كيفية جمع محفظة عماد خان واستخدام وحماية معلوماتك الشخصية.",
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