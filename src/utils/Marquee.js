import React from "react";
import Marquee from "react-fast-marquee";
import img from "../assests/images/image 19.png";
import img1 from "../assests/images/image 13.png";
import img2 from "../assests/images/image 16.png";
import img3 from "../assests/images/image 17.png";
import img4 from "../assests/images/image 18.png";
function MarqueeComponent() {
  return (
    <div>
      <Marquee autoFill pauseOnHover={true} className="flex items-center gap-4">
        <img src={img} alt="" className="h-[5rem] object-contain px-2" />
        <img src={img1} alt="" className="h-[5rem] object-contain px-2" />
        <img src={img2} alt="" className="h-[5rem] object-contain px-2" />
        <img src={img3} alt="" className="h-[5rem] object-contain px-2" />
        <img src={img4} alt="" className="h-[5rem] object-contain px-2" />
      </Marquee>
    </div>
  );
}

export default MarqueeComponent;
