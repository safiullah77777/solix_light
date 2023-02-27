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
      <h2 className="text-[3.4rem] text-[#303030] font-[700] mx-auto">
        Featured articles
      </h2>
      <div className="flex flex-wrap gap-[2rem] justify-center ">
        <Card
          text1={"A Guide for Latino Immigrants in the U.S."}
          text2={
            "What every Pana should know to build credit and achieve the American dream."
          }
          btnText={"I want my E-book!"}
        />
        <Card
          text1={"5 challenges to improve your finances"}
          text2={
            "Learn how to manage your finances with Pana, as a U.S. Latino immigrant."
          }
          btnText={"Challenge accepted!"}
        />
        <Card
          text1={"Checklist to save up to $2000 a year in hidden charges"}
          text2={
            "Discover those little expenses that banks charge without you noticing and impact your income."
          }
          btnText={"I want my checklist!"}
        />
      </div>
      <h2 className="text-[3.4rem] text-[#303030] font-[700] mx-auto">Blogs</h2>
      <div className="flex flex-wrap gap-[2rem] justify-center  ">
        <Card
          text1={"Tax Return Frequently Asked Questions"}
          text2={
            "Every year, from January through April, U.S. residents must comply with the obligation to report their earnings."
          }
          btnText={"I want my E-book!"}
        />
        <Card
          text1={"5 tips for entrepreneurs and startups in the U.S."}
          text2={
            "Entrepreneurship is a very challenging thing in itself, and even more complex if you do it outside your home country."
          }
          btnText={"Challenge accepted!"}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Learn;
