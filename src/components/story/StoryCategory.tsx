import { twMerge } from 'tailwind-merge';

type StoryCategoryProps = {
  pathname: string;
  name: string;
  count: number;
  href: string;
};

const StoryCategory = ({ pathname, name, count, href }: StoryCategoryProps) => {
  return (
    <li className="shrink-0">
      <a
        href={href}
        className={twMerge(
          'flex h-11 items-center rounded-md bg-gray-100 px-5 text-sm text-gray-600 lg:h-12 lg:text-base lg:hover:bg-primary lg:hover:text-white',
          pathname.includes(href.split('/')[2]) && 'current-category bg-primary font-medium text-white',
        )}
      >
        {name} ({count})
      </a>
    </li>
  );
};

export default StoryCategory;
