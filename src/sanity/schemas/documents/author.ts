export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        {
        name: 'name',
        title: 'Author Name',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
        },
        {
        name: 'image',
        title: 'Author Image',
        type: 'image',
        validation: (Rule: any) => Rule.required(),
        },
        {
        name: 'bio',
        title: 'Author Bio',
        type: 'array',
        of: [{ type: 'block' }],
        validation: (Rule: any) => Rule.required(),
        },
    ],
    preview: {
        select: {
        title: 'name',
        media: 'image',
        },
    },
}