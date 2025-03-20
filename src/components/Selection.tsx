import { useLevel } from "../context/LevelSelectContext";
import { SelectLevel } from "./SelectLevel";
import { NextButton } from "./NextButton";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useEffect } from "react";

export const Selection = () => {
  const { num, setNum } = useLevel();
  const [currLevel, setCurrLevel] = useLocalStorage("CurrLevel", 1);
  return (
    <div className="">
      <SelectLevel />
      {/* <NextButton currLevel={currLevel} /> */}
    </div>
  );
};
