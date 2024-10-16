import React, { useEffect, useState } from 'react';
import { IconButton } from '@components/common';
import { DESKTOP_BREAKPOINT } from '@constants/style';
import { IconAdjustmentsHorizontal, IconX } from '@tabler/icons-react';
import { preventScroll, allowScroll } from '@utils/style';
import StoryCategory from './StoryCategory';

type StoryCategoryExpansionButtonProps = {
  categories: {
    name: string;
    count: number;
    href: string;
  }[];
  pathname: string;
};

const StoryCategoryExpansionButton = ({ pathname, categories }: StoryCategoryExpansionButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickButton = () => {
    setIsOpen(true);
    preventScroll();
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
    allowScroll();
  };

  useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      if (entries[0].contentRect.width >= DESKTOP_BREAKPOINT) {
        handleCloseMenu();
      }
    });
    ro.observe(document.body);

    return () => {
      ro.disconnect();
    };
  }, []);

  return (
    <React.Fragment>
      <button
        className="grid h-11 w-11 shrink-0 place-items-center rounded-md border lg:hidden"
        onClick={handleClickButton}
      >
        <IconAdjustmentsHorizontal className="h-6 w-6 text-black" />
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-categoryBox flex h-[100dvh] w-full flex-col overflow-y-auto bg-white">
          <div className="mt-6 flex items-center justify-between pl-6 pr-[18px]">
            <h2 className="text-2xl font-semibold text-black">Categories</h2>
            <IconButton onClick={handleCloseMenu} aria-label="카테고리창 닫기">
              <IconX className="h-8 w-8 text-black" />
            </IconButton>
          </div>
          <div className="relative mt-6 flex flex-1 flex-col overflow-y-auto px-6">
            <ul className="flex flex-1 flex-wrap content-start items-start justify-start gap-3 overflow-y-auto pb-12">
              {categories.map((category) => (
                <StoryCategory
                  key={category.href}
                  pathname={pathname}
                  name={category.name}
                  count={category.count}
                  href={category.href}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default StoryCategoryExpansionButton;
