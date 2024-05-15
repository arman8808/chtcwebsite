import React from "react";
import img from "../../assests/images/Logo.png";
import footerBackground from "../../assests/images/Vector 8.png";
import {
  Email,
  Facebook,
  Instagram,
  LocationOn,
  Phone,
  Twitter,
} from "@mui/icons-material";

function Footer() {
  return (
    <div className="w-full relative flex items-center justify-start flex-col mt-[5rem]">
      <img src={img} alt="" className="h-[20rem] absolute top-[-7rem] z-50" />
      <div className="w-full flex items-center justify-center  relative">
        <img
          src={footerBackground}
          alt="footerBackground"
          className="w-full h-[25rem]"
        />
        <div className="w-11/12 grid grid-cols-3 gap-4 py-4 pt-[8rem] absolute">
          <div className="flex flex-col justify-start items-start gap-2">
            <h6 className="text-para font-semibold text-black-shade">
              City Hospital Trauma Center
            </h6>
            <span className="flex items-start justify-start gap-2">
              <p className="p-1 bg-primary-green rounded-full">
                <LocationOn
                  className="text-white"
                  style={{ fontSize: "1.4rem" }}
                />
              </p>
              <p className="text-[14px] w-[80%]">
                C 1 & C 2 , CINDER DUMP COMPLEX, KANPUR ROAD, NEAR ALAMBAGH BUS
                STAND, ALAMBAGH, LUCKNOW, UTTAR PRADESH, 226005
              </p>
            </span>
            <span className="flex items-start justify-start gap-2">
              <p className="p-1 bg-primary-green rounded-full">
                <Phone className="text-white" style={{ fontSize: "1.4rem" }} />
              </p>
              <p className="text-[14px]">+91 9119900861,+91 9119900862</p>
            </span>
            <span className="flex items-start justify-start gap-2">
              <p className="p-1 bg-primary-green rounded-full">
                <Email className="text-white" style={{ fontSize: "1.4rem" }} />
              </p>
              <p className="text-[14px]">city.lko@gmail.com</p>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <span>
              <p className="text-[1rem] font-normal cursor-pointer">About Us</p>
              <p className="text-[1rem] font-normal cursor-pointer">
                Departments
              </p>
              <p className="text-[1rem] font-normal cursor-pointer">Doctors</p>
              <p className="text-[1rem] font-normal cursor-pointer">
                Appointment
              </p>
            </span>
            <span>
              <p className="text-[1rem] font-normal cursor-pointer">Blog</p>
              <p className="text-[1rem] font-normal cursor-pointer">
                Contact Us
              </p>
              <p className="text-[1rem] font-normal cursor-pointer">FAQs</p>
              <p className="text-[1rem] font-normal cursor-pointer">
                Privacy Policy
              </p>
              <p className="text-[1rem] font-normal cursor-pointer">
                Terms and Conditions
              </p>
            </span>
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <h3 className="text-black-shade text-normalHeading font-semibold">
              Be Our Subscribers
            </h3>
            <p className="para text-gray">
              to get the latest news about health from our experts
            </p>
            <span className="border border-gray bg-white rounded p-2 rounded-[1.5rem]">
              <input
                type="text"
                placeholder="Email Address"
                className="border-none outline-none"
              />
              <button className="green_background_linear button rounded-3xl text-white">
                Submit
              </button>
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
