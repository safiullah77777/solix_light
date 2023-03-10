import React, { useState } from "react";
import Banner1 from "../../component/banner1";
import Header from "../../component/Header";
import Security from "../../component/Security";
import Visa from "../../component/Visa";
import pair from "../../assets/images/pair.png";
import phone from "../../assets/images/hero-phone.gif";
import phone1 from "../../assets/images/hero-phone2.gif";
import Circles from "../../assets/images/Circles.png";
import Card3d from "../../assets/images/3dCard.png";
import Phones from "../../assets/images/place-phone2.gif";
import CountrBox from "../../component/country-box/CountryBox";
import Arrows from "../../assets/images/arrow-reverse.png";
import Investors from "../../component/Investors";
import Footer from "../../component/Footer";
import Button from "../../component/Button";
const Benifits = () => {
  const [isShuffle, setShuffle] = useState(false);
  return (
    <>
      <Header />
      <Banner1 />
      <Security />
      <Visa />
      <div className="flex justify-center gap-[4rem] w-full items-center max-[850px]:flex-col">
        <div className="">
          <img src={pair} />
        </div>
        <div className="max-w-[50rem] px-[3rem]">
          <h4 className="text-[24px] font-[700] text-[#303030]">
            Withdraw cash when and where you want
          </h4>
          <p className="text-[16px] font-[400] text-[#303030]">
            We have more than 55,000 ATMs in different parts of the country, so
            you can withdraw cash at any time you want.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[8rem] max-[850px]:flex-col pt-[20rem] pb-[10rem]">
        <div className="max-w-[50rem] px-[3rem]">
          <h4 className="text-[24px] font-[700] text-[#303030]">
            Chat with your friends and family on the app
          </h4>
          <p className="text-[16px] font-[400] text-[#303030]">
            You will be able to talk about different topics within the app, send
            and request money through the chat, participate in different groups
            and talk about financial topics.
          </p>
        </div>
        <div className="flex relative max-[440px]:scale-[0.8]  max-[360px]:scale-[0.6]">
          <img
            src={phone}
            className="w-[180px] h-[360px] relative -rotate-[11deg]"
          />
          <img
            src={phone1}
            className="w-[180px] h-[360px] relative rotate-[11deg] top-[10rem]"
          />
        </div>
      </div>
      <div className="flex justify-center items-center max-[380px]:scale-[.8] max-[850px]:flex-col max-[850px]:gap-[6rem] ">
        <div className="flex relative w-[80rem] ">
          <div className="relative left-[24rem] max-[450px]:left-[23rem]  top-[40px] overflow-y-clip">
            <img
              className="-rotate-[44deg] h-[44rem]"
              src={Phones}
              alt="Group"
            />
          </div>

          <div className="relative -left-[17rem]">
            <div
              id="card1"
              className={
                !isShuffle
                  ? "absolute top-[50px] left-[8.5rem]"
                  : "absolute top-[50px] left-[31rem]"
              }
            >
              <CountrBox
                props={{
                  width: "17rem",
                  height: "17rem",
                  borderRadius: "5rem",
                }}
                isUsa={false}
                price="R$ 5.103,71"
                text="Reals"
                imgclass={"!w-[5.2rem] !h-[5.2rem]"}
                priceClass="!text-[1.6rem]"
              />
            </div>
            <div
              onClick={() => setShuffle(!isShuffle)}
              className="arrow-reverse !w-[8rem] !h-[8rem] !top-[100px] !left-[24rem]  "
            >
              <img src={Arrows} alt="" className="!w-[7rem] !h-[7rem] " />
            </div>
            <div
              id="card2"
              className={
                isShuffle
                  ? "absolute top-[50px] left-[8.5rem]"
                  : "absolute top-[50px] left-[31rem]"
              }
            >
              <CountrBox
                props={{
                  width: "17rem",
                  height: "17rem",
                  borderRadius: "5rem",
                }}
                imgclass={"!w-[5.2rem] !h-[5.2rem]"}
                priceClass="!text-[1.6rem]"
                isUsa={true}
                price="$ 1.002,30"
                text="USD"
              />
            </div>
          </div>
        </div>
        <div className="max-w-[50rem] px-[3rem] gap-[3rem]">
          <h4 className="text-[24px] font-[700] text-[#303030]">
            Link your Pana account with Zelle or Venmo
          </h4>
          <p className="text-[16px] font-[400] text-[#303030]">
            By following the steps in our guide, you will be able to link your
            Zelle or Venmo account with your Pana account quickly and easily.
          </p>

          <div className="flex gap-[4rem] mt-[2rem]">
            <Button
              text={"Link Zelle"}
              classes="bg-[#303030] !font-[600] leading-[150%] !py-[1.1rem] text-[#fff] !rounded-[2.3rem] mr-auto ml-0"
            />
            <Button
              text={"Link Venmo"}
              classes="bg-[#303030] !font-[600] leading-[150%] !py-[1.1rem] text-[#fff] !rounded-[2.3rem] mr-auto ml-0"
            />
          </div>
        </div>
      </div>
      <Investors />
      <Footer />
    </>
  );
};

export default Benifits;
