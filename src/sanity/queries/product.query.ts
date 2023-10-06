import { groq } from 'next-sanity';

export const getProductsQuery = groq`*[_type == "product"]{
  name,
  slug,
  productCategory->{
    _id,
    name
  },
  price,
  description,
  image{
    asset->{
      _id,
      url
    }
  }
}`;
