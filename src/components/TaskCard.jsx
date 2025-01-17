import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext.jsx";

export default function TaskCard({ task }) {
  const navigate = useNavigate()
  const { deleteTask } = useTasks()

  return (
    <div key={task.id} >
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done === 1 ? '✅' : '❌'}</span>
      <span>{task.createAt}</span>
      <button onClick={() => navigate(`edit/${task.id}`) }>Edit</button>
      <button onClick={ async () => deleteTask(task.id) } >Delete</button>
    </div>
  )
}
