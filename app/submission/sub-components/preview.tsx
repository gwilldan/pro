'use client'
import {motion} from "framer-motion"
import {FaChevronLeft, FaChevronDown, FaLinkedin, FaTwitter, FaFacebookF} from "react-icons/fa"
import {AiOutlineLink } from "react-icons/ai"
import { useState } from "react"
import Image from "@/node_modules/next/image"
import man from "../../../assets/man.jpeg"
import {submissions, contributors } from "./data"

import Scrollcard from "./Scrollcard"


export default function Preview() {

  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(false)

  return (
    <div>
        <motion.div className=" md:h-[750px] md:flex gap-3 mb-[50px] no-scrollbar" >
            
            <div className=" border rounded-lg md:w-[45%] shadow-xl p-3 font-light text-sm pb-[100px] md:pb-0 relative mb-10 md:mb-0  ">
              <button className=" flex gap-2 md:items-center">
                <FaChevronLeft className = " font-extralight" />
                Back to Challenges
              </button>
              <p className=" md:font-semibold mt-2">Submission By:</p>
              <div className=" flex items-center gap-3">
                <div className=" bg-slate-600 w-11 h-11 rounded-full overflow-hidden">
                <Image 
                src={man}
                alt = "man"
                className=' w-full h-full'
              />
                </div>
                <div className=" text-sm mt-2" >
                  <p className=" font-semibold ">Tutorial Owner</p>
                  <span className="  bg-slate-200 mr-3">Website</span>
                  <span  className="  bg-slate-200">French</span>
                </div>
              </div>

              <p className=" pb-4 mb-6 border-b border-black mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi consequuntur ea odit incidunt deserunt dolorem, 
              </p>

                    {/* SUBMISSION CARD */}
              <div
              className = {`${toggle1 ? 'h-[200px]': 'h-[20px]'} overflow-hidden 
              transition-all duration-200 ease-linear `}
              >
                <div className=" flex justify-between items-center mb-2">
                  <p className=" font-semibold">Submissions</p>
                  <motion.button 
                  animate = {toggle1 ? {rotate: 180} : {rotate: 0}}
                  onClick={() => setToggle1(!toggle1)} >
                    <FaChevronDown />
                  </motion.button>
                </div>
                <div className=" flex flex-col gap-3 overflow-auto ">
                  {
                    submissions.map((i) => (
                      <div className="flex items-center gap-4">
                        <div className=" h-11 w-11 rounded-full bg-slate-400"></div>
                        <div>
                          <p className=" mb-[-2px] font-semibold">{i.name}</p>
                          <p className=" font-extralight">{i.title}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>

                      {/* OTHER CONTRIBUTIONS */}
              <div
              className = {`${toggle2 ? 'h-[200px]': 'h-[20px]'} overflow-hidden 
              transition-all duration-200 ease-linear mt-5 `}
              >
                <div className=" flex justify-between items-center mb-2">
                  <p className=" font-semibold">Other Contributions</p>
                  <motion.button 
                  animate = {toggle2 ? {rotate: 180} : {rotate: 0}}
                  onClick={() => setToggle2(!toggle2)} >
                    <FaChevronDown />
                  </motion.button>
                </div>
                <div className=" flex flex-col gap-3">
                  {
                    contributors.map((i) => (
                      <div className="flex items-center gap-4">
                        <div className=" h-11 w-11 rounded-full bg-slate-400"></div>
                        <div>
                          <p className=" mb-[-2px] font-semibold">{i.name}</p>
                          <p className=" font-extralight">{i.title}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
              
                    {/* SHARE POST */}
              <div className=" pt-4 w-[90%] border-t border-black pl-3 pb-5 absolute bottom-0">
                <p className=" font-semibold">Share this Post</p>
                <div className=" flex items-center gap-4 mt-2">
                  <a href="#"><AiOutlineLink /></a>
                  <a href="#"><FaLinkedin /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaFacebookF /></a>
                </div>
              </div>

            </div>



            {/* SCROLL AREA */}
            <div className=" rounded-lg shadow-xl border h-full w-full overflow-auto no-scrollbar ">
              <Scrollcard />
            </div>
        </motion.div>
    </div>
  )
}
