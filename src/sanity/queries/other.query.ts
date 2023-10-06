import { groq } from 'next-sanity';

export const albumQuery = groq`
  *[_type == "album"]{
    title,
    description,
    "thumbnail": thumbnail.asset->url,
    releaseDate,
    tags
  }
`;
