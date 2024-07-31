import React from "react";
import DeparmentCard from "../../components/DeparmentCard/DeparmentCard";
import OrthopaedicsImage from "../../assests/images/icons/1-01.jpg";
import ObstetricsGynaecology from "../../assests/images/icons/1-02.jpg";
import GeneralMedicine from "../../assests/images/icons/1-03.jpg";
import GeneralSurgery from "../../assests/images/icons/1-04.jpg";
import Paediatrics from "../../assests/images/icons/1-05.jpg";
import CriticalCareICU from "../../assests/images/icons/1-06.jpg";
import Cardiology from "../../assests/images/icons/1-07.jpg";
import OphthalmologyImage from "../../assests/images/icons/1-08.jpg";
import ENT from "../../assests/images/icons/1-09.jpg";

function Deparments() {
  const data = [
    {
      title: "Orthopaedics",
      image: OrthopaedicsImage,
    },
    {
      title: "Obstetrics & Gynaecology",
      image: ObstetricsGynaecology,
    },
    {
      title: "General Medicine",
      image: GeneralMedicine,
    },
    {
      title: "General Surgery",
      image: GeneralSurgery,
    },
    {
      title: "Paediatrics",
      image: Paediatrics,
    },
    {
      title: "Critical Care & ICU",
      image: CriticalCareICU,
    },
    {
      title: "Cardiology",
      image: Cardiology,
    },
    {
      title: "Ophthalmology (Eyes)",
      image: OphthalmologyImage,
    },
    {
      title: "ENT (Ear, Nose & Throat)",
      image: ENT,
    },
  ];
  return (
    <div className="pagecss gap-[3rem]">
      <div className="w-10/12 py-4 pt-[3rem] grid grid-cols-1 gap-4 rounded-md">
        <div className="flex items-start justify-center flex-col gap-2">
          <h2 className="text-mainHeading mobile:text-seconderyHeading font-bold text-navy-blue">
            General and Laparoscopic surgery:
          </h2>
          <p className="para text-gray">
            Laparoscopic surgery department is equipped with the latest
            technology and infrastructure of global standard supported by an
            experienced team of surgeons. The department specialised in
            performing all major surgeries involving abdomen, skin, breast, soft
            tissue and hernia. Team of experienced surgeon who can do most of
            the gynaecological, gastroenterology and urology procedures through
            minimally invasive (Laparoscopic) or key hole surgeries using latest
            technology. Sub-specialities:
          </p>
          <ul className="list-disc">
            <li>Bariatric surgery</li>
            <li>Endoscopic surgery</li>
            <li>Laparoscopic surgery</li>
          </ul>
        </div>
      </div>
      <div className="w-9/12 py-4  grid grid-cols-3 gap-4 rounded-md scroll_x mobile:flex lg:w-10/12 md:w-11/12 md:gap-[4rem] mobile:w-11/12">
        {data?.map((item) => (
          <DeparmentCard name={item?.title} profile={item.image} />
        ))}
      </div>
    </div>
  );
}

export default Deparments;
