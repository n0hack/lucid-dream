import { Card, Responsive, Section, Slider } from '@components/common';
import { CATEGORY } from '@constants';
import HomeSectionTitle from './HomeSectionTitle';

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

type HomeStorySectionProps = {
  stories: Story[];
};

const HomeStorySection = ({ stories }: HomeStorySectionProps) => {
  return (
    <Section className="mb-12 mt-6 lg:mb-20 lg:mt-14" loading="lazy">
      <Responsive className="relative px-2 lg:px-6">
        <HomeSectionTitle title="최신 스토리" />
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
      </Responsive>
    </Section>
  );
};

export default HomeStorySection;
