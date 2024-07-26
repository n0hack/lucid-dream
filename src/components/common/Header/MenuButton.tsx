import React, { useEffect, useState } from 'react';
import { IconButton } from '@components/common';
import { DESKTOP_BREAKPOINT } from '@constants/style';
import { IconMenu2 } from '@tabler/icons-react';
import { preventScroll, allowScroll } from '@utils/style';
import MenuBoxMobile from './MenuBoxMobile';

const MenuButton = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleMenuOpen = () => {
    // Desktop 화면에서는 메뉴를 열지 않음
    if (window.innerWidth >= DESKTOP_BREAKPOINT) return;

    preventScroll();
    setIsMenuOpened(true);
  };

  const handleMenuClose = () => {
    allowScroll();
    setIsMenuOpened(false);
  };

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (!isMenuOpened) return;

      // Desktop으로 전환될 시, 메뉴 닫음
      const { width } = entries[0].contentRect;
      if (width >= DESKTOP_BREAKPOINT) handleMenuClose();
    });
    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  }, [isMenuOpened]);

  return (
    <React.Fragment>
      <IconButton className="lg:hidden" onClick={handleMenuOpen} aria-label="네비게이션 메뉴 열기">
        <IconMenu2 className="h-6 w-6" />
      </IconButton>
      {isMenuOpened && <MenuBoxMobile onMenuClose={handleMenuClose} />}
    </React.Fragment>
  );
};

export default MenuButton;
