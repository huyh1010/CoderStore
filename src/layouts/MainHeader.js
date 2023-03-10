import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import Logo from "../components/Logo";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function MainHeader() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const auth = useAuth();
  const handleLogOut = () => {
    auth.logout(() => navigate("/"));
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Logo />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            CoderStore
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="contained"
            onClick={handleLogOut}
            sx={{ marginRight: "5px" }}
          >
            Log out
          </Button>
          <Typography variant="h6" color="inherit" component="div">
            Welcome {user?.username}!
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
