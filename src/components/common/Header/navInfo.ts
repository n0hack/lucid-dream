type NavInfo = {
  name: string;
  path: string;
  animation: `animate-[showMenuItem_${number}s_${'forwards' | 'forwards_'}${'' | number}${'' | 's'}]`;
};

const navInfo: NavInfo[] = [
  {
    name: '소개',
    path: '/about',
    animation: 'animate-[showMenuItem_0.75s_forwards]',
  },
  {
    name: '프로젝트',
    path: '/project/page/1',
    animation: 'animate-[showMenuItem_0.75s_forwards_0.15s]',
  },
  {
    name: '스토리',
    path: '/story/all/page/1',
    animation: 'animate-[showMenuItem_0.75s_forwards_0.3s]',
  },
  {
    name: '태그',
    path: '/tag',
    animation: 'animate-[showMenuItem_0.75s_forwards_0.45s]',
  },
];

export default navInfo;
