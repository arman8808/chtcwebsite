import React, { useEffect, useRef, useState } from "react";
import logo from "../../../assests/images/logo-01-01 1.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./MainNav.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Backdrop, Box, Modal } from "@mui/material";
import { Slide } from "@mui/material";
import { IoIosArrowDown, IoMdCloseCircleOutline } from "react-icons/io";
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
    fontweight: "600",
    textDecoration: "none",
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid transparent",
    boxShadow: 24,
    p: 4,
    outline: "transparent",
    borderRadius: "8px",
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const history = useNavigate();
  const comRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!comRef.current.contains(e.target)) {
        document.getElementById("menu__toggle").checked = false;
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <div
      className={
        scrolled
          ? "w-full flex items-center justify-center  mainnav z_index"
          : "w-full flex items-center justify-center bg-primary-green mainnav z_index"
      }
    >
      <div className="py-4 px-4  w-11/12  flex justify-between items-center  bg-[white] rounded-md shadow lg:w-[95%] md:w-[99%]">
        <img
          src={logo}
          alt="logo"
          className="w-[10rem] h-[4rem] object-contain text-[18px] md:w-[8rem] h-[3.5rem]"
          onClick={() => history("/")}
        />
        <ul className=" flex items-center gap-4 mobile:hidden tablet:hidden">
          <li>
            <NavLink
              to="/"
              className="text-[18px] font-medium md:text-[1rem]"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
              onClick={handleClose}
            >
              Home{" "}
            </NavLink>
          </li>
          <li className="flex items-center justify-center gap-1">
            <p
              className="text-[18px] text-[#3D3D3D] font-medium cursor-pointer md:text-[1rem] "
              onClick={handleOpen}
            >
              About
            </p>
            <IoIosArrowDown />
          </li>
          <li>
            <NavLink
              to="/deparments"
              className="text-[18px] font-medium md:text-[1rem]"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
              onClick={handleClose}
            >
              Departments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ourdoctors"
              className="text-[18px] font-medium md:text-[1rem]"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
              onClick={handleClose}
            >
              Our Doctors{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/successstories"
              className="text-[18px] font-medium md:text-[1rem]"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
              onClick={handleClose}
            >
              Success Stories
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/contactus"
              className="text-[18px] font-medium md:text-[1rem]"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
            >
              Contact us{" "}
            </NavLink>
          </li> */}
        </ul>
        <button
          onClick={() => history("/contactus")}
          className="bg-secondry-green hover:scale-105 text-white py-1 px-2  text-[1.1rem] rounded-md mobile:hidden tablet:hidden md:text-[1rem]"
        >
          Get Started <ArrowForwardIcon />
        </button>
        <div className="hamburger-menu hidden mobile:flex tablet:flex">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" for="menu__toggle">
            <span></span>
          </label>

          <ul className="menu__box" ref={comRef}>
            <span className="w-full pr-4 text-end flex items-end justify-end">
              <IoMdCloseCircleOutline
                className="text-[2.5rem]"
                onClick={() =>
                  (document.getElementById("menu__toggle").checked = false)
                }
              />
            </span>
            <li>
              <NavLink
                to="/"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() =>
                  (document.getElementById("menu__toggle").checked = false)
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() =>
                  (document.getElementById("menu__toggle").checked = false)
                }
              >
                AboutUs{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutfacility"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() =>
                  (document.getElementById("menu__toggle").checked = false)
                }
              >
                Facility{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutusourmanagement"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() =>
                  (document.getElementById("menu__toggle").checked = false)
                }
              >
                Our Management
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutorthopaedic"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() =>
                  (document.getElementById("menu__toggle").checked = false)
                }
              >
                Orthopaedics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/deparments"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() =>
                  (document.getElementById("menu__toggle").checked = false)
                }
              >
                Departments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ourdoctors"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() =>
                  (document.getElementById("menu__toggle").checked = false)
                }
              >
                Our Doctors{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/successstories"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() =>
                  (document.getElementById("menu__toggle").checked = false)
                }
              >
                Success Stories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ourgalary"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() =>
                  (document.getElementById("menu__toggle").checked = false)
                }
              >
                Our Gallery
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/logosgalary"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() =>
                  (document.getElementById("menu__toggle").checked = false)
                }
              >
                Logos Gallery
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/contactus"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() =>
                  (document.getElementById("menu__toggle").checked = false)
                }
              >
                Contact us{" "}
              </NavLink>
            </li>
          </ul>
        </div>
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
            <div className="grid grid-cols-2 gap-4">
              <NavLink
                to="/aboutus"
                className="text-[18px] font-medium w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={handleClose}
              >
                About Us
              </NavLink>{" "}
              <NavLink
                to="/aboutfacility"
                className="text-[18px] font-medium w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={handleClose}
              >
                Facility
              </NavLink>{" "}
              <NavLink
                to="/aboutusourmanagement"
                className="text-[18px] font-medium w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={handleClose}
              >
                Our Management
              </NavLink>{" "}
              <NavLink
                to="/aboutorthopaedic"
                className="text-[18px] font-medium w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={handleClose}
              >
                Orthopaedics
              </NavLink>
            </div>
          </Box>
        </Slide>
      </Modal>
    </div>
  );
}

export default MainNav;
