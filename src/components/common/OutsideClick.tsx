import React, { useEffect, useRef } from 'react';
import { css } from '@styled-system/css';

type OutsideClickProps = {
  onOutsideClick: () => void;
};

const OutsideClick = ({ children, onOutsideClick }: React.PropsWithChildren<OutsideClickProps>) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) onOutsideClick();
    };

    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [onOutsideClick]);

  return (
    <div ref={ref} className={css({ display: 'contents' })}>
      {children}
    </div>
  );
};

export default OutsideClick;
