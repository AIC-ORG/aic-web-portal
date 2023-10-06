import { groq } from 'next-sanity';

export const getWebContentQuery = groq`*[_type == "web-content"]{
  title,
  bio,
  hero
}`;
