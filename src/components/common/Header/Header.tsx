import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Responsive } from '@components/common';
import { HEADER_TRANSITION_POINT } from '@constants/style';
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
      if (window.scrollY > HEADER_TRANSITION_POINT) {
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
    <header
      className={twMerge(
        'fixed inset-0 z-header h-16 transition duration-300',
        hasBg || fillBg ? 'border-b border-b-gray-200 bg-white text-black' : 'bg-transparent text-white',
      )}
    >
      <Responsive className="flex justify-between pr-[14px] lg:pr-[30px]">
        <div className="flex h-full w-full items-center lg:gap-16">
          <Logo />
          <Navigation hasBg={hasBg} fillBg={fillBg} pathname={pathname} />
        </div>
        <div className="relative flex h-full items-center">
          <SearchButton />
          <MenuButton />
        </div>
      </Responsive>
    </header>
  );
};

export default Header;
