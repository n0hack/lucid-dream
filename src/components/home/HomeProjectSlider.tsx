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
      {projects.map(({ id, data }) => {
        return (
          <a
            key={id}
            href={data.links['site'] ?? data.links['github'] ?? undefined}
            title={
              data.links['site']
                ? `${data.title} 사이트로 이동`
                : data.links['github']
                ? `${data.title} 깃허브로 이동`
                : ''
            }
            aria-label={
              data.links['site']
                ? `${data.title} 사이트로 이동`
                : data.links['github']
                ? `${data.title} 깃허브로 이동`
                : ''
            }
          >
            <Card
              thumbnail={data.thumbnail}
              title={data.title}
              description={data.descriptions[0]}
              date={data.date}
              category={data.tags[0]}
            />
          </a>
        );
      })}
    </Slider>
  );
};

export default HomeProjectSlider;
