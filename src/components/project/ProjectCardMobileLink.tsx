import { IconChevronRight } from '@tabler/icons-react';
import type { Link } from './ProjectCard';

type ProjectCardMobileLinkProps = Link;

const ProjectCardMobileLink = ({ name, href }: ProjectCardMobileLinkProps) => {
  if (href === '#' || href === '') return null;

  return (
    <a
      className="inline-flex items-center gap-2 rounded-full bg-gray-100 py-3 pl-5 pr-4 text-sm font-medium text-gray-600"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{name.toUpperCase()}</span>
      <IconChevronRight className="h-4 w-4" />
    </a>
  );
};

export default ProjectCardMobileLink;
