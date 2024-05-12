import React from "react";
import aboutimg from "../../assests/images/Rectangle 277.png";
import aboutimg1 from "../../assests/images/Rectangle 284.png";
import Icon from "../../assests/images/icons/Icon.png";
import Icon2 from "../../assests/images/icons/Icon (2).png";
import Icon4 from "../../assests/images/icons/Icon0.png";
import Icon3 from "../../assests/images/icons/Icon4.png";
function AboutusOurManagement() {
  return (
    <div className="pagecss gap-[3rem]">
      <div className="w-10/12 py-4 pt-[2rem]   grid grid-cols-2 gap-4 rounded-md">
        <div className="flex items-start justify-center flex-col gap-2">
          <h2 className="text-mainHeading font-bold text-navy-blue">
            Our Management Team
          </h2>
          <h4 className="text-seconderyHeading font-semibold text-secondry-green">
            Dr.Rajesh Mehta
          </h4>
          <p className="text-para font-medium text-black-shade">Director</p>
          <p className="para text-gray">
            Dr Rajesh Mehta is considered to be the pioneer of joint replacement
            surgeries in Uttar Pradesh and is a surgeon of national repute for
            hip and knee arthroplasty surgeries. He has operated more than 2000
            joint replacement surgeries including difficult revision surgeries
            and salvaging infected and failed joint replacements operated
            elsewhere. Trained in Liverpool, United Kingdom, he is one of the
            first surgeons to perform knee replacement surgeries in Uttar
            Pradesh and has treated many prominent names for various knee
            conditions over the last 3 decades with the likes of Late Shri Atal
            Bihari Vajpayee Ji. Dr Rajesh Mehta is a synonym for trust in the
            Lucknow households and continues to serve Uttar Pradesh with his
            surgical services in trauma, arthroscopic surgeries of knee and
            shoulder and joint replacement surgeries.
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
      <div className="w-10/12 py-4  grid grid-cols-2 gap-4">
        <div className="flexcenter">
          <img
            src={aboutimg}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading font-semibold text-secondry-green">
            Dr.Jyotsna Mehta
            <p className="text-para font-medium text-black-shade">Director</p>
          </h2>
          <p className="para text-gray">
            Dr. Jyotsna Mehta is an Obstetrician and Gynaecologist with over 20
            years of extensive working experience, currently practising at City
            Hospital and Trauma Centre in Alambagh, Lucknow. She specialises in
            infertility treatment, adolescent gynaecology and obstetric care.
            Dr. Mehta completed her MBBS and also earned the DGO qualification
            to her name. After that, she received training in Intrauterine
            Insemination and Assisted Reproductive Techniques at Dr. B N
            Chakravorty’s Institute of Reproductive Techniques located in
            Kolkata, West Bengal. She was attached to Sawhney Nursing Home as a
            Consultant in Gynaecology and Obstetrics department for 20 years.
          </p>
        </div>
      </div>{" "}
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading font-bold text-navy-blue">
            Our Vision
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- To be the hospital of choice for the state of U.P.</li>
            <li>- Promote “Patient First” and ethical healthcare.</li>
            <li>- Meeting the global benchmarks for treatment protocols.</li>
            <li>
              - Becoming a National Level Orthopaedic Centre of Excellence.
            </li>
          </ul>
        </div>
        <div className="flexcenter">
          <img
            src={aboutimg}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded"
          />
        </div>
      </div>
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4">
        <div className="flexcenter">
          <img
            src={aboutimg}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading font-bold text-navy-blue">
            Our Mission
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>- Affordable healthcare.</li>
            <li>- Comfortable and Home-like environment.</li>
            <li>
              - Taking care of everything for the patient- “From care to cure”.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-10/12  py-4  grid grid-cols-2 gap-4">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading font-bold text-navy-blue">
            Our Values
          </h2>
          <ul className="text-black-shade font-semibold text-[1.2rem]">
            <li>Passport to complete healthcare-.</li>
            <li>C- Competent Care.</li>
            <li>H- Hospitality.</li>
            <li>T- Team Spirit.</li>
            <li>C- Care to Cure.</li>
          </ul>
        </div>
        <div className="flexcenter">
          <img
            src={aboutimg}
            alt="about"
            className="h-[22rem] w-[80%] object-cover rounded"
          />
        </div>
      </div>
      <div className="w-10/12  py-4  grid grid-cols-3 gap-4">
        <div className="flexcenter">
          <img
            src={aboutimg1}
            alt="about"
            className="w-[90%]  object-cover rounded"
          />
        </div>
        <div className="col-span-2 flex flex-col items-start justify-start gap-2">
          <h2 className="text-seconderyHeading font-bold text-navy-blue">
            Why Choose Us
          </h2>
          <div className="w-full grid grid-cols-2 gap-4">
            <span className="flex items-start justify-start flex-col gap-1">
              <img src={Icon} alt="Icon" />
              <h6 className="text-normalHeading font-semibold  text-secondry-green">
                Experienced Medical Professionals
              </h6>
              <p className="para text-gray">
                Our team includes experienced doctors, nurses, and other
                healthcare professionals who are dedicated to providing the best
                possible care to our patients.
              </p>
            </span>{" "}
            <span className="flex items-start justify-start flex-col gap-1">
              <img src={Icon2} alt="Icon" />
              <h6 className="text-normalHeading font-semibold  text-secondry-green">
                Comprehensive Services
              </h6>
              <p className="para text-gray">
                We offer a wide range of healthcare services, from preventive
                care to specialized treatment for complex conditions.
              </p>
            </span>{" "}
            <span className="flex items-start justify-start flex-col gap-1">
              <img src={Icon3} alt="Icon" />
              <h6 className="text-normalHeading font-semibold  text-secondry-green">
                Patient-centered Approach
              </h6>
              <p className="para text-gray">
                We believe in treating each patient as an individual, and we
                take the time to understand your unique health needs and
                concerns.
              </p>
            </span>{" "}
            <span className="flex items-start justify-start flex-col gap-1">
              <img src={Icon4} alt="Icon" />
              <h6 className="text-normalHeading font-semibold  text-secondry-green">
                State-of-the-art Facilities
              </h6>
              <p className="para text-gray">
                Our healthcare center is equipped with the latest technology and
                equipment to provide our patients with the most advanced care
                possible.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutusOurManagement;
