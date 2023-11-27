import { CATEGORY } from '@constants/post';

/**
 * `Story` 문서의 `slug`를 실제 페이지 주소로 변환하는 함수
 * - "javascript/1" → "/story/javascript/post/1"
 */
export const getStoryLinkFromSlug = (slug: string) => {
  return `/story/${slug.replace('/', '/post/')}`;
};

/**
 * `Story` 문서의 `slug`를 통해 카테고리 이름을 가져오는 함수
 * - 카테고리 목록은 `constants/post.ts`에서 관리
 * - "javascript/1" → "자바스크립트"
 */
export const getCategoryNameFromSlug = (slug: string) => {
  return CATEGORY[slug.split('/')[0] as keyof typeof CATEGORY];
};
