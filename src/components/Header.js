import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import CameraAlt from "@mui/icons-material/CameraAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const urlStyle = {
  color: "inherit",
  textDecoration: "inherit",
};

function Header() {
  return (
    <AppBar position="static" style={{ background: "#2E3B55" }}>
      <Toolbar>
        <CameraAlt fontSize="small"></CameraAlt>
        <Button color="inherit">
          <Link to="/" style={urlStyle}>
            Photo Browser
          </Link>
        </Button>
        <div style={{ marginLeft: "auto" }}>
          <Button color="inherit" fontSize="30px">
            <Link to="/" style={urlStyle}>
              All photos
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/albums" style={urlStyle}>
              Albums
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/my_account" style={urlStyle}>
              <AccountCircleIcon></AccountCircleIcon>
            </Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
