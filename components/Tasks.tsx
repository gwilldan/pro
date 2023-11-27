'use client'

import getAllTasks from "@/lib/getAllTasks";
import Link from "next/link";
import * as AiIcons from "react-icons/ai";
import { Button } from "./buttons/Button";
import Searchh from "./Searchh";
import { useState, useEffect } from "react";

export default  function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await getAllTasks();
      setTasks(tasksData);
    };

    fetchTasks();
  }, []);
  const content = (
    <section>
      <br />
      {tasks.map((task) => {
        return (
          <>
            <p key={task.id}>
              <Link href={`/tasks/${task.task_id}`}>{task.title}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return (
    <div>
      <div>
        <div className="sm:px-16 px-4  max-w-[1440px] mx-auto">
      
          <div className="grid sm:grid-cols-2 sm:gap-10 gap-5 grid-col-1 ">
            {tasks.map((task) => {
              return (
                <div className="" key={task.id}>
                  <div
                    className={`sm:p-8 p-3 bg-[#ffffff] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] rounded-[18px] w-[100%] ${task.title}`}
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
                    <h2 className="font-bold text-[20px] sm:text-[30px] text-secondary sm:w-[500px] leading-[35px] ">
                      {task.title}
                    </h2>
                    <p className="text-[14px] sm:text-[18px] sm:w-[500px] my-6">
                      {task.description}
                    </p>
                    <div className="flex items-center sm:gap-8 ">
                      <div className="flex items-center gap-4">
                        <div className="sm:w-[51px] sm:h-[51px] w-[48px] h-[48px] rounded-full bg-black"></div>
                        <div className="">
                          <h4 className="font-bold text-secondary text-[16px]">
                            {task.creator}
                          </h4>
                          {/* <div className="flex flex-row gap-2 items-center ">
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
                        <Link href={`/tasks/${task.task_id}`}>
                          <Button variant="outline-primary">More info</Button>
                        </Link>
                        <Button variant="primary" className="sm:flex hidden">
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
    </div>
  );
}
