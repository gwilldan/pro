"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [width, setWidth] = useState<number>(0);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      setWidth(container.current.scrollWidth - container.current.offsetWidth);
    }
  }, []);

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
          ref={container}
          className="w-[1125px] flex cursor-grab overflow-hidden"
        >
          <motion.div
            className="inline-flex"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
          >
            <div className="sm:px-16 px-6 mt-20">
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
