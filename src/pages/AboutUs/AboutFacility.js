import React from "react";
import ultrasound from "../../assests/images/facilities/ultrasound-scan.webp";
import xray from "../../assests/images/facilities/23501-knee-x-ray.webp";
import pathology from "../../assests/images/facilities/Pathology & Microbiology (1).webp";
import ophthalmology from "../../assests/images/facilities/ophthalmology.webp";
import Urology from "../../assests/images/facilities/Urology-Problems-.webp";
import orthopedic from "../../assests/images/facilities/orthopedic-bn.webp";
import Emergency from "../../assests/images/facilities/Emergency Care (1).webp";
import Modular from "../../assests/images/facilities/Modular OT’S.webp";
import Critical from "../../assests/images/facilities/Critical Care Unit (1).webp";
import ICU from "../../assests/images/facilities/ICU.webp";
function AboutFacility() {
  return (
    <div className="pagecss gap-[3rem]">
      <div className="w-10/12  py-4 pt-[3rem] flex flex-col justify-start items-start gap-2">
        <h2 className="text-mainHeading font-bold text-navy-blue">
          Facilities
        </h2>
        <div className="w-full grid grid-cols-2 gap-4 mobile:grid-cols-1">
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
      <div className="w-10/12 py-4  grid grid-cols-2 gap-4 mobile:flex mobile:flex-col-reverse">
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
            src={ultrasound}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded mobile:w-[100%]"
          />
        </div>
      </div>
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4 mobile:grid-cols-1">
        <div className="flexcenter">
          <img
            src={xray}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded mobile:w-[100%]"
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
      <div className="w-10/12 py-4  grid grid-cols-2 gap-4 mobile:flex mobile:flex-col-reverse">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            Pathology & Microbiology
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>
              - Cutting-edge centralized 24/7 Advanced Pathology & Microbiology
              lab
            </li>
            <li>- Staffed by a well-qualified and trained team</li>
            <li>- Less TAT with emailing of reports & SMS facility.</li>
            <li>
              - Provides quick Turnaround Time (TAT) and offers email and SMS
              reporting
            </li>
            <li>
              - Ensures highly reliable patient results through optimized
              testing processes.
            </li>
            <li>- Adheres to NABL standards for processes</li>
            <li>
              - Utilizes an advanced Laboratory Information System (LIS) with
              barcoding for all samples
            </li>
          </ul>
        </div>
        <div className="flexcenter">
          <img
            src={pathology}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded mobile:w-[100%]"
          />
        </div>
      </div>
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4 mobile:grid-cols-1">
        <div className="flexcenter">
          <img
            src={ophthalmology}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded mobile:w-[100%]"
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
      <div className="w-10/12 py-4  grid grid-cols-2 gap-4 mobile:flex mobile:flex-col-reverse">
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
            src={Urology}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded mobile:w-[100%]"
          />
        </div>
      </div>
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4 mobile:grid-cols-1">
        <div className="flexcenter">
          <img
            src={orthopedic}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded mobile:w-[100%]"
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
      <div className="w-10/12 py-4  grid grid-cols-2 gap-4 mobile:flex mobile:flex-col-reverse">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            24*7 Accident & Emergency Care
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- 24/7 Accident & Emergency Care services</li>
            <li>
              - Equipped with state-of-the-art tools including defibrillators,
              crash carts, and cardiac & vital signs monitors
            </li>
            <li>
              - Features a Trauma Operating Theatre within the Casualty
              department
            </li>
            <li>- Staffed by a team of well-qualified professionals</li>
            <li>- Offers round-the-clock Emergency Ambulance Services</li>
          </ul>
        </div>
        <div className="flexcenter">
          <img
            src={Emergency}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded mobile:w-[100%]"
          />
        </div>
      </div>
      <div className="w-10/12 py-4  grid grid-cols-1 gap-4 ">
        <div className="flexcente gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            Modular OT’S
          </h2>
          <img
            src={Modular}
            alt="about"
            className="h-[18rem] w-[100%] object-cover rounded"
          />
        </div>
      </div>
      <div className="w-10/12 py-4  grid grid-cols-2 gap-4 mobile:flex mobile:flex-col-reverse">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            Critical Care Unit
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- State-of-the-art fully equipped intensive care unit</li>
            <li>
              - Features acute physiologic care systems, pulse oximeters, apnea
              monitors, and ICT monitors
            </li>
            <li>
              - Equipped with essential life support and emergency resuscitation
              tools including crash carts, ventilators, infusion pumps, and
              Intra-Aortic Balloon Pumps (IABP)
            </li>
            <li>
              - Offers mobile x-ray for bedside radiography, mobile ultrasound
              (USG), and portable clinical laboratory devices
            </li>
            <li>
              - Staffed by highly skilled medical and para-medical personnel
            </li>
          </ul>
        </div>
        <div className="flexcenter">
          <img
            src={Critical}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded mobile:w-[100%]"
          />
        </div>
      </div>
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4 mobile:grid-cols-1">
        <div className="flexcenter">
          <img
            src={ICU}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded mobile:w-[100%]"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            ICU & NICU
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- Neonatal ICU equipped with beds</li>
            <li>- Ventilators sourced from Maquet</li>
            <li>
              - Central monitoring systems for comprehensive intensive care
            </li>
            <li>
              - Well-equipped NICU including neonatal ventilators, incubators,
              warmers, and phototherapy units
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
      <div className="w-10/12 py-4  grid grid-cols-1 gap-4 ">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading font-semibold text-navy-blue">
            All Facilities
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>
              - A 150-bed hospital offering dependable and economical healthcare
              services
            </li>
            <li>
              - Staffed by proficient and experienced personnel capable of
              managing various emergencies and trauma cases
            </li>
            <li>
              - Features well-appointed beds in Suite, semi-private, private,
              general, and intensive care categories
            </li>

            <li>
              - Boasts a skilled team of surgeons proficient in advanced
              procedures like microvascular surgeries, limb salvaging surgeries,
              facio-maxillary surgeries, laparoscopy, cystoscopy, endoscopy,
              T.U.R. cancer surgeries, deformity correction, and plastic &
              cosmetic surgery
            </li>
            <li>
              - Recognized for its excellence in trauma care, orthopedics, and
              joint replacement surgeries
            </li>
            <li>
              - Staffed by courteous and well-trained medical and para-medical
              personnel
            </li>
            <li>
              - Offers round-the-clock emergency services, lab services, chemist
              shop, and ambulance services
            </li>
            <li>- Provides comprehensive ICU/ICCU/NICU facilities</li>
            <li>
              - Houses a well-equipped physiotherapy unit staffed with qualified
              therapists
            </li>
            <li>
              - Adheres to international standards in trauma care facilities
            </li>
            <li>
              - Features specialized orthopedic clinics focusing on joint
              replacement surgeries and arthroscopy
            </li>
            <li>
              - Services include deformity correction of limbs and spine, spinal
              surgeries, limb salvaging surgery, hand surgery, and fitness
              clinic
            </li>
          </ul>
        </div>
      </div>
      <div className="w-10/12 py-4  grid grid-cols-1 gap-4">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading font-semibold text-navy-blue">
            Social responsibility
          </h2>
          <h6 className="text-normalHeading semibold text-secondry-green">
            {" "}
            Janta OPD (A.A.S.T.H.A OPD )
          </h6>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- Special Clinics.</li>
            <li>- Special Health Check-Up Package.</li>
          </ul>
          <h6 className="text-normalHeading semibold text-secondry-green">
            {" "}
            O.T. Complex
          </h6>{" "}
          <h6 className="text-normalHeading semibold text-secondry-green">
            {" "}
            Operation theatres 3 in No. (All Major).
          </h6>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- Dressing Room.</li>
            <li>- Labor Room.</li>
            <li>- Minor O.T.</li>
            <li>
              - OT Complex is ultra modern with state of art facilities for all
              types of super-specialty operations vis-à-vis AO Instrumentation,
              9” C-Arm (Imaging), Cautery, Boyle’s Apparatus, Arthroscope,
              Laparoscopes, Endoscopes, Central Monitoring System,
              Multiparameter monitoring system, defibrillator, suction
              apparatus, we also have a central oxygen supply system, etc.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-10/12 py-4  grid grid-cols-1 gap-4">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading font-semibold text-navy-blue">
            DIAGNOSTIC FACILITIES
          </h2>
          <h6 className="text-normalHeading semibold text-secondry-green">
            {" "}
            Complete Pathology
          </h6>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- Biochemistry.</li>
            <li>- Histopathology / Bacteriology / Serology.</li>
            <li>- X – Ray.</li>
            <li>- E. C. G.</li>
            <li>- E. E. G. & N. C. V.</li>
            <li>- Ultrasound.</li>
            <li>- 2-D ECHO.</li>
            <li>- T. M. T.</li>
            <li>- Holter / Doppler tests.</li>
          </ul>
          <h6 className="text-normalHeading semibold text-secondry-green">
            {" "}
            Minimal Invasive Surgery
          </h6>{" "}
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>
              - Three operation theaters furnished with internationally
              standardized equipment and backed by highly skilled medical and
              paramedical teams.
            </li>
            <li>
              - Capable of performing endoscopic procedures such as gall
              bladder, uterus, appendices removal, and hernia repair.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-10/12 py-4  grid grid-cols-1 gap-4">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading font-semibold text-navy-blue">
            Gynae and Obstectrics
          </h2>
          <h6 className="text-normalHeading semibold text-secondry-green">
            {" "}
            Anti Natal & Post Natal Clinic
          </h6>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>
              - Modern labor room and operation theater facilitated by highly
              skilled and well-trained staff, providing round-the-clock services
              for:
            </li>
            <li>- Antenatal and postnatal care.</li>
            <li>
              - Well-equipped neonatal facilities staffed by trained
              professionals.
            </li>
            <li>
              - Well-women clinic offering counseling on family planning,
              menopause, and awareness of genital cancer, among other topics.
            </li>
            <li>- Menopause clinic providing specialized care.</li>
            <li>
              - Cancer detection and awareness clinic focusing on breast and
              cervical cancer in females.
            </li>
          </ul>
          <h6 className="text-normalHeading semibold text-secondry-green">
            OTHER SPECIAL FACILITIES
          </h6>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>
              - Expert panel of doctors covering almost all medical fields.
            </li>
            <li>- Medical officers available round the clock for each ward.</li>
            <li>
              - Trained nursing and paramedical staff providing 24/7 care.
            </li>
            <li>- Help-line services available 24/7.</li>
            <li>- Comprehensive trauma center and cardiac facilities.</li>
            <li>
              - Specialized clinics including infertility, neonatal care, and
              hepatitis-B vaccination.
            </li>
            <li>- Home visits offered for physiotherapy sessions.</li>
            <li>- Accessible online medical helpline.</li>
            <li>
              - Regular free health detection camps, including specialty
              subjects.
            </li>
            <li>- Health checkup plans and regular medical education camps.</li>
            <li>- Medical advisory board overseeing operations.</li>
            <li>
              - Advanced endoscopic procedures for gall bladder, uterus,
              appendices, and hernia repair.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutFacility;
