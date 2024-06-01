import React from "react";
import DeparmentCard from "../../components/DeparmentCard/DeparmentCard";

function Deparments() {
  const data = [
    {
      title: "Orthopaedics",
    },
    {
      title: "Obstetrics & Gynaecology",
    },
    {
      title: "General Medicine",
    },
    {
      title: "General Surgery",
    },
    {
      title: "Paediatrics",
    },
    {
      title: "Critical Care & ICU",
    },
    {
      title: "Cardiology",
    },
    {
      title: "Ophthalmology (Eyes)",
    },
    {
      title: "ENT (Ear, Nose & Throat)",
    },
  ];
  return (
    <div className="pagecss gap-[3rem]">
      <div className="w-10/12 py-4 pt-[3rem] grid grid-cols-1 gap-4 rounded-md">
        <div className="flex items-start justify-center flex-col gap-2">
          <h2 className="text-mainHeading font-bold text-navy-blue">
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
      <div className="w-9/12 py-4  grid grid-cols-3 gap-4 rounded-md scroll_x mobile:flex lg:w-10/12 md:w-11/12 md:gap-[4rem]">
        {data?.map((item) => (
          <DeparmentCard name={item?.title} />
        ))}
      </div>
    </div>
  );
}

export default Deparments;
