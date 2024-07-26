import { IconButton } from '@components/common';
import { IconChevronRight } from '@tabler/icons-react';

type NextSlideButtonProps = {
  onClick?: () => void;
};

const NextSlideButton = ({ onClick }: NextSlideButtonProps) => {
  return (
    <IconButton className="absolute -top-1 right-[22px] lg:right-[30px]" onClick={onClick} aria-label="이전 슬라이드">
      <IconChevronRight className="h-7 w-7 lg:h-8 lg:w-8" />
    </IconButton>
  );
};

export default NextSlideButton;
