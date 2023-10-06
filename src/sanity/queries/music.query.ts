import { groq } from 'next-sanity';

export const getMusicQuery = groq`*[_type == "music"]{
  title,
  youtubeId,
  description,
  lyrics,
  producer,
  featuredArtists,
  credits,
  thumbnail,
  album->,
  tags
}`;
