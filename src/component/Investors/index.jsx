import React from "react";
import investors from "../../assets/images/investors.png";
import buildings from "../../assets/images/building.png";

const Investors = () => {
  return (
    <div className="flex flex-col gap-[4rem] pt-[10rem] items-center mx-auto pb-[2rem]">
      <h4 className="text-[1.6rem] font-[700] text-[#303030]">
        Backed by investors and leading innovators in the Fintech space:
      </h4>
      <div className="">
        <img src={investors} alt="" />
      </div>
      <div className="">
        <img src={buildings} alt="" />
      </div>
    </div>
  );
};

export default Investors;
