import React, { useEffect, useRef } from 'react';

type OutsideClickProps = {
  onOutsideClick: () => void;
};

const OutsideClick = ({ children, onOutsideClick }: React.PropsWithChildren<OutsideClickProps>) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 클릭 영역에 대한 판단
    const handleMouseDown = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      onOutsideClick();
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

export default OutsideClick;
