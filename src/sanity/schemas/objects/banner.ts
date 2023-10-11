import { FaTag as icon } from 'react-icons/fa';

// banner to show on the home page with a link to a page or a product
export default {
  name: 'banner',
  title: 'Banner',
  type: 'object',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    // description
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
      default: Date.now(),
    },
  ],
};
