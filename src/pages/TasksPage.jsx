import TaskCard from "../components/TaskCard.jsx";
import { useEffect } from "react"
import { useTasks } from "../context/TaskContext.jsx";


export default function TasksPage() {

  const { tasks, loadTasks } = useTasks();

  useEffect(() => {    
    loadTasks()
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>Not Found Tasks</h1>
    return tasks.map((task) => (<TaskCard task={task} key={task.id} />))
  };

  return (
    <div>
      <h1>Tasks</h1>
      <div>
        {renderMain()}
      </div>
    </div>
  );
}