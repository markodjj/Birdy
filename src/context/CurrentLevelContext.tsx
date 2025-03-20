// import {
//   Children,
//   createContext,
//   ReactNode,
//   useContext,
//   useState,
// } from "react";

// interface CurrLevelType {
//   currLevel: number;
//   setCurrLevel: (value: number) => void;
// }

// const CurrentLevelContext = createContext<CurrLevelType | undefined>(undefined);

// interface CurrentLevelProviderProp {
//   children: ReactNode;
// }

// export const CurrentLevelProvider: React.FC<CurrentLevelProviderProp> = ({
//   children,
// }) => {
//   const [currLevel, setCurrLevel] = useState<number>(() => {
//     return Number(localStorage.getItem("level")) || 0;
//   });

//   return (
//     <CurrentLevelContext.Provider value={{ currLevel, setCurrLevel }}>
//       {children}
//     </CurrentLevelContext.Provider>
//   );
// };

// export const useCurrLevel = (): CurrLevelType => {
//   const context = useContext(CurrentLevelContext);
//   if (!context) {
//     throw new Error("Level is not selected yet");
//   }
//   return context;
// };

import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface CurrLevelType {
  currLevel: number;
  setCurrLevel: (value: number) => void;
}

const CurrentLevelContext = createContext<CurrLevelType | undefined>(undefined);

interface CurrentLevelProviderProps {
  children: ReactNode;
}

export const CurrentLevelProvider: React.FC<CurrentLevelProviderProps> = ({
  children,
}) => {
  const [currLevel, setCurrLevel] = useLocalStorage<number>("CurrLevel", 1);

  return (
    <CurrentLevelContext.Provider value={{ currLevel, setCurrLevel }}>
      {children}
    </CurrentLevelContext.Provider>
  );
};

export const useCurrLevel = (): CurrLevelType => {
  const context = useContext(CurrentLevelContext);
  if (!context) {
    throw new Error("useCurrLevel must be used within a CurrentLevelProvider");
  }
  return context;
};
