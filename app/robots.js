export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/studio/', // Disallow Sanity studio if applicable
        },
        sitemap: 'https://www.imadkhan.online/sitemap.xml',
    }
}
