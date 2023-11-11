import React, { useEffect, useState } from 'react';
import { TbMenu2 } from 'react-icons/tb';
import { BREAKPOINT } from '@constants';
import { preventScroll, restoreScroll } from '@utils/style';
import IconButton from '../IconButton';
import MenuBoxMobile from './MenuBoxMobile';

const MenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
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
      <IconButton className="desktop:hidden" onClick={handleMenuOpen}>
        <TbMenu2 className="h-24pxr w-24pxr" />
      </IconButton>
      {isMenuOpen && <MenuBoxMobile onMenuClose={handleMenuClose} />}
    </React.Fragment>
  );
};

export default MenuButton;
