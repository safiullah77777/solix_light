import React from "react";
import { Temp1 } from "../Tem1";
import Temp2 from "../Temp2";

const Security = () => {
  return (
    <div className="flex gap-[10rem] max-[850px]:flex-col items-center justify-center  relative pt-[10rem]">
      <Temp1 />
      <div className="max-w-[50rem] px-[3rem]">
        <h4 className="text-[2.4rem] font-[700] text-[#303030]">
          Get a Visa debit card to buy everything you love
        </h4>
        <p className="text-[2.4rem] font-[400] text-[#303030]">
          Accounts are opened and insured up to $250,000 by Piermont Bank,
          Member FDIC. Use your money with ease and deposit at more than 55,000
          ATMs nationwide through the Allpoint® ATM network.® (*)
        </p>
      </div>
    </div>
  );
};

export default Security;
