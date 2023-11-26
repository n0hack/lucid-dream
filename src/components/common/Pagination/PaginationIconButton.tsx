import React from 'react';
import { twMerge } from 'tailwind-merge';

type PaginationIconButtonProps = {
  href?: string;
  disabled?: boolean;
};

const PaginationIconButton = ({ href, disabled, children }: React.PropsWithChildren<PaginationIconButtonProps>) => {
  return (
    <a
      className={twMerge(
        'grid h-11 w-11 place-items-center rounded-md text-gray-400 lg:transition-colors',
        disabled ? 'cursor-not-allowed text-gray-200' : 'lg:hover:bg-gray-100 lg:hover:text-gray-600',
      )}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
          return;
        }
      }}
      href={href}
    >
      {children}
    </a>
  );
};

export default PaginationIconButton;
