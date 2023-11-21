import AboutMeItem from './AboutMeItem';

const AboutMe = () => {
  return (
    <div className="mt-8 lg:mt-12">
      <ul className="flex flex-col gap-4">
        <AboutMeItem name="이름">
          <p>전지훈 (Jihun Jeon)</p>
        </AboutMeItem>
        <AboutMeItem name="닉네임">
          <p>루시드 (Lucid)</p>
        </AboutMeItem>
        <AboutMeItem name="이메일">
          <p>jihun@lucid-dream.net</p>
        </AboutMeItem>
        <AboutMeItem name="취미">
          <p>노래, 피아노, 롤, 웹툰, 웹소설, 일본어</p>
        </AboutMeItem>
        <AboutMeItem name="소개">
          <p>상상을 현실로 만드는 멀티 크리에이터를 꿈꾸고 있어요.</p>
          <p>즐기는 것이 성장의 전부라 생각해요.</p>
          <p>배우고 경험한 것을 바탕으로 개발자 생태계에 선한 영향을 주고자 해요.</p>
        </AboutMeItem>
      </ul>
    </div>
  );
};

export default AboutMe;
