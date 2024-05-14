import React from "react";
import DoctorCard from "../../components/DoctorCard/DoctorCard";

function OurDoctors() {
  return (
    <div className="pagecss gap-[2rem]">
      <div className="w-10/12 py-4 pt-[3rem] grid grid-cols-2 gap-4 ">
        <div className="flex items-start justify-center flex-col gap-2">
          <h2 className="text-mainHeading font-bold text-navy-blue">
            Meet Our Doctor
          </h2>
        </div>
      </div>
      <div className="w-9/12 grid grid-cols-3 gap-4">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </div>
    </div>
  );
}

export default OurDoctors;
