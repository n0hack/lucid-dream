import { css } from '@styled-system/css';
import Responsive from './Responsive';

const Footer = () => {
  return (
    <footer className={footer}>
      <Responsive>
        <div className={textBox}>
          <p className={text}>
            <span className={star}>✧</span>
            Lucid Dream. 화려히 반짝일 나의 스토리 안에서
            <span className={star}>✧</span>
          </p>
          <p className={text}>ⓒ 2023. Lucid. All rights reserverd.</p>
        </div>
      </Responsive>
    </footer>
  );
};

const footer = css({
  height: '164pxr',
  display: 'grid',
  background: 'gray',
  desktop: {
    height: '208pxr',
  },
});

const textBox = css({
  height: 'full',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4pxr',
  desktop: {
    gap: '8pxr',
  },
});

const text = css({
  display: 'flex',
  gap: '4pxr',
  color: 'white',
  fontSize: 'sm',
  desktop: {
    fontSize: 'initial',
  },
});

const star = css({
  color: 'yellow.300',
});

export default Footer;
