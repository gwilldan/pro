import Hero from "@/components/Hero";
import TasksPage from "@/components/Tasks";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />

      <TasksPage />
    </div>
  );
}
