import levels from "../data/levels.json";

import { useLevel } from "../context/LevelSelectContext";
import { useCurrLevel } from "../context/CurrentLevelContext";
import { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
export const SelectLevel = () => {
  const { num, setNum } = useLevel();
  const { currLevel } = useCurrLevel();
  const numOfElements = Object.keys(levels).length;

  const [openDropMenu, setOpenDropMenu] = useState(false);

  const dropDownMenuRef = useRef<HTMLDivElement>(null);

  const handleClick = (index: number) => {
    if (currLevel >= index) {
      setNum(index.toString());
      setOpenDropMenu(!openDropMenu);
    }
  };

  const nextOrPrevLevel = (direction: string) => {
    if (direction === "next") {
      if (currLevel >= parseInt(num) + 1) {
        setNum((parseInt(num) + 1).toString());
      }
    }
    if (direction === "prev") {
      const prevNum = (parseInt(num) - 1).toString();
      if (prevNum !== "0") {
        setNum(prevNum);
      }
    }
  };

  return (
    <div>
      <div className="flex gap-1">
        <span
          className="bg-[rgba(255,255,255,0.5)] w-4 flex justify-center items-center hover:bg-[rgba(255,255,255,1)] hover:border-[#132743] hover:border-1 hover:cursor-pointer"
          onClick={() => nextOrPrevLevel("prev")}
        >
          <FontAwesomeIcon icon={faCaretLeft} className="text-lg " />
        </span>

        <div
          className="bg-[rgba(255,255,255,0.5)] bg-opacity-5 w-30 flex justify-center text-l font-bold hover:bg-[rgba(255,255,255,1)] hover:border-[#132743] hover:border-1 hover:cursor-pointer"
          onClick={() => {
            setOpenDropMenu(!openDropMenu);
          }}
          onBlur={() => {
            console.log("d");
            setOpenDropMenu(false);
          }}
          ref={dropDownMenuRef}
        >
          Level {num} of {numOfElements}
        </div>
        <span
          className="bg-[rgba(255,255,255,0.5)] w-4 flex justify-center items-center hover:bg-[rgba(255,255,255,1)] hover:border-[#132743] hover:border-1 hover:cursor-pointer"
          onClick={() => nextOrPrevLevel("next")}
        >
          <FontAwesomeIcon icon={faCaretRight} className="text-lg" />
        </span>
      </div>
      {openDropMenu && (
        <div className="w-50 -ml-5 mt-4 py-3 items-center flex justify-center bg-[#132743] absolute rounded-sm z-4">
          {levels && (
            <ul className="flex justify-around flex-wrap gap-1 w-40">
              {Object.entries(levels).map(([key, value], index) => (
                <li
                  className="w-8 h-8 bg-[#ffb5b5] flex justify-center items-center rounded-full text-l font-bold hover: hover:border-[#ffff] hover:border-2 hover:text-white! hover:cursor-pointer"
                  key={index}
                  value={key}
                  onClick={() => handleClick(parseInt(key))}
                >
                  {key}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
