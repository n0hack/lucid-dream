import { useEffect, useRef, useState } from 'react';
import { Card } from '@components/common';
import { SEARCH_RESULT_MAX_COUNT } from '@constants/style';
import type { AstroImage } from '@custom-types/post';

type Story = {
  href: string;
  thumbnail: AstroImage;
  title: string;
  description: string;
  category: { key: string; value: string };
  date: Date;
};

type TagSearchResultProps = {
  stories: Story[];
};

const TagSearchResult = ({ stories }: TagSearchResultProps) => {
  const [index, setIndex] = useState(1);
  const ref = useRef<HTMLDivElement>(null);
  const slicedStories = stories.slice(0, index * SEARCH_RESULT_MAX_COUNT);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    observer.current = new IntersectionObserver(
      (entries, observer) => {
        if (!entries[0].isIntersecting) return;
        setIndex((index) => index + 1);
        observer.disconnect();
      },
      { threshold: 0.7 },
    );
  }, [index]);

  useEffect(() => {
    if (!ref.current || index * SEARCH_RESULT_MAX_COUNT >= stories.length || ref.current.children.length === 0) return;

    if (observer && observer.current) {
      observer.current.observe(ref.current.children[ref.current.children.length - 1]);
    }
  }, [index, stories.length]);

  return (
    <div ref={ref} className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
      {slicedStories.map((story) => (
        <a
          key={story.href}
          href={story.href}
          title={`${story.title} 스토리 보러가기`}
          aria-label={`${story.title} 스토리 보러가기`}
        >
          <Card
            thumbnail={story.thumbnail}
            title={story.title}
            description={story.description}
            date={story.date}
            category={story.category.value}
          />
        </a>
      ))}
    </div>
  );
};

export default TagSearchResult;
