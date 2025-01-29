import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";
import { AppBar, Divider, Typography } from "@mui/material";
export default function Navbar() {

  const { logoutUser } = useUser();
  

  function logout() {
    logoutUser();
    
    window.location.reload();
  }

  return (
    <AppBar position="relative" sx={{display: "flex", flexDirection:"row", justifyContent:"space-around"}}>
      {/* <h1>MERN MYSQL</h1> */}
      <Typography to="/login" variant="h6" component={Link} >
        Login
      </Typography>
      <Typography to="/register" variant="h6" component={Link}>
        Register
      </Typography>
      <Typography to="/logout" variant="h6" component={Link} onClick={logout}>
        Logout
      </Typography>
      <Typography to="/" variant="h6" component={Link}>
        Home
      </Typography>
      <Typography to="/new" variant="h6" component={Link}>
        Create Task
      </Typography>

    </AppBar >
  )
}
