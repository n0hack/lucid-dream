import { Card, Slider } from '@components/common';
import { CATEGORY } from '@constants';

type Story = {
  id: string;
  slug: string;
  data: {
    thumbnail: { src: string };
    title: string;
    description: string;
    tags: string[];
    date: Date;
  };
};

type HomeStorySliderProps = {
  stories: Story[];
};

const HomeStorySlider = ({ stories }: HomeStorySliderProps) => {
  return (
    <Slider>
      {stories.map(({ id, slug, data }) => (
        <a key={id} href={`/story/${slug.replace('/', '/post/')}`}>
          <Card
            thumbnail={data.thumbnail.src}
            title={data.title}
            description={data.description}
            date={data.date}
            category={CATEGORY[slug.split('/')[0] as keyof typeof CATEGORY]}
          />
        </a>
      ))}
    </Slider>
  );
};

export default HomeStorySlider;
