import React from "react";
import qrcode from "../../assets/images/qrcode.png";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <div className="flex  px-[2rem] w-full">
      <div className="flex items-center gap-[4rem] flex-col border-t-[1px] w-full py-[2rem] border-[#ccc]">
        <div className="flex gap-[12rem] mx-auto ">
          <div className="flex flex-col justify-center items-center">
            <img src={logo} />
            <span className="text-[#7EA623] text-[1.6rem] font-[500]">
              Download Now
            </span>
            <div className="flex w-[7.6rem] h-[7.6rem] bg-[#D9D9D9] place-content-center place-items-center">
              <img src={qrcode} alt="" className="w-[6.2rem] h-[6.2rem]" />
            </div>
          </div>

          <div className="flex flex-col gap-[2rem] pt-[3rem]">
            <h2 className="text-[#000] font-[700] text-[1.6rem]">Folow Us</h2>
            <ul className="flex flex-col gap-[1rem]">
              <li>
                <a href="" className="text-[1.2rem] text-[#5B5B5B] font-[500]">
                  Tiktok
                </a>
              </li>
              <li>
                <a href="" className="text-[1.2rem] text-[#5B5B5B] font-[500]">
                  Tiktok
                </a>
              </li>
              <li>
                <a href="" className="text-[1.2rem] text-[#5B5B5B] font-[500]">
                  Tiktok
                </a>
              </li>
              <li>
                <a href="" className="text-[1.2rem] text-[#5B5B5B] font-[500]">
                  Tiktok
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[2rem] pt-[3rem]">
            <h2 className="text-[#000] font-[700] text-[1.6rem]">Community</h2>
            <ul className="flex flex-col gap-[1rem]">
              <li>
                <a href="" className="text-[1.2rem] text-[#5B5B5B] font-[500]">
                  Tiktok
                </a>
              </li>
              <li>
                <a href="" className="text-[1.2rem] text-[#5B5B5B] font-[500]">
                  Tiktok
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[2rem] pt-[3rem]">
            <h2 className="text-[#000] font-[700] text-[1.6rem]">Legal</h2>
            <ul className="flex flex-col gap-[1rem]">
              <li>
                <a href="" className="text-[1.2rem] text-[#5B5B5B] font-[500]">
                  Tiktok
                </a>
              </li>
              <li>
                <a href="" className="text-[1.2rem] text-[#5B5B5B] font-[500]">
                  Tiktok
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="flex max-w-[64rem] text-[1.3rem] font-[500] text-[#5b5b5b]">
          (*)Pana is a financial technology company and is not a bank. All
          banking and banking-related services are provided by Piermont Bank,
          Member FDIC. The Pana Visa® Debit Card is issued by Piermont Bank
          pursuant to a license from Visa U.S.A. Inc. and can be used wherever
          VISA debit cards are accepted.
        </p>
        <p className="flex max-w-[64rem] text-[1.3rem] font-[500] text-[#5b5b5b]">
          © 2022 Solix Finance Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
