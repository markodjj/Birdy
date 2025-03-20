import { createContext, ReactNode, useContext, useState } from "react";

interface SelectType {
  num: string;
  setNum: (value: string) => void;
}

const LevelSelectContext = createContext<SelectType | undefined>(undefined);

interface LevelSelectProverProps {
  children: ReactNode;
}

export const LevelSelectProvider: React.FC<LevelSelectProverProps> = ({
  children,
}) => {
  const [num, setNum] = useState<string>("1");
  return (
    <LevelSelectContext.Provider value={{ num, setNum }}>
      {children}
    </LevelSelectContext.Provider>
  );
};

export const useLevel = (): SelectType => {
  const context = useContext(LevelSelectContext);
  if (!context) {
    throw new Error("Level is not selected yet");
  }
  return context;
};
