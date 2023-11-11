import { CLASS_PREVENT_SCROLL } from '@constants';

export type StyleByProps<T extends string> = Record<T, string>;

/**
 * 스크롤 동작을 막는 함수
 */
export const preventScroll = () => {
  document.body.classList.add(CLASS_PREVENT_SCROLL);
};

/**
 * 스크롤 동작을 복구하는 함수
 */
export const restoreScroll = () => {
  document.body.classList.remove(CLASS_PREVENT_SCROLL);
};
