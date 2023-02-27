import React, { useRef } from "react";
import Button from "../Button";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const ref = useRef();
  return (
    <div className="grid  grid-cols-fr-auto-fr border-b-[2px] border-[#DEDEDE] bg-[#fff]/[0.2]  z-[1000] backdrop-blur-md fixed w-full top-0">
      <div className="flex items-center px-[1.75rem]  pt-[0rem]">
        <img className="w-[14rem]" src={logo} alt="" />
      </div>
      <div className="h-full flex flex-1 max-[850px]:hidden">
        <ul className="flex h-full ml-auto">
          <li className="h-full">
            <Link
              to={"/"}
              className="h-full flex text-[#5B5B5B] items-center font-[600] px-[2rem] text-[16px]"
            >
              <span>Home</span>
            </Link>
          </li>
          <li className="h-full">
            <Link
              to="/benifits"
              className="h-full flex text-[#5B5B5B] items-center font-[600] px-[2rem] text-[16px]"
            >
              <span>Benefits</span>
            </Link>
          </li>
          <li className="h-full">
            <Link
              to="/learn"
              className="h-full flex text-[#5B5B5B] items-center font-[600] px-[2rem] text-[16px]"
            >
              <span>Learn with Solix</span>
            </Link>
          </li>
          <li className="h-full">
            <a
              href="/learn"
              className="h-full flex text-[#5B5B5B] items-center font-[600] px-[2rem] text-[16px]"
            >
              <span>Podcast</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="px-[2rem] my-auto max-[850px]:hidden">
        <Button
          classes="text-[#5B5B5B] btn-gradient h-[4rem]"
          text="Download"
        />
      </div>

      <div className="flex min-[851px]:hidden ml-auto mr-[4rem]">
        <svg
          className="w-[4rem] cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          onClick={() => {
            ref.current.classList.toggle("!max-h-0");
          }}
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </div>
      <div
        ref={ref}
        className="flex flex-col  absolute transition-all min-[851px]:hidden duration-500 ease-linear top-[6.3rem] max-h-[32rem] overflow-hidden left-0 w-full bg-[white] shadow-card"
      >
        <ul className="flex flex-col h-full gap-[2rem] p-[3rem] ">
          <li className="">
            <Link
              to={"/"}
              className=" flex text-[#5B5B5B] items-center font-[600] px-[2rem] text-[16px]"
            >
              <span>Home</span>
            </Link>
          </li>
          <li className="">
            <Link
              to="/benifits"
              className=" flex text-[#5B5B5B] items-center font-[600] px-[2rem] text-[16px]"
            >
              <span>Benefits</span>
            </Link>
          </li>
          <li className="">
            <Link
              to="/learn"
              className="h-full flex text-[#5B5B5B] items-center font-[600] px-[2rem] text-[16px]"
            >
              <span>Learn with Solix</span>
            </Link>
          </li>
          <li className="">
            <a
              href="/learn"
              className="flex text-[#5B5B5B] items-center font-[600] px-[2rem] text-[16px]"
            >
              <span>Podcast</span>
            </a>
          </li>
          <div className="flex mr-auto">
            <Button
              classes="text-[#5B5B5B] btn-gradient h-[4rem]"
              text="Download"
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
