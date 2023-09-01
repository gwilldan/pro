import React from "react";

interface TextProp {
  title: string;
}

const MainTitle: React.FC<TextProp> = ({ title }) => {
  return (
    <h1 className="font-[700] text-[32px] leading-[45px] text-grey-500">
      {title}
    </h1>
  );
};

export default MainTitle;
