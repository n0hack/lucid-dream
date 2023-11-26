import { IconChevronRight } from '@tabler/icons-react';
import type { Link } from './ProjectCard';

type ProjectCardDesktopLinkProps = Link;

const getName = (name: string) => {
  switch (name) {
    case 'site':
      return '웹사이트 접속하기';
    case 'github':
      return '깃허브 보기';
    case 'story':
      return '스토리 보기';
  }
};

const ProjectCardDesktopLink = ({ name, href }: ProjectCardDesktopLinkProps) => {
  if (href === '#' || href === '') return null;

  return (
    <a
      className="flex items-center justify-between gap-2 rounded-md bg-white py-4 pl-5 pr-4 font-medium"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{getName(name)}</span>
      <IconChevronRight className="h-4 w-4" />
    </a>
  );
};

export default ProjectCardDesktopLink;
