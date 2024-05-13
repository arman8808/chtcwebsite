import React from "react";
import verify from "../../assests/images/material-symbols_verified.png";
function ReviewCard() {
  return (
    <div className="min-w-[25rem] flex flex-col gap-2 box_shadow p-4 rounded-md">
      <div className="w-full grid grid-cols-3 gap-4">
        <span className="col-span-2">
          <p>Nemesis _ Aquib</p>
          <p>Reviewed on 19th May, 2024</p>
        </span>
        <span className="flex items-center gap-1">
          <img src={verify} alt="" />
          <p className="text-[10px] text-secondry-green">Verified Review </p>
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <p>
          To save a preset message from the list of text message marketing
          examples here on this page, you can copy any of the examples below.
        </p>{" "}
        <p>
          To save a preset message from the list of text message marketing
          examples here on this page, you can copy any of the examples below.
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
