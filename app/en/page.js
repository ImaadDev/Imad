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
  const title = "Imad Hussain Khan | Full-Stack Web Developer";
  const description = "Discover the portfolio of Imad Hussain Khan, a skilled Full-Stack Web Developer & Designer in Saudi Arabia. Specializing in React.js, Node.js, MERN Stack, and modern web technologies for innovative digital solutions.";
  const keywords = [
    'Imad Hussain Khan',
    'Full Stack Web Developer Saudi Arabia',
    'React.js Developer Riyadh',
    'Node.js Expert KSA',
    'MERN Stack Developer',
    'Web Application Development Saudi Arabia',
    'Frontend Backend Developer',
    'Responsive Website Designer',
    'UI/UX Designer Developer',
    'Freelance Web Developer Saudi Arabia',
    'Custom Web Solutions KSA',
    'Portfolio Website Developer',
    'E-commerce Developer Saudi Arabia',
    'API Development Expert',
    'JavaScript Developer',
    'Next.js Portfolio',
    'Sanity CMS Integration',
    'Three.js 3D Web Developer',
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Imad Hussain Khan',
    jobTitle: 'Full-Stack Web Developer & Designer',
    url: 'https://www.imadkhan.online',
    image: 'https://www.imadkhan.online/logo.png',
    sameAs: [
      'https://www.linkedin.com/in/imad-hussain-khan-76388b305',
      'https://github.com/ImaadDev',
      'https://www.instagram.com/imaddeveloper',
      'https://www.facebook.com/imad.hussain.khan.2025',
    ],
    email: 'kimad1728@gmail.com',
    knowsLanguage: ['English'],
  };

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'Imad Hussain Khan' }],
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1',
    alternates: {
      canonical: 'https://www.imadkhan.online/en',
      languages: {
        'en': 'https://www.imadkhan.online/en',
        'ar': 'https://www.imadkhan.online/ar',
      },
    },
    openGraph: {
      title,
      description,
      url: 'https://www.imadkhan.online/en',
      siteName: 'Imad Hussain Khan Portfolio',
      images: [
        {
          url: 'https://www.imadkhan.online/logo.png',
          width: 1200,
          height: 630,
          alt: 'Imad Hussain Khan - Full-Stack Web Developer Portfolio',
          type: 'image/png'
        }
      ],
      locale: 'en_US',
      type: 'website',
      profile: {
        firstName: 'Imad',
        lastName: 'Hussain Khan',
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
      'application-name': 'Imad Hussain Khan Portfolio',
    },
  };
}

const Page = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Imad Hussain Khan',
          jobTitle: 'Full-Stack Web Developer & Designer',
          url: 'https://www.imadkhan.online',
          image: 'https://www.imadkhan.online/logo.png',
          sameAs: [
            'https://www.linkedin.com/in/imad-hussain-khan-76388b305',
            'https://github.com/ImaadDev',
            'https://www.instagram.com/imaddeveloper',
            'https://www.facebook.com/imad.hussain.khan.2025',
          ],
          email: 'kimad1728@gmail.com',
          knowsLanguage: ['English'],
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'Saudi Arabia'
          },
          hasOccupation: {
            '@type': 'Occupation',
            name: 'Full-Stack Web Developer',
            occupationLocation: {
              '@type': 'Country',
              name: 'Saudi Arabia'
            }
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Imad Hussain Khan Portfolio',
          url: 'https://www.imadkhan.online',
          description: 'Portfolio website of Imad Hussain Khan, Full-Stack Web Developer & Designer based in Saudi Arabia.',
          author: {
            '@type': 'Person',
            name: 'Imad Hussain Khan'
          },
          inLanguage: 'en'
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
