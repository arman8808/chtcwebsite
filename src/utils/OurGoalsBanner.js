import React from "react";
import img from "../assests/images/Background.png";
import logo from "../assests/images/Group 119.png";
function OurGoalsBanner() {
  return (
    <div className="w-full flex items-center justify-center relative mt-[3rem]">
      <img
        src={img}
        alt="OurGoalsBanner "
        className=" mobile:h-[20rem]  tablet:h-[20rem] md:h-[20rem]"
      />
      <div className="w-full absolute grid grid-cols-3 px-[3%] gap-4 mobile:grid-cols-1">
        <span className="col-span-2 flex flex-col justify-start items-start gap-2 mobile:col-span-1">
          <p className="text-normalHeading font-semibold text-white mobile:text-[1.2rem]">
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
          className="absolute bottom-[-7rem] right-[2rem] h-[30rem] mobile:hidden lg:h-[25rem] lg:right-[1rem] lg:bottom-[-1rem] md:h-[15rem] md:bottom-[0] md:right-[0] tablet:h-[15rem] tablet:bottom-[0] tablet:right-[0]"
        />
      </div>
    </div>
  );
}

export default OurGoalsBanner;
