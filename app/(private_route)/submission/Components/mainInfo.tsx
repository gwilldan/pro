
import { motion } from "framer-motion"
import CustomButton from "@/components/CustomButton"
import Select from "react-select"

import TextEditor from "./TextEditor"
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

export default function MainInfo() {

    // textEditor
    var modules = {
        toolbar: [
          [{ size: ["small", false, "large", "huge"] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] }
          ],
          [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
        ]
    };

    var formats = [
        "header", "height", "bold", "italic",
        "underline", "strike", "blockquote",
        "list", "color", "bullet", "indent",
        "link", "image", "align", "size",
    ];

    const handleProcedureContentChange = (content) => {
        console.log("content---->", content);
    };

    const inputClass = 'w-full my-1 rounded-md p-2 border border-zinc-300 placeholder:text-black placeholder:font-light text-sm'

    const roleOptions = [
        {value: "Okon", label: "Okon"},
        {value: "Atim", label: "Atim"},
        {value: "Ikpat", label: "Ikpat"},
        {value: "Okpo", label: "Okpo"},
        {value: "Loveday", label: "Loveday"},
    ]

    const Options = [
        {value: "Okon", label: "Okon"},
        {value: "Atim", label: "Atim"},
        {value: "Ikpat", label: "Ikpat"},
        {value: "Okpo", label: "Okpo"},
        {value: "Loveday", label: "Loveday"},
    ]

    const weekOptions = [
        {value: "Okon", label: "Okon"},
        {value: "Atim", label: "Atim"},
        {value: "Ikpat", label: "Ikpat"},
        {value: "Okpo", label: "Okpo"},
        {value: "Loveday", label: "Loveday"},
    ]

  return (
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
            <p className=" font-light">Main Info</p>

            <div className=" flex my-2 gap-4">
                <div className=" w-full">
                    <p className=" font-light">Project Description</p>
                    <input type="text" key="projectDescription" 
                    className={`${inputClass}`}
                    />
                </div>

                {/* create select options for this component */}
                <div className=" w-full">
                    <p className=" font-light">Your Role</p>
                    <Select className="my-1 rounded-md border-black" 
                        options = {roleOptions} 
                    />
                </div>
            </div>

            <div className=" flex gap-4">
            <div className=" w-full">
                    <p className=" font-light">Your Role</p>
                    <Select className="my-1 rounded-md border-black" 
                        options = {Options} 
                    />
                </div>

                {/* create select options for this component */}
                <div className=" w-full">
                    <p className=" font-light">Select Week Submission</p>
                    <Select className="my-1 rounded-md border-black" 
                        options = {weekOptions} 
                    />
                </div>
            </div>
        
        </div> 

        <div className=" h-[335px] my-10 border px-3 py-5">
            {/* <textarea id="text" name="text" 
                className=" rounded-sm p-3 border w-full h-[300px] mt-2"
                placeholder="You can start typing here, or click the image icon at the top right or choose any other element type of your choice"
            /> */}
            <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            placeholder="write your content ...."
            onChange={handleProcedureContentChange}
            style={{ height: "250px" }}
            // className = " bg-black"
            >
            </ReactQuill>
        </div>
            
    </motion.div>
  )
}
