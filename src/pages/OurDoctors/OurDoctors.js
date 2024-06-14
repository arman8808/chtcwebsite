import React from "react";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import OurGoalsBanner from "../../utils/OurGoalsBanner";
import RohilMehta from "../../assests/images/1.png";
import RajeshMehta from "../../assests/images/2.png";
import JyotsnaMehta from "../../assests/images/3.png";
function OurDoctors() {
  return (
    <div className="pagecss gap-[2rem]">
      <div className="w-10/12 py-4 pt-[3rem] grid grid-cols-2 gap-4 mobile:grid-cols-1 md:grid-cols-1">
        <div className="flex items-start justify-center flex-col gap-2">
          <h2 className="text-mainHeading font-bold text-navy-blue">
            Meet Our Doctor
          </h2>
        </div>
      </div>
      <div className="w-10/12 grid grid-cols-3 gap-4 mobile:flex scroll_x md:w-11/12">
        <DoctorCard
          profile={RajeshMehta}
          name={"Dr. Rajesh Mehta"}
          desigitation={"M.B.B.S. M.S. ( Orthopaedics ) Director: CHTC "}
        />
        <DoctorCard
          profile={RohilMehta}
          name={"Dr. Rohil Mehta"}
          desigitation={"MBBS, M.S. ( Orthopaedics ), D.N.B. ( Orthopaedics )"}
          insta={"https://www.instagram.com/dr.rohilmehta/"}
          facebook={"https://www.facebook.com/rohil.mehta.9"}
          linkdin={"https://www.linkedin.com/in/rohil-mehta-643a6b238/"}
        />
        <DoctorCard
          profile={JyotsnaMehta}
          name={"Dr. Jyotsna Mehta"}
          desigitation={
            "M.B.B.S. , D.G.O. Senior Gynaecologist & Director: CHTC"
          }
        />
      </div>
      <div className=" w-10/12 py-4">
        <OurGoalsBanner />
      </div>
    </div>
  );
}

export default OurDoctors;
