export interface IWebContent {
  title: string;
  bio: IBio;
  hero: IHero;
}

export interface IBio {
  _type: string;
  bio: Bio2[];
  bioImage: Image;
  image: any;
}

export interface Bio2 {
  markDefs: any[];
  children: Children[];
  _type: string;
  style: string;
  _key: string;
}

export interface Children {
  _type: string;
  marks: any[];
  text: string;
  _key: string;
}

export interface IHero {
  image: Image;
  subtitle: string;
  _type: string;
  video: Video;
  title: string;
  link: string;
}

export interface Image {
  asset: {
    url: string;
  };
}

export interface Video {
  asset: {
    url: string;
  };
}
