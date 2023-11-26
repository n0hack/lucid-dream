import React from 'react';
import dayjs from 'dayjs';

type CardProps = {
  thumbnail: string;
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
          src={thumbnail}
          alt={title}
        />
      </div>
      <div className="mt-6 flex h-[110px] w-full flex-col gap-2 px-6">
        <h3 className="line-clamp-2 max-h-[54px] text-lg font-semibold text-black">{title}</h3>
        <p className="line-clamp-2 max-h-[48px] overflow-hidden text-gray-600">{description}</p>
      </div>
      <div className="mt-6 px-6">
        <p className="flex text-sm text-gray-400">
          <span>{dayjs(date).format('YYYY. M. D')}</span>
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
