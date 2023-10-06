import { BsDisc as icon } from 'react-icons/bs';

export default {
  name: 'album',
  title: 'Albums',
  description: 'A Album',
  icon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      // of: [{ type: 'block' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
    },
    // release date
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
