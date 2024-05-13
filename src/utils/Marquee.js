import React from "react";
import Marquee from "react-fast-marquee";
import img from "../assests/images/Placeholder-4.png";
import img1 from "../assests/images/Placeholder-1.png";
import img2 from "../assests/images/Placeholder-2.png";
import img3 from "../assests/images/Placeholder-3.png";
function MarqueeComponent() {
  return (
    <div>
      <Marquee autoFill pauseOnHover={true} className="flex items-center gap-2">
        <img src={img} alt="" className="h-[5rem ] object-contain" />
        <img src={img1} alt="" className="h-[5rem ] object-contain" />
        <img src={img2} alt="" className="h-[5rem ] object-contain" />
        <img src={img3} alt="" className="h-[5rem ] object-contain" />
      </Marquee>
    </div>
  );
}

export default MarqueeComponent;
