import getTask from "@/lib/getTask";
import type { Metadata } from "next";

type Params = {
  params: {
    taskId: string;
  };
};

export async function generateMetadata({
  params: { taskId },
}: Params): Promise<Metadata> {
  const taskData: Promise<Task> = getTask(taskId);
  const task: Task = await taskData;

  return {
    title: task.title,
    description: `This is the page of ${task.title}`,
  };
}

export default async function UserPage({ params: { taskId } }: Params) {
  const taskData: Promise<Task> = getTask(taskId);

  const task = await taskData;

  return (
    <>
      <div className="py-40">
        <h2>{task.title}</h2>
        <h2>{task.description}</h2>
      </div>
    </>
  );
}
