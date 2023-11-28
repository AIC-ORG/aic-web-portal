export enum Size {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge',
  TwoX = '2X',
}

export interface Iproduct {
  name: string;
  image: string;
  price: number;
  id: string;
  category: string;
  description: string;
}
