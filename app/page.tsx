"use client";
import Hero from "@/components/Hero";
import Searchh from "@/components/Searchh";
import TasksPage from "@/components/Tasks";
import { useState } from "react";

export default function Home() {
  const [showTask, setShowTask] = useState(true);
  return (
    <div className="overflow-hidden">
      <Hero />
      <Searchh showTask={showTask} setShowTask={setShowTask} />
      {showTask && <TasksPage />}
    </div>
  );
}
