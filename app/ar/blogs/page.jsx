import React from 'react';
import { client } from '@/sanity/lib/client';
import BlogsHero from '@/components/Blogs/Hero';
import Blogs from '@/components/Blogs/Blogs';

export async function generateMetadata() {
  const title = "المدونة التقنية | عماد حسين خان - رؤى تطوير الويب";
  const description = "استكشف المقالات التقنية المفصلة والدروس والرؤى حول تطوير الويب وReact وNode.js والممارسات البرمجية الحديثة من عماد حسين خان.";

  return {
    title,
    description,
    keywords: [
      'المدونة التقنية',
      'مقالات تطوير الويب',
      'دروس React',
      'دليل Node.js',
      'رؤى البرمجة',
      'تطوير كامل الوظائف',
      'أفضل ممارسات JavaScript',
      'دروس تقنية',
      'مقالات البرمجة',
      'مدونة تطوير البرمجيات'
    ],
    authors: [{ name: 'عماد حسين خان' }],
    robots: 'index, follow',
    alternates: {
      canonical: 'https://www.imadkhan.online/ar/blogs',
      languages: {
        'en': 'https://www.imadkhan.online/en/blogs',
        'ar': 'https://www.imadkhan.online/ar/blogs',
      },
    },
    openGraph: {
      title,
      description,
      url: 'https://www.imadkhan.online/ar/blogs',
      siteName: 'موقع محفظة عماد حسين خان',
      images: [{ url: 'https://www.imadkhan.online/logo.png', width: 1200, height: 630, alt: 'المدونة التقنية' }],
      locale: 'ar_SA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.imadkhan.online/logo.png'],
    },
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const BlogPage = async () => {
  const blogs = await client.fetch(`
    *[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      description,
      categories,
      images[]{
        asset->{
          url,
          _id,
          metadata {
            dimensions
          }
        }
      },
      publishedAt,
      readTime,
      featured
    }
  `);

  return (
    <>
      <BlogsHero />
      <Blogs blogs={blogs} />
    </>
  );
};

export default BlogPage;