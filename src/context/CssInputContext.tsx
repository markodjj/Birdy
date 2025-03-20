import React, { createContext, useContext, useState, ReactNode } from "react";

interface CssInputContextType {
  input: React.CSSProperties;
  setCss: (value: React.CSSProperties) => void;
}

const CssInputContext = createContext<CssInputContextType | undefined>(
  undefined
);

interface CssInputProviderProps {
  children: ReactNode;
}

export const CssInputProvider: React.FC<CssInputProviderProps> = ({
  children,
}) => {
  const [input, setCss] = useState<React.CSSProperties>({});

  return (
    <CssInputContext.Provider value={{ input, setCss }}>
      {children}
    </CssInputContext.Provider>
  );
};

export const useCssInput = (): CssInputContextType => {
  const context = useContext(CssInputContext);
  if (!context) {
    throw new Error("useTextInput must be used within a TextInputProvider");
  }
  return context;
};
