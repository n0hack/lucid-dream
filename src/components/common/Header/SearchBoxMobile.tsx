import React, { useEffect, useRef } from 'react';
import { BREAKPOINT, MAIN_IMAGE_SRC } from '@constants';
import { css } from '@styled-system/css';
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
    <div className={outerWrapper} style={{ backgroundImage: `url(${MAIN_IMAGE_SRC})` }}>
      <Dim />
      <div className={innerWrapper}>
        <IconButton custom={css.raw({ mx: '8pxr' })} onClick={onClose}>
          <IconChevronLeft width={32} height={32} />
        </IconButton>
        <Search
          ref={inputRef}
          wrapperCustom={css.raw({ flex: '1', bg: 'gray.200' })}
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

const outerWrapper = css({
  position: 'fixed',
  inset: 0,
  h: 'screen',
  color: 'black',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  desktop: {
    display: 'none',
  },
});

const innerWrapper = css({
  position: 'absolute',
  inset: 0,
  w: 'full',
  h: '64pxr',
  display: 'flex',
  py: '8pxr',
  pr: '16pxr',
  bg: 'white',
});

export default SearchBoxMobile;
