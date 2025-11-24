export default {
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Blog Title',
      type: 'object',
      description: 'Main title of the blog post',
      fields: [
        {
          name: 'en',
          title: 'English Title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'ar',
          title: 'Arabic Title',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier auto-generated from English title',
      options: {
        source: 'title.en',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Blog Description',
      type: 'object',
      description: 'Short description/excerpt of the blog post',
      fields: [
        {
          name: 'en',
          title: 'English Description',
          type: 'text',
          rows: 3,
          validation: Rule => Rule.required()
        },
        {
          name: 'ar',
          title: 'Arabic Description',
          type: 'text',
          rows: 3,
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      description: 'Blog categories/tags',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'en',
              title: 'English Category',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'ar',
              title: 'Arabic Category',
              type: 'string',
              validation: Rule => Rule.required()
            }
          ]
        }
      ],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'sections',
      title: 'Blog Sections',
      type: 'array',
      description: 'Main content sections of the blog post',
      of: [
        {
          type: 'object',
          title: 'Section',
          fields: [
            {
              name: 'title',
              title: 'Section Title',
              type: 'object',
              fields: [
                {
                  name: 'en',
                  title: 'English Title',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'ar',
                  title: 'Arabic Title',
                  type: 'string',
                  validation: Rule => Rule.required()
                }
              ],
              validation: Rule => Rule.required()
            },
            {
              name: 'content',
              title: 'Section Content',
              type: 'object',
              fields: [
                {
                  name: 'en',
                  title: 'English Content',
                  type: 'text',
                  rows: 8,
                  validation: Rule => Rule.required()
                },
                {
                  name: 'ar',
                  title: 'Arabic Content',
                  type: 'text',
                  rows: 8,
                  validation: Rule => Rule.required()
                }
              ],
              validation: Rule => Rule.required()
            }
          ],
          preview: {
            select: {
              title: 'title.en'
            },
            prepare(selection) {
              return {
                title: selection.title || 'Untitled Section'
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'images',
      title: 'Blog Images',
      type: 'array',
      description: 'Images used throughout the blog post',
      of: [
        {
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'object',
              fields: [
                {
                  name: 'en',
                  title: 'English Alt Text',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'ar',
                  title: 'Arabic Alt Text',
                  type: 'string',
                  validation: Rule => Rule.required()
                }
              ]
            },
            {
              name: 'caption',
              title: 'Caption (Optional)',
              type: 'object',
              fields: [
                {
                  name: 'en',
                  title: 'English Caption',
                  type: 'string'
                },
                {
                  name: 'ar',
                  title: 'Arabic Caption',
                  type: 'string'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'conclusion',
      title: 'Conclusion',
      type: 'object',
      description: 'Final thoughts and conclusion of the blog post',
      fields: [
        {
          name: 'en',
          title: 'English Conclusion',
          type: 'text',
          rows: 6,
          validation: Rule => Rule.required()
        },
        {
          name: 'ar',
          title: 'Arabic Conclusion',
          type: 'text',
          rows: 6,
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'datetime',
      description: 'Date when the blog post was published',
      initialValue: () => new Date().toISOString(),
      validation: Rule => Rule.required()
    },
    {
      name: 'readTime',
      title: 'Estimated Read Time (minutes)',
      type: 'number',
      description: 'Estimated time to read the article in minutes',
      validation: Rule => Rule.integer().min(1).max(60)
    },
    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Mark as featured blog post',
      initialValue: false
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      description: 'Additional SEO metadata',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Custom meta title (defaults to blog title if empty)'
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Custom meta description (defaults to blog description if empty)'
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'SEO keywords for the blog post'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'publishedAt',
      media: 'images.0'
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || 'Untitled Blog',
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'No date',
        media: media
      };
    }
  },
  orderings: [
    {
      title: 'Publication Date (Newest First)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }]
    },
    {
      title: 'Publication Date (Oldest First)',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }]
    },
    {
      title: 'Title (A-Z)',
      name: 'titleAsc',
      by: [{ field: 'title.en', direction: 'asc' }]
    }
  ]
}