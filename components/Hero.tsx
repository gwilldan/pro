"use client";
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
      <motion.div className="">
        <motion.div
          className="w-[1125px] flex cursor-grab overflow-hidden"
        >
          <motion.div
            className="inline-flex"
            drag="x"
            dragConstraints={dragConstraints}
            whileTap={{ cursor: "grabbing" }}
          >
            <div className="sm:px-16 px-6 mt-20" ref={contentRef}>
              <div className="flex gap-10 text-base text-secondary">
                <h5>All Categories</h5>
                <h5>Websites</h5>
                <h5>Mobile Apps</h5>
                <h5>Web Apps</h5>
                <h5>Others</h5>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
