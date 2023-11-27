import { twMerge } from 'tailwind-merge';
import { IconChevronLeft, IconChevronRight, IconDots } from '@tabler/icons-react';
import PaginationButton from './PaginationButton';
import PaginationIconButton from './PaginationIconButton';

type Page = {
  page: number | 'dot';
  isCurrent: boolean;
};

type PaginationProps = {
  className?: string;
  page: number;
  lastPage: number;
  buttonUrlPrefix: string;
  prevUrl?: string;
  nextUrl?: string;
};

/**
 * @param buttonUrlPrefix `/project/page`, `/story/all/page` 형태로 작성
 */
const Pagination = ({ className, page = 1, lastPage, buttonUrlPrefix, prevUrl, nextUrl }: PaginationProps) => {
  const getDotPageNumber = (dotIndex: number, pages: Page[]) => {
    const leftPage = pages[dotIndex - 1].page as number;
    const rightPage = pages[dotIndex + 1].page as number;

    return Math.floor((leftPage + rightPage) / 2);
  };

  const renderPageNumbers = (current: number) => {
    // 페이지 번호가 범위를 벗어난 경우, 아무것도 렌더링하지 않음
    if (page < 1 || page > lastPage) {
      return (
        <PaginationButton key={`pagination/button/${page}/none`} className="cursor-not-allowed">
          {page}
        </PaginationButton>
      );
    }

    const pages: Page[] = [];

    // 페이지 버튼 최대 7개까지 보여주기
    if (lastPage <= 7) {
      for (let page = 1; page <= lastPage; page++) {
        pages.push({ page, isCurrent: page === current });
      }
    } else {
      // 현재 선택한 페이지가 4보다 작은 경우
      // 앞의 페이지는 그대로 모두 보여주고, 뒤에 Dot 버튼과 마지막 페이지 버튼을 붙임
      if (current < 4) {
        for (let page = 1; page <= 6; page++) {
          pages.push({ page, isCurrent: page === current });
        }
        pages.push({ page: 'dot', isCurrent: false });
        pages.push({ page: lastPage, isCurrent: false });
      } else {
        // 현재 선택한 페이지가 4인 경우
        if (current - 3 <= 1) {
          for (let page = 1; page <= current; page++) {
            pages.push({ page, isCurrent: page === current });
          }
        } else {
          pages.push({ page: 1, isCurrent: false });
          pages.push({ page: 'dot', isCurrent: false });
          if (lastPage - current >= 3) {
            for (let page = current - 2; page <= current; page++) {
              pages.push({ page, isCurrent: page === current });
            }
          } else {
            for (let page = current - (5 - (lastPage - current)); page <= current; page++) {
              pages.push({ page, isCurrent: page === current });
            }
          }
        }

        // 남은 페이지 처리
        if (current + 3 < lastPage) {
          for (let page = current + 1; page <= current + 2; page++) {
            pages.push({ page, isCurrent: page === current });
          }
          pages.push({ page: 'dot', isCurrent: false });
          pages.push({ page: lastPage, isCurrent: false });
        } else {
          for (let page = current + 1; page <= lastPage; page++) {
            pages.push({ page, isCurrent: page === current });
          }
        }
      }
    }

    return pages.map(({ page, isCurrent }, index) => {
      if (page === 'dot') {
        return (
          <PaginationIconButton
            key={`pagination/button/${page}/${index}`}
            href={`${buttonUrlPrefix}/${getDotPageNumber(index, pages)}`}
          >
            <IconDots />
          </PaginationIconButton>
        );
      } else {
        return (
          <PaginationButton
            key={`pagination/button/${page}/${index}`}
            className={isCurrent ? 'bg-primary text-white' : 'lg:hover:bg-gray-100 lg:hover:text-gray-600'}
            href={`${buttonUrlPrefix}/${page}`}
          >
            {page}
          </PaginationButton>
        );
      }
    });
  };

  return (
    <div className={twMerge('flex w-full flex-wrap items-center justify-center gap-2', className)}>
      <PaginationIconButton disabled={page <= 1 || page > lastPage} href={prevUrl}>
        <IconChevronLeft />
      </PaginationIconButton>
      {renderPageNumbers(page)}
      <PaginationIconButton disabled={page < 1 || page >= lastPage} href={nextUrl}>
        <IconChevronRight />
      </PaginationIconButton>
    </div>
  );
};

export default Pagination;
