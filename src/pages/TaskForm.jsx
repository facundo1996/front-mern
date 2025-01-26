import { Form, Formik } from 'formik';
import { useTasks } from "../context/TaskContext.jsx";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function TaskForm() {
  const navigate = useNavigate()
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: ""
  })
  const params = useParams()

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const taskResponse = await getTask(params.id)
        setTask({
          title: taskResponse.title,
          description: taskResponse.description
        })
      }
    }
    loadTask()
  }, []);

  return (
    <div>
      <h1>{params.id ? 'Edit Task' : 'Create Task'}</h1>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateTask(params.id, values)
            navigate('/')
          } else {
            await createTask(values)
          }
          actions.resetForm()
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={values.title}
            />

            <label>Description</label>
            <input
              type="textarea"
              name="description"
              rows="3"
              placeholder='Write a description'
              onChange={handleChange}
              value={values.description}
            />
            
            <button type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Saving..' : 'Save'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
