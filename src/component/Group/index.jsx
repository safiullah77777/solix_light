import React from "react";
import "./style.css";
import Circles from "../../assets/images/Circles.png";
import Card3d from "../../assets/images/3dCard.png";
import Phones from "../../assets/images/place-phone2.gif";
const Group = () => {
  return (
    <div className="relative max-[500px]:scale-[0.9] max-[400px]:scale-[0.7] max-[330px]:scale-[0.6]  top-[5rem] pb-[20rem]">
      <div className="absolute jump left-[14rem] -top-[0rem] z-[10]">
        <img className="w-[40rem]" src={Card3d} alt="" />
      </div>
      <div className="w-[70rem] relative top-[11rem]">
        <img className="w-full" src={Circles} />
      </div>
      <div className="h-[45rem] absolute -bottom-[0rem] left-[10rem] -rotate-[45deg]">
        <img className="h-[100%]" src={Phones} alt="Group" />
      </div>
    </div>
  );
};

export default Group;
