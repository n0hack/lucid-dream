import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconCircleX, IconSearch } from '@tabler/icons-react';
import IconButton from '../IconButton';

type SearchProps = ComponentPropsWithoutRef<'input'> & {
  wrapperClassName?: string;
  isOpen: boolean;
  onClear: () => void;
};

const Search = forwardRef<HTMLInputElement, SearchProps>(function (
  { wrapperClassName, isOpen, value, onChange, onKeyDown, onClear, ...rest },
  ref,
) {
  return (
    <div className={twMerge('relative h-full rounded-4pxr', wrapperClassName)}>
      <IconSearch className="pointer-events-none absolute left-12pxr top-1/2 h-24pxr w-24pxr -translate-y-1/2" />
      <input
        ref={ref}
        className="h-full w-full rounded-4pxr bg-transparent px-48pxr text-sm outline-primary placeholder:text-gray-400"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        maxLength={48}
        placeholder="제목이나 내용으로 검색하기 >_<"
        {...rest}
      />
      <IconButton
        size="24"
        className={twMerge(
          'pointer-events-none absolute right-12pxr top-1/2 -translate-y-1/2 opacity-0',
          isOpen && value && 'pointer-events-auto opacity-100',
        )}
        onClick={onClear}
      >
        <IconCircleX className="h-18pxr w-18pxr" />
      </IconButton>
    </div>
  );
});

export default Search;
