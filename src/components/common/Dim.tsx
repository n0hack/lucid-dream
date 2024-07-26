import type React from 'react';
import { twMerge } from 'tailwind-merge';

type DimProps = React.HTMLAttributes<HTMLDivElement>;

const Dim = ({ className, ...rest }: DimProps) => {
  return <div className={twMerge('absolute inset-0 h-full w-full bg-dim-050', className)} {...rest} />;
};

export default Dim;
