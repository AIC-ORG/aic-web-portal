import { BsSpeaker as icon } from 'react-icons/bs';

// music event
export default {
  name: 'event',
  title: 'Events',
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
    // venue
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    // date
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    // event link
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    // ticket fee
    {
      name: 'ticketFee',
      title: 'Ticket Fee',
      type: 'string',
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
