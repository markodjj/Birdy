import React, { createContext, useContext, useState, ReactNode } from "react";

interface TextInputContextType {
  text: string;
  setText: (value: string) => void;
}

const TextInputContext = createContext<TextInputContextType | undefined>(
  undefined
);

interface TextInputProviderProps {
  children: ReactNode;
}

export const TextInputProvider: React.FC<TextInputProviderProps> = ({
  children,
}) => {
  const [text, setText] = useState<string>("");

  return (
    <TextInputContext.Provider value={{ text, setText }}>
      {children}
    </TextInputContext.Provider>
  );
};

export const useTextInput = (): TextInputContextType => {
  const context = useContext(TextInputContext);
  if (!context) {
    throw new Error("useTextInput must be used within a TextInputProvider");
  }
  return context;
};
