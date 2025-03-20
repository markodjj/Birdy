import React from "react";

import { Instruction } from "./Instruction";
import levels from "../data/levels.json";
// import { Selection } from "./Selection";
import { useLevel } from "../context/LevelSelectContext";
// import { CodeInput } from "./CodeInput";
import { SelectLevel } from "./SelectLevel";

type Levels = typeof levels;
type LevelKey = keyof Levels;

function Sidebar() {
  const { num } = useLevel();
  const levelKey = num as LevelKey;

  console.log(levelKey);
  return (
    <div className="w-[50%] p-10">
      <div className="p-5 flex justify-between flex-wrap items-baseline">
        <h1 className=" font-bold text-4xl">Flex Birdy</h1>
        {/* <Selection /> */}
        <SelectLevel />
      </div>

      <Instruction level={levels[levelKey]} />
      {/* <div>
        <CodeInput />
      </div> */}
    </div>
  );
}

export default Sidebar;
