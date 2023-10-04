import { FaShoppingBag as icon } from 'react-icons/fa';

export default {
  // Computer Name
  name: 'product',
  // visible title
  title: 'Products',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      description: 'Name of the product',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        // maxLength: 100,
      },
    },
    // product category
    {
      name: 'productCategory',
      title: 'Product Category',
      type: 'reference',
      to: [{ type: 'productCategory' }],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the product in RWf',
      validation: (Rule: any) => Rule.min(10),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the product',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      price: 'price',
    },
    prepare: ({ title, media, price }: any) => {
      return {
        title,
        media,
        subtitle: `${price} Rwf`,
      };
    },
  },
};
