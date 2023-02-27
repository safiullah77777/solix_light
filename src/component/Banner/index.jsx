import React from "react";
import Button from "../Button";
import img from "../../assets/images/globe.gif";
import phone from "../../assets/images/hero-phone.gif";
import { Temp } from "../tem";
import qrcode from "../../assets/images/qrcode.png";
const Banner = () => {
  return (
    <div className="pl-[3rem] max-[500px]:px-[1rem] max-[1024px]:flex-col flex items-stretch w-full pt-[10rem]">
      <div className="flex px-[1.5rem] min-[1024px]:mr-[15rem] min-[850px]:min-w-[44.2rem]  min-[850px]:max-w-[54.2rem] items-start py-[2rem] flex-1 ">
        <div className="flex flex-col ">
          <h2 className="text-[5.2rem] text-[#303030] font-[800] leading-[112%] text-left py-[3rem]">
            Bank account in the USA and money transfers to your country
          </h2>
          <p className="text-[1.6rem] font-[400] leading-[140%]">
            Open your free US bank account without annoying paperwork within
            minutes. Open your free US bank account without annoying paperwork
            within minutes.
            {/* Abre tu cuenta con tu pasaporte o SSN. No hacemos credit-check.
            Nuestras cuentas están aseguradas hasta por{" "}
            <span className="font-[800]">$250,000</span> por Piermont Bank,
            miembro FDIC.<span className="text-[#5e5df0]">(*)</span> */}
          </p>
          <div className="flex py-[4rem] justify-around">
            <Button
              text="Download now"
              classes="bg-[#303030] !font-[600] leading-[150%] !py-[1.1rem] text-[#fff] !rounded-[2.3rem]"
            />
            <div className="flex w-[12rem] h-[12rem] bg-[#D9D9D9] place-content-center place-items-center">
              <img src={qrcode} alt="" className="w-[6.2rem] h-[6.2rem]" />
            </div>
          </div>
        </div>
      </div>
      <Temp />
      {/* <div className="flex relative max-[1240px]:max-w-full max-[1240px]:w-full  mx-[auto] max-w-[75rem]">
        <img
          className="mx-auto w-full relative top-[1rem] max-[1240px]:h-[54rem] max-[1024px]:h-[auto]"
          src={img}
          alt=""
        />
        <img
          className="mx-auto max-[820px]:right-[17rem]  max-[480px]:right-[8rem] max-[390px]:top-[5rem] max-w-[27rem] max-[1240px]:max-h-[42rem] absolute top-[4rem] max-[1240px]:top-[10rem] max-[1240px]:right-[10rem] max-[1024px]:right-[20rem] right-[16rem] max-[1024px]:h-[80%] max-[1024px]:max-h-[80rem] max-[1024px]:max-w-[40rem] "
          src={phone}
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Banner;
