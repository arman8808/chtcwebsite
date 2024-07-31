import React from "react";
import aboutimg from "../../assests/images/Orthopaedic-Physiotherapy.jpg";
import aboutimg1 from "../../assests/images/techniques-1.jpg";
import aboutimg2 from "../../assests/images/Orthopedic-treatment-burlington.jpg";
function AboutOrthopaedic() {
  return (
    <div className="pagecss gap-[2rem] mobile:gap-[1rem]">
      <div className="w-10/12  pt-[2rem] flex flex-col">
        <h2 className="text-mainHeading font-bold text-navy-blue mobile:text-normalHeading">
          Orthopaedic-Centre-of-Excellence
        </h2>
        <div className="w-full py-4  grid grid-cols-2 gap-4 rounded-md mobile:flex mobile:flex-col-reverse">
          <div className="flex items-start justify-center flex-col gap-2">
            <p className="para text-gray">
              We offer cutting-edge healthcare services that are unmatched,
              thanks to the advanced medical amenities on offer and our team of
              seasoned orthopedic surgeons dedicated to addressing a diverse
              range of musculoskeletal issues.
            </p>
            <p className="para text-gray">
              Our diverse group of expert orthopedic surgeons, physiotherapists,
              orthopedic traumatologists, and additional support personnel
              provide advanced treatment choices, encompassing a range of
              cutting-edge diagnostic, surgical, and therapeutic interventions.
            </p>
            <p className="para text-gray">
              The Department maintains a specialized ICU staffed by physicians
              skilled in Advanced Trauma Life Support (ATLS) and Advanced
              Cardiac Life Support (ACLS). We provide a variety of options,
              including surgical procedures, pain management techniques, and
              non-surgical therapies, employing a comprehensive approach to help
              you resume activities you enjoy.{" "}
            </p>
            <p className="para text-gray">
              We address diverse musculoskeletal disorders, such as fracture
              management, ACL and arthroscopic surgeries, Minimally Invasive
              Spine Surgery (MISS), Total Knee Replacement, Unicondylar
              (Partial) Knee Replacement Surgery, Hip replacement surgery,
              Shoulder Replacement Surgery (including Total & Reverse Shoulder),
              Elbow joint replacement, Limb Salvage Surgeries, and Bone Tumor
              Surgeries. Our specialized team focuses on deformity correction
              and Pediatric Orthopedic conditions, boasting decades of trusted
              expertise.
            </p>
          </div>
          <div className="flexcenter">
            <img
              src={aboutimg}
              alt="about"
              className="h-[25rem] w-[80%] object-cover rounded mobile:w-[100%]"
            />
          </div>
        </div>
      </div>
      <div className="w-10/12 py-4 pt-[3rem] grid grid-cols-2 gap-4 rounded-md mobile:grid-cols-1 mobile:pt-[1rem]">
        <div className="flexcenter">
          <img
            src={aboutimg1}
            alt="about"
            className="h-[25rem] w-[100%] object-cover rounded"
          />{" "}
        </div>{" "}
        <div className="flexcenter">
          <img
            src={aboutimg2}
            alt="about"
            className="h-[25rem] w-[100%] object-cover rounded"
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default AboutOrthopaedic;
