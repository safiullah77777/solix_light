import React from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import cards from "../../assets/images/cards.gif";
import HeadinhText from "../../component/HeadingText";
import Button from "../../component/Button";
import Card from "../../component/Card";

const Learn = () => {
  return (
    <div className="flex flex-col gap-[5rem]">
      <Header />
      <div className="flex pt-[14rem]">
        <h2 className="max-w-[91rem] font-[800] text-[5.2rem] text-[#303030] text-center mx-auto">
          Let's talk about finance but in an easy way, like between Solix
        </h2>
      </div>
      <div className="flex w-full justify-center gap-[6rem] items-center max-[850px]:flex-col">
        <div className="flex">
          <img src={cards} />
        </div>
        <div className="flex flex-col max-w-[50rem] px-[3rem] gap-[2rem] ">
          <h4 className="text-[3.4rem] font-[700] text-[#303030]">
            Our podcast
          </h4>
          <p className="text-[1.6rem] font-[400] text-[#303030]">
            Listen to the episodes we have prepared with our CEO and learn about
            our vision and history.
          </p>
          <Button
            text="Listen here"
            classes="bg-[#303030] !font-[600] leading-[150%] !py-[1.1rem] text-[#fff] !rounded-[2.3rem] mr-auto ml-0"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-[2rem] justify-center">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Learn;
