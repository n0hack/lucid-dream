import { twMerge } from 'tailwind-merge';
import { MAIN_IMAGE_SRC } from '@constants';
import { IconX } from '@tabler/icons-react';
import Dim from '../Dim';
import IconButton from '../IconButton';
import navInfo from './navInfo';

type MenuBoxMobileProps = {
  onMenuClose: () => void;
};

const MenuBoxMobile = ({ onMenuClose }: MenuBoxMobileProps) => {
  return (
    <div
      className="fixed inset-0 h-screen bg-cover bg-center text-white desktop:hidden"
      style={{
        backgroundImage: `url(${MAIN_IMAGE_SRC})`,
      }}
    >
      <Dim />
      <div className="absolute left-40pxr top-40pxr">
        <ul className="flex w-fit flex-col gap-32pxr">
          {navInfo.map((item) => (
            <li key={item.path} className={twMerge('w-full -translate-x-full opacity-0', item.animation)}>
              <a href={item.path} className="text-4xl font-bold">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <IconButton className="absolute right-34pxr top-38pxr" onClick={onMenuClose}>
        <IconX className="h-32pxr w-32pxr" />
      </IconButton>
    </div>
  );
};

export default MenuBoxMobile;
