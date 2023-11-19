import React, { useEffect, useRef, useState } from 'react';
import { BREAKPOINT } from '@constants';
import { cva } from '@styled-system/css';
import Search from './Search';

type SearchBoxDesktopProps = {
  isOpen: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClear: () => void;
};

const SearchBoxDesktop = ({ isOpen, value, onChange, onKeyDown, onClear }: SearchBoxDesktopProps) => {
  const [hasBorder, setHasBorder] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 검색창을 닫았을 때, Border가 남아있는 문제를 해결하기 위한 처리
    if (isOpen) {
      if (timer.current) clearTimeout(timer.current);
      setHasBorder(true);
    } else {
      timer.current = setTimeout(() => {
        setHasBorder(false);
      }, 250);
    }
  }, [isOpen]);

  useEffect(() => {
    // 검색창이 열렸을 때, Input에 Focus
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  return (
    <div className={wrapper({ isOpen, hasBorder })}>
      <Search
        ref={inputRef}
        isOpen={isOpen}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => window.innerWidth >= BREAKPOINT && onKeyDown(e)}
        onClear={onClear}
      />
    </div>
  );
};

const wrapper = cva({
  base: {
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
    h: '44pxr',
    display: 'none',
    color: 'black',
    bg: 'white',
    rounded: '4pxr',
    overflow: 'hidden',
    transition: 'width 0.3s ease-in-out',
    desktop: {
      display: 'block',
    },
  },
  variants: {
    isOpen: {
      true: { w: '288pxr', pointerEvents: 'auto' },
      false: { w: 0, pointerEvents: 'none' },
    },
    hasBorder: {
      true: { border: '1px solid token(colors.gray.200)' },
    },
  },
});

export default SearchBoxDesktop;
