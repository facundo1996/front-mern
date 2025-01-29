import TasksPage from '../pages/TasksPage.jsx';
import TaskForm from '../pages/TaskForm.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import Register from '../pages/Register.jsx';
import Login from '../pages/Login.jsx';
import Home from '../pages/Home.jsx';
import App from '../App.jsx';

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
        element: <TasksPage />
      },
      {
        path: 'new',
        element: <TaskForm />
      },
      {
        path: 'edit/:id',
        element: <TaskForm />
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