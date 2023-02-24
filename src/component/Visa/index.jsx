import React from "react";
import Temp2 from "../Temp2";

const Visa = () => {
  return (
    <div className="flex justify-center gap-[4rem] max-[850px]:flex-col items-center">
      <div className="max-w-[50rem] px-[3rem] gap-[4rem]">
        <h4 className="text-[2.4rem] font-[700] text-[#303030]">
          271px Get a Visa debit card to spend on whatever you like
        </h4>
        <ul className="text-[1.6rem] pl-[1rem] font-[400] list-disc text-[#303030]">
          <li> Online services and games.</li>
          <li> Delivery and travel apps.</li>
          <li> Stores with online sales.</li>
          <li> Businesses that accept Visa.</li>
        </ul>
      </div>
      <Temp2 />
    </div>
  );
};

export default Visa;
