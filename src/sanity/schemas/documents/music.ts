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
    // producer
    {
      name: 'producer',
      title: 'Producer',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    // featured artists
    {
      name: 'featuredArtists',
      title: 'Featured Artists',
      type: 'array',
      of: [{ type: 'string' }],
    },
    // credits
    {
      name: 'credits',
      title: 'Credits',
      type: 'array',
      of: [{ type: 'string' }],
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
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
