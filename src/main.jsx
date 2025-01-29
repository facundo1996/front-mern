import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TaskContextProvider } from "./context/TaskContext.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import createAppRoutes from './routes/routes.jsx';
const router = createBrowserRouter(createAppRoutes());
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <TaskContextProvider>
        <RouterProvider router={router} />
      </TaskContextProvider>
    </UserContextProvider>
  </StrictMode>
)
