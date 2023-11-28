import React, { useEffect, useState } from 'react';
import { IconButton } from '@components/common';
import { BREAKPOINT } from '@constants/style';
import { IconMenu2 } from '@tabler/icons-react';
import { preventScroll, restoreScroll } from '@utils/style';
import MenuBoxMobile from './MenuBoxMobile';

const MenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    // Desktop 화면에서는 메뉴를 열지 않음
    if (window.innerWidth >= BREAKPOINT) return;

    preventScroll();
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    restoreScroll();
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (!isMenuOpen) return;

      // Desktop으로 전환될 시, 메뉴 닫음
      const { width } = entries[0].contentRect;
      if (width >= BREAKPOINT) handleMenuClose();
    });
    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  }, [isMenuOpen]);

  return (
    <React.Fragment>
      <IconButton className="lg:hidden" onClick={handleMenuOpen} aria-label="네비게이션 메뉴창 열기">
        <IconMenu2 className="h-6 w-6" />
      </IconButton>
      {isMenuOpen && <MenuBoxMobile onMenuClose={handleMenuClose} />}
    </React.Fragment>
  );
};

export default MenuButton;
