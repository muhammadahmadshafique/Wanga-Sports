import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/material";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
// import logo from "/Users/Randolph/Downloads/franc-client-res/franc-client-res/src/components/Assets/Images/logo-1.png";
import logo from "../../Assets/images/logo-1.png";
// import { FaPhone, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import "./Navigation.css";

const Navigation = () => {
  // const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  ////////////////////////////
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
///////////////////////
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
////////////////////////
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

//////////////
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const open4 = Boolean(anchorEl4);
  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  return (
    <div className="banner">
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="/page-layout">
            <div>
              <img src={logo} alt="logo" className="img-fluid logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to=""
                className="nav-link"
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Machine
              </Link>
              <Menu
                PaperProps={{ "&:before": { bgcolor: "black" } }}
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/machines-overview"
                    className="nav-link"
                    id="demo-positioned-button"
                  >
                    Overview
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/add-machines"
                    className="nav-link"
                    id="demo-positioned-button"
                  >
                    Add Machine
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/machine-update"
                    className="nav-link"
                    id="demo-positioned-button"
                  >
                    Update Machine
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/delete-machines"
                    className="nav-link"
                    id="demo-positioned-button"
                  >
                    Delete Machine
                  </Link>
                </MenuItem>
              </Menu>

              <Link
                to=""
                className="nav-link"
                id="demo-positioned-button"
                aria-controls={open1 ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? "true" : undefined}
                onClick={handleClick1}
              >
                media
              </Link>
              <Menu
                PaperProps={{ "&:before": { bgcolor: "black" } }}
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl1={anchorEl1}
                open={open1}
                onClose={handleClose1}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClose1}>
                  <Link
                    to="/media-overview"
                    className="nav-link"
                    id="demo-positioned-button1"
                  >
                    Media Packages
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose1}>
                  <Link
                    to="/add-media"
                    className="nav-link"
                    id="demo-positioned-button"
                  >
                    Add Media
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose1}>
                  <Link
                    to="/media-overview"
                    className="nav-link"
                    id="demo-positioned-button"
                  >
                    Delete Media
                  </Link>
                </MenuItem>
              </Menu>
              <Link
                to=""
                className="nav-link"
                id="demo-positioned-button"
                aria-controls={open3 ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open3 ? "true" : undefined}
                onClick={handleClick3}
              >
                Dashboard
              </Link>
              <Menu
                PaperProps={{ "&:before": { bgcolor: "black" } }}
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl3={anchorEl3}
                open={open3}
                onClose={handleClose3}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClose3}>
                  <Link
                    to="/authentication-methods"
                    className="nav-link"
                    id="demo-positioned-button"
                  >
                    Authentication Methods
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose3}>
                  <Link
                    to="/add-authentication"
                    className="nav-link"
                    id="demo-positioned-button"
                  >
                    Add Authentication Method
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose3}>
                  <Link
                    to="/media-overview"
                    className="nav-link"
                    id="demo-positioned-button"
                  >
                    Other Option
                  </Link>
                </MenuItem>
              </Menu>
              <Link
                to=""
                className="nav-link"
                id="demo-positioned-button"
                aria-controls={open2 ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open2 ? "true" : undefined}
                onClick={handleClick2}
              >
                flavor
              </Link>
              <Menu
                PaperProps={{ "&:before": { bgcolor: "black" } }}
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl2={anchorEl2}
                open={open2}
                onClose={handleClose2}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <MenuItem onClick={handleClose2}>
                  <Link
                    to="/flavor-overview"
                    className="nav-link"
                    id="demo-positioned-button"
                  >
                    Flavor Packages
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose2}>
                  <Link
                    to="/add-flavor"
                    className="nav-link"
                    id="demo-positioned-button"
                  >
                    Add Flavor
                    
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose2}>
                  <Link
                    to="/delete-flavor"
                    className="nav-link"
                    id="demo-positioned-button"
                  >
                    Delete Flavor
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose2}>
                  <Link
                    to="/update-flavor"
                    className="nav-link"
                    id="demo-positioned-button1"
                  >
                    Update Flavor
                  </Link>
                </MenuItem>
              </Menu>
              <Link 
              to="" 
              className="nav-link"
               id="demo-positioned-button"
                aria-controls={open4 ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open4 ? "true" : undefined}
                onClick={handleClick4}
              >
                Location
              </Link>
              <Menu
                PaperProps={{ "&:before": { bgcolor: "black" } }}
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl4={anchorEl4}
                open={open4}
                onClose={handleClose4}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClose4}>
                  <Link
                    to="/Location-overview"
                    className="nav-link"
                    id="demo-positioned-button"
                  >
                    Location Overview
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose4}>
                  <Link
                    to="/add-location"
                    className="nav-link"
                    id="demo-positioned-button"
                  >
                    Add Location
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose4}>
                  <Link
                    to="/delete-location"
                    className="nav-link"
                    id="demo-positioned-button"
                  >
                    Delete Location
                  </Link>
                </MenuItem>
              </Menu>
             
              
              <Link to="" className="nav-link">
                signout
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};



export default Navigation;
