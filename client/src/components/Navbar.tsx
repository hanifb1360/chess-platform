import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Navbar: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          Chess App
        </Typography>
        <Button color='inherit' component={Link} to='/'>
          Home
        </Button>
        {user.token ? (
          <>
            <Button color='inherit' component={Link} to='/profile'>
              Profile
            </Button>
          </>
        ) : (
          <Button color='inherit' component={Link} to='/login'>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
