"use client";
import React, { useEffect, useState } from "react";
import * as AiIcons from "react-icons/ai";
import { useRouter } from "next/navigation";
import axios from "axios";
import { DesignProps } from "../types";
import { Button } from "./buttons/Button";

const Task = () => {
  const router = useRouter();

  const [data, setData] = useState<DesignProps[]>([
    {
      id: "",
      title: "",
      image: "",
      shortDescription: "",
      requirements: [""],
      constraints: [""],
      resources: [""],
      timeline: [""],
      weeklyTasks: [
        {
          id: "",
          week: "",
          designId: "",
        },
      ],
    },
  ]);

  const fetchDesigns = async () => {
    try {
      const response = await axios.get("/api/designs");
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDesigns();
  }, []);
  return (
    <div>
      <div className="sm:px-16 px-6  max-w-[1440px] mx-auto">
        <div className=" flex justify-between flex-wrap  items-start">
          {data.map((task) => {
            return (
              <div className="" key={task.id}>
                <div
                  className={`p-8 bg-[#ffffff] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] rounded-[18px] my-6 ${task.title}`}
                >
                  <div>
                    <div className="flex text-[25px] text-secondary mb-3">
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                    </div>
                  </div>
                  <h2 className="font-bold text-[30px] text-secondary w-[500px] leading-[35px] ">
                    {task.title}
                  </h2>
                  <p className="text-[18px] w-[500px] my-6">
                    {task.shortDescription}
                  </p>
                  <div className="flex items-center gap-8 ">
                    <div className="flex items-center gap-4">
                      <div className="w-[51px] h-[51px] rounded-full bg-black"></div>
                      <div className="">
                        {/* <h4 className="font-bold text-secondary text-[16px]">
                          {task.creator}
                        </h4>
                        <div className="flex flex-row gap-2 items-center ">
                          <h4 className="text-[12px] bg-[#f4f4f4] px-[7px] py-1 rounded-[4px]">
                            {task.tag1}
                          </h4>
                          <h4 className="text-[12px] bg-[#f4f4f4] px-[7px] py-1 rounded-[4px]">
                            {task.tag2}
                          </h4>
                        </div> */}
                      </div>
                    </div>
                    <div className="flex  gap-3 ">
                      <Button
                        variant="outline-primary"
                        onClick={() => console.log("More info btn clicked")}
                      >
                        More info
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => {
                          router.push(`/design-details/${task.id}`);
                        }}
                      >
                        Join challenges
                      </Button>
                      {/* <Button /> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Task;
