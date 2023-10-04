import { BiCategory } from 'react-icons/bi';

export default {
  name: 'productCategory',
  title: 'Product Category',
  type: 'document',
  icon: BiCategory,
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      description: 'Name of the category',
      validate: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
  ],
};
