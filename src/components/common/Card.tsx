import React from 'react';
import dayjs from 'dayjs';
import type { AstroImage } from '@custom-types/post';

type CardProps = {
  thumbnail: AstroImage;
  title: string;
  description: string;
  date: Date;
  category?: string;
};

const Card = ({ thumbnail, title, description, date, category }: CardProps) => {
  return (
    <div className="group w-full overflow-hidden rounded-2xl pb-6 shadow-xl">
      <div className="relative h-[200px] w-full overflow-hidden border-b border-b-gray-200">
        <img
          className="h-full w-full object-cover lg:transition-transform lg:duration-300 lg:group-hover:scale-105"
          src={thumbnail.src}
          alt={`${title} 썸네일`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="mt-6 flex h-[110px] w-full flex-col gap-2 px-6">
        <h1 className="line-clamp-2 max-h-[54px] text-lg font-bold text-black">{title}</h1>
        <p className="line-clamp-2 max-h-[48px] overflow-hidden text-gray-600">{description}</p>
      </div>
      <div className="mt-6 px-6">
        <p className="flex text-sm text-gray-400">
          <span>{dayjs(date).format('YYYY. MM. DD')}</span>
          {category && (
            <React.Fragment>
              <span>﹒</span>
              <span>{category}</span>
            </React.Fragment>
          )}
        </p>
      </div>
    </div>
  );
};

export default Card;
