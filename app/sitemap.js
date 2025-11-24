export default function sitemap() {
    const baseUrl = 'https://www.imadkhan.online';

    // Define your routes here
    const routes = [
        '', // home
        '/blogs', // blogs page
        // Add other static routes if they exist, e.g. '/about', '/projects'
        // But based on the file structure, it seems like a single page app with sections.
        // If there are other pages, add them here.
    ];

    // Blog slugs for dynamic routes
    const blogSlugs = [
        'nextjs-14-complete-guide',
        'building-secure-apis-nodejs',
        'optimizing-react-performance',
        'docker-for-developers',
        'web-application-security',
        'typescript-in-react'
    ];

    const languages = ['en', 'ar'];

    const sitemapEntries = routes.flatMap(route =>
        languages.map(lang => ({
            url: `${baseUrl}/${lang}${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: route === '' ? 1 : 0.8,
        }))
    );

    // Add blog detail pages
    const blogEntries = blogSlugs.flatMap(slug =>
        languages.map(lang => ({
            url: `${baseUrl}/${lang}/blogs/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        }))
    );

    return [...sitemapEntries, ...blogEntries];

    return sitemapEntries;
}
