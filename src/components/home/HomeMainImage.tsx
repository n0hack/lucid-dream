import { BackgroundImage, Dim } from '@components/common';

const HomeMainImage = () => {
  return (
    <div className="relative h-[70vh] min-h-[400px] w-full">
      <BackgroundImage alt="대표" />
      <Dim className="bg-dim-020" />
    </div>
  );
};

export default HomeMainImage;
