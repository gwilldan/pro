"use client";
import Link from "next/link";
import * as FiIcons from "react-icons/fi";
import * as PiIcons from "react-icons/pi";
import { IconContext } from "react-icons";
import { useState } from "react";
import { Button } from "./buttons/Button";
import Modal from '@/components/Modal'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDrop, setIsOpenDrop] = useState(false);

  return (
    <div>
      <header className="w-full bg-white absolute z-10 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.03),0_12px_16px_-4px_rgba(0,0,0,0.08)]">
        <nav className=" mx-auto max-w-[1440px] flex justify-between items-center sm:px-16 px-4 h-[80px]">
          <Link href="/">
            <h5 className="font-bold text-xl">LOGO</h5>
          </Link>
          <nav className="sm:flex hidden ml-48">
            <ul className="flex gap-5 text-base text-[#393A32]">
              <li className=" cursor-pointer ">
                <Link href="/">Design Tasks</Link>
              </li>
              <li className=" cursor-pointer ">
                <Link href="./casestudies">Casestudies</Link>
              </li>
              <li className=" cursor-pointer ">
                <Link href="./Jobs">Job Board</Link>
              </li>
              <div className="relative cursor-pointer   ">
                <div
                  className="flex items-center gap-1   "
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <h6>Resources</h6>
                  {!isOpen ? (
                    <PiIcons.PiCaretDownBold />
                  ) : (
                    <PiIcons.PiCaretUpBold />
                  )}
                </div>
                {isOpen && (
                  <div className="absolute bg-white shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] rounded-[4px] top-[54px] left-[-50%]  flex col items-start p-2 w-[200px]">
                    <div className="w-full flex flex-col">
                      <div className="hover:bg-blue-300 cursor-pointer border-l-transparent hover:border-l-white border-l-4 w-full ">
                        <h6>1</h6>
                      </div>
                      <div className="hover:bg-blue-300 cursor-pointer border-l-transparent hover:border-l-white border-l-4 w-full ">
                        <h6>1</h6>
                      </div>
                      <div className="hover:bg-blue-300 cursor-pointer border-l-transparent hover:border-l-white border-l-4 w-full ">
                        <h6>1</h6>
                      </div>
                      <div className="hover:bg-blue-300 cursor-pointer border-l-transparent hover:border-l-white border-l-4 w-full ">
                        <h6>1</h6>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative cursor-pointer    ">
                <div
                  className="flex items-center gap-1   "
                  onClick={() => setIsOpenDrop((prev) => !prev)}
                >
                  <h6>More</h6>
                  {!isOpenDrop ? (
                    <PiIcons.PiCaretDownBold />
                  ) : (
                    <PiIcons.PiCaretUpBold />
                  )}
                </div>
                {isOpenDrop && (
                  <div className="absolute bg-white shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] rounded-[4px] top-[54px] left-[-50%]  flex col items-start p-2 w-[200px]">
                    <div className="w-full flex flex-col">
                      <div className="hover:bg-blue-300 cursor-pointer border-l-transparent hover:border-l-white border-l-4 w-full ">
                        <h6>1</h6>
                      </div>
                      <div className="hover:bg-blue-300 cursor-pointer border-l-transparent hover:border-l-white border-l-4 w-full ">
                        <h6>1</h6>
                      </div>
                      <div className="hover:bg-blue-300 cursor-pointer border-l-transparent hover:border-l-white border-l-4 w-full ">
                        <h6>1</h6>
                      </div>
                      <div className="hover:bg-blue-300 cursor-pointer border-l-transparent hover:border-l-white border-l-4 w-full ">
                        <h6>1</h6>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ul>
          </nav>
          <div className="flex sm:gap-4 gap-6 items-center">
            <div className="sm:flex hidden ">
              <Button type="button" variant="outline-primary">Donate</Button>
            </div>
            <Modal/>

            <div className="sm:hidden flex">
              <IconContext.Provider value={{ size: "32px" }}>
                <FiIcons.FiMenu />
              </IconContext.Provider>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
