import { useEffect } from "react";
import { colors } from "../constants/constans.ts";
import { ImageWraper } from "./ImageWraper.tsx";
import { useTextInput } from "../context/TextInputContext.tsx";
import { useLevel } from "../context/LevelSelectContext.tsx";
import { useCSSUpdater } from "../hooks/useCSSUpdater.tsx";
import { checkAnwser } from "../utils/cssFunctions.tsx";
import { useCurrLevel } from "../context/CurrentLevelContext.tsx";

export const Birds = () => {
  const content: string = "bird";

  const { text, setText } = useTextInput();
  const { num } = useLevel();
  const { currLevel, setCurrLevel } = useCurrLevel();

  const styleObject = useCSSUpdater(text, num);

  useEffect(() => {
    console.log("Updated currLevel:", currLevel);
    if (checkAnwser(text, num) && currLevel === parseInt(num)) {
      // If setCurrLevel expects a number, directly pass the incremented value
      setCurrLevel(currLevel + 1); // Pass the number directly
      setText("");
    }
  }, [text, num, currLevel, setCurrLevel, setText]); // Include currLevel in dependencies

  return (
    <ul className={`layer`} style={styleObject}>
      {colors.map((color, index) => (
        <ImageWraper
          key={index}
          path={`../assets/${color}-${content}.png`}
          content={content}
        />
      ))}
    </ul>
  );
};
