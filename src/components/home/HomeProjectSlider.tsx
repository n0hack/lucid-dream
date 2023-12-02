import { Card, Slider } from '@components/common';
import type { Project } from '@custom-types/post';

type HomeProjectSliderProps = {
  projects: {
    id: string;
    data: Project;
  }[];
};

const HomeProjectSlider = ({ projects }: HomeProjectSliderProps) => {
  return (
    <Slider>
      {projects.map(({ id, data }) => (
        <a key={id} href={data.links['site'] ?? data.links['github'] ?? undefined}>
          <Card
            thumbnail={data.thumbnail}
            title={data.title}
            description={data.descriptions[0]}
            date={data.date}
            category={data.tags[0]}
          />
        </a>
      ))}
    </Slider>
  );
};

export default HomeProjectSlider;
