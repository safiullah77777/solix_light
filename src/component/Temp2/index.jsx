import React from "react";
import Circles from "../../assets/images/Circles.png";
import Card3d from "../../assets/images/3dCard.png";
import carbonSec from "../../assets/images/carbon_security.svg";
import "./style.css";
const Temp2 = () => {
  return (
    // <div className="accessible-world-right">
    //   <div
    //     className="left-picture"
    //     data-aos-duration="1000"
    //     data-aos="fade-right"
    //   >
    //     <div className="card-and-check">
    //       <div className="carbon-sec-small">
    //         <img src={carbonSec} alt="" />
    //       </div>
    //       <div className="carbon-sec-large">
    //         <img src={carbonSec} alt="" />
    //       </div>
    //       <div className="left-picture-atm-card">
    //         <img src={Card3d} alt="" />
    //       </div>
    //     </div>
    //     <div className="pictures-circles">
    //       <img src={Circles} alt="" />
    //     </div>
    //   </div>
      
     
      <div
        className="relative max-[500px]:scale-[0.9] max-[370px]:scale-[0.8]"
      >
        <div className="relative top-[10rem] max-[1440px]:top-[20rem]  max-[850px]:top-[20rem]   max-[850px]:left-[10rem] left-[7rem]">
          <div className=" absolute right-[24rem] top-[0rem]   max-[850px]:top-[6rem]  max-[850px]:right-[40rem] z-[10]">
            <img src={carbonSec} className={'w-[3.3rem]   max-[850px]:w-[6rem]'} alt="" />
          </div>
          <div className="absolute right-[14rem] max-[850px]:right-[21rem] top-[2rem] max-[850px]:top-[6rem] z-[10]">
            <img src={carbonSec} className=' w-[8rem]  max-[850px]:w-[12rem]' alt="" />
          </div>
          <div className="jump1 relative top-1">
            <img src={Card3d} alt="" />
          </div>
        </div>
        <div className="w-[39rem] max-[850px]:w-[60rem]  max-[1440px]:w-[50rem] ">
          <img src={Circles} alt="" />
        </div>
      </div>
      
    
  );
};

export default Temp2;
