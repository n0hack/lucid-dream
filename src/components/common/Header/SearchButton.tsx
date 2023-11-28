import React, { useEffect, useState } from 'react';
import { OutsideClick, IconButton } from '@components/common';
import { DESKTOP_BREAKPOINT, CLASSNAME_PREVENT_SCROLL } from '@constants/style';
import { IconSearch } from '@tabler/icons-react';
import { preventScroll, restoreScroll } from '@utils/style';
import SearchBoxDesktop from './SearchBoxDesktop';
import SearchBoxMobile from './SearchBoxMobile';
import { useSearch } from './hooks/useSearch';

const SearchButton = () => {
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const searchProps = useSearch();

  const handleSearchBoxOpen = () => {
    // Mobile에 대한 스크롤 동작 여부 처리
    if (window.innerWidth < DESKTOP_BREAKPOINT) {
      preventScroll();
    }
    setIsSearchBoxOpen(true);
  };

  const handleSearchBoxClose = () => {
    if (!isSearchBoxOpen) return;

    restoreScroll();
    setIsSearchBoxOpen(false);
  };

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (!isSearchBoxOpen) return;

      // Mobile에서의 검색창은 스크롤 동작을 막기 때문에, Resize Event에 대해 처리
      const { width } = entries[0].contentRect;

      if (width < DESKTOP_BREAKPOINT) {
        if (document.body.classList.contains(CLASSNAME_PREVENT_SCROLL)) return;
        preventScroll();
      } else {
        if (!document.body.classList.contains(CLASSNAME_PREVENT_SCROLL)) return;
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
      <IconButton
        className={isSearchBoxOpen ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'}
        onClick={handleSearchBoxOpen}
        aria-label="검색창 열기"
      >
        <IconSearch className="h-6 w-6" />
      </IconButton>
      <OutsideClick onOutsideClick={handleSearchBoxClose}>
        {isSearchBoxOpen && (
          <SearchBoxMobile isOpen={isSearchBoxOpen} onClose={handleSearchBoxClose} {...searchProps} />
        )}
        <SearchBoxDesktop isOpen={isSearchBoxOpen} {...searchProps} />
      </OutsideClick>
    </React.Fragment>
  );
};

export default SearchButton;
