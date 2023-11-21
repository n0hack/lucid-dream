import { Card, Responsive, SlickSlider } from '@components/common';
import type { ProjectCollection } from '@custom-types/collection';

type HomeProjectSlideProps = {
  projects: ProjectCollection;
};

const HomeProjectSlide = ({ projects }: HomeProjectSlideProps) => {
  return (
    <Responsive className="relative px-2 lg:px-6">
      <div className="px-4 lg:px-4">
        <h2 className="text-3xl font-bold text-black lg:text-4xl">프로젝트</h2>
      </div>
      <SlickSlider>
        {projects.map(({ id, data }) => (
          <Card
            key={id}
            thumbnail={data.thumbnail}
            title={data.title}
            description={data.description}
            metadata={{ date: data.date, category: data.category }}
          />
        ))}
      </SlickSlider>
    </Responsive>
  );
};

export default HomeProjectSlide;
