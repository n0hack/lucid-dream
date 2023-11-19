import { useEffect, useState } from 'react';
import { TRANSITION_POINT } from '@constants';
import { css, cva } from '@styled-system/css';
import Responsive from '../Responsive';
import Logo from './Logo';
import MenuButton from './MenuButton';
import Navigation from './Navigation';
import SearchButton from './SearchButton';

type HeaderProps = {
  hasBg?: boolean;
  pathname: string;
};

const Header = ({ pathname, hasBg = false }: HeaderProps) => {
  const [fillBg, setFillBg] = useState(hasBg);

  useEffect(() => {
    if (hasBg) return;

    const handleScroll = () => {
      if (window.scrollY > TRANSITION_POINT) {
        setFillBg(true);
      } else {
        setFillBg(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasBg]);

  return (
    <header className={header({ hasBg, fillBg })}>
      <Responsive custom={css.raw({ pr: '14pxr', desktop: { pr: '30pxr' } })}>
        <div className={innerHeader}>
          <div className={left}>
            <Logo />
            <Navigation hasBg={hasBg} fillBg={fillBg} pathname={pathname} />
          </div>
          <div className={right}>
            <SearchButton />
            <MenuButton />
          </div>
        </div>
      </Responsive>
    </header>
  );
};

const fill = css.raw({
  color: 'black',
  bg: 'white',
  borderBottom: '1px solid token(colors.gray.200)',
});

const transparent = css.raw({
  color: 'white',
  bg: 'transparent',
  borderBottom: '1px solid transparent',
});

const header = cva({
  base: {
    position: 'fixed',
    inset: 0,
    h: '64pxr',
    transition: 'all 0.3s ease-in-out',
    zIndex: 'header',
  },
  variants: {
    hasBg: {
      true: fill,
      false: transparent,
    },
    fillBg: {
      true: fill,
      false: transparent,
    },
  },
});

const innerHeader = css({
  w: 'full',
  h: 'full',
  display: 'flex',
  justifyContent: 'space-between',
});

const left = css({
  w: 'full',
  h: 'full',
  display: 'flex',
  alignItems: 'center',
  desktop: {
    gap: '60pxr',
  },
});

const right = css({
  position: 'relative',
  h: 'full',
  display: 'flex',
  alignItems: 'center',
});

export default Header;
