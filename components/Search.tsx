import React from "react";
import * as GoIcons from "react-icons/go";
const Search = () => {
  return (
    <div>
      <div className="sm:w-[389px] w-[287px] h-[74px] gap-2 flex flex-col">
        <div className="w-[100%] flex justify-between  items-center">
          <h6 className=" text-[14px]">Enter Keywords</h6>
          <h6 className=" text-[14px]">Clear</h6>
        </div>
        <div className="flex items-center w-full h-full border-[1px] border-[#F4F4F4] rounded-[8px] pl-3 shadow-[0_1px_2px_0px_rgba(0,0,0,0.06),0_1px_3px_0px_rgba(0,0,0,0.10)]">
          <GoIcons.GoSearch />
          <input
            className=" h-full pl-4 outline-none rounded-lg placeholder:text-secondary "
            type="text"
            placeholder="Search here..."
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
