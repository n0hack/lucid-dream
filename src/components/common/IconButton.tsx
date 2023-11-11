import React from 'react';
import { twMerge } from 'tailwind-merge';
import type { StyleByProps } from 'utils/style';

type IconButtonSize = '24' | '44';

type IconButtonProps = {
  size?: IconButtonSize;
  className?: string;
  onClick?: () => void;
};

const IconButton = ({ size = '44', className, children, onClick }: React.PropsWithChildren<IconButtonProps>) => {
  const sizeMap: StyleByProps<typeof size> = {
    '24': 'h-24pxr w-24pxr',
    '44': 'h-44pxr w-44pxr',
  };

  return (
    <button
      className={twMerge(
        'grid place-items-center desktop:rounded-full desktop:transition-[background] desktop:hover:bg-dim-005',
        sizeMap[size],
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
