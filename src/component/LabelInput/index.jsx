import React from "react";

const LabelInput = ({
  label,
  classes,
  isOption,
  disabled,
  value,
  onSelect,
  onChange,
  type='number',
  isText
}) => {
  return (
    <div className="w-[32.5rem] flex flex-col gap-[1rem]">
      <label htmlFor="" className="text-[1.6rem] font-[600] text-[#000000]">
        {label}
      </label>

      <div className="w-full relative">
        <input
          disabled={disabled}
          value={value}
          onChange={onChange}
          type={type}
          name=""
          className={`w-full px-[2rem] py-[0.6rem] outline-none rounded-[0.7rem] border-[1px] border-[#5B5B5B] h-[60px] text-[#90C517] font-[400] text-[1.8rem] ${classes}`}
          id=""
        />
        {isOption ? (
          <select
            name=""
            id=""
            onChange={onSelect}
            className="w-[70px] outline-none arrow absolute top-[20px] right-0 text-[#5B5B5B] font-[400] text-[1.6rem]"
          >
            <option value="USD">USD</option>
            <option value="ARS">ARS</option>
          </select>
        ) : (
          <></>
        )}
        {isText ? (
          <span
            // name=""
            // id=""
            // onChange={onSelect}
            className="w-[7rem] outline-none  absolute top-[20px] right-0 text-[#5B5B5B] font-[400] text-[1.6rem]"
          >
            USD
          </span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default LabelInput;
