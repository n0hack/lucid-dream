/** 반응형 분기점 (innerWidth) */
export const BREAKPOINT = 1024;

/** Header 색상이 변환되는 지점 (scrollY) */
export const HEADER_TRANSITION_POINT = 64;

/** 스크롤 동작 제어에 대한 DOM 클래스 */
export const CLASSNAME_PREVENT_SCROLL = 'prevent-scroll';

/** 메인으로 사용하는 이미지 경로 */
export const MAIN_IMAGE_SRC = (width: '1280' | '1920' | '3140' = '3140') => `/images/main@${width}.webp`;

/** Slick 슬라이드에 노출할 프로젝트 최대 개수 */
export const PROJECT_SLIDE_MAX_COUNT = 10;

/** Slick 슬라이드에 노출할 스토리 최대 개수 */
export const STORY_SLIDE_MAX_COUNT = 6;
