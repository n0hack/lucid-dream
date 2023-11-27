import React from 'react';
import { twMerge } from 'tailwind-merge';
import { MAIN_IMAGE_SRC } from '@constants';

type BackgroundImageProps = React.ComponentPropsWithoutRef<'img'>;

const BackgroundImage = ({ className, ...rest }: BackgroundImageProps) => {
  return (
    <img
      className={twMerge('h-full w-full object-cover', className)}
      src={MAIN_IMAGE_SRC('3140')}
      srcSet={`${MAIN_IMAGE_SRC('1280')} 1280w, ${MAIN_IMAGE_SRC('1920')} 1920w, ${MAIN_IMAGE_SRC('3140')} 3140w`}
      alt="배경"
      decoding="async"
      loading="lazy"
      {...rest}
    />
  );
};

export default BackgroundImage;
