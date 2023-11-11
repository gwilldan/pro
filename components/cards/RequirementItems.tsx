import React from "react";
import * as BsIcons from "react-icons/bs";

interface ItemProps {
  constraint_name?: string;
}

const RequirementItems: React.FC<ItemProps> = ({ constraint_name }) => {
  return (
    <div className="flex justify-start items-start gap-[16px]">
      <BsIcons.BsCheckLg size={"24px"} />
      <h5 className="text-[16px] leading-[24px] text-secondary">
        {constraint_name}
      </h5>
    </div>
  );
};

export default RequirementItems;
