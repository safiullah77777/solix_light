import React, { useState } from "react";
import money from "../../assets/images/money.png";
import Button from "../Button";
import FeeCard from "../FeeCard";
import LabelInput from "../LabelInput";
const Form = () => {
  const [value, setValue] = useState("");
  return (
    <div className="w-full relative flex flex-col items-center justify-center">
      <div className="flex relative img">
        <img src={money} alt="" className="w-full" />
      </div>
      <div className="banner1 relative justify-center top-[30px] grid place-content-center transform  mx-auto max-w-[430px] w-full h-[60px] bg-blue-500 box-border text-white">
        <span className="text-[1.9rem] font-[600] text-[#fff] outfit">
          Try our money transfer service
        </span>
        <span className="text-[1.3rem] font-[600] text-[#fff] text-center outfit">
          no fees when sending $300 or less
        </span>
      </div>
      <div className="flex max-w-[93rem] px-[5rem]  gap-[3rem] bg-[#fff] w-full border-[1px] border-[#000] flex-col justify-center items-center rounded-[2.1rem] p-[3rem] pt-[7rem] relative">
        <div className="w-[32.5rem] flex flex-col gap-[1rem]">
          <label htmlFor="" className="text-[1.6rem] font-[600] text-[#000000]">
            {"Destination"}
          </label>
          <select
            name=""
            className={`w-full px-[2rem] py-[0.6rem] outline-none rounded-[0.7rem] border-[1px] border-[#5B5B5B] h-[60px] text-[#90C517] font-[400] text-[1.8rem] arrow`}
            id=""
          >
            <option>Argentina</option>
          </select>
        </div>
        <div className="flex mx-auto justify-center items-center flex-wrap gap-[2rem]">
          <LabelInput
            label={"Destination"}
            type="number"
            classes="arrow-none"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            isText={true}
          />
          <LabelInput
            label={"Destination"}
            type="text"
            // classes={'arrow'}
            isOption={true}
            disabled={true}
            value={`$${value}.00`}
          />
        </div>
        <FeeCard />
        <p className="text-[#5b5b5b] text-[1rem] font-[400] max-w-[66rem] text-center mx-auto">
          *Promotional rates and offers may apply. The information contained
          herein has been obtained from sources believed to be reliable, but its
          accuracy cannot be guaranteed, and nothing contained herein is, or
          shall be deemed to be, a promise or representation.
        </p>
        <Button
          text="Send Remittance"
          classes="bg-[#303030] !font-[600] leading-[150%] !text-[13px] w-[33rem] shadow-btn1 !py-[1.1rem] text-[#fff] !rounded-[2.3rem]"
        />
      </div>
    </div>
  );
};

export default Form;
