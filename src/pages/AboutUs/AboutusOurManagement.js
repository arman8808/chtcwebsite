import React from "react";
import aboutimg from "../../assests/images/gallery/DSC03617-_1_.webp";
import aboutimg2 from "../../assests/images/gallery/DSC03773.webp";
import aboutimg3 from "../../assests/images/gallery/DSC03544.webp";
import aboutimg1 from "../../assests/images/Rectangle 284.png";
import aboutimg4 from "../../assests/images/gallery/DJI_0719 .webp";
import Icon from "../../assests/images/icons/Icon.png";
import Icon2 from "../../assests/images/icons/Icon (2).png";
import Icon4 from "../../assests/images/icons/Icon0.png";
import Icon3 from "../../assests/images/icons/Icon4.png";
import RajeshMehta from "../../assests/images/2.png";
import JyotsnaMehta from "../../assests/images/3.png";
function AboutusOurManagement() {
  return (
    <div className="pagecss gap-[3rem]">
      <div className="w-10/12 pt-[2rem]   ">
        <h2 className="text-mainHeading font-bold text-navy-blue">
          Our Management Team
        </h2>
        <div className="w-full py-4 pt-[2rem]   grid grid-cols-2 gap-4 rounded-md mobile:flex mobile:flex-col-reverse">
          <div className="flex items-start justify-center flex-col gap-2">
            <h4 className="text-seconderyHeading font-semibold text-secondry-green">
              Dr.Rajesh Mehta
            </h4>
            <p className="text-para font-medium text-black-shade">
              M.B.B.S, M.S. (Ortho), Fellowship in Joint Replacement
            </p>
            <p className="text-para font-medium text-black-shade">
              (Liverpool, U.K.), Revision Joint Replacement and Arthroscopy
              (Berlin, Germany)
            </p>
            <p className="para text-gray">
              Dr. Rajesh Mehta is widely acknowledged as a trailblazer in joint
              replacement surgeries within Uttar Pradesh and enjoys national
              acclaim as a surgeon specializing in hip and knee arthroplasty
              procedures. He has performed over 2000 joint replacement
              surgeries, encompassing challenging revision surgeries and
              addressing infections and failures in joint replacements conducted
              elsewhere.
            </p>
            <p className="para text-gray">
              Having received training in Liverpool, United Kingdom, he stands
              as one of the initial surgeons to conduct knee replacement
              procedures in Uttar Pradesh. Over the past three decades, he has
              treated numerous notable individuals for diverse knee conditions,
              including the late Shri Atal Bihari Vajpayee Ji. Dr. Rajesh Mehta
              is synonymous with trust in Lucknow households, persistently
              delivering surgical services in trauma, knee and shoulder
              arthroscopic surgeries, and joint replacement procedures across
              Uttar Pradesh.{" "}
            </p>
          </div>
          <div className="flexcenter">
            <img
              src={RajeshMehta}
              alt="about"
              className="h-[25rem] w-[80%] object-contain rounded mobile:w-[100%]"
            />
          </div>
        </div>
      </div>
      <div className="w-10/12 py-4  grid grid-cols-2 gap-4 mobile:grid-cols-1">
        <div className="flexcenter">
          <img
            src={JyotsnaMehta}
            alt="about"
            className="h-[22rem] w-[80%] object-contain rounded mobile:w-[100%]"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading font-semibold text-secondry-green">
            Dr. Jyotsna Mehta
            <p className="text-para font-medium text-black-shade">
              M.B.B.S. , D.G.O.
            </p>
            <p className="text-para font-medium text-black-shade">
              Senior Gynaecologist & Director , CHTC
            </p>
          </h2>
          <p className="para text-gray">
            Dr. Jyotsna Mehta, an Obstetrician and Gynecologist, brings over two
            decades of extensive experience to her practice at City Hospital and
            Trauma Centre in Alambagh, Lucknow. Her areas of expertise include
            infertility treatment, adolescent gynecology, and obstetric care.
            Dr. Mehta obtained her MBBS and DGO qualifications before pursuing
            training in Intrauterine Insemination and Assisted Reproductive
            Techniques at Dr. B N Chakravorty’s Institute of Reproductive
            Techniques in Kolkata, West Bengal. She served as a Consultant in
            the Gynecology and Obstetrics department at Sawhney Nursing Home for
            20 years.
          </p>
        </div>
      </div>{" "}
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4 mobile:flex mobile:flex-col-reverse">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading font-bold text-navy-blue">
            Our Vision
          </h2>
          <p>
            Our goal is to become the preferred hospital in the state of Uttar
            Pradesh by:
          </p>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>
              - Prioritizing patient well-being and adhering to ethical
              healthcare practices.
            </li>

            <li>
              - Aligning with international standards for treatment protocols.
            </li>
            <li>
              - Achieving recognition as a nationally renowned Orthopedic Centre
              of Excellence.
            </li>
          </ul>
        </div>
        <div className="flexcenter">
          <img
            src={aboutimg}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded mobile:w-[100%]"
          />
        </div>
      </div>
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4 mobile:grid-cols-1">
        <div className="flexcenter">
          <img
            src={aboutimg2}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded mobile:w-[100%]"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading font-bold text-navy-blue">
            Our Mission
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- Accessible healthcare at reasonable prices</li>
            <li>- Providing a cozy and homely atmosphere</li>
            <li>
              - Ensuring comprehensive patient care from treatment to recovery
            </li>
          </ul>
        </div>
      </div>
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4 mobile:flex mobile:flex-col-reverse">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading font-bold text-navy-blue">
            Our Values
          </h2>

          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>The roadmap to comprehensive healthcare:</li>
            <li>C- Competent Care.</li>
            <li>H- Hospitality.</li>
            <li>T- Team Spirit.</li>
            <li>C- Care to Cure.</li>
          </ul>
        </div>
        <div className="flexcenter">
          <img
            src={aboutimg3}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded mobile:w-[100%]"
          />
        </div>
      </div>
      <div className="w-10/12  py-4  grid grid-cols-3 gap-4 mobile:grid-cols-1">
        <div className="flexcenter">
          <img
            src={aboutimg4}
            alt="about"
            className="w-[90%] h-[25rem]  object-cover rounded mobile:w-[100%]"
          />
        </div>
        <div className="col-span-2 flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading font-bold text-navy-blue">
            Why Choose Us
          </h2>
          <div className="w-full grid grid-cols-2 gap-4 mobile:grid-cols-1">
            <span className="flex items-start justify-start flex-col gap-1">
              <img src={Icon} alt="Icon" />
              <h6 className="text-normalHeading font-semibold  text-secondry-green">
                Medical Guidance
              </h6>
              <p className="para text-gray">
                Prior to any procedure, we ensure that the patient undergoes a
                thorough counseling session to mentally prepare for the
                treatment.
              </p>
            </span>{" "}
            <span className="flex items-start justify-start flex-col gap-1">
              <img src={Icon2} alt="Icon" />
              <h6 className="text-normalHeading font-semibold  text-secondry-green">
                Expert Assistance
              </h6>
              <p className="para text-gray">
                Our staff, including doctors, nurses, and front office
                personnel, are extensively trained to provide top-notch services
                during your hospital stay.
              </p>
            </span>{" "}
            <span className="flex items-start justify-start flex-col gap-1">
              <img src={Icon3} alt="Icon" />
              <h6 className="text-normalHeading font-semibold  text-secondry-green">
                Round-the-Clock Assistance
              </h6>
              <p className="para text-gray">
                We offer efficient services for emergencies 24 hours a day,
                ensuring we're ready whenever needed.
              </p>
            </span>{" "}
            <span className="flex items-start justify-start flex-col gap-1">
              <img src={Icon4} alt="Icon" />
              <h6 className="text-normalHeading font-semibold  text-secondry-green">
                Accredited Medical Facilities
              </h6>
              <p className="para text-gray">
                All treatment facilities provided to patients are licensed and
                meet stringent quality standards.
              </p>
            </span>{" "}
            <span className="flex items-start justify-start flex-col gap-1">
              <img src={Icon4} alt="Icon" />
              <h6 className="text-normalHeading font-semibold  text-secondry-green">
                Highly Skilled Doctors
              </h6>
              <p className="para text-gray">
                Our doctors possess extensive training, experience, and
                expertise in their respective fields. They adhere to streamlined
                protocols when treating patients.
              </p>
            </span>
            <span className="flex items-start justify-start flex-col gap-1">
              <img src={Icon4} alt="Icon" />
              <h6 className="text-normalHeading font-semibold  text-secondry-green">
                Focused Patient Support
              </h6>
              <p className="para text-gray">
                Our team of nurses is comprised of qualified, experienced, and
                compassionate individuals who excel in patient care.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutusOurManagement;
