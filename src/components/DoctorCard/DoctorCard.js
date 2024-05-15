import React from "react";
import img from "../../assests/images/photo.png";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
function DoctorCard({ profile, name, desigitation }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2  bg-light-gray p-4 w-[80%] rounded w-full mobile:min-w-[20rem]">
      <img
        src={profile ? profile : img}
        alt="doctor"
        className="h-[20rem] w-full object-contain rounded-md"
      />
      <span className="flexcenter flex-col">
        {" "}
        <h6 className="text-normalHeading font-normal text-black-shade">
          {name ? name : " Vanseena Adams"}
        </h6>
        <p className="para text-gray text-center">
          {desigitation ? desigitation : "Stuff Nurse"}
        </p>
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
