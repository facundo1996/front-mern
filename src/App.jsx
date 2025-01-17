import { Route, Routes } from 'react-router-dom'
import TasksPage from './pages/TasksPage.jsx'
import TaskForm from './pages/TaskForm.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Navbar from './components/Navbar.jsx'
import {TaskContextProvider} from "./context/TaskContext.jsx"

export default function App() {
  return (
    <TaskContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<TasksPage />} />
        <Route path='/new' element={<TaskForm />} />
        <Route path='/edit/:id' element={<TaskForm />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </TaskContextProvider>
  )
}
