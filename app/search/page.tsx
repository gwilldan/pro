"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import axios from "axios";

import { BsPlayFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import dynamic from "next/dynamic";
import Searchh from "@/components/Searchh";
import { Button } from "@/components/buttons/Button";
import TasksPage from "@/components/Tasks";

const Page = () => {
  const searchParams = useSearchParams();

  const [tasks, setTasks] = useState<Task[]>([]); // Use an array to store multiple movies
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    let searchTask = searchParams?.get("task");

    axios
      .get(`https://projexa.onrender.com/api/search?`, {
        params: {
          search: searchTask,
        },
      })
      .then((res) => {
        // Extract the array of movie results
        const taskResults = res?.data?.data;

        // Store the movie results in the state
        setTasks(taskResults);
        setSearchData(taskResults);
        console.log(tasks);
      });
  }, [searchParams]);

  return (
    <div className="">
      <div className="sm:hidden flex pt-3 mx-4 w-[100%]">
        <Searchh />
      </div>

      {searchData === null ? (
        <TasksPage />
      ) : (
        <div>
          {" "}
          {tasks.map((task) => {
            return (
              <div className="" key={task.id}>
                <div
                  className={`sm:p-8 p-3 bg-[#ffffff] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] rounded-[18px] w-[100%] ${task.title}`}
                >
                  <div>
                    {/* <div className="flex text-[25px] text-secondary mb-3">
                              <AiIcons.AiFillStar />
                              <AiIcons.AiFillStar />
                              <AiIcons.AiFillStar />
                              <AiIcons.AiFillStar />
                              <AiIcons.AiFillStar />
                            </div> */}
                  </div>
                  <h2 className="font-bold text-[20px] sm:text-[30px] text-secondary text-black sm:w-[500px] leading-[35px] ">
                    {task.title}
                  </h2>
                  <p className="text-[14px] sm:text-[18px] sm:w-[500px] text-black my-6">
                    {task.description}
                  </p>
                  <div className="flex items-center sm:gap-8 ">
                    <div className="flex items-center gap-4">
                      <div className="sm:w-[51px] sm:h-[51px] w-[48px] h-[48px] rounded-full bg-black"></div>
                      <div className="">
                        <h4 className="font-bold text-secondary text-[16px] text-black">
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
      )}
    </div>
  );
};

export default Page;
