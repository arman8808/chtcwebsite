import React from "react";
import aboutimg1 from "../../assests/images/Rectangle 292.png";
function AboutFacility() {
  return (
    <div className="pagecss gap-[3rem]">
      <div className="w-10/12  py-4 pt-[3rem] flex flex-col justify-start items-start gap-2">
        <h2 className="text-mainHeading font-bold text-navy-blue">
          Facilities
        </h2>
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="flex justify-start items-start flex-col gap-2">
            <h6 className="text-normalHeading semibold text-secondry-green">
              Overview - Facility
            </h6>
            <ul className="text-gray font-semibold text-[1.2rem]">
              <li>- Spread over 80,000 sq ft.</li>
              <li>- Basement + 5 floors.</li>
              <li>- Emergency and Trauma services.</li>
              <li>- Pharmacy.</li>
              <li>- In House Laboratory services.</li>
              <li>- Multispecialty OPD Complex.</li>
              <li>- Deluxe Suites.</li>
              <li>- CSSD.</li>
            </ul>
          </div>
          <div className="flex justify-start items-start flex-col gap-2">
            <h6 className="text-normalHeading semibold text-secondry-green">
              Medical Treatment at your Doorstep
            </h6>
            <ul className="text-gray font-semibold text-[1.2rem]">
              <li>- Private, Semi-Private and General wards.</li>
              <li>- Centrally air-conditioned building.</li>
              <li>- Separate Laparoscopy hysteroscopy and cystoscopy units.</li>
              <li>- Separate Arthroscopy unit.</li>
              <li>- Modular Operation Theatres.</li>
              <li>- ICU, HDU and NICU.</li>
              <li>- Dialysis unit.</li>
            </ul>
          </div>
        </div>{" "}
      </div>
      <div className="w-10/12 py-4  grid grid-cols-2 gap-4">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            Ultrasound
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- Pure Wave ultrasound .</li>
            <li>- Outstanding image sharpness.</li>
            <li>- High performance color Doppler.</li>
          </ul>
        </div>
        <div className="flexcenter">
          <img
            src={aboutimg1}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded"
          />
        </div>
      </div>
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4">
        <div className="flexcenter">
          <img
            src={aboutimg1}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            X-RAY
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- Digital Radiographic & Fluoroscopic output..</li>
            <li>- All kinds of images possible.</li>
          </ul>
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            Portable X-RAY
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- Light weight.</li>
            <li>- Brilliant Image Quality.</li>
            <li>- Shorter Exposure time.</li>
          </ul>
        </div>
      </div>{" "}
      <div className="w-10/12 py-4  grid grid-cols-2 gap-4">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            Pathology & Microbiology
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>
              - State of the Art centralised 24*7 Advanced Pathology &
              Microbiology lab.
            </li>
            <li>
              - All Pathological and Microbiological tests are covered except
              few.
            </li>
            <li>- Well qualified and trained team.</li>
            <li>- Less TAT with emailing of reports & SMS facility.</li>
            <li>
              - Highly reliable patient results because of optimisation of
              different test processes.
            </li>
            <li>- Advanced LIS system with bar coding of all samples.</li>
          </ul>
        </div>
        <div className="flexcenter">
          <img
            src={aboutimg1}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded"
          />
        </div>
      </div>
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4">
        <div className="flexcenter">
          <img
            src={aboutimg1}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            Ophthalmology
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- Lasik.</li>
            <li>- Cataract surgery including phacoemulsification.</li>
            <li>- Retinal Surgery.</li>
            <li>- Glaucoma surgery.</li>
            <li>- Orbital Surgery.</li>
          </ul>
        </div>
      </div>{" "}
      <div className="w-10/12 py-4  grid grid-cols-2 gap-4">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            Urology & Nephrology
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- Kidney stones.</li>
            <li>- Bladder or prostate cancer.</li>
            <li>- Congenital abnormalities.</li>
            <li>- Traumatic injury.</li>
            <li>- Stress incontinence.</li>
            <li>- Dialysis.</li>
            <li>- Kidney transplant.</li>
          </ul>
        </div>
        <div className="flexcenter">
          <img
            src={aboutimg1}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded"
          />
        </div>
      </div>
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4">
        <div className="flexcenter">
          <img
            src={aboutimg1}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            Orthopaedics
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- Hemiarthroplasty.</li>
            <li>- Spine Surgery.</li>
            <li>- Joint Replacement Surgery.</li>
            <li>- Advanced Trauma Care.</li>
            <li>- Arthroscopy.</li>
            <li>- ORIF.</li>
          </ul>
        </div>
      </div>{" "}
      <div className="w-10/12 py-4  grid grid-cols-2 gap-4">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            24*7 Accident & Emergency Care
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- 24*7 Accident & Emergency Care.</li>
            <li>
              - with state of the art equipment like defibrillators, crash carts
              and cardiac & vital signs monitors etc..
            </li>
            <li>- Trauma OT within Casualty.</li>
            <li>- Well qualified team.</li>
            <li>- 24*7 Emergency Ambulance Services.</li>
          </ul>
        </div>
        <div className="flexcenter">
          <img
            src={aboutimg1}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded"
          />
        </div>
      </div>
      <div className="w-10/12 py-4  grid grid-cols-1 gap-4">
        <div className="flexcente gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            Modular OT’S
          </h2>
          <img
            src={aboutimg1}
            alt="about"
            className="h-[18rem] w-[100%] object-cover rounded"
          />
        </div>
      </div>
      <div className="w-10/12 py-4  grid grid-cols-2 gap-4">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            Critical Care Unit
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- State of the art fully equipped intensive care.</li>
            <li>
              - Acute physiologic care systems, pulse oximeters, apnea monitors
              and ICT monitors..
            </li>
            <li>
              - Crash carts, ventilators, infusion pumps and Intra-Aortic
              Balloon Pumps(IABP) for life support and emergency resuscitation.
            </li>
            <li>
              - Mobile x-ray for bedside radiography, mobile USG, portable
              clinical laboratory devices.
            </li>
            <li>- Highly skilled medical as well as Para-medical personnel.</li>
          </ul>
        </div>
        <div className="flexcenter">
          <img
            src={aboutimg1}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded"
          />
        </div>
      </div>
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4">
        <div className="flexcenter">
          <img
            src={aboutimg1}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            ICU & NICU
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- Neonatal ICU with beds</li>
            <li>- Ventilators from Maquet .</li>
            <li>
              - Central monitoring systems so as to provide complete intensive
              care.
            </li>
            <li>
              - Well Equipped NICU with Neonatal Ventilator, Incubators,
              Warmers, Phototherapy units.
            </li>
          </ul>
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            CSSD
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- Dedicated CSSD Unit as per NABH Standards</li>
            <li>
              - Separate Washing area, Cleaning area, Packaging, Sterile area .
            </li>
          </ul>
        </div>
      </div>{" "}
      <div className="w-10/12 py-4  grid grid-cols-1 gap-4">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading font-semibold text-navy-blue">
            All Facilities
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>
              - A 150 bedded hospital for reliable and cost effective health
              care.
            </li>
            <li>
              - Trained and experienced staff with equipment to deal with kinds
              of emergencies and trauma.
            </li>
            <li>
              - State of the art well furnished beds of all categories Suite,
              semi private ward, private ward, general ward and intensive care
              beds.
            </li>
            <li>
              - State of the art operation theatres(3 Modular Operation Theatres
              ) to deal with all kinds of operations.
            </li>
            <li>
              - Highly qualified and skilled team of surgeons  to perform all
              the latest and advanced surgery like micro vascular surgeries,
              limb salvaging surgeries, facia-maxillary, laparoscopy,
              cystoscopy, endoscopy, T.U.R. cancer surgeries, deformity
              correction plastic & cosmetic surgery.
            </li>
            <li>
              - A Renowned centre to deal with all kind of trauma, orthopedics
              and joint replacement surgeries.
            </li>
            <li>
              - Well-trained and courteous medical and Para-medical hospital
              staff.
            </li>
            <li>- 24 hrs. Emergency Services</li>
            <li>- 24 hrs. Lab Services</li>
            <li>- 24hrs.Chemist Shop</li>
            <li>- 24hrs.Ambulance Services</li>
            <li>- Complete ICU/ICCU/NICU</li>
            <li>
              - Well equipped physiotherapy unit with gadgets and well qualified
              physiotherapists
            </li>
            <li>- Trauma care facilities of international standard</li>
            <li>
              - All kind of trauma and joint care facilities includes special
              clinic in orthopedics
            </li>
            <li>
              - Joint care clinic – including joint replacement for all major
              joints
            </li>
            <li>
              - Arthroscopy (Endoscopic surgery for knee and shoulder, sports
              medicine clinic )
            </li>
            <li>
              - Deformity correction of limbs and spine for correction of
              congenital and post traumatic deformities
            </li>
            <li>- Spinal surgeries and backache treatment</li>
            <li>- Limb salvaging surgery</li>
            <li>- Hand surgery</li>
            <li>- Fitness clinic</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutFacility;
