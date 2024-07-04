import React from "react";

interface OwnProps {
  headerText: string;
}

const PageHeader: React.FC<OwnProps> = ({ headerText }) => {
  return (
    <div className="max-w-fit mx-auto pt-4 pb-2.5">
      <h1 className="text-xl font-semibold uppercase">{headerText}</h1>
      <hr className="w-2/4 mx-auto border-t-4" />
    </div>
  );
};

export default PageHeader;
