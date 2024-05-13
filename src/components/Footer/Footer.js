import React from "react";
import img from "../../assests/images/Logo.png";
import footerBackground from "../../assests/images/Vector 8.png";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

function Footer() {
  return (
    <div className="w-full relative flex items-center justify-start flex-col mt-[5rem]">
      <img src={img} alt="" className="h-[20rem] absolute top-[-7rem] z-1" />
      <div className="w-full flex items-center justify-center  relative">
        <img
          src={footerBackground}
          alt="footerBackground"
          className="w-full h-[25rem]"
        />
        <div className="w-11/12 grid grid-cols-3 gap-4 py-4 pt-[5rem] absolute">
          <div>
            <h6>ProHealth Medical & Healthcare Center</h6>
            <span>
              <p>
                C 1 & C 2 , CINDER DUMP COMPLEX, KANPUR ROAD, NEAR ALAMBAGH BUS
                STAND, ALAMBAGH, LUCKNOW, UTTAR PRADESH, 226005
              </p>
            </span>
            <span>
              <p>9119900861,9119900862</p>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <span>
              <p>About Us</p>
              <p>Departments</p>
              <p>Doctors</p>
              <p>Appointment</p>
            </span>
            <span>
              <p>Blog</p>
              <p>Contact Us</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
            </span>
          </div>
          <div>
            <h3>Be Our Subscribers</h3>
            <p>to get the latest news about health from our experts</p>
            <span>
              <input type="text" placeholder="Email Address" />
              <button>Submit</button>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-secondry-green w-full py-3 px-[5%] flex items-center justify-between">
        <span className="flex justify-start items-center gap-2 text-white">
          <p>Follow Us</p>
          <Facebook />
          <Instagram />
          <Twitter />
        </span>
        <p className="para text-white">
          Copyright © 2024 Pro Health. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
