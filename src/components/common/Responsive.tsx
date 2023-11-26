import React from 'react';
import { twMerge } from 'tailwind-merge';

type ResponsiveProps = {
  className?: string;
};

const Responsive = ({ className, children }: React.PropsWithChildren<ResponsiveProps>) => {
  return (
    <div className={twMerge('h-full w-full px-6 lg:mx-auto lg:max-w-[1024px] lg:px-10', className)}>{children}</div>
  );
};

export default Responsive;
