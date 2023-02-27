import React from "react";
import Banner from "../../component/Banner";
import Form from "../../component/Form";
import Group from "../../component/Group";
import Header from "../../component/Header";
import HeadinhText from "../../component/HeadingText";
import Sponser from "../../component/Sponsore";
import cards from "../../assets/images/cards.gif";
import ReviewCard from "../../component/ReviewCard";
import profile from "../../assets/images/profile.png";
import Chat from "../../component/Chat";
import Investors from "../../component/Investors";
import Footer from "../../component/Footer";
const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <Banner />
      <Form />
      <Sponser />
      <div className="flex w-full justify-center gap-[6rem] items-center max-[850px]:flex-col">
        <div className="flex">
          <img src={cards} />
        </div>
        <HeadinhText />
      </div>
      <div className="flex w-full paint justify-center gap-[6rem] items-center max-[850px]:flex-col">
        <HeadinhText />
        <Group />
      </div>
      <div className="flex flex-col w-full gap-[3rem] pt-[5rem] justify-center items-center">
        <h3 className="text-[24px] text-[#303030] font-[700]">
          What our users say
        </h3>
        <div className="flex gap-[2rem] flex-wrap justify-center">
          <ReviewCard
            img={profile}
            text={
              "Sending money from the comfort of my home to my family in the Dominican Republic is priceless. My aunt received the money on her doorstep!"
            }
            author={"- Andreu Bello (Dom. Rep.)"}
          />
          <ReviewCard
            img={profile}
            text={
              "Sending money from the comfort of my home to my family in the Dominican Republic is priceless. My aunt received the money on her doorstep!"
            }
            author={"- Andreu Bello (Dom. Rep.)"}
          />
          <ReviewCard
            img={profile}
            text={
              "Sending money from the comfort of my home to my family in the Dominican Republic is priceless. My aunt received the money on her doorstep!"
            }
            author={"- Andreu Bello (Dom. Rep.)"}
          />
        </div>
      </div>
      <Chat />
      <Investors />
      <Footer />
    </div>
  );
};

export default Home;
