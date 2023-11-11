import React, { useEffect, useRef } from 'react';
import { BREAKPOINT, MAIN_IMAGE_SRC } from '@constants';
import { IconChevronLeft } from '@tabler/icons-react';
import Dim from '../Dim';
import IconButton from '../IconButton';
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
    <div
      className="fixed inset-0 h-screen bg-cover bg-center text-black desktop:hidden"
      style={{ backgroundImage: `url(${MAIN_IMAGE_SRC})` }}
    >
      <Dim />
      <div className="absolute inset-0 flex h-64pxr w-full bg-white py-8pxr pr-16pxr">
        <IconButton className="mx-8pxr" onClick={onClose}>
          <IconChevronLeft className="h-32pxr w-32pxr" />
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
