import React, { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionProps = {
  loading?: 'default' | 'lazy';
  className?: string;
};

const Section = ({ loading = 'default', className, children }: React.PropsWithChildren<SectionProps>) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || loading === 'default') return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    io.observe(ref.current);
    return () => {
      io.disconnect();
    };
  }, [loading]);

  return (
    <div
      ref={ref}
      className={twMerge(
        'transition-[transform,opacity] duration-700',
        loading === 'lazy' && (show ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'),
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Section;
