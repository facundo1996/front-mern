import { createContext, useContext, useState } from "react";
import { getTasksRequest, deleteTaskRequest, createTaskRequest, getTaskRequest, updateTaskRequest } from "../api/tasks.api.js";

export const TaskContext = createContext()

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider")
  }
  return context;
}

/* Entonces ahora TaskContext nos va a permitir crear un componente con dentro mas componentes */

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const response = await getTasksRequest()
    setTasks(response.data)
  }

  const deleteTask = async (id) => {
    try {
      await deleteTaskRequest(id);
      const currentTasks = tasks.filter(task => task.id != id);
      setTasks(currentTasks);
    } catch (error) {
      console.log(error)
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      return response.data
    } catch (error) {
      console.log(error)
    }
  };

  const createTask = async (task) => {
    try {
      await createTaskRequest(task)
    } catch (error) {
      console.log(error)
    }
  };

  const updateTask = async (id, taskDone) => {
    try {
      await updateTaskRequest(id, taskDone)
      if(taskDone.done === 0 || taskDone.done === 1){
        console.log(taskDone)
        setTasks(tasks.map( (task) => (task.id === id ?{...task, done: taskDone.done} :task) ))
      }
    } catch (error) {
      console.log(error)
    }
  };

  return <TaskContext.Provider value={{ tasks, loadTasks, deleteTask, createTask, getTask, updateTask }}>
    {children} {/* Este children es todos los componentes porque no especificamos */}
  </TaskContext.Provider>
}