import React from 'react';
import Slider, { type Settings } from 'react-slick';
import clsx from 'clsx';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import IconButton from '@components/common/IconButton';
import Responsive from '@components/common/Responsive';
import { css } from '@styled-system/css';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

type HomeProjectSectionProps = {
  projects: {
    data: {
      thumbnail: {
        src: string;
        width: number;
        height: number;
        format: 'png' | 'jpg' | 'jpeg' | 'tiff' | 'webp' | 'gif' | 'svg' | 'avif';
      };
      title: string;
      description: string;
      tags: string[];
      date: Date;
    };
  }[];
};

const HomeProjectSection = ({ projects }: HomeProjectSectionProps) => {
  const settings: Settings = {
    prevArrow: (
      <IconButton
        custom={css.raw({ position: 'absolute', top: 0, desktop: { right: '74pxr' }, right: '58pxr', zIndex: 50 })}
      >
        <IconChevronLeft width={24} height={24} />
      </IconButton>
    ),
    nextArrow: (
      <IconButton custom={css.raw({ position: 'absolute', top: 0, desktop: { right: '30pxr' }, right: '14pxr' })}>
        <IconChevronRight width={24} height={24} />
      </IconButton>
    ),
    className: css({
      mt: '24pxr',
      position: 'initial!',
      '& .slick-slide > div ': {
        mx: '24pxr',
      },
      '& .slick-list': {
        boxSizing: 'initial!',
        pb: '32pxr!',
      },
    }),
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={css({ mt: '32pxr', desktop: { mt: '64pxr' } })}>
      <Responsive custom={css.raw({ position: 'relative', pl: 0, pr: 0, desktop: { pl: '16pxr', pr: '16pxr' } })}>
        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: '24pxr' })}>
          <h2 className={css({ fontSize: '3xl', fontWeight: 'bold', color: 'black' })}>프로젝트</h2>
        </div>
        <Slider {...settings}>
          {projects.map(({ data }) => (
            <div key={data.title} className={clsx(card, 'group')}>
              <div className={thumbnail}>
                <img src={data.thumbnail.src} alt={data.title} />
              </div>
              <ul className={tagList}>
                {data.tags.map((tag) => (
                  <li className={tagItem}>#{tag}</li>
                ))}
              </ul>
              <div className={description}>
                <p className={title}>{data.title}</p>
                <p className={summary}>{data.description}</p>
              </div>
              <div className={meta}>{data.date.toDateString()}</div>
            </div>
          ))}
        </Slider>
      </Responsive>
    </div>
  );
};

const card = css({
  w: 'full',
  pb: '24pxr',
  rounded: '12pxr',
  overflow: 'hidden',
  boxShadow: 'xl',
  cursor: 'pointer',
});

const thumbnail = css({
  w: 'full',
  h: '180pxr',
  borderBottom: '1px solid token(colors.gray.200)',
  roundedTop: '12pxr',
  overflow: 'hidden',
  '& img': {
    w: 'full',
    h: 'full',
    objectFit: 'cover',
    desktop: {
      transition: 'transform 0.2s ease-in-out',
      _groupHover: {
        transform: 'scale(1.1)',
      },
    },
  },
});

const tagList = css({
  display: 'flex',
  gap: '8pxr',
  mt: '24pxr',
  px: '24pxr',
});

const tagItem = css({
  py: '4pxr',
  px: '8pxr',
  fontSize: 'sm',
  color: 'white',
  bg: 'black',
  rounded: '4pxr',
});

const description = css({
  w: 'full',
  h: '80pxr',
  mt: '24pxr',
  px: '24pxr',
  display: 'flex',
  flexDir: 'column',
  gap: '8pxr',
});

const title = css({
  fontSize: 'xl',
  fontWeight: 'bold',
  overflow: 'hidden',
  truncate: true,
});

const summary = css({
  maxH: '44pxr',
  overflow: 'hidden',
  color: 'gray.700',
});

const meta = css({
  mt: '24pxr',
  px: '24pxr',
  fontSize: 'sm',
  color: 'gray.400',
});

export default HomeProjectSection;
