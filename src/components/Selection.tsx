// import { useLevel } from "../context/LevelSelectContext";
import { SelectLevel } from "./SelectLevel";

// import { useLocalStorage } from "../hooks/useLocalStorage";

export const Selection = () => {
  // const [currLevel, setCurrLevel] = useLocalStorage("CurrLevel", 1);
  return (
    <div className="">
      <SelectLevel />
      {/* <NextButton currLevel={currLevel} /> */}
    </div>
  );
};
