import axios from 'axios';

export const getTasksRequest = async () => await axios.get('http://localhost:4000/api/tasks', { withCredentials: true}) 

export const getTaskRequest = async (id) => await axios.get(`http://localhost:4000/api/task/${id}`, { withCredentials: true}) 

export const createTaskRequest = async (task, username) => await axios.post('http://localhost:4000/api/tasks', {task, username}, { withCredentials: true})

export const updateTaskRequest = async (id, task) => await axios.put(`http://localhost:4000/api/task/${id}`, task, { withCredentials: true})

export const deleteTaskRequest = async (id) => await axios.delete(`http://localhost:4000/api/task/${id}`, { withCredentials: true}) 