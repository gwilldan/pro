import Hero from "@/components/Hero";
import Searchh from "@/components/Searchh";
import TasksPage from "@/components/Tasks";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />

      <Searchh/>
    </div>
  );
}
