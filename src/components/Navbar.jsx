import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";
import { AppBar, Typography } from "@mui/material";

export default function Navbar() {

  const { logoutUser, user } = useUser();
  const navigate = useNavigate()

  function logout() {
    logoutUser();
    navigate('/login')
    window.location.reload();
  }

  return (
    <AppBar position="relative" sx={{display: "flex", flexDirection:"row", justifyContent:"space-around"}}>
      {!user || Object.keys(user).length === 0 && (
        <>
          <Typography to="/login" variant="h6" component={Link} >Login</Typography>
          <Typography to="/register" variant="h6" component={Link}>Register</Typography>
        </>
      )}
      {user.id && (
        <>
          <Typography to="/" variant="h6" component={Link}>Home</Typography>
          <Typography to="/tasks" variant="h6" component={Link}>Tasks</Typography>
          <Typography to="/new" variant="h6" component={Link}>Create Task</Typography>
          <Typography to="/logout" variant="h6" component={Link} onClick={logout}>Logout</Typography>
        </>
      )}

    </AppBar >
  )
}
