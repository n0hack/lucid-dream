import { Card, Responsive, Section, Slider } from '@components/common';
import HomeSectionTitle from './HomeSectionTitle';

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

type HomeProjectSectionProps = {
  projects: Project[];
};

const HomeProjectSection = ({ projects }: HomeProjectSectionProps) => {
  return (
    <Section className="mt-16 lg:mt-24" loading="lazy">
      <Responsive className="relative px-2 lg:px-6">
        <HomeSectionTitle title="프로젝트" />
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
      </Responsive>
    </Section>
  );
};

export default HomeProjectSection;
