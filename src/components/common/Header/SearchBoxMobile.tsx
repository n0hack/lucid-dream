import React, { useEffect, useRef } from 'react';
import { BackgroundImage, Dim, IconButton } from '@components/common';
import { BREAKPOINT } from '@constants';
import { IconChevronLeft } from '@tabler/icons-react';
import Search from './Search';

type SearchBoxMobileProps = {
  isOpen: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClear: () => void;
  onClose: () => void;
};

const SearchBoxMobile = ({ isOpen, value, onChange, onKeyDown, onClear, onClose }: SearchBoxMobileProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 검색창이 열렸을 때, Input에 Focus
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  return (
    <div className="fixed inset-0 h-screen text-black lg:hidden">
      <BackgroundImage className="absolute inset-0" />
      <Dim />
      <div className="absolute inset-0 flex h-16 w-full bg-white py-2 pr-4">
        <IconButton className="mx-2" onClick={onClose}>
          <IconChevronLeft width={32} height={32} />
        </IconButton>
        <Search
          ref={inputRef}
          wrapperClassName="flex-1 bg-gray-200"
          isOpen={isOpen}
          value={value}
          onChange={onChange}
          onKeyDown={(e) => window.innerWidth < BREAKPOINT && onKeyDown(e)}
          onClear={onClear}
        />
      </div>
    </div>
  );
};

export default SearchBoxMobile;
