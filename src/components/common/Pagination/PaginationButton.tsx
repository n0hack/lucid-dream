import React from 'react';
import { twMerge } from 'tailwind-merge';

type PaginationButtonProps = {
  className?: string;
  href?: string;
};

const PaginationButton = ({ className, href, children }: React.PropsWithChildren<PaginationButtonProps>) => {
  return (
    <a
      className={twMerge(
        'grid h-11 w-11 place-items-center rounded-md font-semibold text-gray-400 lg:transition-colors',
        className,
      )}
      href={href}
    >
      {children}
    </a>
  );
};

export default PaginationButton;
