type subHeadingProps = {
  subHeading: string;
};

const SubHeading = ({ subHeading }: subHeadingProps) => {
  return (
    <h4 className="text-2xl font-medium text-transparent max-w-max bg-gradient-to-r from-orange-600 via-green-700 to-fuchsia-700 bg-clip-text">
      {subHeading}
    </h4>
  );
};

export default SubHeading;
