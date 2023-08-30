"use client";
import * as BsIcons from "react-icons/bs";
import * as RxIcons from "react-icons/rx";
import * as IoIcons from "react-icons/io";
import * as GoIcons from "react-icons/go";
import * as PiIcons from "react-icons/pi";
import Search from "./Search";
import { IconContext } from "react-icons/lib/esm/iconContext";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [contentWidth, setContentWidth] = useState<number>(0);
  const [viewportWidth, setViewportWidth] = useState<number>(0);
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
      <div className=" sm:px-16 px-6 ">
        <div className="sm:hidden flex justify-between items-center w-[100%] my-8 ">
          <div className="w-[82%] h-[40px]  border-[1px] border-[#F4F4F4] rounded-[8px] pl-3 shadow-[0_1px_2px_0px_rgba(0,0,0,0.06),0_1px_3px_0px_rgba(0,0,0,0.10)]">
            <input className="w-[100%] h-[100%] outline-none  " type="text" />
          </div>
          <div className="w-[12%] h-[40px]  border-[1px] border-[#F4F4F4] rounded-[8px]  shadow-[0_1px_2px_0px_rgba(0,0,0,0.06),0_1px_3px_0px_rgba(0,0,0,0.10)] flex justify-center items-center">
            <IconContext.Provider value={{size:'24px'}}><BsIcons.BsFilter /></IconContext.Provider>
          </div>
        </div>
        <div className="flex sm:hidden">
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
      </div>
    </div>
  );
};

export default Hero;
