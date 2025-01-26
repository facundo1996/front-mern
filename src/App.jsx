import { Route, Routes } from 'react-router-dom'
import TasksPage from './pages/TasksPage.jsx'
import TaskForm from './pages/TaskForm.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Navbar from './components/Navbar.jsx'
import { TaskContextProvider } from "./context/TaskContext.jsx"
import { UserContextProvider } from "./context/UserContext.jsx"

export default function App() {
  return (
    <UserContextProvider>
      <TaskContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<TasksPage />} />
          <Route path='/new' element={<TaskForm />} />
          <Route path='/edit/:id' element={<TaskForm />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </TaskContextProvider>
    </UserContextProvider>
  )
}
