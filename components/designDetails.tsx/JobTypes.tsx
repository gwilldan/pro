import React from "react";
import JobCard from "./JobCard";

const JobTypes = () => {
  return (
    <div className="p-[16px] overflow-hidden rounded-[8px] shadow-md">
      <div className="md:flex justify-between items-end md:mb-[32px]">
        <div>
          <h3 className="font-[700] text-[24px] md:text-[48px] mb-[8px] leading-[34px] md:leading-[58px] text-center md:text-left text-secondary">
            Job Types
          </h3>
          <p className="leading-[24px] text-[16px] md:text-[18px] text-secondary mb-[16px] text-center md:text-left">
            Here are some Jobs that requires some deliverables as in this task
          </p>
        </div>
        <div className="flex justify-center items-center px-[24px] py-[12px] rounded-[1px] border-primary border-[1px]">
          <h5 className="text-[18px] leading-[28px] text-primary">Post Jobs</h5>
        </div>
      </div>
      <div className="flex gap-[16px] scroll-smooth overflow-x-scroll no-scrollbar py-[8px]">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};

export default JobTypes;
