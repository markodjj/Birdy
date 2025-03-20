import { useEffect, useState } from "react";
import { colors } from "../constants/constans.ts";
// import { content } from "../constants/constans.ts";
import { ImageWraper } from "./ImageWraper.tsx";

import { parseCSS } from "../utils/cssFunctions.tsx";

import levels from "../data/levels.json";
import { useLevel } from "../context/LevelSelectContext.tsx";

type Levels = typeof levels;
type LevelKey = keyof Levels;

export const Nests = () => {
  const [styleObject, setStyleObject] = useState({});
  const { num } = useLevel();
  const levelKey = num as LevelKey;

  const content: string = "nest";

  useEffect(() => {
    setStyleObject(parseCSS(levels[levelKey]["nests"]));
  }, [num]);

  return (
    <ul className="layer bg-[#407088]" style={styleObject}>
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
