import { IconButton } from '@components/common';
import { IconChevronLeft } from '@tabler/icons-react';

type PrevSlideButtonProps = {
  onClick?: () => void;
};

const PrevSlideButton = ({ onClick }: PrevSlideButtonProps) => {
  return (
    <IconButton className="absolute -top-1 right-[64px] lg:right-[74px]" onClick={onClick} aria-label="다음 슬라이드">
      <IconChevronLeft className="h-7 w-7 lg:h-8 lg:w-8" />
    </IconButton>
  );
};

export default PrevSlideButton;
