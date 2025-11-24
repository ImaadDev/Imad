import { client } from '@/sanity/lib/client';

export async function GET() {
  try {
    const blogs = await client.fetch(`
      *[_type == "blog"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        description,
        categories,
        publishedAt,
        readTime,
        featured,
        "mainImage": images[0]{
          asset->{
            url
          },
          alt
        }
      }
    `);

    return Response.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return Response.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}