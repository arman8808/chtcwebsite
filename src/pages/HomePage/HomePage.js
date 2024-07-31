import React from "react";
import herosectionImage from "../../assests/images/Group.png";
import herosectionImage1 from "../../assests/images/Element 2.png";
import heroBackground from "../../assests/images/Group 117.png";
import image from "../../assests/images/Group 120.png";
import freecodecamp from "../../assests/images/Untitled-1.webp";
import wearehiring from "../../assests/images/chtc hiring.png";
import newsletter from "../../assests/images/web.webp";
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
import MarqueeComponent from "../../utils/Marquee";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import OurGoalsBanner from "../../utils/OurGoalsBanner";
import NewsUpdateCard from "../../components/NewsUpdateCard/NewsUpdateCard";
import { useNavigate } from "react-router-dom";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { MdOutlineGirl } from "react-icons/md";
import { GiKidneys, GiKneeBandage } from "react-icons/gi";
import { FaHeartPulse } from "react-icons/fa6";
import CountUp from "react-countup";
import RohilMehta from "../../assests/images/1.png";
import RajeshMehta from "../../assests/images/2.png";
import JyotsnaMehta from "../../assests/images/3.png";
import { LiaUserNurseSolid } from "react-icons/lia";
import { useForm } from "react-hook-form";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
function HomePage() {
  const history = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  const responsive = {
    0: {
      items: 1,
    },
    568: { items: 1 },
    1024: {
      items: 2,
      itemsFit: "contain",
    },
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-[3rem] mobile:[2rem]">
      <div
        className="w-full py-4 px-[3%] pt-[2.5rem] bg-primary-green flex flex-col gap-2 backgroundPosition"
        style={{ backgroundImage: `url('${heroBackground}')` }}
      >
        <div className=" py-4 grid grid-cols-2 gap-4 mobile:flex mobile:flex-col-reverse tablet:flex tablet:flex-col-reverse">
          <div className="flex flex-col items-start justify-start gap-2">
            <img
              src={herosectionImage1}
              alt="herosectionImage"
              className="h-[10rem] object-contain pl-[10%]"
            />
            <h1 className="text-mainHeading text-white font-bold mobile:text-seconderyHeading">
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
          <div className="flex items-center justify-center mobile:hidden tablet:hidden">
            <img
              src={herosectionImage}
              alt="herosectionImage"
              className="h-[30rem] object-contain"
            />
          </div>
        </div>
        {/* <div className="flex items-center justify-center ">
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
        </div> */}
      </div>
      <div className="w-11/12 green_background_linear py-[2rem] px-[5%] grid grid-cols-4 gap-4 rounded-md mobile:grid-cols-2 tablet:grid-cols-2 text-center">
        <span className="flex flex-col items-center justify-center text-white ">
          <p className="text-mainHeading font-bold text-white mobile:text-[2rem]">
            <CountUp
              start={0}
              end={8000}
              duration={5}
              scrollSpyDelay={500}
            ></CountUp>
            +
          </p>
          <p className="font-medium text-semibold">KNEE REPLACEMENT</p>
        </span>{" "}
        <span className="flex flex-col items-center justify-center text-white ">
          <p className="text-mainHeading font-bold text-white mobile:text-[2rem]">
            <CountUp start={0} end={5000} duration={5}></CountUp>+
          </p>
          <p className="font-medium text-semibold">HIP REPLACEMENT</p>
        </span>{" "}
        <span className="flex flex-col items-center justify-center text-white ">
          <p className="text-mainHeading font-bold text-white mobile:text-[2rem]">
            <CountUp start={0} end={4000} duration={5}></CountUp>+
          </p>
          <p className="font-medium text-semibold">ARTHROSCOPY SURGERIES</p>
        </span>{" "}
        <span className="flex flex-col items-center justify-center text-white ">
          <p className="text-mainHeading font-bold text-white mobile:text-[2rem]">
            <CountUp start={0} end={25} duration={10}></CountUp>+
          </p>
          <p className="font-medium text-semibold">Years Of Service</p>
        </span>{" "}
      </div>
      <div className="w-11/12 py-4   grid grid-cols-2 gap-4 mobile:flex mobile:flex-col-reverse tablet:flex tablet:flex-col-reverse ">
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
        <div className="w-full grid grid-cols-1 gap-4 mobile:grid-cols-1">
          <AliceCarousel
            responsive={responsive}
            disableDotsControls={true}
            disableButtonsControls={true}
            autoPlay={true}
            autoPlayInterval={4000}
            infinite={true}
            mouseTracking
            className="w-full gap-4"
          >
            <NewsUpdateCard
              image={newsletter}
              para1={
                "City Hospital and Trauma Centre (CHTC) hosted a successful health camp in Lucknow on 9th June, 2024, providing comprehensive care with over 30 specialists from various fields, including Orthopaedics, Gynaecology, and Cardiology."
              }
              para2={
                "The event offered free lab tests, such as Blood Sugar, Thyroid, and Bone Mineral Density, along with three days of free medications. A key feature was a 50% discount on surgeries and advanced tests, alleviating financial burdens for patients."
              }
              para3={
                "The camp saw hundreds of attendees benefiting from expert consultations and medical services. Dr. Rajesh Mehta emphasized the hospital's commitment to accessible healthcare, and participants expressed gratitude for the exceptional care received."
              }
            />
            <NewsUpdateCard
              image={freecodecamp}
              title={"Free Health Camp!"}
              para1={
                "Join us for a comprehensive health camp with 30+ doctors from various specialties including Orthopaedics, Gynaecology, General Medicine, General Surgery, Cardiology, and more. Avail free lab tests like Blood Sugar, Uric Acid, Haemoglobin, Neuropathy Test, Thyroid, BMD, LFT, and receive 3 days of free medicines. Additionally, book surgeries and tests at 50% discount!"
              }
              para2={"Date: 9th June 2024 (Sunday)"}
              para3={"Time: 9 AM to 3 PM"}
              para4={
                "Don't miss this opportunity for your health and well-being. Visit us for expert consultations and significant savings on essential medical services."
              }
            />
            <NewsUpdateCard
              image={wearehiring}
              para1={
                "We are excited to announce openings for qualified and compassionate professionals to join our esteemed hospital. We are looking for dedicated individuals who are committed to providing the highest standard of care to our patients."
              }
              para2={"Open Positions:"}
              para3={"1. Nurses Qualifications: GNM/B.Sc. Nursing"}
              para4={"2. EMO/RMO Qualifications: MBBS Doctors"}
              para5={
                "3. ICU Technicians Qualifications: Relevant Experience and Certifications"
              }
              para6={"How to Apply:"}
              para7={
                "Interested candidates are invited to send their resume and cover letter at (city.lko@gmail.com) or apply directly through our website."
              }
              para8={
                "Together, let's make a difference in healthcare. Join us in our mission to provide exceptional care to our community."
              }
            />
          </AliceCarousel>
        </div>
      </div>
      <div
        className="w-11/12 mb-[2rem] p-4 flex flex-col items-center justify-start gap-2 h-[20rem] lg:h-[22rem] md:h-[24rem] tablet:h-[23rem]  rounded-md relative mobile:h-[52rem] mobile:bg-no-repeat mobile:bg-cover"
        style={{ backgroundImage: `url("${bg}")` }}
      >
        <h6 className="text-seconderyHeading font-semibold text-white">
          Departments
        </h6>
        <div className="w-11/12 absolute bottom-[1rem] flex gap-4 mobile:grid mobile:grid-cols-2 md:overflow-x-scroll tablet:overflow-x-scroll ">
          <span className="w-[17rem] cursor-pointer text-center bg-white hover:scale-105 hover:bg-secondry-green hover:text-white flex flex-col items-center justify-center p-4 py-[3rem] gap-3 rounded-md mobile:w-full">
            {/* <img src={bell} alt="" /> */}
            <GiKneeBandage className="text-[3rem]" />
            <p>Orthopaedic Department</p>
          </span>{" "}
          <span className="w-[17rem] cursor-pointer text-center bg-white hover:bg-secondry-green hover:text-white flex flex-col items-center justify-center p-4 py-[3rem] gap-3 rounded-md mobile:w-full">
            <MdOutlineGirl className="text-[3rem]" />
            <p>Pediatric Departement</p>
          </span>{" "}
          <span className="w-[17rem] cursor-pointer text-center bg-white hover:bg-secondry-green hover:text-white flex flex-col items-center justify-center p-4 py-[3rem] gap-3 rounded-md mobile:w-full">
            <GiKidneys className="text-[3rem]" />
            <p>Obstetrics and Gynecology Department</p>
          </span>{" "}
          <span className=" w-[17rem] cursor-pointer text-center bg-white hover:bg-secondry-green hover:text-white flex flex-col items-center justify-center p-4 py-[3rem] gap-3 rounded-md mobile:w-full">
            <FaHeartPulse className="text-[3rem]" />
            <p>Cardiology Department</p>
          </span>{" "}
          <span className="w-[17rem] cursor-pointer text-center bg-white hover:bg-secondry-green hover:text-white flex flex-col items-center justify-center p-4 py-[3rem] gap-3 rounded-md mobile:w-full">
            <LiaUserNurseSolid className="text-[3rem]" />
            <p>Critical Care Department</p>
          </span>{" "}
          <span className="w-[17rem] cursor-pointer text-center bg-white hover:scale-105 hover:bg-secondry-green hover:text-white flex flex-col items-center justify-center p-4 py-[3rem] gap-3 rounded-md mobile:w-full">
            {/* <img src={bell} alt="" /> */}
            <HiOutlineBellAlert className="text-[3rem]" />
            <p>Emergency Department</p>
          </span>{" "}
        </div>
      </div>
      <div className="w-11/12 h-fit py-4 lg:py-[3.2rem] md:py-[6rem]  px-4 green_gredient relative flex items-center justify-center rounded-md">
        <img src={image} alt="" className="mobile:h-[72rem] tablet:h-[40rem]" />
        <div className="w-11/12 absolute flex flex-col gap-4 items-center">
          <h6 className="text-seconderyHeading font-semibold text-white">
            Facilities We Provide
          </h6>
          <div className=" grid grid-cols-4 gap-4 mobile:grid-cols-2  ">
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
          <ReviewCard
            name={"Aditya Bansal"}
            story={
              "Outstanding facility featuring esteemed Orthopedic Surgeons such as Dr. Rasjesh Mehta. The doctors are exceptionally humble, and the staff is commendable. Excellent value for the investment!"
            }
          />
          <ReviewCard
            name="Manish Anand "
            story={
              "A commendable healthcare hospitality, highly recommended for my loved ones. Offers a comprehensive range of medical and paramedical services! Thank you."
            }
          />
          <ReviewCard
            name={"Jyotsna Kaur"}
            story={
              "Highly professional doctors, excellent facilities, and prompt responsiveness!"
            }
          />
          <ReviewCard
            name={"Aditya Bansal"}
            story={
              "Outstanding facility featuring esteemed Orthopedic Surgeons such as Dr. Rasjesh Mehta. The doctors are exceptionally humble, and the staff is commendable. Excellent value for the investment!"
            }
          />
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
        <div className="w-11/12 grid grid-cols-3 gap-2 mobile:overscroll-none mobile:flex scroll_x md:overflow-x-scroll md:gap-[13rem]">
          <DoctorCard
            profile={RajeshMehta}
            name={"Dr. Rajesh Mehta"}
            desigitation={"M.B.B.S. M.S. ( Orthopaedics ) Director: CHTC "}
          />
          <DoctorCard
            profile={RohilMehta}
            name={"Dr. Rohil Mehta"}
            desigitation={
              "MBBS, M.S. ( Orthopaedics ), D.N.B. ( Orthopaedics )"
            }
            insta={"https://www.instagram.com/dr.rohilmehta/"}
            facebook={"https://www.facebook.com/rohil.mehta.9"}
            linkdin={"https://www.linkedin.com/in/rohil-mehta-643a6b238/"}
          />
          <DoctorCard
            profile={JyotsnaMehta}
            name={"Dr. Jyotsna Mehta"}
            desigitation={
              "M.B.B.S. , D.G.O. Senior Gynaecologist & Director: CHTC"
            }
          />
        </div>
      </div>
      <div className="w-11/12 p-4 py-4  grid grid-cols-2 gap-4 mobile:grid-cols-1 contact_shadow rounded-md">
        <div className="col-span-1 flex flex-col items-start justify-start gap-2">
          <span>
            <p className="text-secondry-green text-normalHeading font-medium">
              BOOK AN
            </p>
            <h6 className="text-navy-blue text-seconderyHeading font-semibold">
              Appointment
            </h6>
          </span>

          <form
            className="flex justify-start items-start flex-col gap-2 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-2 gap-4  w-full">
              <span className="flex flex-col items-start justify-start w-full gap-2">
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Name"
                  className="border-[2px] border-secondry-green pl-[5px] outline-none h-[3rem] rounded-md w-full"
                  {...register("name", {
                    required: true,
                    maxLength: 20,
                    validate: (value) => {
                      return !!value.trim();
                    },
                  })}
                />
                {errors.name && (
                  <p className="loginFormError">Please Enter Valid Name</p>
                )}
              </span>{" "}
              <span className="flex flex-col items-start justify-start w-full gap-2">
                <p>Phone Number</p>
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="border-[2px] border-secondry-green pl-[5px] outline-none h-[3rem] rounded-md w-full"
                  {...register("phone", {
                    required: true,
                    pattern: /^[0-9+-]+$/,
                    minLength: 10,
                    maxLength: 10,
                  })}
                />
                {errors.phone && (
                  <p className="loginFormError">
                    Please Enter Valid Phone Number
                  </p>
                )}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <span className="flex flex-col items-start justify-start w-full gap-2">
                <p>Reason for Visit</p>
                <input
                  type="text"
                  placeholder="Reason for Visit"
                  className="border-[2px] border-secondry-green pl-[5px] outline-none h-[3rem] rounded-md w-full"
                  {...register("reasonforVisit", {
                    required: true,
                    maxLength: 100,
                    validate: (value) => {
                      return !!value.trim();
                    },
                  })}
                />
                {errors.reasonforVisit && (
                  <p className="loginFormError">
                    Please Enter Reason for Visit
                  </p>
                )}
              </span>{" "}
              <span className="flex flex-col items-start justify-start w-full gap-2">
                <p>Department</p>
                <input
                  type="text"
                  placeholder="Department"
                  className="border-[2px] border-secondry-green pl-[5px] outline-none h-[3rem] rounded-md w-full"
                  {...register("Department", {
                    required: true,
                    maxLength: 100,
                    validate: (value) => {
                      return !!value.trim();
                    },
                  })}
                />
                {errors.Department && (
                  <p className="loginFormError">Please Enter Department</p>
                )}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <span className="flex flex-col items-start justify-start w-full gap-2">
                <p>Preferred Date</p>
                <input
                  type="date"
                  placeholder="Preferred Date"
                  className="border-[2px] border-secondry-green pl-[5px] outline-none h-[3rem] rounded-md w-full"
                  {...register("preferredDate", {
                    required: true,
                  })}
                />
                {errors.preferredDate && (
                  <p className="loginFormError">Please Enter Preferred Date</p>
                )}
              </span>{" "}
              <span className="flex flex-col items-start justify-start w-full gap-2">
                <p>Preferred Time</p>
                <input
                  type="time"
                  placeholder="Preferred Time"
                  className="border-[2px] border-secondry-green pl-[5px] outline-none h-[3rem] rounded-md w-full"
                  {...register("preferredTime", {
                    required: true,
                  })}
                />
                {errors.preferredTime && (
                  <p className="loginFormError">Please Enter Preferred Time</p>
                )}
              </span>
            </div>
            <button type="submit" className="button text-white rounded-md ">
              Submit
            </button>
          </form>
        </div>
        <div className="flex items-center justify-center mobile:hidden">
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
