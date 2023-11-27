import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconButton } from '@components/common';
import { IconCircleX, IconSearch } from '@tabler/icons-react';

type SearchProps = ComponentPropsWithoutRef<'input'> & {
  wrapperClassName?: string;
  isOpen: boolean;
  onClear: () => void;
};

const Search = forwardRef<HTMLInputElement, SearchProps>(function (
  { wrapperClassName, className, isOpen, value, onChange, onKeyDown, onClear, ...rest },
  ref,
) {
  return (
    <div className={twMerge('relative h-full rounded-md', wrapperClassName)}>
      <IconSearch className="pointer-events-none absolute left-3 top-1/2 h-6 w-6 -translate-y-1/2" />
      <input
        ref={ref}
        className={twMerge(
          'h-full w-full rounded-md bg-transparent px-12 outline-primary placeholder:text-gray-400 lg:text-sm lg:outline-0',
          className,
        )}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        maxLength={48}
        placeholder="제목이나 내용으로 검색하기"
        {...rest}
      />
      <IconButton
        className={twMerge(
          'pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 opacity-0',
          isOpen && value && 'pointer-events-auto opacity-100',
        )}
        size="24"
        onClick={onClear}
      >
        <IconCircleX className="h-4 w-4" />
      </IconButton>
    </div>
  );
});

export default Search;
