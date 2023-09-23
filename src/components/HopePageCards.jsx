import React from "react";

export default function HopePageCards({ title, image, link }) {
  return (
    <div className="h-[420px] bg-white">
      <div>{title}</div>
      <div className="h-[300px] m-4">
        <img
          className="h-[100%] w-[100%] object-cover"
          src={image}
          alt=""
        ></img>
      </div>
      <div className="text-xs xl:text-sm text-blue-400 ml-4">{link}</div>
    </div>
  );
}
