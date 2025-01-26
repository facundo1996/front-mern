import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";

export default function Navbar() {

  const { logoutUser } = useUser();
  const navigate = useNavigate();

  function logout() {
    logoutUser();
    navigate("/login");
    window.location.reload();
  }

  return (
    <div>
      <h1>MERN MYSQL</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <button onClick={() => logout()}>Logout</button>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Create Task</Link>
        </li>
      </ul>
    </div>
  )
}
