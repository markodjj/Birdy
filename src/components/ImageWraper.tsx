import React from "react";

interface Prop {
  path: string;
  content: string;
}

export const ImageWraper: React.FC<Prop> = (props) => {
  return (
    <li className={`w-[7rem] h-[7rem] flex justify-center items-center `}>
      <img
        src={props.path}
        alt="bird"
        className={`relative overflow-hidden ${
          props.content === "nest" ? "w-full h-full " : ""
        }
            ${props.content === "bird" ? "w-[45%] h-[45%] mb-5 -ml-1" : ""}`}
      />
    </li>
  );
};
