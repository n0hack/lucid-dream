import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { twMerge } from 'tailwind-merge';
import type { AstroImage } from '@custom-types/post';

type ImageProps = {
  thumbnail: AstroImage;
  alt: string;
  className?: string;
};

const Image = ({ thumbnail, alt, className }: ImageProps) => {
  return (
    <LazyLoadImage
      className={twMerge('h-full w-full object-cover', className)}
      src={thumbnail.src}
      alt={alt}
      effect="opacity"
      width="100%"
      height="100%"
      loading="lazy"
      decoding="async"
    />
  );
};

export default Image;
