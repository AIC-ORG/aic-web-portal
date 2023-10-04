// artist biography object
export default {
  name: 'bio',
  title: 'Bio',
  type: 'object',
  fields: [
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'bioImage',
      title: 'Bio Image',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
