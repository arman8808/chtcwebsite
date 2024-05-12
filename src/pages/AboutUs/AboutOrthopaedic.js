import React from "react";
import aboutimg from "../../assests/images/Rectangle 284.png";
function AboutOrthopaedic() {
  return (
    <div className="pagecss gap-[2rem]">
      <div className="w-10/12  pt-[2rem] flex flex-col">
        <h2 className="text-mainHeading font-bold text-navy-blue">
          Orthopaedic-Centre-of-Excellence
        </h2>
        <div className="w-full py-4  grid grid-cols-2 gap-4 rounded-md">
          <div className="flex items-start justify-center flex-col gap-2">
            <p className="para text-gray">
              We provide state-of-the-art care that is second to none: both
              because of the highly-advanced medical facilities available here
              and the experienced team of orthopaedic surgeons striving to cater
              to your needs by uniquely focusing on treating a wide spectrum of
              musculoskeletal conditions. Our multidisciplinary team of highly
              trained orthopaedic surgeons, physiotherapists, orthopaedic
              traumatologists and other supporting staff offers advanced
              treatment options including an array of sophisticated,
              high-technology, diagnostic surgical and therapeutic care.
            </p>
            <p className="para text-gray">
              The Department has a dedicated ICU which is manned by a team of
              doctors trained in Advanced Trauma Life Support (ATLS) and
              Advanced Cardiac Life Support (ACLS). We offer a range of
              solutions including surgical interventions, pain management
              therapies and nonsurgical treatments with a highly integrated
              approach that get you back to doing the things you love. We treat
              a variety of disorders of the musculoskeletal system including,
              Management of fractures, ACL and arthroscopic surgeries, Minimally
              Invasive Spine Surgery (MISS), Total Knee Replacement, Unicondylar
              (Partial) Knee Replacement Surgery, Hip replacement surgery,
              Replacement Surgery of Shoulder (Including Total & Reverse
              Shoulder) and Elbow joints, Limb Salvage Surgeries, and Bone Tumor
              Surgeries. We have a dedicated speciality team for deformity
              correction and Paediatric Orthopaedic conditions with decades of
              trust and experience.
            </p>
          </div>
          <div className="flexcenter">
            <img
              src={aboutimg}
              alt="about"
              className="h-[25rem] w-[80%] object-cover rounded"
            />
          </div>
        </div>
      </div>
      <div className="w-10/12 py-4 pt-[3rem] grid grid-cols-2 gap-4 rounded-md">
        <div className="flexcenter">
          <img
            src={aboutimg}
            alt="about"
            className="h-[25rem] w-[100%] object-cover rounded"
          />{" "}
        </div>{" "}
        <div className="flexcenter">
          <img
            src={aboutimg}
            alt="about"
            className="h-[25rem] w-[100%] object-cover rounded"
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default AboutOrthopaedic;
