import React, { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { BREAKPOINT } from '@constants';
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
  const timer = useRef<number | null>(null);

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
    <div
      className={twMerge(
        'absolute right-0 top-1/2 hidden h-44pxr -translate-y-1/2 overflow-hidden rounded-4pxr bg-white text-black transition-[width] duration-300 desktop:block',
        isOpen ? 'pointer-events-auto w-288pxr' : 'pointer-events-none w-0',
        hasBorder && 'border border-b-gray-200',
      )}
    >
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

export default SearchBoxDesktop;
