import { MdMusicNote as icon } from 'react-icons/md';

export default {
  name: 'music',
  title: 'Musics',
  description: 'A Music',
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
      name: 'youtubeId',
      title: 'Youtube ID',
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
      name: 'lyrics',
      title: 'Lyrics',
      type: 'array',
      of: [{ type: 'block' }],
    },
    // thumbnail
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
    },
    // references to albums
    {
      name: 'album',
      title: 'Album',
      type: 'reference',
      to: [{ type: 'album' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
