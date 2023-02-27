import CountrBox from "../country-box/CountryBox";
import Arrows from "../../assets/images/arrow-reverse1.png";
import HeroPhone from "../../assets/images/hero-phone.gif";
import "./style.css";
import { useState } from "react";
// import card from "../../assets/images/icons/card.svg";
import card from '../../assets/images/3dCards.png'
import globe from "../../assets/images/icons/card.svg";
export const Temp = () => {
  const [isShuffle, setShuffle] = useState(false);
  return (
    <div className="banner-left">
      <div className="content">
        <div className="phone-img">
          <img src={HeroPhone} alt="" />
        </div>
        <div
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos="fade-left"
          className="hero-card"
        >
          <img src={card} alt="" />
        </div>
        <div className="bottom">
          <div
            id="card1"
            className={!isShuffle ? "country-card1" : "country-card2"}
          >
            <CountrBox isUsa={false} price="R$ 5.103,71" text="Reals" />
          </div>
          <div onClick={() => setShuffle(!isShuffle)} className="arrow-reverse">
            <img src={Arrows} alt="" />
          </div>
          <div
            id="card2"
            className={isShuffle ? "country-card1" : "country-card2"}
          >
            <CountrBox isUsa={true} price="$ 1.002,30" text="USD" />
          </div>
        </div>
      </div>
    </div>
  );
};
