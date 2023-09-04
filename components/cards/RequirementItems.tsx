import React from "react";
import * as BsIcons from "react-icons/bs";

interface ItemProps {
  text: string;
}

const RequirementItems: React.FC<ItemProps> = ({ text }) => {
  return (
    <div className="flex justify-start items-start gap-[16px]">
      <BsIcons.BsCheckLg size={"24px"} />
      <h5 className="text-[16px] leading-[24px] text-secondary">{text}</h5>
    </div>
  );
};

export default RequirementItems;
