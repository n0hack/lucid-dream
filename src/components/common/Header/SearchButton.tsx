import React, { useEffect, useState } from 'react';
import { TbSearch } from 'react-icons/tb';
import OutsideClickHandler from 'react-outside-click-handler';
import { twMerge } from 'tailwind-merge';
import { BREAKPOINT, CLASS_PREVENT_SCROLL } from '@constants';
import { preventScroll, restoreScroll } from '@utils/style';
import SearchBoxDesktop from './SearchBoxDesktop';
import SearchBoxMobile from './SearchBoxMobile';

const SearchButton = () => {
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchBoxOpen = () => {
    // Mobile에 대한 스크롤 동작 여부 처리
    if (window.innerWidth < BREAKPOINT) {
      preventScroll();
    }
    setIsSearchBoxOpen(true);
  };

  const handleSearchBoxClose = () => {
    if (!isSearchBoxOpen) return;

    restoreScroll();
    setIsSearchBoxOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleInputKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    window.location.assign(`/search?q=${searchValue}`);
  };

  const handleInputClear = () => {
    setSearchValue('');
  };

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (!isSearchBoxOpen) return;

      // Mobile에서의 검색창은 스크롤 동작을 막기 때문에, Resize Event에 대한 처리 진행
      const { width } = entries[0].contentRect;

      if (width < BREAKPOINT) {
        if (document.body.classList.contains(CLASS_PREVENT_SCROLL)) return;
        preventScroll();
      } else {
        if (!document.body.classList.contains(CLASS_PREVENT_SCROLL)) return;
        restoreScroll();
      }
    });
    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  }, [isSearchBoxOpen]);

  return (
    <React.Fragment>
      <button
        className={twMerge(
          'h-44pxr w-44pxr grid place-items-center rounded-full desktop:hover:bg-dim-005',
          isSearchBoxOpen ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100',
        )}
        onClick={handleSearchBoxOpen}
      >
        <TbSearch className="h-24pxr w-24pxr" />
      </button>
      <OutsideClickHandler display="contents" onOutsideClick={handleSearchBoxClose}>
        {/* Mobile */}
        {isSearchBoxOpen && (
          <SearchBoxMobile
            isOpen={isSearchBoxOpen}
            value={searchValue}
            onChange={handleInputChange}
            onKeydown={handleInputKeydown}
            onClear={handleInputClear}
            onClose={handleSearchBoxClose}
          />
        )}
        {/* Desktop */}
        <SearchBoxDesktop
          isOpen={isSearchBoxOpen}
          value={searchValue}
          onChange={handleInputChange}
          onKeydown={handleInputKeydown}
          onClear={handleInputClear}
        />
      </OutsideClickHandler>
    </React.Fragment>
  );
};

export default SearchButton;
