"use client"
import { Form } from "@/node_modules/react-router-dom/dist/index"
import React, { useState } from "react"
import {form} from './data'
import {MainInfo, Contributors, Preview } from "./components/index"
import {motion} from "framer-motion"
export default function Submission() {


  // BUTTON DATA AND STATES
  const [isClicked, setIsClicked] = useState(1)
  
          // THE SECTION CARD ANIMATION CONTROLS
  const butt = [
    {
      id:1 ,
       name: "Main Infos"
    }, {
      id: 2,
      name: "Contributors ++"
    },{
      id: 3,
      name: "Preview"
    }]

          //THE BUTTON ANIMATION CONTROLS
    const anim = {
      scaleSmall: {
          scale: 0.95
      },
      scaleLarge: {
          scale: 1.05
      },
      theTransition: {
          ease: "easeInOut",
          duration: 0.25
      },
  }

    const inputForm = form.filter((i) => i.id <= 3)
    const ProjectForm = form.filter((i) => i.id > 3 && i.id < 6 )

    const inputClass = 'w-full my-1 h-[30px] rounded-md p-2 border-[0.5px] border-black placeholder:text-black placeholder:font-light text-sm'

  return (
    <div className="flex ">
        <div className=" mx-auto sm:max-w-[1000px] sm:justify-center pt-[150px] ">

            <p className=" w-[70%] mx-auto text-center font-extrabold text-4xl">Submit Your Design</p>
            <p className=" w-[70%] mx-auto text-center py-6">Thank you for participating in the design challenge! Please fill out the form below to submit your design. We can't wait to see your creative solutions</p>
            
            <div className=" border rounded-2xl px-10 mb-10">
              <div className=" my-10 w-[70%] mx-auto flex gap-5 justify-evenly ">
                          {/* BUTTONS  */}
                {butt.map((i) =>{
                  return (<button 
                    key = {i.id}
                    className={ `${i.id === isClicked ? "border-black" : "border-stone-300"} ${i.id === isClicked ? "font-semibold" : "font-light"} w-full h-full border-b-[3px] rounded-s-smd-e-sm py-2 `}
                    onClick={(e) => {
                      setIsClicked(i.id)
                    }}
                  >
                    {i.name}
                  </button>)
                })}
              </div>

                    {/* THE THREE SUBMISSION STAGE SECTIONS */}

                <div className=" mt-4 " id="cards">
                  <div className={`${isClicked === 1 ? "visible" : "hidden"}`}><MainInfo /></div>
                  <div className={`${isClicked === 2 ? "visible" : "hidden"}`}><Contributors /></div>
                  <div className={`${isClicked === 3 ? "visible" : "hidden"}`}><Preview /></div>
                </div>

                <div className=" my-5 flex gap-5 mx-auto w-max">
                  <motion.button 
                    className=" w-[150px] font-light px-10 py-2 border border-black rounded-md"
                    onClick = {isClicked >=2 ? () => setIsClicked(isClicked - 1) : ""}
                    initial ={{
                        scale: 1
                    }}
                    whileHover = {anim.scaleLarge}
                    whileTap = {anim.scaleSmall}
                    transition = {anim.theTransition}
                  >
                    {isClicked >= 2 ? "Previous" : "Cancel"}
                  </motion.button>

                  <motion.button 
                    className=" w-[150px] font-light px-10 py-2 border bg-black text-white rounded-md" 
                    onClick = {isClicked <= 3 ? () => setIsClicked(isClicked + 1) : prompt("SUBMITTED")}
                    initial ={{
                        scale: 1
                    }}
                    whileHover = {anim.scaleLarge}
                    whileTap = {anim.scaleSmall}
                    transition = {anim.theTransition}
                  >
                    Next
                  </motion.button>
                </div>

                <div className=" flex mb-6 justify-center">
                  <label htmlFor="terms" className=" flex gap-2" >
                    <input className=" " type="checkbox" id="terms"/>
                    I accept the <a href="#terms" className=" underline">Terms</a>
                  </label>
                </div>
            </div>    
        </div>  
    </div>
  )
}
