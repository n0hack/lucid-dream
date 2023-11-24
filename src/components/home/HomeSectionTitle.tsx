type HomeSectionTitleProps = {
  title: string;
};

const HomeSectionTitle = ({ title }: HomeSectionTitleProps) => {
  return (
    <div className="px-4">
      <h2 className="text-3xl font-bold text-black lg:text-4xl">{title}</h2>
    </div>
  );
};

export default HomeSectionTitle;
