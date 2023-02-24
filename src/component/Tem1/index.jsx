import CountrBox from "../country-box/CountryBox";
import Arrows from "../../assets/images/arrow-reverse.png";
import HeroPhone from "../../assets/images/hero-phone.gif";
import "./style.css";
import { useState } from "react";
import card from "../../assets/images/icons/card.svg";
export const Temp1 = () => {
  const [isShuffle, setShuffle] = useState(false);
  return (
    <div className="w-[50rem] relative ">
      <div className="">
        <div className="w-[19rem] relative left-[18rem]">
          <img className="w-full" src={HeroPhone} alt="" />
        </div>
        <div className="">
          <div
            id="card1"
            className={!isShuffle ? "absolute bottom-[3rem] left-[5rem]" : "absolute -bottom-[4rem] right-[6rem]"}
          >
            <CountrBox
              props={{ width: "17rem", height: "17rem", borderRadius: "5rem" }}
              isUsa={false}
              price="R$ 5.103,71"
              text="Reals"
              imgclass={"!w-[5.2rem] !h-[5.2rem]"}
              priceClass="!text-[1.6rem]"
            />
          </div>
          <div
            onClick={() => setShuffle(!isShuffle)}
            className="arrow-reverse !w-[7rem] !h-[7rem] !top-[27rem] !left-[21rem]"
          >
            <img src={Arrows} alt="" className="!w-[7rem] !h-[7rem] " />
          </div>
          <div
            id="card2"
            className={isShuffle ? "absolute bottom-[3rem] left-[5rem]" : "absolute -bottom-[4rem] right-[6rem]"}
          >
            <CountrBox
              props={{ width: "17rem", height: "17rem", borderRadius: "5rem" }}
              imgclass={"!w-[5.2rem] !h-[5.2rem]"}
              priceClass="!text-[1.6rem]"
              isUsa={true}
              price="$ 1.002,30"
              text="USD"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
