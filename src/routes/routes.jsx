import TasksPage from '../pages/TasksPage.jsx';
import TaskForm from '../pages/TaskForm.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import Register from '../pages/Register.jsx';
import Login from '../pages/Login.jsx';
import Home from '../pages/Home.jsx';
import App from '../App.jsx';
import ProtectedRoute from '../auth/ProtectedRoute.jsx';


const createAppRoutes = () => [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'tasks',
        element: (
          <ProtectedRoute>
            <TasksPage />
          </ProtectedRoute>
        )
      },
      {
        path: 'new',
        element: (
          <ProtectedRoute>
            <TaskForm />
          </ProtectedRoute>
        )
      },
      {
        path: '/tasks/edit/:id',
        element: (
          <ProtectedRoute>
            <TaskForm />
          </ProtectedRoute>
        )
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
]

export default createAppRoutes;