import { Form, Formik } from 'formik';
import { useTasks } from "../context/TaskContext.jsx";
import { useUser } from "../context/UserContext.jsx";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

export default function TaskForm() {
  const navigate = useNavigate();
  const { createTask, getTask, updateTask } = useTasks();
  const { user } = useUser();
  const [task, setTask] = useState({
    title: "",
    description: ""
  });
  const params = useParams();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const taskResponse = await getTask(params.id);
        setTask({
          title: taskResponse.title,
          description: taskResponse.description
        });
      }
    };
    loadTask();
  }, [params.id]);

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {params.id ? 'Edit Task' : 'Create Task'}
      </Typography>

      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateTask(params.id, values);
            navigate('/');
          } else {
            await createTask(values, user.username);
          }
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Title"
              variant="outlined"
              name="title"
              value={values.title}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Description"
              variant="outlined"
              name="description"
              value={values.description}
              onChange={handleChange}
              multiline
              rows={3}
              placeholder="Write a description"
              sx={{ mb: 2 }}
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              disabled={isSubmitting}
              sx={{ mt: 2 }}
            >
              {isSubmitting ? 'Saving...' : 'Save'}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

