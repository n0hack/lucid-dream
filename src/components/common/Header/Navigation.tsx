import { css, cva } from '@styled-system/css';
import navInfo from './navInfo';

type NavigationProps = {
  hasBg: boolean;
  fillBg: boolean;
  pathname: string;
};

const Navigation = ({ hasBg, fillBg, pathname }: NavigationProps) => {
  return (
    <nav className={nav}>
      <ul className={list}>
        {navInfo.map(({ path, name }) => (
          <li key={path}>
            <a
              className={link({
                hoverColor: hasBg ? 'primary' : fillBg ? 'primary' : 'gray',
                active: pathname.includes(path),
              })}
              href={path}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const nav = css({
  pointerEvents: 'none',
  opacity: 0,
  desktop: {
    pointerEvents: 'auto',
    opacity: 1,
  },
});

const list = css({
  display: 'flex',
  gap: '24pxr',
});

const link = cva({
  base: {
    display: 'block',
    py: '4pxr',
    fontSize: 'sm',
    fontWeight: 'semibold',
  },
  variants: {
    hoverColor: {
      gray: { _hover: { color: 'gray.200' } },
      primary: { _hover: { color: 'primary' } },
    },
    active: {
      true: { color: 'primary' },
    },
  },
});

export default Navigation;
