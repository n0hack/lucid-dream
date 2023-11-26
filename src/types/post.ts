export type AstroImage = {
  format: 'avif' | 'png' | 'webp' | 'jpeg' | 'jpg' | 'svg' | 'tiff' | 'gif';
  src: string;
  width: number;
  height: number;
};

export type AstroHeading = {
  depth: number;
  slug: string;
  text: string;
};
