import { groq } from 'next-sanity';

const portfolioQuery = groq`*[_type == 'data'][0] {
    main {...,
     "techStackImages": techStackImages[].asset->url,
      "heroImage": heroImage.asset->url
    },
    about {...,
      "aboutImage": aboutImage.asset->url
    },
    skills[]->{..., 
               "category": category->name,
               "image": image.asset->url
              },
    projects[]->{...,
                 "image": image.asset->url,
                 "category": category->name
                },
    experiences[]->{...},
    educations[]->{...},
    socials[]->{...}
  }
`;

export default portfolioQuery;
