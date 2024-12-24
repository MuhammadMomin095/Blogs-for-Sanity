// sanity/blog.ts
export const blog = {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'paragraph',
            type: 'string',
            title: 'blogparagraph'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true, 
            }
        },
    ]
}