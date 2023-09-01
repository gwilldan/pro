import React from "react";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";

const JobCard = () => {
  return (
    <div className="h-[310px] min-w-[296px] md:min-w-[525px] rounded-[12px] p-[16px] shadow-md flex flex-col justify-between">
      <div className="flex justify-between items-center mb-[4px]">
        <h4 className="font-[700] text-[20px] leading-[28px] text-secondary">
          Job Title
        </h4>
        <h6 className="font-[400] text-[16px] leading-[24px] text-secondary">
          Department
        </h6>
      </div>
      <h6 className="text-[14px] font-[700] text-secondary mb-[12px]">
        Company Name
      </h6>
      <p className="text-justify text-[16px] leading-[24px] text-secondary mb-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor{" "}
      </p>
      <div className="flex justify-start items-center gap-[32px] mb-[16px]">
        <div className="flex justify-start items-center gap-[12px]">
          <MdIcons.MdLocationPin size={16} />
          <span className="leading-[21px] text-[14px] text-secondary">
            Location
          </span>
        </div>
        <div className="flex justify-start items-center gap-[12px]">
          <AiIcons.AiOutlineClockCircle size={16} />
          <span className="leading-[21px] text-[14px] text-secondary">
            Contract type
          </span>
        </div>
      </div>
      <div className="flex gap-[16px] justify-between items-center">
        <div className="flex justify-center items-center border-[1px] rounded-[4px] border-secondary py-[8px] px-[19.5px] ">
          <span className="leading-[24px] text-primary text-[16px] ">
            Check it out
          </span>
        </div>
        <div className="flex justify-center items-center bg-primary rounded-[4px]  py-[8px] px-[19.5px] ">
          <span className="leading-[24px] text-white text-[16px] font-[500]">
            Apply Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
