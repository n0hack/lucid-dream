import { Responsive } from '@components/common';

const Footer = () => {
  return (
    <footer className="h-40 bg-black lg:h-48">
      <Responsive>
        <div className="flex h-full flex-col items-center justify-center gap-1 lg:gap-2">
          <p className="flex gap-1 text-sm text-white lg:text-base">
            <span className="text-yellow-300">✧</span>
            <span>Lucid Dream. 화려히 반짝일 나의 스토리 안에서</span>
            <span className="text-yellow-300">✧</span>
          </p>
          <p className="flex gap-1 text-sm text-white lg:text-base">ⓒ 2023. Lucid. All rights reserverd.</p>
        </div>
      </Responsive>
    </footer>
  );
};

export default Footer;
