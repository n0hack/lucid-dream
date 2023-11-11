import React, { useEffect, useRef, useState } from 'react';
import { TbCircleX, TbSearch } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';
import { BREAKPOINT } from '@constants';
import IconButton from '../IconButton';

type SearchBoxDesktopProps = {
  isOpen: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeydown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClear: () => void;
};

const SearchBoxDesktop = ({ isOpen, value, onChange, onKeydown, onClear }: SearchBoxDesktopProps) => {
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
        'h-44pxr rounded-4pxr absolute right-0 top-1/2 hidden -translate-y-1/2 overflow-hidden bg-white text-black transition-[width] duration-300 desktop:block',
        isOpen ? 'w-288pxr pointer-events-auto' : 'pointer-events-none w-0',
        hasBorder && 'border border-b-gray-200',
      )}
    >
      <div className="h-full">
        <TbSearch
          className={twMerge(
            'left-16pxr h-24pxr w-24pxr pointer-events-none absolute top-1/2 -translate-y-1/2 transition-opacity',
            isOpen ? 'opacity-100' : 'opacity-0',
          )}
        />
        <input
          ref={inputRef}
          value={value}
          onChange={onChange}
          onKeyDown={(e) => window.innerWidth >= BREAKPOINT && onKeydown(e)}
          maxLength={48}
          placeholder="제목이나 내용으로 검색하기 >_<"
          className="rounded-4pxr px-48pxr h-full w-full bg-transparent text-sm outline-primary placeholder:text-gray-400"
        />
        <IconButton
          size="24"
          className={twMerge(
            'right-12pxr pointer-events-none absolute top-1/2 -translate-y-1/2 opacity-0',
            isOpen && value && 'pointer-events-auto opacity-100',
          )}
          onClick={onClear}
        >
          <TbCircleX className="h-18pxr w-18pxr" />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBoxDesktop;
