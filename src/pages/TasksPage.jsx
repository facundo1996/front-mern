import TaskCard from "../components/TaskCard.jsx";
import { useEffect } from "react"
import { useTasks } from "../context/TaskContext.jsx";
import { Box, Typography, Container } from "@mui/material";


export default function TasksPage() {

  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks()
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Tasks
      </Typography>
      {tasks.length === 0 ? (
        <Typography variant="h6" align="center" color="textSecondary">
          No tasks found
        </Typography>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 3,
          }}
        >
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </Box>
      )}
    </Container>
  );
}