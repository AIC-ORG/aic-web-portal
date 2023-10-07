import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface IMusic {
  _id: string;
  credits: any;
  album: IAlbum;
  producer: string;
  featuredArtists: any;
  thumbnail: IThumbnail;
  tags: string[];
  title: string;
  youtubeId: string;
  description: string;
  lyrics: ILyric[];
  releaseDate: string | Date;
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
  url: string | StaticImport;
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
