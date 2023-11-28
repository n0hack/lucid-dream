import { twMerge } from 'tailwind-merge';
import navInfo from './navInfo';

type NavigationProps = {
  hasBg: boolean;
  fillBg: boolean;
  pathname: string;
};

const Navigation = ({ hasBg, fillBg, pathname }: NavigationProps) => {
  return (
    <nav className="pointer-events-none opacity-0 lg:pointer-events-auto lg:opacity-100">
      <ul className="flex gap-6">
        {navInfo.map(({ path, name }) => (
          <li key={path}>
            <a
              className={twMerge(
                'block py-1 text-sm font-semibold',
                hasBg || fillBg ? 'hover:text-primary' : 'hover:text-gray-200',
                pathname.split('/')[1] === path.split('/')[1] && pathname.split('/')?.[3] !== 'post' && 'text-primary',
              )}
              href={path}
              data-astro-prefetch="viewport"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
