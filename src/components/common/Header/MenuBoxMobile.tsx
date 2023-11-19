import { MAIN_IMAGE_SRC } from '@constants';
import { css, cva } from '@styled-system/css';
import { IconX } from '@tabler/icons-react';
import Dim from '../Dim';
import IconButton from '../IconButton';
import navInfo from './navInfo';

type MenuBoxMobileProps = {
  onMenuClose: () => void;
};

const MenuBoxMobile = ({ onMenuClose }: MenuBoxMobileProps) => {
  return (
    <div className={wrapper} style={{ backgroundImage: `url(${MAIN_IMAGE_SRC})` }}>
      <Dim />
      <nav className={nav}>
        <ul className={list}>
          {navInfo.map(({ path, name }, index) => (
            <li key={path} className={item({ animation: index as 0 | 1 | 2 })}>
              <a className={link} href={path}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <IconButton custom={css.raw({ position: 'absolute', top: '28pxr', right: '14pxr' })} onClick={onMenuClose}>
        <IconX width={32} height={32} />
      </IconButton>
    </div>
  );
};

const wrapper = css({
  position: 'fixed',
  inset: 0,
  h: 'screen',
  color: 'white',
  bgSize: 'cover',
  bgPosition: 'center',
  desktop: {
    display: 'none',
  },
});

const nav = css({
  position: 'absolute',
  top: '24pxr',
  left: '24pxr',
});

const list = css({
  w: 'fit',
  display: 'flex',
  flexDirection: 'column',
  gap: '24pxr',
});

const item = cva({
  base: {
    w: 'full',
    opacity: 0,
    transform: 'translatex(-100%)',
  },
  variants: {
    animation: {
      0: { animation: 'showMenuItem 0.75s forwards' },
      1: { animation: 'showMenuItem 0.75s forwards 0.2s' },
      2: { animation: 'showMenuItem 0.75s forwards 0.4s' },
    },
  },
  defaultVariants: {
    animation: 0,
  },
});

const link = css({
  fontSize: '4xl',
  fontWeight: 'bold',
});

export default MenuBoxMobile;
