import React, { useEffect, useRef } from 'react';

type OutsideClickHandlerProps = {
  onOutsideClick: () => void;
};

const OutsideClickHandler = ({ children, onOutsideClick }: React.PropsWithChildren<OutsideClickHandlerProps>) => {
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
    <div ref={ref} className="contents">
      {children}
    </div>
  );
};

export default OutsideClickHandler;
