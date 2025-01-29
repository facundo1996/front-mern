import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext.jsx";
import { Card, CardContent, Typography, Button, CardActions } from "@mui/material";

export default function TaskCard({ task }) {
  const navigate = useNavigate();
  const { deleteTask, updateTask } = useTasks();

  async function handleDone(taskDone) {
    if (taskDone === 0) {
      await updateTask(task.id, { done: 1 })
    } else {
      await updateTask(task.id, { done: 0 })
    }
  };

  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2, p: 2 }}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {task.description}
        </Typography>
        <Typography variant="caption" display="block" color="textSecondary">
          {new Date(task.createAt).toLocaleString()}
        </Typography>
        <Typography variant="body1">
          Estado: {task.done === 1 ? "✅ Completado" : "❌ Pendiente"}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button variant="contained" color="primary" onClick={() => navigate(`edit/${task.id}`)}>
          Edit
        </Button>
        <Button variant="contained" color="secondary" onClick={() => deleteTask(task.id)}>
          Delete
        </Button>
        <Button
          variant="contained"
          color={task.done === 0 ? "success" : "warning"}
          onClick={() => handleDone(task.done)}
        >
          {task.done === 0 ? "✅ Completar" : "❌ Desmarcar"}
        </Button>
      </CardActions>
    </Card>
  )
}
