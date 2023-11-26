"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import axios from "axios";

import { BsPlayFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import dynamic from "next/dynamic";

import { Button } from "@/components/buttons/Button";

const Searchh = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const searchTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`?task=${input}`);
    setInput("");
  };

  const searchParams = useSearchParams();

  const [tasks, setTasks] = useState<Task[]>([]); // Use an array to store multiple movies
  const [isLoading, setIsLoading] = useState(false);

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
        console.log(tasks);
      });
  }, [searchParams]);
  return (
    <div className="sm:px-16 px-4  max-w-[1440px] mx-auto">
      <form onSubmit={searchTask}>
        <div className="sm:w-[512px] w-[100%] h-[36px] border-[2px] rounded-[6px] border-[#D1D5DB] flex justify-between items-center px-3">
          <input
            className="w-[100%] h-[100%]  text-red-500 bg-transparent outline-none"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </form>
      <div className="grid sm:grid-cols-2 sm:gap-10 gap-5 grid-col-1 ">
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
    </div>
  );
};

export default Searchh;
