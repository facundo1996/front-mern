import axios from 'axios';

export const registerUserRequest = async (user) => await axios.post('http://localhost:4000/api/register', user)

export const loginUserRequest = async (user) => await axios.post('http://localhost:4000/api/login', user, { withCredentials: true})

export const logoutRequest = async (user) => await axios.post('http://localhost:4000/api/logout', user, { withCredentials: true})

export const verifyUserRequest = async (user) => await axios.get('http://localhost:4000/api/verify', { withCredentials: true})