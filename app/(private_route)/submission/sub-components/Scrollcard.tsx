import React from 'react'
import {about, problems, goals} from "./data"
import {GrCheckmark} from "react-icons/gr"
import Image from '@/node_modules/next/image'

import man from "../../../../assets/man.jpeg"

function Scrollcard() {

  return (
    <div className=' flex flex-col gap-4 p-4 text-sm font-extralight'>
        <p className=' font-semibold text-2xl'>Redesign the Mobile Banking App</p>
        <p>Welcome to Redesign the Mobile App Challenge! This challenge aims to improve the user experience of a mobile banking app, making it more intuitive, user-friendly, and visually appealing.</p>
        <div className=" p-4 shadow-md rounded-xl md:shadow-none md:rounded-none md:grid md:grid-cols-3 ">
            {
            about.map((i) => (
                <div className=' md:mx-2 overflow-hidden'>
                    <p className=" mb-[-2px] font-semibold ">{i.name}</p>
                    <p className=" font-extralight mb-3 md:mb-0 ">{i.title}</p>
                </div>
            ))
            }
        </div>

        <div>
            <h1 className=' text-base font-semibold'>Overview</h1>
            <p>Welcome to Redesign the Mobile App Challenge! This challenge aims to improve the user experience of a mobile banking app, making it more intuitive, user-friendly, and visually appealing.</p>
        </div>

        <div className=' grid grid-cols-2 gap-2'>
            <div>
                <h1 className=' font-semibold mb-2'>Problems:</h1>
                {
                  problems.map((i) => (
                    <div className=' flex items-start gap-2 '>
                       <div>
                         <GrCheckmark className = " text-base"/>
                        </div>
                        <p>{i}</p>
                    </div>
                  ))  
                }
            </div>
            <div>
                <h1 className=' font-semibold mb-2'>Goals:</h1>
                {
                  goals.map((i) => (
                    <div className=' flex items-start gap-2 '>
                       <div>
                         <GrCheckmark className = " text-base"/>
                        </div>
                        <p>{i}</p>
                    </div>
                  ))  
                }
            </div>
        </div>

        <div>
            <h1 className=' text-base font-semibold'>Research</h1>
            <p>Welcome to Redesign the Mobile App Challenge! This challenge aims to improve the user experience of a mobile banking app, making it more intuitive, user-friendly, and visually appealing.</p>
            <Image 
                src={man}
                alt = "man"
                className=' w-full mt-4 rounded-xl'
            />
            <div className=' border-l-4 border-slate-700 px-4 my-2 text-[12px]'>
                <p>Img caption goes here</p>    
            </div>
        </div>

        <div>
            <h1 className=' text-base font-semibold'>Research</h1>
            <p>Welcome to Redesign the Mobile App Challenge! This challenge aims to improve the user experience of a mobile banking app, making it more intuitive, user-friendly, and visually appealing.</p>
            <Image 
                src={man}
                alt = "man"
                className=' w-full mt-4 rounded-xl'
            />
            <div className=' border-l-4 border-slate-700 px-4 my-2 text-[12px]'>
                <p>Img caption goes here</p>    
            </div>
        </div>

        <div>
            <h1 className=' text-base font-semibold'>Research</h1>
            <p>Welcome to Redesign the Mobile App Challenge! This challenge aims to improve the user experience of a mobile banking app, making it more intuitive, user-friendly, and visually appealing.</p>
            <Image 
                src={man}
                alt = "man"
                className=' w-full mt-4 rounded-xl'
            />
            <div className=' border-l-4 border-slate-700 px-4 my-2 text-[12px]'>
                <p>Img caption goes here</p>    
            </div>
        </div>

        <div>
            <h1 className=' text-base font-semibold' >Conclusion</h1>
            <p>Welcome to Redesign the Mobile App Challenge! This challenge aims to improve the user experience of a mobile banking app, making it more intuitive, user-friendly, and visually appealing.</p>
        </div>
    </div>
  )
}

export default Scrollcard