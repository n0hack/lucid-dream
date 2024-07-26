import { Card, Slider } from '@components/common';
import type { Story } from '@custom-types/post';
import { getCategoryNameFromSlug } from '@utils/post';

type HomeStorySliderProps = {
  stories: Story[];
};

const HomeStorySlider = ({ stories }: HomeStorySliderProps) => {
  return (
    <Slider>
      {stories.map(({ id, slug, data }) => (
        <a
          key={id}
          href={`/story/${slug.replace('/', '/post/')}`}
          title={`${data.title} 스토리 보러가기`}
          aria-label={`${data.title} 스토리 보러가기`}
        >
          <Card
            thumbnail={data.thumbnail}
            title={data.title}
            description={data.description}
            date={data.date}
            category={getCategoryNameFromSlug(slug)}
          />
        </a>
      ))}
    </Slider>
  );
};

export default HomeStorySlider;
