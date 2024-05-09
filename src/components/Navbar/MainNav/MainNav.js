import React from "react";
import logo from "../../../assests/images/logo-01-01 1.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function MainNav() {
  return (
    <div className="w-full flex items-center justify-center ">
      <div className="py-1 px-2  w-9/12  flex justify-between items-center  bg-[white] rounded-md">
        <img
          src={logo}
          alt="logo"
          className="w-[10rem] h-[4rem] object-contain"
        />
        <ul className=" flex items-center gap-2">
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Departments</p>
          </li>
          <li>
            <p>Our Doctors </p>
          </li>
          <li>
            <p>Success Stories</p>
          </li>
          <li>
            <p>Contact us </p>
          </li>
        </ul>
        <button className="bg-primary-green text-white py-1 px-2  text-[1.1rem] rounded-md">
          Get Started <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
}

export default MainNav;
