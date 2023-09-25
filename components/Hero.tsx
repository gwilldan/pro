"use client";
import * as BsIcons from "react-icons/bs";
import * as RxIcons from "react-icons/rx";
import * as IoIcons from "react-icons/io";
import * as GoIcons from "react-icons/go";
import * as PiIcons from "react-icons/pi";
import * as AiIcons from "react-icons/ai";
import Search from "./Search";
import Link from "next/link";

import { Button } from "./buttons/Button";
import { IconContext } from "react-icons/lib/esm/iconContext";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import filter from "../assets/filter.svg";
import Image from "next/image";

const Hero: React.FC = () => {
  const [contentWidth, setContentWidth] = useState<number>(0);
  const [viewportWidth, setViewportWidth] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
    }
    setViewportWidth(window.innerWidth);

    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dragConstraints = {
    right: 0,
    left: viewportWidth - contentWidth,
  };

  return (
    <div className="max-w-[1440px] mx-auto pt-[112px] sm:pt-[224px]">
      <div className="flex justify-center items-center text-center text-[#393A32] flex-col">
        <h1 className="text-2xl sm:text-[56px] font-bold sm:leading-[67.2px] leading-[33.6px]">
          Explore Design Tasks to <br className="flex sm:hidden" />
          <br className="sm:flex hidden" /> Spark Your Creativity
        </h1>
        <p className="sm:mt-6 mt-2 sm:text-lg text-base">
          Lorem ipsum dolor sit amet, consectetur{" "}
          <br className="flex sm:hidden" /> adipiscing elit.
        </p>
      </div>
      <div className=" sm:px-16 px-4 ">
        <div className=" sm:hidden flex justify-between items-center w-[100%] my-8 ">
          <div className="w-[85%] h-[40px]  border-[1px] border-[#F4F4F4] rounded-[8px] pl-3 shadow-[0_1px_2px_0px_rgba(0,0,0,0.06),0_1px_3px_0px_rgba(0,0,0,0.10)]">
            <input className="w-[100%] h-[100%] outline-none  " type="text" />
          </div>

          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="cursor-pointer w-[12%] h-[40px]  border-[1px] border-[#F4F4F4] rounded-[8px]  shadow-[0_1px_2px_0px_rgba(0,0,0,0.06),0_1px_3px_0px_rgba(0,0,0,0.10)] flex justify-center items-center"
          >
            <div>
              <Image src={filter} width={24} height={24} alt="filter" />
            </div>
          </div>
        </div>
        <div className="flex md:hidden ">
          <motion.div>
            <motion.div className="w-[1125px] flex cursor-grab  overflow-hidden">
              <motion.div
                className="inline-flex"
                drag="x"
                dragConstraints={dragConstraints}
                whileTap={{ cursor: "grabbing" }}
              >
                <div className="" ref={contentRef}>
                  <div className="flex gap-10 text-base text-secondary">
                    <h5 className="pointer-events-none">All Categories</h5>
                    <h5 className="pointer-events-none">Websites</h5>
                    <h5 className="pointer-events-none">Mobile Apps</h5>
                    <h5 className="pointer-events-none">Web Apps</h5>
                    <h5 className="pointer-events-none">Others</h5>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        {isOpen && (
          <div className="w-full flex flex-col gap-8 mt-8">
            <div className="flex flex-col gap-2 ">
              <h6 className="text-base text-[#393A32]">Category</h6>
              <div className="h-[56px] w-full px-4  flex justify-between items-center border-[1px] border-[#F4F4F4] rounded-[8px]  shadow-[0_1px_2px_0px_rgba(0,0,0,0.06),0_1px_3px_0px_rgba(0,0,0,0.10)]">
                <h6>1</h6>

                {!isOpen ? (
                  <PiIcons.PiCaretUpBold />
                ) : (
                  <PiIcons.PiCaretDownBold />
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <h6 className="text-base text-[#393A32]">Industry/Niche</h6>
              <div className="h-[56px] w-full px-4  flex justify-between items-center border-[1px] border-[#F4F4F4] rounded-[8px]  shadow-[0_1px_2px_0px_rgba(0,0,0,0.06),0_1px_3px_0px_rgba(0,0,0,0.10)]">
                <h6>1</h6>

                {!isOpen ? (
                  <PiIcons.PiCaretUpBold />
                ) : (
                  <PiIcons.PiCaretDownBold />
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <h6 className="text-base text-[#393A32]">Difficulty Level</h6>
              <div className="h-[56px] w-full px-4  flex justify-between items-center border-[1px] border-[#F4F4F4] rounded-[8px]  shadow-[0_1px_2px_0px_rgba(0,0,0,0.06),0_1px_3px_0px_rgba(0,0,0,0.10)]">
                <h6>1</h6>

                {!isOpen ? (
                  <PiIcons.PiCaretUpBold />
                ) : (
                  <PiIcons.PiCaretDownBold />
                )}
              </div>
            </div>

       
          </div>
        )}
      </div>
      <div className="md:flex hidden">
        <div className="md:px-16 px-6 mt-20">
          <div className="flex justify-between items-center px-3  border-b-[1px] border-[#F4F4F4] ">
            <div className="flex gap-10 text-base  text-secondary ">
              <h5>All Categories</h5>
              <h5>Websites</h5>
              <h5>Mobile Apps</h5>
              <h5>Web Apps</h5>
              <h5>Others</h5>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-2  justify-center items-center border border-[#393A32] px-6 py-3 rounded">
                <BsIcons.BsFilter />
                <h6 className="text-[16px]">Filter</h6>
              </div>
              <div className="flex gap-2 items-center border border-[#393A32] px-6 py-3 rounded">
                <h6 className="text-[16px]">Sort by</h6>

                <RxIcons.RxCaretDown />
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-between items-center mt-8 ">
              <Search />

              <div className="w-[265px] h-[74px] gap-2 sm:flex hidden justify-between flex-col">
                <div className="w-[100%] flex justify-between  items-center">
                  <h6 className=" text-[14px]">Category</h6>
                </div>
                <div className=" flex justify-between  items-center w-full h-full border-[1px] border-[#F4F4F4] rounded-lg px-3 shadow-[0_1px_2px_0px_rgba(0,0,0,0.06),0_1px_3px_0px_rgba(0,0,0,0.10)]">
                  <h6 className=" text-[14px]">Option One</h6>
                  <PiIcons.PiCaretDownBold />
                </div>
              </div>
              <div className="w-[265px] h-[74px] gap-2 sm:flex hidden justify-between flex-col">
                <div className="w-[100%] flex justify-between  items-center">
                  <h6 className=" text-[14px]">Industry/Niche</h6>
                </div>
                <div className=" flex justify-between  items-center w-full h-full border-[1px] border-[#F4F4F4] rounded-lg px-3 shadow-[0_1px_2px_0px_rgba(0,0,0,0.06),0_1px_3px_0px_rgba(0,0,0,0.10)]">
                  <h6 className=" text-[14px]">Option One</h6>
                  <PiIcons.PiCaretDownBold />
                </div>
              </div>
              <div className="w-[265px] h-[74px] gap-2 sm:flex hidden justify-between flex-col">
                <div className="w-[100%] flex justify-between  items-center">
                  <h6 className=" text-[14px]">Difficulty Level</h6>
                </div>
                <div className=" flex justify-between  items-center w-full h-full border-[1px] border-[#F4F4F4] rounded-lg px-3 shadow-[0_1px_2px_0px_rgba(0,0,0,0.06),0_1px_3px_0px_rgba(0,0,0,0.10)]">
                  <h6 className=" text-[14px]">Option One</h6>
                  <PiIcons.PiCaretDownBold />
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <div className="my-8 flex gap-2">
                  <div className="flex bg-[#F4F4F4] py-2 pl-4 pr-3 gap-3 justify-center items-center w-[80px] rounded-lg shadow-[0_1px_2px_0px_rgba(0,0,0,0.06),0_1px_3px_0px_rgba(0,0,0,0.10)]">
                    <h5 className="text-base">Tag</h5>
                    <IconContext.Provider value={{ size: "15px" }}>
                      <IoIcons.IoMdClose />
                    </IconContext.Provider>
                  </div>
                  <div className="flex bg-[#F4F4F4] py-2 pl-4 pr-3 gap-3 justify-center items-center w-[80px] rounded-lg shadow-[0_1px_2px_0px_rgba(0,0,0,0.06),0_1px_3px_0px_rgba(0,0,0,0.10)]">
                    <h5 className="text-base">Tag</h5>
                    <IconContext.Provider value={{ size: "15px" }}>
                      <IoIcons.IoMdClose />
                    </IconContext.Provider>
                  </div>
                  <div className="flex bg-[#F4F4F4] py-2 pl-4 pr-3 gap-3 justify-center items-center w-[80px] rounded-lg shadow-[0_1px_2px_0px_rgba(0,0,0,0.06),0_1px_3px_0px_rgba(0,0,0,0.10)]">
                    <h5 className="text-base">Tag</h5>
                    <IconContext.Provider value={{ size: "15px" }}>
                      <IoIcons.IoMdClose />
                    </IconContext.Provider>
                  </div>
                </div>
                <h5 className="text-[14px] text-secondary">
                  Showing 01 of 100
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
