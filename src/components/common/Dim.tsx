import { twMerge } from 'tailwind-merge';

type DimProps = {
  className?: string;
};

const Dim = ({ className }: DimProps) => {
  return <div className={twMerge('absolute inset-0 h-full w-full bg-dim-050', className)} />;
};

export default Dim;
