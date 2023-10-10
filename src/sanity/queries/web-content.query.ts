import { groq } from 'next-sanity';

export const getWebContentQuery = groq`*[_type == "web-content"]{
  title,
  bio {
    ...,
    image {
      asset -> {
        url
      }
    }
  },
  hero {
    ...,
    image {
      asset -> {
        url
      }
    },
    video {
      asset -> {
        url
      }
    }
  },
}`;
