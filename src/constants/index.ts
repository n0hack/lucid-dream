/** 반응형 분기점 (innerWidth) */
export const BREAKPOINT = 1024;

/** Header 색상이 변환되는 지점 (scrollY) */
export const HEADER_TRANSITION_POINT = 64;

/** 스크롤 동작 제어를 담당하는 DOM 클래스 */
export const CLASSNAME_PREVENT_SCROLL = 'prevent-scroll';

/** 메인으로 사용하는 이미지 경로 */
export const MAIN_IMAGE_SRC = (width: '1280' | '1920' | '3140' = '3140') => `/images/main@${width}.webp`;

/** 인덱스 페이지 슬라이드에 노출할 프로젝트 최대 개수 */
export const PROJECT_SLIDE_MAX_COUNT = 10;

/** 인덱스 페이지 슬라이드에 노출할 스토리 최대 개수 */
export const STORY_SLIDE_MAX_COUNT = 6;

/** 검색 결과에 노출할 스토리 최대 개수 (무한 스크롤) */
export const SEARCH_RESULT_MAX_COUNT = 9;

/** 스토리 카테고리 */
export const CATEGORY = {
  all: '전체',
  'web-basic': 'Web Basic',
  javascript: '자바스크립트',
  'problem-solving': '문제풀이',
};
