import React from 'react';
import { client } from '@/sanity/lib/client';
import BlogsHero from '@/components/Blogs/Hero';
import Blogs from '@/components/Blogs/Blogs';

export async function generateMetadata() {
  const title = "Technical Blog | Imad Hussain Khan - Web Development Insights";
  const description = "Explore in-depth technical articles, tutorials, and insights on web development, React, Node.js, and modern programming practices by Imad Hussain Khan.";

  return {
    title,
    description,
    keywords: [
      'Technical Blog',
      'Web Development Articles',
      'React Tutorials',
      'Node.js Guides',
      'Programming Insights',
      'Full Stack Development',
      'JavaScript Best Practices',
      'Tech Tutorials',
      'Coding Articles',
      'Software Development Blog'
    ],
    authors: [{ name: 'Imad Hussain Khan' }],
    robots: 'index, follow',
    alternates: {
      canonical: 'https://www.imadkhan.online/en/blogs',
      languages: {
        'en': 'https://www.imadkhan.online/en/blogs',
        'ar': 'https://www.imadkhan.online/ar/blogs',
      },
    },
    openGraph: {
      title,
      description,
      url: 'https://www.imadkhan.online/en/blogs',
      siteName: 'Imad Hussain Khan Portfolio',
      images: [{ url: 'https://www.imadkhan.online/logo.png', width: 1200, height: 630, alt: 'Technical Blog' }],
      locale: 'en_US',
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

const BlogsPage = async () => {
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

export default BlogsPage;