import { Card, Slider } from '@components/common';

type Project = {
  id: string;
  data: {
    thumbnail: { src: string };
    title: string;
    descriptions: string[];
    tags: string[];
    date: Date;
  };
};

type HomeProjectSliderProps = {
  projects: Project[];
};

const HomeProjectSlider = ({ projects }: HomeProjectSliderProps) => {
  return (
    <Slider>
      {projects.map(({ id, data }) => (
        <a key={id} href="#">
          <Card
            thumbnail={data.thumbnail.src}
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
