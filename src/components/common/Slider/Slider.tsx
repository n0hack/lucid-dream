import type { PropsWithChildren } from 'react';
import type { Settings } from 'react-slick';
import ReactSlick from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { twMerge } from 'tailwind-merge';
import { DESKTOP_BREAKPOINT, TABLE_BREAKPOINT } from '@constants/style';
import NextSlideButton from './NextSlideButton';
import PrevSlideButton from './PrevSlideButton';
import './Slider.css';

type SliderProps = {
  className?: string;
};

const Slider = ({ className, children }: PropsWithChildren<SliderProps>) => {
  const settings: Settings = {
    slidesToShow: 3,
    responsive: [
      {
        // <= 768
        breakpoint: TABLE_BREAKPOINT,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        // <= 1024
        breakpoint: DESKTOP_BREAKPOINT,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    prevArrow: <PrevSlideButton />,
    nextArrow: <NextSlideButton />,
  };

  return (
    <div className={twMerge('mt-6 overflow-hidden pb-10 lg:mt-8', className)}>
      <ReactSlick {...settings}>{children}</ReactSlick>
    </div>
  );
};

export default Slider;
