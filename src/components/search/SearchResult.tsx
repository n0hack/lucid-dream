import { useEffect, useRef, useState } from 'react';
import { Card } from '@components/common';
import { SEARCH_RESULT_MAX_COUNT } from '@constants/style';
import type { AstroImage } from '@custom-types/post';

type FuseItem = {
  href: string;
  thumbnail: AstroImage;
  title: string;
  description: string;
  category: { key: string; value: string };
  date: Date;
};

type SearchResultProps = {
  datas: {
    item: FuseItem;
  }[];
};

const SearchResult = ({ datas }: SearchResultProps) => {
  const [page, setPage] = useState(1);
  const ref = useRef<HTMLDivElement>(null);
  const sliced = datas.slice(0, page * SEARCH_RESULT_MAX_COUNT);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    observer.current = new IntersectionObserver(
      (entries, observer) => {
        if (!entries[0].isIntersecting) return;
        setPage((page) => page + 1);
        observer.disconnect();
      },
      { threshold: 0.7 },
    );
  }, [page]);

  useEffect(() => {
    if (!ref.current || page * SEARCH_RESULT_MAX_COUNT >= datas.length || ref.current.children.length === 0) return;

    if (observer && observer.current) {
      observer.current.observe(ref.current.children[ref.current.children.length - 1]);
    }
  }, [datas.length, page]);

  return (
    <div ref={ref} className="grid gap-8 lg:grid-cols-3">
      {sliced.map(({ item: data }) => (
        <a key={data.href} href={data.href}>
          <Card
            thumbnail={data.thumbnail}
            title={data.title}
            description={data.description}
            date={data.date}
            category={data.category.value}
          />
        </a>
      ))}
    </div>
  );
};

export default SearchResult;
