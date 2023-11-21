import type { PropsWithChildren } from 'react';
import type { Settings } from 'react-slick';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { twMerge } from 'tailwind-merge';
import { BREAKPOINT } from '@constants';
import NextSlideButton from './NextSlideButton';
import PrevSlideButton from './PrevSlideButton';
import './SlickSlider.css';

type SlickSliderProps = {
  className?: string;
};

const SlickSlider = ({ className, children }: PropsWithChildren<SlickSliderProps>) => {
  const settings: Settings = {
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: BREAKPOINT,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: <PrevSlideButton />,
    nextArrow: <NextSlideButton />,
  };

  return (
    <div className={twMerge('mt-6 overflow-hidden pb-8', className)}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SlickSlider;
