import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { css } from '@styled-system/css';
import type { SystemStyleObject } from '@styled-system/types';
import { IconCircleX, IconSearch } from '@tabler/icons-react';
import IconButton from '../IconButton';

type SearchProps = ComponentPropsWithoutRef<'input'> & {
  wrapperCustom?: SystemStyleObject;
  isOpen: boolean;
  onClear: () => void;
};

const Search = forwardRef<HTMLInputElement, SearchProps>(function (
  { wrapperCustom, isOpen, value, onChange, onKeyDown, onClear, ...rest },
  ref,
) {
  return (
    <div className={css(wrapper, wrapperCustom)}>
      <IconSearch className={searchIcon} />
      <input
        ref={ref}
        className={input}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        maxLength={48}
        placeholder="제목이나 내용으로 검색하기"
        {...rest}
      />
      <IconButton custom={css.raw(clearButton, isOpen && value ? showClearButton : {})} size={24} onClick={onClear}>
        <IconCircleX width={18} height={18} />
      </IconButton>
    </div>
  );
});

const wrapper = css.raw({
  position: 'relative',
  h: 'full',
  rounded: '4pxr',
});

const searchIcon = css({
  position: 'absolute',
  top: '50%',
  left: '12pxr',
  transform: 'translateY(-50%)',
  w: '24pxr',
  h: '24pxr',
  pointerEvents: 'none',
});

const input = css({
  w: 'full',
  h: 'full',
  px: '48pxr',
  fontSize: 'sm',
  bg: 'transparent',
  rounded: '4pxr',
  outline: '2px solid token(colors.primary)',
  _placeholder: {
    color: 'gray.400',
  },
  desktop: {
    outline: '0',
  },
});

const clearButton = css.raw({
  position: 'absolute',
  top: '50%',
  right: '12pxr',
  transform: 'translateY(-50%)',
  opacity: 0,
  pointerEvents: 'none',
});

const showClearButton = css.raw({
  opacity: 1,
  pointerEvents: 'auto',
});

export default Search;
