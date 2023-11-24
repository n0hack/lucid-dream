import { twMerge } from 'tailwind-merge';

type StoryCategoryItemProps = {
  pathname: string;
  name: string;
  count: number;
  href: string;
};

const StoryCategoryItem = ({ pathname, name, count, href }: StoryCategoryItemProps) => {
  return (
    <li className="shrink-0">
      <a
        href={href}
        className={twMerge(
          'flex h-11 items-center rounded-md bg-gray-100 px-5 text-sm text-gray-600 hover:bg-primary hover:text-white lg:h-12 lg:text-base',
          pathname.includes(href.split('/')[2]) && 'current-category bg-primary font-medium text-white',
        )}
      >
        {name} ({count})
      </a>
    </li>
  );
};

export default StoryCategoryItem;
