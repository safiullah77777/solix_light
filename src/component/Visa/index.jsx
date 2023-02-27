import React from "react";
import Temp2 from "../Temp2";
import visa from "../../assets/images/visa.png";

const Visa = () => {
  return (
    <div className="flex justify-center gap-[4rem] max-[850px]:flex-col items-center max-[850px]:mt-[5rem]">
      <div className="flex flex-col gap-[4rem] max-w-[50rem] px-[3rem]">
        <h4 className="text-[24px] font-[700] text-[#303030]">
          Get a Visa debit card to spend on whatever you like
        </h4>
        <ul className="text-[16px] pl-[1rem] font-[400] list-disc text-[#303030]">
          <li> Online services and games.</li>
          <li> Delivery and travel apps.</li>
          <li> Stores with online sales.</li>
          <li> Businesses that accept Visa.</li>
        </ul>
        <div className="flex">
          <img src={visa} />
        </div>
      </div>
      <Temp2 />
    </div>
  );
};

export default Visa;
