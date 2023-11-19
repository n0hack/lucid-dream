import Dim from '@components/common/Dim';
import { MAIN_IMAGE_SRC } from '@constants';
import { css } from '@styled-system/css';

const HomeMainImage = () => {
  return (
    <div className={styled.wrapper}>
      <img className={styled.image} src={MAIN_IMAGE_SRC} alt="대표" />
      <Dim deep={20} />
    </div>
  );
};

const styled = {
  wrapper: css({
    position: 'relative',
    w: 'full',
    h: '60vh',
    minH: '400pxr',
  }),
  image: css({
    w: 'full',
    h: 'full',
    objectFit: 'cover',
  }),
};

export default HomeMainImage;
