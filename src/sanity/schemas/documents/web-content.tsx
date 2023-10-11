import { BiGlobe as icon } from 'react-icons/bi';

export default {
  name: 'web-content',
  title: 'Web Content',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'banner',
      title: 'Banner',
      type: 'banner',
      validation: (Rule: any) => Rule.required(),
    },
    // bio object
    {
      name: 'bio',
      title: 'Bio',
      type: 'bio',
      validation: (Rule: any) => Rule.required(),
    },
    // hero object
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
