import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            TV SHOW SEARCH
          </Link>
        </Typography>
        <div style={{ marginLeft: "auto" }}>
          <Button color="inherit" component={Link} to="/">
            HOME
          </Button>
          <Button color="inherit" component={Link} to="/about">
            ABOUT
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
