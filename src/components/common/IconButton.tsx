import React from 'react';
import { twMerge } from 'tailwind-merge';

type IconButtonSize = '24' | '44';

type IconButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  size?: IconButtonSize;
};

const IconButton = ({ size = '44', className, children, ...rest }: React.PropsWithChildren<IconButtonProps>) => {
  return (
    <button
      className={twMerge(
        'grid cursor-pointer place-items-center lg:rounded-full lg:transition-[background] lg:hover:bg-dim-005',
        size === '24' ? 'h-6 w-6' : 'h-11 w-11',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default IconButton;
