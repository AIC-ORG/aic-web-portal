export interface IWebContent {
  title: string;
  bio: Bio;
  hero: IHero;
}

interface IHero {
  title: string;
  subtitle: string;
  image: any; // replace with your image type
  video: any; // replace with your file type
}

interface Bio {
  bio: Array<{ type: string }>;
  bioImage: any; // Replace 'any' with the actual type of the image
}
