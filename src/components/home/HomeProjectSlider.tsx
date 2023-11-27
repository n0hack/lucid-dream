import { Card, Slider } from '@components/common';
import type { AstroImage } from '@custom-types/post';

type HomeProjectSliderProps = {
  projects: {
    id: string;
    data: {
      thumbnail: AstroImage;
      title: string;
      descriptions: string[];
      tags: string[];
      date: Date;
    };
  }[];
};

const HomeProjectSlider = ({ projects }: HomeProjectSliderProps) => {
  return (
    <Slider>
      {projects.map(({ id, data }) => (
        <a key={id} href="#">
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
