import React from "react";
import img from "../../assests/images/photo.png";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
function DoctorCard({ profile }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2  bg-light-gray p-4 w-[80%] rounded w-full">
      <img
        src={profile ? profile : img}
        alt="doctor"
        className="h-[20rem] w-full object-contain rounded"
      />
      <span className="flexcenter flex-col">
        {" "}
        <h6 className="text-normalHeading font-normal text-black-shade">
          Vanseena Adams
        </h6>
        <p className="para text-gray">Stuff Nurse</p>
      </span>
      <span className="flex gap-2">
        <Instagram className="text-secondry-green cursor-pointer" />
        <Facebook className="text-secondry-green cursor-pointer" />
        <Twitter className="text-secondry-green cursor-pointer" />
      </span>
    </div>
  );
}

export default DoctorCard;
