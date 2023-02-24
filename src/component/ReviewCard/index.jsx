import React from "react";

const ReviewCard = ({ img, text, author }) => {
  return (
    <div className="w-[32rem] flex gap-[1rem] flex-col items-center  border-[1px] border-[#303030] rounded-[1rem] h-[64rem] p-[2rem]">
      <div className="w-[12rem] h-[12rem]">
        <img className="w-full h-full" src={img} />
      </div>
      <p className="text-[1.6rem] font-[600] text-[#303030]">{text}</p>
      <p className="text-[1.6rem] font-[400] text-[#303030] w-full">{author}</p>
    </div>
  );
};

export default ReviewCard;
