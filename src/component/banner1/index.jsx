import React from "react";
import img from "../../assets/images/banner1.png";
const Banner1 = () => {
  return (
    <div className="flex gap-[4rem] justify-center max-[850px]:flex-col p-[4rem] items-center">
      <div className="flex max-w-[52rem]">
        <h1 className="text-[#303030] text-[5.2rem] font-[800] ">
          Discover all the benefits we have for you
        </h1>
      </div>
      <div className="">
        <img src={img} />
      </div>
    </div>
  );
};

export default Banner1;
