import { CLASSNAME_PREVENT_SCROLL } from '@constants/style';

/**
 * 뷰포트의 스크롤 동작을 막는 함수
 */
export const preventScroll = () => {
  document.body.classList.add(CLASSNAME_PREVENT_SCROLL);
};

/**
 * 뷰포트의 스크롤 동작을 복구하는 함수
 */
export const allowScroll = () => {
  document.body.classList.remove(CLASSNAME_PREVENT_SCROLL);
};
