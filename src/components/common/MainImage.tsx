import React from 'react';
import { twMerge } from 'tailwind-merge';

type BackgroundImageProps = React.ComponentPropsWithoutRef<'img'>;

const BackgroundImage = ({ className, ...rest }: BackgroundImageProps) => {
  return (
    <img
      className={twMerge('h-full w-full object-cover', className)}
      src="/images/main@3140.webp"
      srcSet="/images/main@1280.webp 1280w, /images/main@1920.webp 1920w, /images/main@3140.webp 3140w"
      alt="배경"
      {...rest}
    />
  );
};

export default BackgroundImage;
