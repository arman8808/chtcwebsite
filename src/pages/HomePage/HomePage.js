import React from "react";
import herosectionImage from "../../assests/images/Group.png";
import herosectionImage1 from "../../assests/images/Element 2.png";
import About from "../../assests/images/Placeholder1.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
function HomePage() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[3rem]">
      <div className="w-full py-4 px-[3%] pt-[2rem] bg-primary-green flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-start justify-start gap-2">
            <img
              src={herosectionImage1}
              alt="herosectionImage"
              className="h-[10rem] object-contain pl-[10%]"
            />
            <h1 className="text-mainHeading text-white font-bold">
              Precision Cure to Compassionate Care!
            </h1>
            <p className="text-para font-normal text-white">
              City Hospital and Trauma Centre excels in advanced techniques &
              treatment, utilizing state-of-the-art technology for care & cure.
              Our mission is to bring smiles of good health worldwide. At CHTC,
              expect compassionate care and patient-centric healthcare.
              Accompany us as we support you and your family during times of
              illness, offering top-tier medical expertise in a conveniently
              situated hospital with cutting-edge amenities
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={herosectionImage}
              alt="herosectionImage"
              className="h-[30rem] object-contain"
            />
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <div className="bg-white w-fit rounded-3xl py-3 px-3 flex items-center justify-center gap-2">
            <AccessTimeIcon
              className="text-secondry-green"
              style={{ fontSize: "2.5rem" }}
            />
            <span>
              <p className="text-black ">Opening Hours</p>
              <p className="text-[12px]">Mon - Sat: 9.00 AM-07.00 PM</p>
            </span>
          </div>
        </div>
      </div>
      <div className="w-11/12 bg-primary-green py-4 px-[5%] grid grid-cols-4 gap-4 rounded-md">
        <span className="flex flex-col items-center justify-center text-white ">
          <p className="text-mainHeading font-bold text-white">4,357</p>
          <p className="font-medium text-semibold">KNEE REPLACEMENT</p>
        </span>{" "}
        <span className="flex flex-col items-center justify-center text-white ">
          <p className="text-mainHeading font-bold text-white">4,357</p>
          <p className="font-medium text-semibold">KNEE REPLACEMENT</p>
        </span>{" "}
        <span className="flex flex-col items-center justify-center text-white ">
          <p className="text-mainHeading font-bold text-white">4,357</p>
          <p className="font-medium text-semibold">KNEE REPLACEMENT</p>
        </span>{" "}
        <span className="flex flex-col items-center justify-center text-white ">
          <p className="text-mainHeading font-bold text-white">4,357</p>
          <p className="font-medium text-semibold">KNEE REPLACEMENT</p>
        </span>{" "}
      </div>
      <div className="w-11/12  grid grid-cols-2 gap-4 ">
        <div className="flex flex-col items-start justify-start gap-4">
          <h3 className="text-normalHeading green_color_linear font-semibold">
            ABOUT US
          </h3>
          <p className="text-para leading-7 text-gray">
            With a rich legacy spanning over 25 years, we're a premier
            healthcare provider dedicated to fostering innovation and delivering
            compassionate care. CHTC provides top-tier healthcare services
            utilizing cutting-edge technology and a skilled team of medical
            experts who prioritize patient well-being.{" "}
          </p>
          <p className="text-para leading-7 text-gray">
            The medical facility boasts over 150 beds housed within a centrally
            air-conditioned structure, complete with contemporary civil
            amenities and conveniences. CHTC is fully furnished with
            state-of-the-art machinery and the latest technologies in both
            outpatient department (OPD) and operating theater (OT) settings,
            supported by a team of exceptionally skilled, seasoned, and
            well-educated personnel. We diligently strive day and night to
            elevate the standard of care to the point where "Our excellence
            becomes the nation's benchmark" in medical treatment.
          </p>
          <button className="button green_background_linear text-white rounded-md">
            Read More
          </button>
        </div>
        <div className="flexcenter w-full">
          <img
            src={About}
            alt="about us"
            className="w-[90%] h-[90%] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
