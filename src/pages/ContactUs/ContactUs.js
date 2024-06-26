import React, { useEffect } from "react";
import logo from "../../assests/images/logo-01-01 4.png";
import { Email, LocationOn, Phone } from "@mui/icons-material";
import { useForm } from "react-hook-form";
function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="pagecss gap-[2rem]">
      <div className="w-10/12 py-4 pt-[3rem] grid grid-cols-3 gap-4 rounded-md">
        <div className="col-span-2 mobile:col-span-3">
          <h2 className="text-mainHeading font-bold text-navy-blue mobile:text-seconderyHeading">
            We are here to help
          </h2>
          <p className="para text-gray">
            Do you have any query? Please feel free to contact us.
          </p>
        </div>
        <div className="flexcenter mobile:hidden">
          <img
            src={logo}
            alt="logo"
            className="h-[8rem] object-contain mobile:hidden"
          />
        </div>
      </div>
      <div className="w-7/12 mobile:w-full mobile:px-4">
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
                <p className="loginFormError">Please Enter Reason for Visit</p>
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
          <button
            type="submit"
            className="button text-white rounded-md green_background_linear"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-10/12 py-4   gap-4 rounded-md md:w-11/12">
        <div className="">
          <h2 className="text-mainHeading font-bold text-navy-blue">
            Find Us Here
          </h2>
        </div>
        <div className="w-full grid grid-cols-3 gap-4 mobile:grid-cols-1">
          <div className="card_background rounded-md p-4 flex items-start justify gap-4">
            <Phone style={{ fontSize: "2.5rem" }} className="text-white" />
            <span>
              <p className="text-navy-blue text-normalHeading font-semibold">
                Phone
              </p>
              <p> 9119900861, 9119900862</p>
            </span>
          </div>{" "}
          <div className="card_background rounded-md p-4 flex items-start justify-star gap-4">
            <Email style={{ fontSize: "2.5rem" }} className="text-white" />
            <span>
              <p className="text-navy-blue text-normalHeading font-semibold">
                Email
              </p>
              <p>admin@cityhospitallko.com</p>
            </span>
          </div>{" "}
          <div className="card_background rounded-md p-4 flex items-start justify gap-4">
            <LocationOn style={{ fontSize: "2.5rem" }} className="text-white" />
            <span>
              <p className="text-navy-blue text-normalHeading font-semibold">
                Location
              </p>
              <p>
                C 1 & C 2 , CINDER DUMP COMPLEX, KANPUR ROAD, NEAR ALAMBAGH BUS
                STAND, ALAMBAGH, LUCKNOW, UTTAR PRADESH, 226005
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="w-10/12 py-4  rounded-md md:w-11/12">
        <iframe
          title="address"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.398695973883!2d80.90140517494407!3d26.815592064258453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfc246b9391af%3A0x1d05f225347c18e2!2sCity%20Hospital%20and%20Trauma%20Centre%20-%20Best%20Hospital%20for%20Orthopaedics%20%7C%7C%20Gynaecology%20in%20Alambagh%20Lucknow%20%7C%7C!5e1!3m2!1sen!2sin!4v1715530377284!5m2!1sen!2sin"
          height="450"
          style={{ border: "none", width: "100%", borderRadius: "1rem" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
