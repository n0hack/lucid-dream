import ProjectCardDesktopLink from './ProjectCardDesktopLink';
import ProjectCardMobileLink from './ProjectCardMobileLink';

export type Link = {
  name: string;
  href: string;
};

type ProjectCardProps = {
  thumbnail: string;
  title: string;
  descriptions: string[];
  tags: string[];
  links: Link[];
};

const ProjectCard = ({ thumbnail, title, descriptions, tags, links }: ProjectCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
      {/* Thumbnail */}
      <div className="group relative h-[260px] shrink-0 overflow-hidden rounded-2xl lg:h-[240px] lg:w-[320px] lg:cursor-pointer">
        <img
          className="h-full w-full object-cover transition-[filter] lg:group-hover:blur-sm"
          src={thumbnail}
          alt={title}
        />
        <div className="absolute inset-0 hidden lg:block lg:duration-300 lg:group-hover:bg-dim-050 lg:group-hover:transition-colors">
          <div className="absolute bottom-6 flex w-full translate-y-6 flex-col gap-4 px-6 opacity-0 lg:transition-all lg:duration-300 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
            {links.map((link) => (
              <ProjectCardDesktopLink key={link.href} {...link} />
            ))}
          </div>
        </div>
      </div>

      {/* Info */}
      <div>
        <div className="mt-6 flex w-full flex-col gap-3 lg:mt-0 lg:gap-4">
          <h3 className="truncate px-2 text-2xl font-bold text-black lg:px-0">{title}</h3>
          <div className="flex flex-col gap-1 px-2 text-gray-600 lg:h-[104px] lg:overflow-hidden lg:px-0">
            {descriptions.map((description, index) => (
              <p key={index}>{description}</p>
            ))}
          </div>
        </div>
        <ul className="mt-4 hidden gap-2 lg:flex">
          {tags.map((tag, index) => (
            <li key={index} className="rounded-md bg-black px-4 py-2 text-sm text-white">
              #{tag}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Links */}
      <div className="mt-6 flex gap-3 px-2 lg:hidden">
        {links.map((link) => (
          <ProjectCardMobileLink key={link.href} {...link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
