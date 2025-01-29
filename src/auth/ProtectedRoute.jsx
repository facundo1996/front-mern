import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from "../context/UserContext.jsx"; // Asumiendo que tienes un contexto de usuario

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();  // Asumiendo que tienes el usuario en el contexto
  const location = useLocation();

  // Si no hay usuario (no autenticado), redirige a login
  if (!user || Object.keys(user).length === 0) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si está autenticado, renderiza los componentes hijos (la ruta protegida)
  return children;
};

export default ProtectedRoute;
