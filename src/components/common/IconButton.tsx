import React from 'react';
import { css, cva, type RecipeVariantProps } from '@styled-system/css';
import type { SystemStyleObject } from '@styled-system/types';

type IconButtonProps = {
  custom?: SystemStyleObject;
  onClick?: () => void;
} & RecipeVariantProps<typeof iconButton>;

const IconButton = ({ size, custom, children, onClick }: React.PropsWithChildren<IconButtonProps>) => {
  return (
    <button className={css(iconButton.raw({ size }), custom)} onClick={onClick}>
      {children}
    </button>
  );
};

const iconButton = cva({
  base: {
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer',
    desktop: {
      rounded: 'full',
      transition: 'background 0.2s ease-in-out',
      _hover: {
        bg: 'dim.005',
      },
    },
  },
  variants: {
    size: {
      24: { w: '24pxr', h: '24pxr' },
      44: { w: '44pxr', h: '44pxr' },
    },
  },
  defaultVariants: {
    size: 44,
  },
});

export default IconButton;
