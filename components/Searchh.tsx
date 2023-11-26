"use client"
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/buttons/Button";

const Searchh = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    let searchTask = searchParams?.get("task");

    if (searchTask) {
      axios
        .get(`https://projexa.onrender.com/api/search?`, {
          params: {
            search: searchTask,
          },
        })
        .then((res) => {
          const taskResults = res?.data?.data;
          setTasks(taskResults);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      // If no search task is present, you can set your dummy data here
      setTasks([]);
      setIsLoading(false);
    }
  }, [searchParams]);

  const searchTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`?task=${input}`);
    setInput("");
  };

  return (
    <div className="sm:px-16 px-4 max-w-[1440px] mx-auto">
      <form onSubmit={(e) => searchTask(e)}>
        <div className="sm:w-[512px] w-[100%] h-[36px] border-[2px] rounded-[6px] border-[#D1D5DB] flex justify-between items-center px-3">
          <input
            className="w-[100%] h-[100%] text-red-500 bg-transparent outline-none"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </form>

      {isLoading && <p>Loading...</p>}

      {!isLoading && tasks.length === 0 && <p>No results found. Use client.</p>}

      <div className="grid sm:grid-cols-2 sm:gap-10 gap-5 grid-col-1">
        {tasks.map((task) => (
          <div className="" key={task.id}>
            <h5>{task.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Searchh;
