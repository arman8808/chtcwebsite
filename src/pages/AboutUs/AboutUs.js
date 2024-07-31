import React from "react";
import aboutimg2 from "../../assests/images/gallery/DJI_0719 .webp";
import aboutimg1 from "../../assests/images/Rectangle 284.png";
import RajeshMehta from "../../assests/images/2.png";
function AboutUs() {
  return (
    <div className="pagecss gap-[3rem]">
      <div className="w-10/12 py-4 pt-[3rem] grid grid-cols-2 gap-4 rounded-md mobile:flex mobile:flex-col-reverse">
        <div className="flex items-start justify-center flex-col gap-2">
          <h2 className="text-mainHeading font-bold text-navy-blue">
            About Us
          </h2>
          <p className="para text-gray">
            The presence of City Hospital & Trauma Centre stems from a
            two-decade heritage of compassion and originality fostered by CHTC
            Ltd. In a brief span since its establishment, CHTC has emerged as a
            prominent healthcare provider, establishing a robust presence in the
            northern regions of the nation, including Lucknow. The hospital
            meets the community's requirements in its selected area of
            super-specialty, including Orthopedics, Gynecology, & Paramedical.
          </p>
          <p className="para text-gray">
            CHTC is a tertiary care hospital with multiple specialties,
            constructed according to global standards. Its operation is based on
            the principle of prioritizing patients. The hospital is housed in a
            centrally air-conditioned building with 150 beds and equipped with
            contemporary civil amenities and facilities.
          </p>
          <p className="para text-gray">
            We implement quality systems driven by processes that conform to
            global standards of clinical care, ensuring a safe environment,
            infection control, and the preservation of patient rights and
            privacy. With cutting-edge multidisciplinary capabilities, along
            with world-class infrastructure and technology, we enhance the
            quality of life for each patient in a compassionate and supportive
            setting, with utmost regard for human dignity and life.
          </p>
          <p className="para text-gray">
            The hospital commenced operations in 2000 with a 50-bed setup and
            has since grown to a 150-bed facility, offering various specialties
            and modern amenities, along with extensive expertise in surgical and
            medical care. CHTC is renowned for its advanced orthopedic
            procedures, encompassing intricate knee and hip replacements, knee
            and shoulder arthroscopic surgeries, and a trauma center catering to
            various severe injuries. Additionally, the center has earned a
            longstanding reputation for its maternal and child care unit,
            equipped with a comprehensive NICU. CHTC is also distinguished for
            its plastic surgery and microvascular surgery department, which
            includes cosmetic procedures.
          </p>
        </div>
        <div className="flexcenter">
          <img
            src={aboutimg2}
            alt="about"
            className="h-[28rem] w-[90%] object-cover rounded mobile:w-[100%] mobile:h-[15rem]"
            loading="lazy"
          />
        </div>
      </div>
      <div className="w-10/12 py-4  grid grid-cols-2 gap-4 rounded-md mobile:grid-cols-1">
        <div className="flex items-center flex-col gap-1 mbolie:gap-2">
          <img
            src={RajeshMehta}
            alt="about"
            className="h-[25rem] w-[80%] object-cover rounded mobile:h-[15rem] mobile:w-[100%]"
          />
          <div className="flex items-start justify-start w-[80%] gap-1 flex-col mobile:w-[100%]">
            <p className="font-semibold">Dr. Rajesh Mehta</p>
            <p className="text-gray">
              M.B.B.S, M.S. (Ortho), Fellowship in Joint Replacement
            </p>
            <p className="text-gray">
              (Liverpool, U.K.), Revision Joint Replacement and Arthroscopy
              (Berlin, Germany)
            </p>
          </div>
        </div>
        <div className="flex items-start justify-start flex-col gap-2">
          <p className="para text-gray">
            Dr. Rajesh Mehta is recognized as a trailblazer in joint replacement
            surgeries within Uttar Pradesh and is nationally esteemed for his
            expertise in hip and knee arthroplasty procedures. He has conducted
            over 2000 joint replacement surgeries, which include challenging
            revision surgeries and salvaging infected and unsuccessful joint
            replacements performed elsewhere.
          </p>
          <p className="para text-gray">
            Dr. Rajesh Mehta is recognized as a trailblazer in joint replacement
            surgeries within Uttar Pradesh and is nationally esteemed for his
            expertise in hip and knee arthroplasty procedures. He has conducted
            over 2000 joint replacement surgeries, which include challenging
            revision surgeries and salvaging infected and unsuccessful joint
            replacements performed elsewhere.
          </p>
        </div>
      </div>
      <div className="w-10/12  py-4 flex flex-col justify-start items-start gap-2">
        <h2 className="text-seconderyHeading semibold text-secondry-green">
          Overview - Infrastructure
        </h2>
        <div className="w-full grid grid-cols-2 gap-4 mobile:grid-cols-1">
          <div>
            <ul className="text-black-shade font-semibold text-[1.2rem]">
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
          <div>
            <ul className="text-black-shade font-semibold text-[1.2rem]">
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
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4 mobile:grid-cols-1">
        <div className="flexcenter">
          <img
            src={aboutimg1}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded mobile:w-[100%]"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            Basement
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- Radiology unit (X-Ray, Ultrasound, 2D-echocardiography).</li>
            <li>- Dental Clinic.</li>
            <li>- Orthopaedics OPD.</li>
            <li>- General and Plastic Surgery OPD.</li>
            <li>- Medicine, Cardiology, Pulmonology and Nephrology OPD.</li>
            <li>- Psychiatry OPD.</li>
            <li>- Lab Area.</li>
            <li>- Administrative Office.</li>
            <li>- Accounts section.</li>
          </ul>
        </div>
      </div>{" "}
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4 mobile:flex mobile:flex-col-reverse">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            Ground Floor
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- Reception.</li>
            <li>- Emergency Room.</li>
            <li>- Minor OT.</li>
            <li>- Mother and child care OPD.</li>
            <li>- Labour Room.</li>
          </ul>
        </div>
        <div className="flexcenter">
          <img
            src={aboutimg1}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded mobile:w-[100%]"
          />
        </div>
      </div>
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4 mobile:grid-cols-1">
        <div className="flexcenter">
          <img
            src={aboutimg1}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded mobile:w-[100%]"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            First Floor
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- Private Rooms.</li>
            <li>- Semi Private Rooms.</li>
            <li>- Suites.</li>
            <li>- General Ward.</li>
            <li>- NICU.</li>
          </ul>
        </div>
      </div>{" "}
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4 mobile:flex mobile:flex-col-reverse">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            Second Floor
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- General Ward.</li>
            <li>- Suites, private and semi-private rooms.</li>
            <li>- Physiotherapy Unit.</li>
            <li>- HDU unit.</li>
          </ul>
        </div>
        <div className="flexcenter">
          <img
            src={aboutimg1}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded mobile:w-[100%]"
          />
        </div>
      </div>
      <div className="w-10/12 py-4  grid grid-cols-2 gap-4 mobile:grid-cols-1">
        <div className="flexcenter">
          <img
            src={aboutimg1}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded mobile:w-[100%]"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            Third Floor
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- Modular OT complex.</li>
            <li>- ICU complex.</li>
          </ul>
        </div>
      </div>{" "}
      <div className="w-10/12 py-4  grid grid-cols-2 gap-4 mobile:flex mobile:flex-col-reverse">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            Fourth Floor
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- Suites.</li>
            <li>- Private Rooms.</li>
            <li>- Store and Staff Rooms.</li>
          </ul>
        </div>
        <div className="flexcenter">
          <img
            src={aboutimg1}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded mobile:w-[100%]"
          />
        </div>
      </div>
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4 mobile:grid-cols-1">
        <div className="flexcenter">
          <img
            src={aboutimg1}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded mobile:w-[100%]"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading semibold text-secondry-green">
            Fifth Floor
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- CSSD unit.</li>
            <li>- Service unit.</li>
            <li>- Dietetics Department.</li>
            <li>- Semi-open Cafe with Seating.</li>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
}

export default AboutUs;
