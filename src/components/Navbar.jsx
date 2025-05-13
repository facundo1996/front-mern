import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";
import { AppBar, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";

export default function Navbar() {
  const { logoutUser, user } = useUser();
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  console.log(user)

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
    window.location.reload();
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <AppBar position="relative" sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
      <Typography sx={{ color: '#fff' }} to="/" variant="h6" component={Link}>
        Home
      </Typography>
      {!user || Object.keys(user).length === 0 ? (
        <>
          <Typography sx={{ color: '#fff' }} to="/login" variant="h6" component={Link}>
            Login
          </Typography>
          <Typography sx={{ color: '#fff' }} to="/register" variant="h6" component={Link}>
            Register
          </Typography>
        </>
      ) : (
        <>
          <Typography sx={{ color: '#fff' }} to="/admin" variant="h6" component={Link}>
            Admin
          </Typography>
          <Typography sx={{ color: '#fff' }} to="/tasks" variant="h6" component={Link}>
            Tasks
          </Typography>
          <Typography sx={{ color: '#fff' }} to="/new" variant="h6" component={Link}>
            Create Task
          </Typography>
          <Typography sx={{ color: '#fff', cursor: 'pointer' }} variant="h6" component="span" onClick={handleClickOpen} >
            Logout
          </Typography>
        </>
      )}

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Are you sure you want to log out?</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="textSecondary">
            You will be logged out of your account.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogout} color="secondary">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
}

