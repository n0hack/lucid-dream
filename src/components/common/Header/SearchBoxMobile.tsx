import React, { useEffect, useRef } from 'react';
import { TbChevronLeft, TbCircleX, TbSearch } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';
import { BREAKPOINT, MAIN_IMAGE_SRC } from '@constants';
import Dim from '../Dim';
import IconButton from '../IconButton';

type SearchBoxMobileProps = {
  isOpen: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeydown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClear: () => void;
  onClose: () => void;
};

const SearchBoxMobile = ({ isOpen, value, onChange, onKeydown, onClear, onClose }: SearchBoxMobileProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 검색창이 열렸을 때, Input에 Focus
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 h-screen bg-cover bg-center text-black desktop:hidden`}
      style={{ backgroundImage: `url(${MAIN_IMAGE_SRC})` }}
    >
      <Dim />
      <div className="h-64pxr py-8pxr pr-16pxr absolute inset-0 flex w-full bg-white">
        <IconButton className="mx-8pxr" onClick={onClose}>
          <TbChevronLeft className="h-32pxr w-32pxr" />
        </IconButton>
        <div className="rounded-4pxr relative h-full flex-1 bg-gray-200">
          <TbSearch className="left-12pxr h-24pxr w-24pxr pointer-events-none absolute top-1/2 -translate-y-1/2" />
          <input
            ref={inputRef}
            value={value}
            onChange={onChange}
            onKeyDown={(e) => window.innerWidth < BREAKPOINT && onKeydown(e)}
            maxLength={48}
            placeholder="제목이나 내용으로 검색하기 >_<"
            className="rounded-4pxr px-48pxr h-full w-full bg-transparent text-sm outline-primary placeholder:text-gray-400"
          />
          <IconButton
            size="24"
            className={twMerge(
              'right-12pxr pointer-events-none absolute top-1/2 -translate-y-1/2 opacity-0',
              value && 'pointer-events-auto opacity-100',
            )}
            onClick={onClear}
          >
            <TbCircleX className="h-18pxr w-18pxr" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default SearchBoxMobile;
