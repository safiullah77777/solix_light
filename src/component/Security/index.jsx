import React from "react";
import Button from "../Button";
import { Temp1 } from "../Tem1";
import Temp2 from "../Temp2";

const Security = () => {
  return (
    <div className="flex gap-[10rem] max-[850px]:flex-col items-center justify-center  relative pt-[10rem]">
      <Temp1 />
      <div className="flex flex-col max-w-[50rem] px-[3rem] gap-[3rem]">
        <h4 className="text-[24px] font-[700] text-[#303030]">
          Transfer and receive money fast and secure.
        </h4>
        <p className="text-[16px] font-[400] text-[#303030]">
          Make transfers to your Pana contacts, ACH bank accounts or
          international shipments, all from one place.
        </p>
        <p className="text-[16px] font-[400] text-[#303030]">
          No fees on foreign remittances up to $300 on the first remittance of
          each month.
        </p>
        <Button
          text={"Open your account"}
          classes="bg-[#303030] !font-[600] leading-[150%] !py-[1.1rem] text-[#fff] !rounded-[2.3rem] mr-auto ml-0"
        />
      </div>
    </div>
  );
};

export default Security;
