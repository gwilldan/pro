import React from "react";

const TaskSkeleton = () => {
  return (
    <div className="animate-pulse max-w-[610px] w-full bg-white flex flex-col gap-[24px] ">
      <div className="h-[18px] w-full bg-gray-200" />
      <div className="h-[84px] w-full bg-gray-200" />
      <div className="h-[115px] w-full bg-gray-200" />
      <div className="h-[56px] w-full bg-gray-200" />
    </div>
  );
};

export default TaskSkeleton;
