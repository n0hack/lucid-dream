import React from 'react';
import { twMerge } from 'tailwind-merge';

type IconButtonSize = '24' | '44';

type IconButtonProps = {
  className?: string;
  style?: React.CSSProperties;
  size?: IconButtonSize;
  onClick?: () => void;
};

const IconButton = ({ size = '44', className, style, children, onClick }: React.PropsWithChildren<IconButtonProps>) => {
  return (
    <button
      className={twMerge(
        'grid cursor-pointer place-items-center lg:rounded-full lg:transition-[background] lg:hover:bg-dim-005',
        size === '24' ? 'h-6 w-6' : 'h-11 w-11',
        className,
      )}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
