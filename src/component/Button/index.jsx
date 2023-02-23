import React from "react";

const Button = ({ classes = "" ,text="hello"}) => {
  return (
    <button
      className={`mx-[1rem] my-auto px-[1.8rem] py-[.8rem] font-[700] text-[1.6rem] rounded-[2rem] ${classes}`}
    > 
      {text}
    </button>
  );
};

export default Button;
