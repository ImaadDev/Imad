import { client } from '@/sanity/lib/client';

export async function GET(request, { params }) {
  try {
    const { slug } = params;

    const blog = await client.fetch(`
      *[_type == "blog" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        description,
        categories,
        sections,
        images,
        conclusion,
        publishedAt,
        readTime,
        featured
      }
    `, { slug });

    if (!blog) {
      return Response.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Fetch related blogs from same categories
    const relatedBlogs = await client.fetch(`
      *[_type == "blog" && slug.current != $slug && count(categories[en in $categories[].en]) > 0] | order(publishedAt desc)[0...3] {
        _id,
        title,
        slug,
        description,
        categories,
        publishedAt,
        readTime
      }
    `, {
      slug,
      categories: blog.categories || []
    });

    return Response.json({
      blog,
      relatedBlogs
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return Response.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}