import {motion} from "framer-motion"
import Select from "react-select"

export default function Contributors() {

    const inputClass = 'w-full my-1 rounded-md p-2 border border-zinc-300 placeholder:text-black placeholder:font-light text-sm'

    const stages = ["Research", "Coding", "Wireframing", "Deployment", "High fidelity", "Revisit"]

    const contributorOptions = [
        {value: "Okon", label: "Okon"},
        {value: "Atim", label: "Atim"},
        {value: "Ikpat", label: "Ikpat"},
        {value: "Okpo", label: "Okpo"},
        {value: "Loveday", label: "Loveday"},
    ]

    const urlOptions = [
        {value: "Okon", label: "Okon"},
        {value: "Atim", label: "Atim"},
        {value: "Ikpat", label: "Ikpat"},
        {value: "Okpo", label: "Okpo"},
        {value: "Loveday", label: "Loveday"},
    ]

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

  return (
    <div>
        <motion.div 
        className=""
        initial= {{
            opacity: 0,
            y: 20
        }}

        animate = {{
            opacity: 1,
            y: 0
        }}

        >
        <div className="p-5 shadow-xl">
            <p className=" font-light">Add Contributors</p>

            <div className=" flex my-2 gap-4">
                <div className=" w-[30%]">
                    <p className=" font-light">Your Role</p>
                    <Select className="my-1 rounded-md border-black" 
                        options = {contributorOptions} 
                    />
                </div>

                {/* create select options for this component */}
                <div className=" w-[70%]">
                    <p className=" font-light">Contributor's Name</p>
                    <input type="text" key="yourRole" 
                    className={`${inputClass}`}
                    />
                </div>
            </div>

            <div className=" flex gap-4">
                <div className=" w-[30%]">
                    <p className=" font-light">Your Role</p>
                    <Select className="my-1 rounded-md border-black" 
                        options = {urlOptions} 
                    />
                </div>

                {/* create select options for this component */}
                <div className=" w-[70%]">
                    <p className=" font-light">Comments</p>
                    <input type="text" key="yourRole" 
                    className={`${inputClass} `}
                    />
                </div>
            </div>
        
        </div> 

                    {/* CARD FOR RENDERING STAGES */}

        <div className="my-10">
            
            <p className=" font-light"> Select Stages involved</p>

            <div className=" grid grid-cols-2 mt-1">
                {stages.map((i) => {
                    return <>
                        <motion.div className=" py-1 font-light flex gap-2"
                            initial = {{
                                scale: 1
                            }}
                            whileHover = {anim.scaleLarge}
                            whileTap = {anim.scaleSmall}
                            transition = {anim.theTransition}
                        >
                            <input className=" rounded-full" value={i} type="checkbox" id={i} />
                            <label htmlFor={i}>{i}</label>
                        </motion.div> 
                    </>
                })}
            </div>
        </div>

                    {/* TEXT AREAS FOR LONG TEXT INPUT */}
        <div>
            <p className=" font-light">Additional Notes</p>
            <textarea id="text" name="text" 
                className=" rounded-sm p-3 border w-full h-[300px] mt-2"
                placeholder="Type your message... Maybe about your experience or what you learnt"
            />
        </div>
        
    </motion.div>
    </div>
  )
}
