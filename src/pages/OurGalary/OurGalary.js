import React from "react";
import img from "../../assests/images/Rectangle 2771.png";
import img1 from "../../assests/images/Rectangle 276.png";
import img2 from "../../assests/images/Rectangle 278.png";
import img3 from "../../assests/images/Rectangle 292.png";
import img4 from "../../assests/images/Rectangle 277.png";
import img5 from "../../assests/images/Rectangle 277.png";
function OurGalary() {
  return (
    <div className="pagecss w-full pt-[3rem] gap-[1rem]">
      <div class="w-11/12">
        <h2 className="text-mainHeading font-bold text-navy-blue">
          Our Gallery
        </h2>
      </div>
      <div class="w-11/12 grid grid-cols-3 md:grid-cols-4 gap-4">
        <div class="grid gap-2">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img4} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img5} alt="" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src={img5}
              alt=""
              className="h-[20rem] w-full"
            />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img1} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img3} alt="" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img4} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img2} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={img5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurGalary;
