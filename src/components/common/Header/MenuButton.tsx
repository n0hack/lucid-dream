import React, { useEffect, useState } from 'react';
import { BREAKPOINT } from '@constants';
import { css } from '@styled-system/css';
import { IconMenu2 } from '@tabler/icons-react';
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
      <IconButton custom={css.raw({ desktop: { display: 'none' } })} onClick={handleMenuOpen}>
        <IconMenu2 width={24} height={24} />
      </IconButton>
      {isMenuOpen && <MenuBoxMobile onMenuClose={handleMenuClose} />}
    </React.Fragment>
  );
};

export default MenuButton;
