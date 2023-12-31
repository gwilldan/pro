"use client";
import * as AiIcons from "react-icons/ai";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/buttons/Button";
import { IoClose, IoSearch } from "react-icons/io5";
interface SearchProps {
  setShowTask: React.Dispatch<React.SetStateAction<boolean>>;
  showTask: boolean;
}
const Searchh: React.FC<SearchProps> = ({ setShowTask, showTask }) => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    // Define a function to handle the search logic
    const handleSearch = async () => {
      setIsLoading(true);

      // Use the input value directly instead of searchParams
      let searchTask = input;

      const getSearchedTask = async () => {
        if (searchTask) {
          console.log("searches");
          setShowTask(false);
          await axios
            .get(`https://projexa.onrender.com/api/search?`, {
              params: {
                search: searchTask,
              },
            })
            .then((res) => {
              const taskResults = res?.data?.data;
              console.log(res.data);
              if (taskResults.length === 0 || taskResults === undefined) {
                setShowTask(true);
                setNoResult(true);
              } else {
                setNoResult(false);
                setTasks(taskResults);
              }
            })
            .catch((error) => {
              console.error(error);
              setShowTask(true);
              setNoResult(true);
            })
            .finally(() => {
              setIsLoading(false);
            });
        } else {
          // If no search task is present, you can set your dummy data here
          setTasks([]);
          setIsLoading(false);
          setShowTask(true);
          router.push("/");
        }
      };

      // Call the search function
      getSearchedTask();
    };

    // Use a timeout to delay the search and avoid unnecessary API calls on each keystroke
    const timeoutId = setTimeout(handleSearch, 500);

    // Clear the timeout on cleanup to prevent unwanted side effects
    return () => clearTimeout(timeoutId);
  }, [input, router, setShowTask]);

  const searchTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    tasks.length > 0 && setShowTask(false);
    router.push(`?task=${input}`);
    setInput("");
  };
  const closeResults = () => {
    setTasks([]);
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
          <div>
            {isLoading ? (
              <span className="loader"></span>
            ) : (
              <>
                {tasks.length > 0 ? (
                  <IoClose className="text-[20px]" onClick={closeResults} />
                ) : (
                  <IoSearch className="text-[25px]" />
                )}
              </>
            )}
          </div>
        </div>
      </form>

      {isLoading && <p>Loading...</p>}

      {noResult && <p>No results found. Use client.</p>}

      <div className="grid sm:grid-cols-2 sm:gap-10 gap-5 grid-col-1">
        {!showTask &&
          tasks.map((task) => (
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
          ))}
      </div>
    </div>
  );
};

export default Searchh;