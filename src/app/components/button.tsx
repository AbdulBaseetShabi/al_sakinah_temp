import React from "react";

const Button: React.FC<{
  text: string;
}> = ({text}) => (
  <button className="rounded-full border text-center py-1.5 px-4 text-white bg-[#3A3042] w-full shadow-md hover:bg-white hover:text-black" style={{
    border: "2px solid #3A3042"
  }}>
    {text}
  </button>
);

export default Button;