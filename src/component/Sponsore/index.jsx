import React from "react";
import ap from "../../assets/images/ap.png";
import boston from "../../assets/images/boston.png";
import crunch from "../../assets/images/crunch.png";
import forbes from "../../assets/images/forbes.png";
import newyork from "../../assets/images/newyork.png";
import yahoo from "../../assets/images/yahoo.png";
const Sponser = () => {
  const list = [
    { icon: forbes },
    { icon: yahoo },
    { icon: boston },
    { icon: newyork },
    { icon: crunch },
    { icon: ap },
  ];
  return (
    <div className="flex flex-col py-[5rem] px-[3rem] justify-center items-center gap-[4rem]">
      <h3 className="text-[24px] text-[#303030] font-[700]">
        We have been mentioned in:
      </h3>
      <div className="flex justify-center flex-wrap gap-[2rem]">
        {list.map((item, index) => (
          <img key={index} src={item.icon} />
        ))}
      </div>
    </div>
  );
};
export default Sponser;
