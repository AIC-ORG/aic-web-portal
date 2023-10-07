import { groq } from 'next-sanity';

export const getMusicQuery = groq`*[_type == "music"]{
  _id,
  title,
  youtubeId,
  description,
  lyrics,
  producer,
  featuredArtists,
  credits,
  thumbnail {
    asset-> {
      url
    }
  },
  album->,
  tags,
  releaseDate
}`;
