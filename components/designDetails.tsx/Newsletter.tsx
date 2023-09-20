import React from "react";
import TaskShare from "./TaskShare";

const Newsletter = () => {
  return (
    <div>
      <div className="mb-[32px]">
        <h4 className="mb-[16px] text-center font-[700] text-[24px] leading-[34px]">
          Subscribe to updates from participants
        </h4>
        <div className="mb-[16px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-[8px] outline-none mb-[16px] h-[48px] shadow-md px-[16px] py-[12px]  text-[16px] leading-[24px] text-secondary placeholder:text-secondary placeholder:text-[16px]"
          />
          <div className="flex justify-center items-center h-[48px] rounded-[8px] p-[20px] bg-primary">
            <h4 className="text-white text-[16px] font-[500] leading-[24px]">
              Subscribe
            </h4>
          </div>
        </div>
        <p className="text-[12px] leading-[18px] text-center md:text-left">
          By subscribing you agree to with our{" "}
          <span className="underline">Privacy Policy.</span>
        </p>
      </div>
      <TaskShare />
    </div>
  );
};

export default Newsletter;
