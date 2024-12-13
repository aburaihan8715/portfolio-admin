type sectionHeadingProps = {
  heading: string;
};

const SectionHeading = ({ heading }: sectionHeadingProps) => {
  return (
    <h1 className="sm:2xl title-font bg-gradient-to-r from-orange-600 via-green-700 to-indigo-600 bg-clip-text text-xl font-semibold text-gray-900 text-transparent md:text-3xl">
      {heading}
    </h1>
  );
};

export default SectionHeading;
