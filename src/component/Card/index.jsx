import React from "react";
import cards from "../../assets/images/cards.gif";
import Button from "../Button";

const Card = ({ img, text1, text2, btnText }) => {
  return (
    <div className="w-[37rem] items-center justify-center flex flex-col gap-[2rem] min-h-[58rem] shadow-card border-[1px] border-[#303030] rounded-[1rem] py-[1rem] px-[2rem]">
      <div className="w-[22rem] h-[23rem] ">
        <img src={img || cards} className="w-full h-full" />
      </div>
      <p className="text-[1.6rem] font-[600]">
        {text1 }
      </p>
      <p className="text-[1.6rem] font-[400]">
        {text2}
      </p>
      <Button
        text={btnText}
        classes="bg-[#303030] !font-[600] leading-[150%] !py-[1.1rem] text-[#fff] !rounded-[2.3rem] mr-auto ml-0"
      />
    </div>
  );
};

export default Card;
