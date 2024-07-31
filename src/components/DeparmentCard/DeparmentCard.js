import React from "react";
import img from "../../assests/images/photo.png";
function DeparmentCard({ profile, name, desigitation }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2  bg-light-gray p-4 w-[80%] rounded w-full mobile:min-w-[18rem] md:min-w-[17rem]">
      <img
        src={profile ? profile : img}
        alt="doctor"
        className="h-[20rem] w-full object-contain rounded-md"
      />
      <span className="flexcenter flex-col">
        <h6 className="text-normalHeading font-normal text-black-shade text-center">
          {name ? name : " Vanseena Adams"}
        </h6>
      </span>
    </div>
  );
}

export default DeparmentCard;
