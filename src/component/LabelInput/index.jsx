import React from "react";

const LabelInput = ({ label }) => {
  return (
    <div className="w-[32.5rem] flex flex-col gap-[1rem]">
      <label htmlFor="" className="text-[1.6rem] font-[600] text-[#000000]">{label}</label>
      <select
        name=""
        className="w-full px-[2rem] py-[0.6rem] outline-none rounded-[0.7rem] border-[1px] border-[#5B5B5B] h-[60px] text-[#90C517] font-[400] text-[1.8rem]"
        id=""
      >
        <option>Argentina</option>
      </select>
    </div>
  );
};

export default LabelInput;
