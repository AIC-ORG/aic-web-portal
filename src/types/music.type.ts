export interface IMusic {
  credits: any;
  album: IAlbum;
  producer: string;
  featuredArtists: any;
  thumbnail: Thumbnail2;
  tags: string[];
  title: string;
  youtubeId: string;
  description: string;
  lyrics: ILyric[];
}

export interface IAlbum {
  description: string;
  _id: string;
  _updatedAt: string;
  tags: string[];
  thumbnail: IThumbnail;
  _createdAt: string;
  _type: string;
  _rev: string;
  title: string;
}

export interface IThumbnail {
  _type: string;
  asset: IAsset;
}

export interface IAsset {
  _ref: string;
  _type: string;
}

export interface Thumbnail2 {
  _type: string;
  asset: IAsset2;
}

export interface IAsset2 {
  _ref: string;
  _type: string;
}

export interface ILyric {
  markDefs: any[];
  children: IChildren[];
  _type: string;
  style: string;
  _key: string;
}

export interface IChildren {
  _type: string;
  marks: string[];
  text: string;
  _key: string;
}
