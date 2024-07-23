import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Responsive } from '@components/common';
import { HEADER_TRANSITION_POINT } from '@constants/style';
import Logo from './Logo';
import MenuButton from './MenuButton';
import Navigation from './Navigation';
import SearchButton from './SearchButton';

type HeaderProps = {
  hasBackground?: boolean;
  pathname: string;
};

const Header = ({ pathname, hasBackground = false }: HeaderProps) => {
  const [isBackgroundFilled, setIsBackgroundFilled] = useState(hasBackground);

  useEffect(() => {
    if (hasBackground) return;

    const handleScroll = () => {
      // Y축 스크롤 위치에 따라 배경색 결정
      const fillBackground = window.scrollY > HEADER_TRANSITION_POINT;
      setIsBackgroundFilled(fillBackground);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasBackground]);

  return (
    <header
      className={twMerge(
        'fixed inset-0 z-header h-16 transition duration-300 ',
        hasBackground || isBackgroundFilled
          ? 'border-b border-b-gray-200 bg-white text-black'
          : 'bg-transparent text-white',
      )}
    >
      <Responsive className="flex justify-between pr-[14px] lg:pr-[30px]">
        <div className="flex h-full flex-1 items-center lg:gap-16">
          <Logo />
          <Navigation hasBackground={hasBackground} isBackgroundFilled={isBackgroundFilled} pathname={pathname} />
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
