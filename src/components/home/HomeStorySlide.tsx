import { Card, Responsive, SlickSlider } from '@components/common';
import type { StoryCollection } from '@custom-types/collection';

type HomeStorySlideProps = {
  stories: StoryCollection;
};

const HomeStorySlide = ({ stories }: HomeStorySlideProps) => {
  return (
    <Responsive className="relative px-2 lg:px-6">
      <div className="px-4 lg:px-4">
        <h2 className="text-3xl font-bold text-black lg:text-4xl">최신 스토리</h2>
      </div>
      <SlickSlider>
        {stories.map(({ id, data }) => (
          <Card
            key={id}
            thumbnail={data.thumbnail}
            title={data.title}
            description={data.summary}
            metadata={{ date: data.date, category: data.category }}
          />
        ))}
      </SlickSlider>
    </Responsive>
  );
};

export default HomeStorySlide;
