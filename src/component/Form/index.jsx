import React from "react";
import money from "../../assets/images/money.png";
import FeeCard from "../FeeCard";
import LabelInput from "../LabelInput";
const Form = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-center">
      <div className="flex relative img">
        <img src={money} alt="" className="w-full" />
      </div>
      <div className="banner1 relative top-[30px] grid place-content-center transform  mx-auto max-w-[430px] w-full h-[60px] bg-blue-500 box-border text-white">
        ff
      </div>
      <div className="flex max-w-[93rem] gap-[3rem] bg-[#fff] w-full border-[1px] border-[#000] flex-col justify-center items-center rounded-[2.1rem] p-[3rem] pt-[7rem] relative">
        <LabelInput label={"Destination"} />
        <div className="flex flex-wrap gap-[2rem]">
          <LabelInput label={"Destination"} />
          <LabelInput label={"Destination"} />
        </div>
      <FeeCard />
      </div>
    </div>
  );
};

export default Form;
