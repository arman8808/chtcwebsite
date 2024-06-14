import React from "react";
import img from "../../assests/images/photo.png";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";
function DoctorCard({
  profile,
  name,
  desigitation,
  img,
  insta,
  facebook,
  linkdin,
}) {
  return (
    <div className="flex flex-col items-center justify-start gap-2  bg-light-gray p-4 w-[80%] rounded w-full mobile:min-w-[20rem] md:min-w-[17rem]">
      <img
        src={profile ? profile : img}
        alt="doctor"
        className="h-[20rem] w-full object-contain rounded-md h-[20rem]"
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
        {insta && (
          <Link to={insta} target="_blank">
            <Instagram className="text-secondry-green cursor-pointer" />
          </Link>
        )}
        {facebook && (
          <Link to={facebook} target="_blank">
            <Facebook className="text-secondry-green cursor-pointer" />
          </Link>
        )}
        {linkdin && (
          <Link to={linkdin} target="_blank">
            <LinkedIn className="text-secondry-green cursor-pointer" />
          </Link>
        )}
      </span>
    </div>
  );
}

export default DoctorCard;
