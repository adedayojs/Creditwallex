export interface ICard {
  title: string;
  imageUrl: string;
  imageBgColor: IRgba;
  numberCount: number;
  tagline: string;
}

export interface IRgba {
  r: number;
  g: number;
  b: number;
  a: number;
}
