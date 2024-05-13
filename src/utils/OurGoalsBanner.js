import React from "react";
import img from "../assests/images/Background.png";
import logo from "../assests/images/Group 119.png";
function OurGoalsBanner() {
  return (
    <div className="w-full flex items-center justify-center relative mt-[3rem]">
      <img src={img} alt="OurGoalsBanner" />
      <div className="w-full absolute grid grid-cols-3 px-[3%] gap-4">
        <span className="col-span-2 flex flex-col justify-start items-start gap-2">
          <p className="text-normalHeading font-semibold text-white">
            Our goal is to promote good health and spread smiles worldwide. At
            CHTC, you will always encounter compassion and a patient-cantered
            approach to healthcare
          </p>
          <p className="para font-semibold">
            Schedule an appointment with an experienced medical professional.
          </p>
        </span>
        <img
          src={logo}
          alt="logo"
          className="absolute bottom-[-7rem] right-[2rem] h-[30rem]"
        />
      </div>
    </div>
  );
}

export default OurGoalsBanner;