import React from "react";
import Button from "../Button";
import logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <div className="grid grid-cols-fr-auto-fr border-b-[2px] border-[#DEDEDE]">
      <div className="flex items-center px-[1.75rem] h-full pt-[0rem]">
        <img className="w-[14rem]" src={logo} alt="" />
      </div>
      <div className="h-full flex flex-1">
        <ul className="flex h-full ml-auto">
          <li className="h-full">
            <a
              href=""
              className="h-full flex text-[#5B5B5B] items-center font-[600] px-[2rem] text-[1.6rem]"
            >
              <span>Inicio</span>
            </a>
          </li>
          <li className="h-full">
            <a
              href=""
              className="h-full flex items-center font-[600] px-[2rem] text-[1.6rem]"
            >
              <span>Inicio</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="px-[2rem] my-auto">
        <Button
          classes="text-[#5B5B5B] btn-gradient h-[4rem]"
          text="Download"
        />
      </div>
    </div>
  );
};

export default Header;
