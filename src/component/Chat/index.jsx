import React from "react";
import profile from "../../assets/images/caller.png";
import Button from "../Button";
const Chat = () => {
  return (
    <div className="flex gap-[10rem] mx-auto mt-[10rem] ">
      <div>
        <img src={profile} alt="" />
      </div>
      <div className="flex flex-col gap-[1rem] ">
        <h4 className="text-[2.4rem] font-[700] text-[#303030] ">
          Want to Know more?
        </h4>
        <p className="text-[1.6rem] font-[400] text-[#303030]">
          Get in touch with the Pana team.
        </p>
        <Button
          text="Chat now"
          classes="bg-[#303030] ml-0 mr-auto !font-[600] leading-[150%] !py-[1.1rem] text-[#fff] !rounded-[2.3rem]"
        />
      </div>
    </div>
  );
};

export default Chat;
