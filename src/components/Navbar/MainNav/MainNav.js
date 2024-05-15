import React, { useEffect, useState } from "react";
import logo from "../../../assests/images/logo-01-01 1.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./MainNav.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Backdrop, Box, Modal } from "@mui/material";
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
  return (
    <div
      className={
        scrolled
          ? "w-full flex items-center justify-center  mainnav"
          : "w-full flex items-center justify-center bg-primary-green mainnav"
      }
    >
      <div className="py-4 px-4  w-11/12  flex justify-between items-center  bg-[white] rounded-md shadow z_index">
        <img
          src={logo}
          alt="logo"
          className="w-[10rem] h-[4rem] object-contain text-[18px]"
          onClick={() => history("/")}
        />
        <ul className=" flex items-center gap-4 mobile:hidden">
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
            <p
              className="text-[18px] text-[#3D3D3D] font-medium cursor-pointer"
              onClick={handleOpen}
            >
              About
            </p>
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
        <button
          onClick={() => history("/contactus")}
          className="bg-secondry-green hover:scale-105 text-white py-1 px-2  text-[1.1rem] rounded-md mobile:hidden"
        >
          Get Started <ArrowForwardIcon />
        </button>
        <div className="hamburger-menu hidden mobile:flex">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" for="menu__toggle">
            <span></span>
          </label>

          <ul className="menu__box">
            <li>
              <NavLink
                to="/"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
              >
                Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
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
              >
                About Facility{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutusourmanagement"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
              >
                Aboutus OurManagement
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutorthopaedic"
                className="text-[18px] font-medium menu__item w-fit"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
              >
                About Orthopaedic
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/deparments"
                className="text-[18px] font-medium menu__item"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
              >
                Departments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ourdoctors"
                className="text-[18px] font-medium menu__item"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
              >
                Our Doctors{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/successstories"
                className="text-[18px] font-medium menu__item"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
              >
                Success Stories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className="text-[18px] font-medium menu__item"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
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
                className="text-[18px] font-medium"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={handleClose}
              >
                AboutUs
              </NavLink>{" "}
              <NavLink
                to="/aboutfacility"
                className="text-[18px] font-medium"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={handleClose}
              >
                About Facility
              </NavLink>{" "}
              <NavLink
                to="/aboutusourmanagement"
                className="text-[18px] font-medium"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={handleClose}
              >
                Aboutus Our Management
              </NavLink>{" "}
              <NavLink
                to="/aboutorthopaedic"
                className="text-[18px] font-medium"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={handleClose}
              >
                About Orthopaedic
              </NavLink>
            </div>
          </Box>
        </Slide>
      </Modal>
    </div>
  );
}

export default MainNav;
