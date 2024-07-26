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

export type Story = {
  id: string;
  slug: string;
  data: {
    thumbnail: AstroImage;
    title: string;
    description: string;
    tags: string[];
    date: Date;
  };
};

export type ProjectLink = {
  siteType: string;
  href: string;
};

export type Project = {
  thumbnail: AstroImage;
  title: string;
  descriptions: string[];
  tags: string[];
  date: Date;
  links: Record<string, string>;
};
