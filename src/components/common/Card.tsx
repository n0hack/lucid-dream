import React from 'react';
import dayjs from 'dayjs';

type Thumbnail = {
  src: string;
};

type Metadata = {
  date: Date;
  category?: string;
};

type CardProps = {
  thumbnail: Thumbnail;
  title: string;
  description: string;
  metadata: Metadata;
};

const Card = ({ thumbnail, title, description, metadata }: CardProps) => {
  return (
    <div className="group w-full cursor-pointer overflow-hidden rounded-2xl pb-6 shadow-xl">
      <div className="relative h-[200px] w-full overflow-hidden border-b border-b-gray-200">
        <img
          className="h-full w-full object-cover lg:transition-transform lg:duration-300 lg:group-hover:scale-105"
          src={thumbnail.src}
          alt={title}
        />
      </div>
      <div className="mt-6 flex h-[108px] w-full flex-col gap-2 px-6">
        <p className="truncate text-lg font-bold text-black">{title}</p>
        <p className="line-clamp-3 max-h-[72px] overflow-hidden text-gray-600">{description}</p>
      </div>
      <div className="mt-6 px-6">
        <p className="flex text-sm text-gray-400">
          <span>{dayjs(metadata.date).format('YYYY. M. D')}</span>
          {metadata.category && (
            <React.Fragment>
              <span>﹒</span>
              <span>{metadata.category}</span>
            </React.Fragment>
          )}
        </p>
      </div>
    </div>
  );
};

export default Card;
