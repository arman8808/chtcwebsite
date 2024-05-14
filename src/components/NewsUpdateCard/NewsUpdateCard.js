import React from "react";
import img from "../../assests/images/Frame 5.png";
function NewsUpdateCard() {
  return (
    <div className="bg-white rounded-md p-4 box_shadow flex flex-col items-start justify-start gap-3">
      <img src={img} alt="" className="object-contain" />
      <p className="text-normalHeading font-semibold text-black-shade">
        Innovating for Tomorrow: Our Company's Journey
      </p>
      <p className="para text-gray">
        In a world where change is constant and innovation is key, our company
        stands at the forefront of progress. With a relentless commitment to
        pushing boundaries and challenging the status quo, we embark on a
        journey of discovery and transformation. Driven by a passion for
        innovation, we continuously strive to anticipate the needs of tomorrow
        and create solutions that shape the future. From groundbreaking research
        and development to pioneering new technologies, every endeavor is fueled
        by a shared vision of making a meaningful impact on the world around us.
      </p>
    </div>
  );
}

export default NewsUpdateCard;
