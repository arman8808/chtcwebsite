import React from "react";
import aboutimg from "../../assests/images/Rectangle 277.png";
import aboutimg1 from "../../assests/images/Rectangle 284.png";
function AboutUs() {
  return (
    <div className="pagecss gap-[3rem]">
      <div className="w-10/12 py-4 pt-[3rem] grid grid-cols-2 gap-4 rounded-md">
        <div className="flex items-start justify-center flex-col gap-2">
          <h2 className="text-mainHeading font-bold text-navy-blue">
            About Us
          </h2>
          <p className="para text-gray">
            Dr Rajesh Mehta is considered to be the pioneer of joint replacement
            surgeries in Uttar Pradesh and is a surgeon of national repute for
            hip and knee arthroplasty surgeries. He has operated more than 2000
            joint replacement surgeries including difficult revision surgeries
            and salvaging infected and failed joint replacements operated
            elsewhere.
          </p>
          <p className="para text-gray">
            Trained in Liverpool, United Kingdom, he is one of the first
            surgeons to perform knee replacement surgeries in Uttar Pradesh and
            has treated many prominent names for various knee conditions over
            the last 3 decades with the likes of Late Shri Atal Bihari Vajpayee
            Ji. Dr Rajesh Mehta is a synonym for trust in the Lucknow households
            and continues to serve Uttar Pradesh with his surgical services in
            trauma, arthroscopic surgeries of knee and shoulder and joint
            replacement surgeries.
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
      <div className="w-10/12 py-4  grid grid-cols-2 gap-4 rounded-md">
        <div className="flex items-center">
          <img
            src={aboutimg}
            alt="about"
            className="h-[25rem] w-[80%] object-cover rounded"
          />
        </div>
        <div className="flex items-start justify-start flex-col gap-2">
          <p className="para text-gray">
            At CHTC, you receive healthcare comparable to the finest in the
            world. CHTC is a multispecialty tertiary care hospital built as per
            Global Standard. It works on the principle of PATIENT FIRST The
            Hospital is 150 bedded plus centrally air-condition building of with
            all modern civil amenities and facilities. CHTC is a well equipped
            hospital with all modern gadgets and latest technologies backed by a
            team of highly professionals experienced and well qualified staff,
            work duty and night to raise the level of treatment to the
            extent- Our best will be the Nation’s best in the Medical Treatment.
          </p>
          <p className="para text-gray">
            The hospital started in the year 2000 as a 50 bed setup and has now
            been expanded into a 150 bed setup with multiple specialities and
            state of the art facilities and experience in surgical and medical
            care. The building boasts of it’s accessible location, luxurious
            rooms, modern modular operation theatres and an excellent critical
            care unit. The centre is acknowledged for it’s advanced orthopaedic
            surgeries including complex knee and hip replacement surgeries, knee
            and shoulder arthroscopic surgeries, trauma centre for complex
            injuries of all kinds. The centre has a long standing fame for it’s
            mother and child care unit with a complete NICU. CHTC is also known
            for it’s plastic surgery and micro-vascular surgery department,
            including cosmetic surgeries.It boasts of a dental unit dealing with
            all specialities of dental care and facio-maxillary trauma. There is
            more than two decades of trust behind this setup in view of
            laparoscopic and urology surgeries.
          </p>
        </div>
      </div>
      <div className="w-10/12  py-4 flex flex-col justify-start items-start gap-2">
        <h2 className="text-seconderyHeading semibold text-secondry-green">
          Overview - Infrastructure
        </h2>
        <div className="w-full grid grid-cols-2 gap-4">
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
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4">
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
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4">
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
            className="h-[22rem] w-[80%] object-cover rounded"
          />
        </div>
      </div>
      <div className="w-10/12 py-4  grid grid-cols-2 gap-4">
        <div className="flexcenter">
          <img
            src={aboutimg1}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded"
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
      <div className="w-10/12 py-4  grid grid-cols-2 gap-4">
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
