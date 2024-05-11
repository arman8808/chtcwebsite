import { Email, LocationOn, Phone } from "@mui/icons-material";
import React from "react";

function SubNav() {
  return (
    <div className="w-full   flex justify-center items-center bg-primary-green">
      <div className="w-9/12 py-2 px-4 bg-light-green flex justify-between items-center rounded-md">
        <span className="flex justify-center items-center gap-1 text-white">
          <LocationOn style={{ fontSize: "1.3rem" }} />
          <p className="text-[14px]">
            Jl Danau Bratan, Malang City, East Java 65139
          </p>
        </span>
        <div className="flex justify-center items-center gap-2 ">
          <span className="flex justify-center items-center pr-1 gap-1 border-r-[2px] text-white">
            <Phone style={{ fontSize: "1.3rem" }} />
            <p className="text-[14px]">+62 864 6444 2222</p>
          </span>
          <span className="flex justify-center items-center pr-1 gap-1 text-white">
            <Email style={{ fontSize: "1.3rem" }} />
            <p className="text-[14px]">hi@happydental.com</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SubNav;
