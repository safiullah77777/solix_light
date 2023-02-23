import React from "react";

const FeeCard = () => {
  return (
    <div className="bg-[#C7FA50]/[0.5] flex rounded-[0.7rem] flex-wrap max-[850px]:flex-col items-center justify-center">
      <div className="flex bg-[#C7FA50] rounded-[0.7rem] min-[850px]:h-full max-[850px]:w-full w-[13.4rem] flex-col gap-[0rem] place-content-center justify-center items-center">
        <span className="text-[#5B5B5B] text-[1.6rem] font-[600]">
          Solix fee
        </span>
        <span className="text-[#5B5B5B] text-[1.4rem] font-[500]">$0</span>
      </div>
      <div className="flex h-full py-[2rem] ">
        <div className="flex flex-col max-[850px]:py-[4rem]  justify-center items-center max-[850px]:border-r-[0px] max-[850px]:border-b-[1px] border-r-[1px] border-[#5B5B5B]">
          <span className="text-[#5B5B5B] text-[1.6rem] font-[600]">
            Save $50 fee
          </span>
          <span className="text-[#5B5B5B] text-[1.3rem] font-[500] px-[3rem] ">
            vs. traditional banks
          </span>
        </div>
      </div>
      <div className="flex h-full py-[2rem]">
        <div className="flex flex-col  justify-center items-center border-r-[1px]  max-[850px]:border-r-[0px] max-[850px]:border-b-[1px] border-[#5B5B5B]">
          <span className="text-[#5B5B5B] text-[1.6rem] font-[600]">
            Save $50 fee
          </span>
          <span className="text-[#5B5B5B] text-[1.3rem] font-[500] px-[3rem] ">
            vs. traditional banks
          </span>
        </div>
      </div>
      <div className="flex h-full py-[2rem]">
        <div className="flex flex-col  justify-center items-center">
          <span className="text-[#5B5B5B] text-[1.6rem] font-[600]">
            Save $50 fee
          </span>
          <span className="text-[#5B5B5B] text-[1.3rem] font-[500] px-[3rem] ">
            vs. traditional banks
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeeCard;
