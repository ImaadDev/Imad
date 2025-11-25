import React from 'react';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import Hero3D from '@/components/Home/Hero3D';
import ZoomText from '@/components/Home/ZoomText';
import About from '@/components/Home/About';
import Projects from '@/components/Home/Projects';
import Experience from '@/components/Home/Experience';
import Testimonials from '@/components/Home/Testimonials';
import Contact from '@/components/Home/Contact';
import Skills from '@/components/Home/Skills';
import Services from '@/components/Home/Services';

export async function generateMetadata() {
  const title = "عماد حسين خان | مطور ومصمم ويب كامل الوظائف";
  const description = "اكتشف محفظة عماد حسين خان، مطور ومصمم ويب كامل الوظائف الماهر في المملكة العربية السعودية. متخصص في React.js، Node.js، MERN Stack، والتقنيات الحديثة للحلول الرقمية المبتكرة.";
  const keywords = [
    'عماد حسين خان',
    'مطور ويب كامل الوظائف المملكة العربية السعودية',
    'مطور React.js الرياض',
    'خبير Node.js السعودية',
    'مطور MERN Stack',
    'تطوير تطبيقات الويب السعودية',
    'مطور واجهة أمامية وخلفية',
    'مصمم مواقع متجاوبة',
    'مصمم ومطور UI/UX',
    'مطور ويب مستقل السعودية',
    'حلول ويب مخصصة السعودية',
    'مطور التجارة الإلكترونية',
    'خبير تطوير API',
    'مطور JavaScript',
    'محفظة Next.js',
    'تكامل Sanity CMS',
    'مطور ويب ثلاثي الأبعاد Three.js',
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'عماد حسين خان',
    jobTitle: 'مطور ومصمم ويب كامل الوظائف',
    url: 'https://www.imadkhan.online',
    image: 'https://www.imadkhan.online/logo.png',
    sameAs: [
      'https://www.linkedin.com/in/imad-hussain-khan-76388b305',
      'https://github.com/ImaadDev',
      'https://www.instagram.com/imaddeveloper',
      'https://www.facebook.com/imad.hussain.khan.2025',
    ],
    email: 'kimad1728@gmail.com',
    knowsLanguage: ['Arabic'],
  };

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'عماد حسين خان' }],
    robots: 'index, follow',
    alternates: {
      canonical: 'https://www.imadkhan.online/ar',
      languages: {
        'en': 'https://www.imadkhan.online/en',
        'ar': 'https://www.imadkhan.online/ar',
      },
    },
    openGraph: {
      title,
      description,
      url: 'https://www.imadkhan.online/ar',
      siteName: 'موقع محفظة عماد حسين خان',
      images: [
        {
          url: 'https://www.imadkhan.online/logo.png',
          width: 1200,
          height: 630,
          alt: 'عماد حسين خان - مطور ومصمم ويب كامل الوظائف',
          type: 'image/png'
        }
      ],
      locale: 'ar_SA',
      type: 'website',
      profile: {
        firstName: 'عماد',
        lastName: 'حسين خان',
        username: 'ImaadDev',
      },
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.imadkhan.online/logo.png'],
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/logo.png',
    },
    manifest: '/manifest.json',
    other: {
      'theme-color': '#000000',
      'color-scheme': 'dark light',
      'msapplication-TileColor': '#000000',
      'application-name': 'موقع محفظة عماد حسين خان',
    },
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const Page = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'عماد حسين خان',
          jobTitle: 'مطور ومصمم ويب كامل الوظائف',
          url: 'https://www.imadkhan.online',
          image: 'https://www.imadkhan.online/logo.png',
          sameAs: [
            'https://www.linkedin.com/in/imad-hussain-khan-76388b305',
            'https://github.com/ImaadDev',
            'https://www.instagram.com/imaddeveloper',
            'https://www.facebook.com/imad.hussain.khan.2025',
          ],
          email: 'kimad1728@gmail.com',
          knowsLanguage: ['Arabic'],
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'المملكة العربية السعودية'
          },
          hasOccupation: {
            '@type': 'Occupation',
            name: 'مطور ويب كامل الوظائف',
            occupationLocation: {
              '@type': 'Country',
              name: 'المملكة العربية السعودية'
            }
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'موقع محفظة عماد حسين خان',
          url: 'https://www.imadkhan.online',
          description: 'موقع المحفظة الخاص بعماد حسين خان، مطور ومصمم ويب كامل الوظائف في المملكة العربية السعودية.',
          author: {
            '@type': 'Person',
            name: 'عماد حسين خان'
          },
          inLanguage: 'ar'
        }
      ]) }}
    />
    <Hero3D />
    <ZoomText />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Testimonials />
    <Services />
    <Contact />
  </>
);

export default Page;
