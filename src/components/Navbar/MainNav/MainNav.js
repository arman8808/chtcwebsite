import React, { useEffect, useState } from "react";
import logo from "../../../assests/images/logo-01-01 1.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./MainNav.css";
import { NavLink } from "react-router-dom";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import { Slide } from "@mui/material";
function MainNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);
  let activeStyle = {
    color: "#6BC6B4",
    fontweight: "600",
    textDecoration: "none",
    borderBottom: "2px solid #6BC6B4",
  };
  let unActiveStyle = {
    color: "#3D3D3D",
    fontweight: "500",
    textDecoration: "none",
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid transparent",
    boxShadow: 24,
    p: 4,
    outline: "transparent",
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      className={
        scrolled
          ? "w-full flex items-center justify-center  mainnav"
          : "w-full flex items-center justify-center bg-primary-green mainnav"
      }
    >
      <div className="py-2 px-4  w-11/12  flex justify-between items-center  bg-[white] rounded-md">
        <img
          src={logo}
          alt="logo"
          className="w-[10rem] h-[4rem] object-contain"
        />
        <ul className=" flex items-center gap-2">
          <li>
            <NavLink
              to="/"
              className="text-[18px] font-medium"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
            >
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className="text-[18px] font-medium"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
              onClick={handleOpen}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/deparments"
              className="text-[18px] font-medium"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
            >
              Departments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ourdoctors"
              className="text-[18px] font-medium"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
            >
              Our Doctors{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/successstories"
              className="text-[18px] font-medium"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
            >
              Success Stories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              className="text-[18px] font-medium"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
            >
              Contact us{" "}
            </NavLink>
          </li>
        </ul>
        <button className="bg-secondry-green hover:scale-105 text-white py-1 px-2  text-[1.1rem] rounded-md">
          Get Started <ArrowForwardIcon />
        </button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Slide direction="down" in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Slide>
      </Modal>
    </div>
  );
}

export default MainNav;
