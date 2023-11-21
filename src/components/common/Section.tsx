import React, { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionLoading = 'default' | 'lazy';

type SectionProps = {
  loading?: SectionLoading;
  className?: string;
};

const Section = ({ loading = 'default', className, children }: React.PropsWithChildren<SectionProps>) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || loading === 'default') return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [loading]);

  return (
    <div
      ref={ref}
      className={twMerge(
        'transition-all duration-700',
        loading === 'lazy' && (show ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'),
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Section;
