import React from "react";
import herosectionImage from "../../assests/images/Group.png";
import herosectionImage1 from "../../assests/images/Element 2.png";
import heroBackground from "../../assests/images/Group 117.png";
import image from "../../assests/images/Group 120.png";
import doctor from "../../assests/images/Image (1).png";
import doctor1 from "../../assests/images/Image (2).png";
// import image from "../../assests/images/Group 120.png";
import contacusimage from "../../assests/images/Rectangle 111.png";
import bg from "../../assests/images/Group 103.png";
import Emergency from "../../assests/images/icons/Mask group.png";
import pharmacy from "../../assests/images/icons/Mask group-1.png";
import jointReplacement from "../../assests/images/icons/Mask group-2.png";
import Obstetrics from "../../assests/images/icons/Mask group-3.png";
import Cardiology from "../../assests/images/icons/Mask group-4.png";
import Urology from "../../assests/images/icons/Mask group-5.png";
import Dental from "../../assests/images/icons/Mask group-6.png";
import Critical from "../../assests/images/icons/Mask group-7.png";
import About from "../../assests/images/Placeholder1.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MarqueeComponent from "../../utils/Marquee";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import OurGoalsBanner from "../../utils/OurGoalsBanner";
import NewsUpdateCard from "../../components/NewsUpdateCard/NewsUpdateCard";
import { useNavigate } from "react-router-dom";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { MdOutlineGirl } from "react-icons/md";
import { GiBrain, GiKidneys, GiPsychicWaves } from "react-icons/gi";
import { FaHeartPulse } from "react-icons/fa6";
import CountUp from "react-countup";
function HomePage() {
  const history = useNavigate();
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[3rem]">
      <div
        className="w-full py-4 px-[3%] pt-[2rem] bg-primary-green flex flex-col gap-2 backgroundPosition"
        style={{ backgroundImage: `url('${heroBackground}')` }}
      >
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
          <p className="text-mainHeading font-bold text-white">
            <CountUp start={0} end={4357} duration={10.75}></CountUp>
          </p>
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
      <div className="w-11/12 py-4   grid grid-cols-2 gap-4 ">
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
          <button
            className="button green_background_linear text-white rounded-md"
            onClick={() => history("/aboutus")}
          >
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
      <div className="w-11/12 py-4 flex flex-col items-start justify-start gap-4">
        <h6 className="text-seconderyHeading font-semibold text-navy-blue">
          News & Updates!
        </h6>
        <p className="para text-black-shade">
          Explore our reliable source for health and medical knowledge. Dive
          into our blogs and updates to acquire valuable insights and stay
          updated on essential information for maintaining your well-being.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <NewsUpdateCard />
          <NewsUpdateCard />
        </div>
      </div>
      <div
        className="w-11/12 mb-[2rem] p-4 flex flex-col items-center justify-start gap-2 h-[20rem] rounded-md relative"
        style={{ backgroundImage: `url("${bg}")` }}
      >
        <h6 className="text-seconderyHeading font-semibold text-white">
          Departments
        </h6>
        <div className="w-11/12 absolute bottom-[1rem] flex gap-4">
          <span className="w-[17rem] cursor-pointer text-center bg-white hover:scale-105 hover:bg-secondry-green hover:text-white flex flex-col items-center justify-center p-4 py-[3rem] gap-3 rounded-md">
            {/* <img src={bell} alt="" /> */}
            <HiOutlineBellAlert className="text-[3rem]" />
            <p>Emergency Department</p>
          </span>{" "}
          <span className="w-[17rem] cursor-pointer text-center bg-white hover:bg-secondry-green hover:text-white flex flex-col items-center justify-center p-4 py-[3rem] gap-3 rounded-md">
            <MdOutlineGirl className="text-[3rem]" />
            <p>Pediatric Departement</p>
          </span>{" "}
          <span className="w-[17rem] cursor-pointer text-center bg-white hover:bg-secondry-green hover:text-white flex flex-col items-center justify-center p-4 py-[3rem] gap-3 rounded-md">
            <GiKidneys className="text-[3rem]" />
            <p>Obstetrics and Gynecology Department</p>
          </span>{" "}
          <span className=" w-[17rem] cursor-pointer text-center bg-white hover:bg-secondry-green hover:text-white flex flex-col items-center justify-center p-4 py-[3rem] gap-3 rounded-md">
            <FaHeartPulse className="text-[3rem]" />
            <p>Cardiology Department</p>
          </span>{" "}
          <span className="w-[17rem] cursor-pointer text-center bg-white hover:bg-secondry-green hover:text-white flex flex-col items-center justify-center p-4 py-[3rem] gap-3 rounded-md">
            <GiBrain className="text-[3rem]" />
            <p>Neurology Department</p>
          </span>{" "}
          <span className="w-[17rem] cursor-pointer text-center bg-white hover:bg-secondry-green hover:text-white flex flex-col items-center justify-center p-4 py-[3rem] gap-3 rounded-md">
            <GiPsychicWaves className="text-[3rem]" />
            <p>Psychiatry Department</p>
          </span>
        </div>
      </div>
      <div className="w-11/12 h-fit py-y px-4 green_gredient relative flex items-center justify-center rounded-md">
        <img src={image} alt="" />
        <div className="w-11/12 absolute flex flex-col gap-4 items-center">
          <h6 className="text-seconderyHeading font-semibold text-white">
            Facilities We Provide
          </h6>
          <div className=" grid grid-cols-4 gap-4">
            <span className="p-4 py-[3rem] flex flex-col items-center justify-center bg-white rounded h-[15rem] gap-2 text-center">
              <img
                src={Emergency}
                alt="Emergency"
                className="h-[5rem] object-contain"
              />
              <p> Emergency Care 24x7</p>
            </span>{" "}
            <span className="p-4 py-[3rem] flex flex-col items-center justify-center bg-white rounded h-[15rem] gap-2 text-center">
              <img
                src={pharmacy}
                alt="Emergency"
                className="h-[5rem] object-contain"
              />
              <p> Pharmacy & Lab Services 24x7</p>
            </span>{" "}
            <span className="p-4  py-[3rem] flex flex-col items-center justify-center bg-white rounded h-[15rem] gap-2 text-center">
              <img
                src={jointReplacement}
                alt="Emergency"
                className="h-[5rem] object-contain"
              />
              <p> Joint Replacement & Trauma Surgeries</p>
            </span>{" "}
            <span className="p-4 py-[3rem] flex flex-col items-center justify-center bg-white rounded h-[15rem] gap-2 text-center">
              <img
                src={Obstetrics}
                alt="Emergency"
                className="h-[5rem] object-contain"
              />
              <p> Obstetrics & Gynaecology Unit</p>
            </span>{" "}
            <span className="p-4 py-[3rem] flex flex-col items-center justify-center bg-white rounded h-[15rem] gap-2 text-center">
              <img
                src={Cardiology}
                alt="Emergency"
                className="h-[5rem] object-contain"
              />
              <p> Cardiology & Pulmonology</p>
            </span>{" "}
            <span className="p-4 py-[3rem] flex flex-col items-center justify-center bg-white rounded h-[15rem] gap-2 text-center">
              <img
                src={Urology}
                alt="Emergency"
                className="h-[5rem] object-contain"
              />
              <p> Urology & Nephrology</p>
            </span>{" "}
            <span className="p-4 py-[3rem] flex flex-col items-center justify-center bg-white rounded h-[15rem] gap-2 text-center">
              <img
                src={Dental}
                alt="Emergency"
                className="h-[5rem] object-contain"
              />
              <p> Dental Services</p>
            </span>{" "}
            <span className="p-4 py-[3rem] flex flex-col items-center justify-center bg-white rounded h-[15rem] gap-2 text-center">
              <img
                src={Critical}
                alt="Emergency"
                className="h-[5rem] object-contain"
              />
              <p> Critical Care Unit</p>
            </span>
          </div>
        </div>
      </div>
      <div className=" w-11/12 py-4">
        <OurGoalsBanner />
      </div>
      <div className="w-11/12 py-4   flex flex-col items-center justify-center gap-2">
        <span>
          <h6 className="text-seconderyHeading font-semibold text-navy-blue">
            Some Reviews
          </h6>
          <p className="para text-normalHeading font-semibold text-secondry-green text-center">
            OF OUR CLIENTS
          </p>
        </span>
        <div className="w-full flex items-center justify-start gap-4 overflow-x-auto scroll_bar py-4">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
      <div className="w-11/12 py-4   flex flex-col items-center justify-center gap-2">
        <h6 className="text-seconderyHeading font-semibold text-secondry-green">
          Meet our Doctors
        </h6>
        <p className="para text-normalHeading font-semibold text-black-shade text-center">
          CHTC grant patients access to top-tier doctors in India, ensuring the
          highest standards of healthcare.
        </p>
        <div className="w-11/12 grid grid-cols-3 gap-2">
          <DoctorCard />
          <DoctorCard profile={doctor} />
          <DoctorCard profile={doctor1} />
        </div>
      </div>
      <div className="w-11/12 py-4  grid grid-cols-2 gap-4">
        <div className="col-span-1 flex flex-col items-start justify-start gap-2">
          <span>
            <p className="text-secondry-green text-normalHeading font-medium">
              BOOK AN
            </p>
            <h6 className="text-navy-blue text-seconderyHeading font-semibold">
              Appointment
            </h6>
          </span>

          <from className="flex justify-start items-start flex-col gap-2 w-full">
            <div className="grid grid-cols-2 gap-4  w-full">
              <span className="flex flex-col items-start justify-start w-full gap-2">
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray pl-[5px] outline-none h-[2.5rem] rounded-md w-full"
                />
              </span>{" "}
              <span className="flex flex-col items-start justify-start w-full gap-2">
                <p>Phone Number</p>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray pl-[5px] outline-none h-[2.5rem] rounded-md w-full"
                />
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <span className="flex flex-col items-start justify-start w-full gap-2">
                <p>Reason for Visit</p>
                <input
                  type="text"
                  placeholder="Reason for Visit"
                  className="border border-gray pl-[5px] outline-none h-[2.5rem] rounded-md w-full"
                />
              </span>{" "}
              <span className="flex flex-col items-start justify-start w-full gap-2">
                <p>Department</p>
                <input
                  type="text"
                  placeholder="Department"
                  className="border border-gray pl-[5px] outline-none h-[2.5rem] rounded-md w-full"
                />
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <span className="flex flex-col items-start justify-start w-full gap-2">
                <p>Preferred Date</p>
                <input
                  type="date"
                  placeholder="Preferred Date"
                  className="border border-gray pl-[5px] outline-none h-[2.5rem] rounded-md w-full"
                />
              </span>{" "}
              <span className="flex flex-col items-start justify-start w-full gap-2">
                <p>Preferred Time</p>
                <input
                  type="time"
                  placeholder="Preferred Time"
                  className="border border-gray pl-[5px] outline-none h-[2.5rem] rounded-md w-full"
                />
              </span>
            </div>
            <button className="button text-white rounded-md green_background_linear">
              Submit
            </button>
          </from>
        </div>
        <div className="flex items-center justify-center">
          <img src={contacusimage} alt="contacusimage" className="h-[30rem]" />
        </div>
      </div>

      <div className="w-full bg-[#F6FBFF] py-4 flexcenter">
        <div className="w-11/12   flex flex-col items-center justify-center gap-4 mb-4">
          <div className="w-full flex items-center justify-between ">
            <h6 className="text-seconderyHeading font-semibold text-black-shade">
              Our Partners
            </h6>
            <button
              className="green_background_linear text-white button rounded-lg"
              onClick={() => history("/logosgalary")}
            >
              View All
            </button>
          </div>

          <MarqueeComponent />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
