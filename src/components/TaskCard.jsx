import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext.jsx";
import { Card, CardContent, Typography, Button, CardActions, Box, Divider } from "@mui/material";

export default function TaskCard({ task }) {
  const navigate = useNavigate();
  const { deleteTask, updateTask } = useTasks();
  async function handleDone(taskDone) {
    await updateTask(task.id, { done: taskDone === 0 ? 1 : 0 });
  };

  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2, p: 2, maxWidth: 400 }}>
      <CardContent>
        {/* Username y fecha en la parte superior */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="subtitle2" color="primary">
            {task.created_by}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {new Date(task.createAt).toLocaleString()}
          </Typography>
        </Box>

        <Divider sx={{ mb: 1 }} />

        <Typography variant="h6" gutterBottom>
          {task.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {task.description}
        </Typography>

        <Typography variant="body1" sx={{ mt: 1 }}>
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
  );
}
