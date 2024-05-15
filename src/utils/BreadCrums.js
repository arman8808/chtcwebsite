import React from "react";
import { Link } from "react-router-dom";

function BreadCrums({ currentpage }) {
  return (
    <div className="w-11/12 flex items-center gap-2">
      <Link to={"/"}>Home</Link>
      <p>/</p> <p className="para text-gray font-semibold">{currentpage}</p>
    </div>
  );
}

export default BreadCrums;
