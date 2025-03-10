import { twMerge } from 'tailwind-merge';
import { Dim, IconButton } from '@components/common';
import { IconX } from '@tabler/icons-react';
import navInfo from './navInfo';

type MenuBoxMobileProps = {
  onMenuClose: () => void;
};

const MenuBoxMobile = ({ onMenuClose }: MenuBoxMobileProps) => {
  return (
    <div className="fixed inset-0 h-[100dvh] text-white lg:hidden">
      <Dim className="bg-dim-095" />
      <nav className="absolute left-8 top-8">
        <ul className="flex w-fit flex-col gap-8">
          {navInfo.map(({ path, name, animation }) => (
            <li key={path} className={twMerge('-translate-x-full opacity-0', animation)}>
              <a className="text-4xl font-bold" href={path}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <IconButton className="absolute right-[26px] top-7" onClick={onMenuClose} aria-albel="네비게이션 메뉴 닫기">
        <IconX className="h-8 w-8" />
      </IconButton>
    </div>
  );
};

export default MenuBoxMobile;
