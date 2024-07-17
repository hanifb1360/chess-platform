import React, { ReactNode } from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' style={{ flexGrow: 1 }}>
            Chess App
          </Typography>
          <Button color='inherit' component={Link} to='/'>
            Home
          </Button>
          <Button color='inherit' component={Link} to='/register'>
            Register
          </Button>
          <Button color='inherit' component={Link} to='/login'>
            Login
          </Button>
          <Button color='inherit' component={Link} to='/profile'>
            Profile
          </Button>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
