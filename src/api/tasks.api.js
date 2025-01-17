import axios from 'axios';

export const getTasksRequest = async () => await axios.get('http://localhost:4000/tasks') 

export const getTaskRequest = async (id) => await axios.get(`http://localhost:4000/task/${id}`) 

export const createTaskRequest = async (task) => await axios.post('http://localhost:4000/tasks', task)

export const updateTaskRequest = async (id, task) => await axios.put(`http://localhost:4000/task/${id}`, task)

export const deleteTaskRequest = async (id) => await axios.delete(`http://localhost:4000/task/${id}`) 