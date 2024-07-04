import React from "react";
import img from "../../assests/images/Frame 5.png";
function NewsUpdateCard({
  image,
  title,
  para1,
  para2,
  para3,
  para4,
  para5,
  para6,
  para7,
  para8,
}) {
  return (
    <div className="bg-white rounded-md p-4 box_shadow flex flex-col items-start justify-start gap-3 w-[98%]">
      <img src={image ? image : img} alt="" className="object-contain" />
      <p className="text-normalHeading font-semibold text-black-shade">
        {title && title}
      </p>
      <p className="para text-gray">
        {para1
          ? para1
          : " In a world where change is constant and innovation is key, our company stands at the forefront of progress. With a relentless commitment to pushing boundaries and challenging the status quo, we embark on a journey of discovery and transformation. Driven by a passion forinnovation, we continuously strive to anticipate the needs of tomorrow and create solutions that shape the future. From groundbreaking research and development to pioneering new technologies, every endeavor is fueled by a shared vision of making a meaningful impact on the world around us."}
      </p>
      <p className="para text-gray">{para2}</p>
      <p className="para text-gray">{para3}</p>
      <p className="para text-gray">{para4}</p>
      <p className="para text-gray">{para5 ? para5 : ""}</p>
      <p className="para text-gray">{para6 ? para6 : ""}</p>
      <p className="para text-gray">{para7 ? para7 : ""}</p>
      <p className="para text-gray">{para8 ? para8 : ""}</p>
    </div>
  );
}

export default NewsUpdateCard;
