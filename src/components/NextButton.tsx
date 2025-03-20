import levels from "../data/levels.json";

import { useLevel } from "../context/LevelSelectContext";

import { useCurrLevel } from "../context/CurrentLevelContext";

export const NextButton = () => {
  const { num, setNum } = useLevel();

  const numberOfElements = Object.keys(levels).length;

  // const [currLevel, setCurrLevel] = useLocalStorage("CurrLevel", 0);
  const { currLevel } = useCurrLevel();

  // useEffect(() => {
  //   "rerender";
  // }, [currLevel]);

  function handleClick() {
    let number = parseInt(num, 10);
    console.log(currLevel, number);
    if (numberOfElements - 1 === number || currLevel === number) {
      return;
    }
    number += 1;

    setNum(number.toString());
  }

  return (
    <div className="flex w-[20%] h-10 justify-center items-center">
      <button
        onClick={handleClick}
        className={`${
          currLevel.toString() <= num
            ? "bg-[rgba(241,104,33,0.5)]"
            : "bg-[rgba(205,69,69)] :hover cursor-pointer"
        } p-2 text-2xl font-bold`}
      >
        Next
      </button>
    </div>
  );
};
