import React from 'react';

type AboutMeItemProps = {
  name: string;
};

const AboutMeItem = ({ name, children }: React.PropsWithChildren<AboutMeItemProps>) => {
  return (
    <li className="flex items-baseline gap-6">
      <div className="w-[80px] min-w-[80px] rounded-md bg-black py-2 text-center text-sm font-medium text-white">
        {name}
      </div>
      <div className="flex flex-col gap-1">{children}</div>
    </li>
  );
};

export default AboutMeItem;
