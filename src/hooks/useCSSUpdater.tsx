import { useEffect, useState } from "react";
import { checkFlexProperties, parseCSS } from "../utils/cssFunctions.tsx";
import levels from "../data/levels.json";

type Levels = typeof levels;
type LevelKey = keyof Levels;

export const useCSSUpdater = (text: string, num: string) => {
  const [styleObject, setStyleObject] = useState({});

  const levelKey = num as LevelKey;

  // Update CSS based on user input
  useEffect(() => {
    try {
      if (!checkFlexProperties(text)) {
        return;
      }
      const parsedStyles = parseCSS(text);
      setStyleObject(parsedStyles);
    } catch (error) {
      console.error("Failed to parse CSS:", error);
    }
  }, [text]);

  // Update CSS when the level changes
  useEffect(() => {
    setStyleObject(parseCSS(levels[levelKey]["birds"]));
  }, [num]);

  return styleObject;
};
